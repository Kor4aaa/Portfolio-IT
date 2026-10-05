// ============================================================================
//  TYPES — modèle de données du portfolio
//  Relations : Référentiel → Compétence → Réalisation → Preuve
// ============================================================================

/** Niveau de mobilisation déclaré d'une compétence DANS une réalisation. */
export type Niveau = 'demontree' | 'mobilisee' | 'en-cours' | 'a-developper';

/** Statut affiché d'une (sous-)compétence — inclut l'état « aucune réalisation ». */
export type Statut = Niveau | 'non-documentee';

/** Type de preuve rattachable à une réalisation. */
export type TypePreuve =
  | 'capture'
  | 'schema'
  | 'configuration'
  | 'script'
  | 'documentation'
  | 'test'
  | 'log'
  | 'video'
  | 'photo'
  | 'depot'
  | 'document';

/** État de disponibilité d'une preuve. */
export type EtatPreuve = 'disponible' | 'a-produire';

export interface Preuve {
  id: string;
  type: TypePreuve;
  titre: string;
  /** Pourquoi cette preuve démontre la/les compétence(s) visée(s). */
  pourquoi: string;
  /** Lien / chemin vers la preuve (image, page, dépôt…) si disponible. */
  href?: string;
  /** Texte alternatif pour les preuves visuelles. */
  alt?: string;
  etat: EtatPreuve;
}

/** Rattachement d'une réalisation à une sous-compétence du référentiel. */
export interface LienCompetence {
  /** Code de la sous-compétence, ex. « E6.2.1 ». */
  sous: string;
  niveau: Niveau;
  /** Justification concrète : ce qui, dans la réalisation, mobilise la compétence. */
  justification: string;
  /** Identifiants des preuves (dans la même réalisation) qui appuient ce lien. */
  preuves?: string[];
}

export type CategorieRealisation = 'reseau' | 'systeme' | 'securite' | 'service' | 'pro';

export interface Realisation {
  slug: string;
  titre: string;
  resume: string;
  categories: CategorieRealisation[];
  /** Contexte : formation, alternance, stage, personnel… */
  contexte: string;
  organisation?: string;
  periode: string;
  environnement: string[];
  technologies: string[];

  probleme?: string;
  objectifs?: string[];
  demarche?: string[];
  miseEnOeuvre?: string[];
  tests?: string[];
  resultats?: string[];
  difficultes?: string[];
  solutions?: string[];
  bilan?: string;

  liens?: { label: string; href: string }[];

  preuves: Preuve[];
  competences: LienCompetence[];

  /** Réalisation mise en avant sur l'accueil. */
  vedette?: boolean;
  /** Avertissement affiché quand des éléments restent à documenter. */
  aCompleter?: boolean;
}

export interface SousCompetence {
  code: string;
  titre: string;
}

export interface Competence {
  code: string;
  titre: string;
  sous: SousCompetence[];
}

export interface Epreuve {
  code: 'E5' | 'E6' | 'E7';
  bloc: string;
  titre: string;
  resume: string;
  competences: Competence[];
}

export interface Experience {
  slug: string;
  poste: string;
  organisation: string;
  client?: string;
  type: 'alternance' | 'stage' | 'formation';
  periode: string;
  dureeNote?: string;
  missions: string[];
  /** Slugs de réalisations rattachées à cette expérience. */
  realisations?: string[];
  enCours?: boolean;
}

export interface EntreeVeille {
  date: string;
  titre: string;
  theme: string;
  sources: { label: string; href?: string }[];
  synthese: string;
  apprentissages?: string;
  impact?: string;
}
