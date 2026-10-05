// ============================================================================
//  DÉRIVATIONS — calcule les statuts à partir des réalisations.
//  Principe : une (sous-)compétence n'est JAMAIS cochée automatiquement à partir
//  d'une technologie. Son statut provient uniquement des liens explicites
//  déclarés dans les réalisations (avec justification et preuves).
// ============================================================================
import type { Niveau, Statut, Realisation, Epreuve, Competence } from './types';
import { referentiel, STATUTS } from './referentiel';
import { realisations } from './realisations';

const RANG: Record<Niveau, number> = {
  demontree: 4,
  mobilisee: 3,
  'en-cours': 2,
  'a-developper': 1,
};

export interface LienRealisation {
  realisation: Realisation;
  niveau: Niveau;
  justification: string;
  preuves: string[];
}

// Index : code de sous-compétence → liens de réalisations.
const indexSous = new Map<string, LienRealisation[]>();
for (const r of realisations) {
  for (const lien of r.competences) {
    const arr = indexSous.get(lien.sous) ?? [];
    arr.push({
      realisation: r,
      niveau: lien.niveau,
      justification: lien.justification,
      preuves: lien.preuves ?? [],
    });
    indexSous.set(lien.sous, arr);
  }
}

/** Liens de réalisations rattachés à une sous-compétence. */
export function liensSous(code: string): LienRealisation[] {
  return indexSous.get(code) ?? [];
}

/** Statut affiché d'une sous-compétence = meilleur niveau déclaré, sinon non documentée. */
export function statutSous(code: string): Statut {
  const liens = indexSous.get(code);
  if (!liens || liens.length === 0) return 'non-documentee';
  let best: Niveau = 'a-developper';
  for (const l of liens) {
    if (RANG[l.niveau] > RANG[best]) best = l.niveau;
  }
  return best;
}

/** Distribution des statuts des sous-compétences d'une compétence. */
export function distributionCompetence(comp: Competence): Record<Statut, number> {
  const dist: Record<Statut, number> = {
    demontree: 0, mobilisee: 0, 'en-cours': 0, 'a-developper': 0, 'non-documentee': 0,
  };
  for (const s of comp.sous) dist[statutSous(s.code)]++;
  return dist;
}

/** Statut représentatif d'une compétence = meilleur statut de ses sous-compétences. */
export function statutCompetence(comp: Competence): Statut {
  let best: Statut = 'non-documentee';
  for (const s of comp.sous) {
    const st = statutSous(s.code);
    if (STATUTS[st].rang > STATUTS[best].rang) best = st;
  }
  return best;
}

/** Distribution des statuts sur toutes les sous-compétences d'une épreuve. */
export function distributionEpreuve(ep: Epreuve): { dist: Record<Statut, number>; total: number } {
  const dist: Record<Statut, number> = {
    demontree: 0, mobilisee: 0, 'en-cours': 0, 'a-developper': 0, 'non-documentee': 0,
  };
  let total = 0;
  for (const comp of ep.competences) {
    for (const s of comp.sous) {
      dist[statutSous(s.code)]++;
      total++;
    }
  }
  return { dist, total };
}

/** Part de sous-compétences au moins « en cours » (travaillées) pour une épreuve. */
export function tauxTravaille(ep: Epreuve): number {
  const { dist, total } = distributionEpreuve(ep);
  const travaille = dist.demontree + dist.mobilisee + dist['en-cours'];
  return total === 0 ? 0 : Math.round((travaille / total) * 100);
}

/** Réalisations distinctes qui touchent au moins une sous-compétence d'une épreuve. */
export function realisationsEpreuve(ep: Epreuve): Realisation[] {
  const codes = new Set<string>();
  for (const comp of ep.competences) for (const s of comp.sous) codes.add(s.code);
  return realisations.filter((r) => r.competences.some((l) => codes.has(l.sous)));
}

/**
 * Matrice de synthèse pour une épreuve : lignes = réalisations concernées,
 * colonnes = compétences (ex. E5.1 … E5.6). Cellule = meilleur niveau déclaré
 * par la réalisation sur les sous-compétences de la colonne (ou null).
 */
export interface CelluleSynthese {
  niveau: Niveau | null;
  sousCodes: string[];
}
export interface LigneSynthese {
  realisation: Realisation;
  cellules: CelluleSynthese[];
}
export function matriceSynthese(ep: Epreuve): { colonnes: Competence[]; lignes: LigneSynthese[] } {
  const colonnes = ep.competences;
  const concernees = realisationsEpreuve(ep);
  const lignes: LigneSynthese[] = concernees.map((r) => {
    const cellules = colonnes.map((comp) => {
      const sousDeComp = new Set(comp.sous.map((s) => s.code));
      let best: Niveau | null = null;
      const sousCodes: string[] = [];
      for (const l of r.competences) {
        if (sousDeComp.has(l.sous)) {
          sousCodes.push(l.sous);
          if (best === null || RANG[l.niveau] > RANG[best]) best = l.niveau;
        }
      }
      return { niveau: best, sousCodes };
    });
    return { realisation: r, cellules };
  });
  return { colonnes, lignes };
}

/** Synthèse globale par épreuve (pour l'accueil). */
export function apercuReferentiel() {
  return referentiel.map((ep) => {
    const { dist, total } = distributionEpreuve(ep);
    return {
      epreuve: ep,
      dist,
      total,
      taux: tauxTravaille(ep),
      nbRealisations: realisationsEpreuve(ep).length,
    };
  });
}

/**
 * Validation d'intégrité : vérifie que chaque lien de compétence pointe vers une
 * sous-compétence existante et que chaque preuve référencée existe. Utilisé au build
 * pour échouer bruyamment en cas d'erreur de saisie dans les données.
 */
export function validerDonnees(): string[] {
  const erreurs: string[] = [];
  const codesValides = new Set<string>();
  for (const ep of referentiel)
    for (const comp of ep.competences) for (const s of comp.sous) codesValides.add(s.code);

  for (const r of realisations) {
    const preuveIds = new Set(r.preuves.map((p) => p.id));
    for (const l of r.competences) {
      if (!codesValides.has(l.sous)) {
        erreurs.push(`Réalisation « ${r.slug} » : sous-compétence inconnue « ${l.sous} ».`);
      }
      for (const pid of l.preuves ?? []) {
        if (!preuveIds.has(pid)) {
          erreurs.push(`Réalisation « ${r.slug} » : preuve inconnue « ${pid} » (lien ${l.sous}).`);
        }
      }
    }
  }
  return erreurs;
}

/** Compteurs globaux. */
export function compteursGlobaux() {
  let sousTotal = 0;
  let sousTravaillees = 0;
  const dist: Record<Statut, number> = {
    demontree: 0, mobilisee: 0, 'en-cours': 0, 'a-developper': 0, 'non-documentee': 0,
  };
  for (const ep of referentiel) {
    for (const comp of ep.competences) {
      for (const s of comp.sous) {
        sousTotal++;
        const st = statutSous(s.code);
        dist[st]++;
        if (st === 'demontree' || st === 'mobilisee' || st === 'en-cours') sousTravaillees++;
      }
    }
  }
  return { sousTotal, sousTravaillees, dist, nbRealisations: realisations.length };
}
