// ============================================================================
//  VEILLE TECHNOLOGIQUE — alimente E5.6 (développement professionnel)
// ----------------------------------------------------------------------------
//  Cette section est volontairement vide au départ : les entrées de veille sont
//  un travail personnel et ne doivent pas être inventées. Pour ajouter une
//  entrée, copier le modèle ci-dessous dans le tableau `veille`.
//
//  Modèle :
//  {
//    date: '2026-01-15',
//    titre: 'Sujet suivi',
//    theme: 'Réseau · Sécurité · Système…',
//    sources: [{ label: 'Nom de la source', href: 'https://…' }],
//    synthese: 'Ce que j\'ai retenu, en quelques phrases.',
//    apprentissages: 'Ce que j\'ai appris concrètement.',
//    impact: 'En quoi cela change mes pratiques.',
//  },
// ============================================================================
import type { EntreeVeille } from './types';

export const veille: EntreeVeille[] = [
  // Aucune entrée pour le moment — à compléter par Wensel Reyes.
];

/** Thèmes de veille envisagés (structure d'accueil, sans contenu inventé). */
export const themesVeille: string[] = [
  'Sécurité des infrastructures',
  'Administration systèmes & réseaux',
  'Virtualisation & conteneurs',
  'Supervision & détection',
  'Réglementation (RGPD, obligations légales)',
];
