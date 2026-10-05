// ============================================================================
//  RÉFÉRENTIEL BTS SIO — option SISR (réforme, session 2025 et suivantes)
// ----------------------------------------------------------------------------
//  Référence officielle :
//   • Arrêté du 29 avril 2019 modifié, notamment par l'arrêté du 8 juillet 2024,
//     portant définition du BTS « Services informatiques aux organisations »,
//     option A « Solutions d'infrastructure, systèmes et réseaux » (SISR).
//   • RNCP40792 — France Compétences.
//  Épreuves professionnelles : E5 (Bloc 1), E6 (Bloc 2), E7 (Bloc 3).
//  Les anciens intitulés (B1.1…, E4/E5/E6 d'avant 2025) ne sont pas utilisés.
//
//  Vérification : les sources officielles (Légifrance, Éduscol) n'étant pas
//  joignables depuis l'environnement de build, les intitulés ont été recoupés
//  avec le brief fourni et des sources académiques. À relire sur Légifrance
//  pour le mot-à-mot définitif.
// ============================================================================
import type { Epreuve, Statut } from './types';

export interface InfoStatut {
  code: Statut;
  label: string;
  rang: number;
  desc: string;
}

/** Vocabulaire des statuts — distinct d'une validation officielle par l'école. */
export const STATUTS: Record<Statut, InfoStatut> = {
  demontree: {
    code: 'demontree',
    label: 'Démontrée',
    rang: 4,
    desc: "Réalisation aboutie et preuves documentées à l'appui.",
  },
  mobilisee: {
    code: 'mobilisee',
    label: 'Mobilisée',
    rang: 3,
    desc: 'Compétence mise en œuvre dans une réalisation ; preuves à consolider.',
  },
  'en-cours': {
    code: 'en-cours',
    label: 'En cours',
    rang: 2,
    desc: 'Travaillée dans une réalisation en cours ou partiellement aboutie.',
  },
  'a-developper': {
    code: 'a-developper',
    label: 'À développer',
    rang: 1,
    desc: 'Identifiée et prévue ; pas encore de réalisation associée.',
  },
  'non-documentee': {
    code: 'non-documentee',
    label: 'Non documentée',
    rang: 0,
    desc: 'Aucune réalisation ni preuve rattachée pour le moment.',
  },
};

export const ORDRE_STATUTS: Statut[] = [
  'demontree',
  'mobilisee',
  'en-cours',
  'a-developper',
  'non-documentee',
];

export const sources = [
  {
    nom: "Arrêté du 29 avril 2019 modifié (arrêté du 8 juillet 2024)",
    detail: 'Définition du BTS SIO — applicable à compter de la session 2025.',
    href: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049926463',
  },
  {
    nom: 'RNCP40792 — BTS Services informatiques aux organisations',
    detail: 'Fiche France Compétences du diplôme.',
    href: 'https://www.francecompetences.fr/recherche/rncp/40792/',
  },
  {
    nom: 'Référentiel BTS SIO (Éduscol / Enqdip)',
    detail: 'Référentiel des activités et des compétences professionnelles.',
    href: 'https://enqdip.sup.adc.education.fr/bts/referentiel/BTS_ServicesInformatiquesOrganisations.pdf',
  },
];

export const referentiel: Epreuve[] = [
  {
    code: 'E5',
    bloc: 'Bloc 1',
    titre: 'Support et mise à disposition de services informatiques',
    resume:
      "Gérer le patrimoine, répondre aux demandes et incidents, développer la présence " +
      "en ligne, travailler en mode projet, mettre des services à disposition et organiser " +
      'son développement professionnel.',
    competences: [
      {
        code: 'E5.1',
        titre: 'Gérer le patrimoine informatique',
        sous: [
          { code: 'E5.1.1', titre: `Recenser et identifier les ressources numériques` },
          { code: 'E5.1.2', titre: `Exploiter des référentiels, normes et standards adoptés par le prestataire informatique` },
          { code: 'E5.1.3', titre: `Mettre en place et vérifier les niveaux d'habilitation associés à un service` },
          { code: 'E5.1.4', titre: `Vérifier les conditions de la continuité d'un service informatique` },
          { code: 'E5.1.5', titre: `Gérer des sauvegardes` },
          { code: 'E5.1.6', titre: `Vérifier le respect des règles d'utilisation des ressources numériques` },
        ],
      },
      {
        code: 'E5.2',
        titre: `Répondre aux incidents et aux demandes d'assistance et d'évolution`,
        sous: [
          { code: 'E5.2.1', titre: `Collecter, suivre et orienter des demandes` },
          { code: 'E5.2.2', titre: `Traiter des demandes concernant les services réseau et système` },
          { code: 'E5.2.3', titre: `Traiter des demandes concernant les applications` },
        ],
      },
      {
        code: 'E5.3',
        titre: `Développer la présence en ligne de l'organisation`,
        sous: [
          { code: 'E5.3.1', titre: `Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques` },
          { code: 'E5.3.2', titre: `Référencer les services en ligne de l'organisation et mesurer leur visibilité` },
          { code: 'E5.3.3', titre: `Participer à l'évolution d'un site Web exploitant les données de l'organisation` },
        ],
      },
      {
        code: 'E5.4',
        titre: 'Travailler en mode projet',
        sous: [
          { code: 'E5.4.1', titre: `Analyser les objectifs et les modalités d'organisation d'un projet` },
          { code: 'E5.4.2', titre: `Planifier les activités` },
          { code: 'E5.4.3', titre: `Évaluer les indicateurs de suivi d'un projet et analyser les écarts` },
        ],
      },
      {
        code: 'E5.5',
        titre: 'Mettre à disposition des utilisateurs un service informatique',
        sous: [
          { code: 'E5.5.1', titre: `Réaliser les tests d'intégration et d'acceptation d'un service` },
          { code: 'E5.5.2', titre: `Déployer un service` },
          { code: 'E5.5.3', titre: `Accompagner les utilisateurs dans la mise en place d'un service` },
        ],
      },
      {
        code: 'E5.6',
        titre: 'Organiser son développement professionnel',
        sous: [
          { code: 'E5.6.1', titre: `Mettre en place son environnement d'apprentissage personnel` },
          { code: 'E5.6.2', titre: `Mettre en œuvre des outils et stratégies de veille informationnelle` },
          { code: 'E5.6.3', titre: `Gérer son identité professionnelle` },
          { code: 'E5.6.4', titre: `Développer son projet professionnel` },
        ],
      },
    ],
  },
  {
    code: 'E6',
    bloc: 'Bloc 2',
    titre: 'Administration des systèmes et des réseaux',
    resume:
      "Concevoir, installer/déployer puis exploiter, dépanner et superviser une solution " +
      "d'infrastructure réseau — cœur de l'option SISR.",
    competences: [
      {
        code: 'E6.1',
        titre: `Concevoir une solution d'infrastructure réseau`,
        sous: [
          { code: 'E6.1.1', titre: `Analyser un besoin exprimé et son contexte juridique` },
          { code: 'E6.1.2', titre: `Étudier l'impact d'une évolution d'un élément d'infrastructure sur le système informatique` },
          { code: 'E6.1.3', titre: `Élaborer un dossier de choix d'une solution d'infrastructure et rédiger les spécifications techniques` },
          { code: 'E6.1.4', titre: `Choisir les éléments nécessaires pour assurer la qualité et la disponibilité d'un service` },
          { code: 'E6.1.5', titre: `Maquetter et prototyper une solution d'infrastructure permettant d'atteindre la qualité de service attendue` },
          { code: 'E6.1.6', titre: `Déterminer et préparer les tests nécessaires à la validation de la solution d'infrastructure retenue` },
        ],
      },
      {
        code: 'E6.2',
        titre: `Installer, tester et déployer une solution d'infrastructure réseau`,
        sous: [
          { code: 'E6.2.1', titre: `Installer et configurer des éléments d'infrastructure` },
          { code: 'E6.2.2', titre: `Installer et configurer des éléments nécessaires pour assurer la continuité des services` },
          { code: 'E6.2.3', titre: `Installer et configurer des éléments nécessaires pour assurer la qualité de service` },
          { code: 'E6.2.4', titre: `Rédiger ou mettre à jour la documentation technique et utilisateur d'une solution d'infrastructure` },
          { code: 'E6.2.5', titre: `Tester l'intégration et l'acceptation d'une solution d'infrastructure` },
          { code: 'E6.2.6', titre: `Déployer une solution d'infrastructure` },
        ],
      },
      {
        code: 'E6.3',
        titre: `Exploiter, dépanner et superviser une solution d'infrastructure réseau`,
        sous: [
          { code: 'E6.3.1', titre: `Administrer sur site et à distance des éléments d'une infrastructure` },
          { code: 'E6.3.2', titre: `Automatiser des tâches d'administration` },
          { code: 'E6.3.3', titre: `Gérer des indicateurs et des fichiers d'activité des éléments d'une infrastructure` },
          { code: 'E6.3.4', titre: `Identifier, qualifier, évaluer et réagir face à un incident ou à un problème` },
          { code: 'E6.3.5', titre: `Évaluer, maintenir et améliorer la qualité d'un service` },
        ],
      },
    ],
  },
  {
    code: 'E7',
    bloc: 'Bloc 3',
    titre: 'Cybersécurité des services informatiques',
    resume:
      "Protéger les données personnelles, préserver l'identité numérique, sécuriser " +
      'équipements et usages, garantir disponibilité/intégrité/confidentialité et assurer ' +
      "la cybersécurité d'une infrastructure (volet SISR). Intégré au portfolio sans être " +
      'présenté comme acquis tant qu\'une réalisation ne le démontre pas.',
    competences: [
      {
        code: 'E7.1',
        titre: 'Protéger les données à caractère personnel',
        sous: [
          { code: 'E7.1.1', titre: `Recenser les traitements sur les données à caractère personnel au sein de l'organisation ; identifier les risques liés à la collecte, au traitement, au stockage et à la diffusion des données à caractère personnel` },
          { code: 'E7.1.2', titre: `Sensibiliser les utilisateurs à la protection des données à caractère personnel` },
        ],
      },
      {
        code: 'E7.2',
        titre: `Préserver l'identité numérique de l'organisation`,
        sous: [
          { code: 'E7.2.1', titre: `Protéger l'identité numérique d'une organisation` },
          { code: 'E7.2.2', titre: `Déployer les moyens appropriés de preuve électronique` },
        ],
      },
      {
        code: 'E7.3',
        titre: 'Sécuriser les équipements et les usages des utilisateurs',
        sous: [
          { code: 'E7.3.1', titre: `Identifier les menaces et mettre en œuvre les défenses appropriées` },
          { code: 'E7.3.2', titre: `Gérer les accès et les privilèges appropriés` },
          { code: 'E7.3.3', titre: `Vérifier l'efficacité de la protection` },
        ],
      },
      {
        code: 'E7.4',
        titre: `Garantir la disponibilité, l'intégrité et la confidentialité des services informatiques et des données de l'organisation face à des cyberattaques`,
        sous: [
          { code: 'E7.4.1', titre: `Caractériser les risques liés à l'utilisation malveillante d'un service informatique` },
          { code: 'E7.4.2', titre: `Recenser les conséquences d'une perte de disponibilité, d'intégrité ou de confidentialité` },
          { code: 'E7.4.3', titre: `Identifier les obligations légales qui s'imposent en matière d'archivage et de protection des données de l'organisation` },
          { code: 'E7.4.4', titre: `Organiser la collecte et la conservation des preuves numériques` },
          { code: 'E7.4.5', titre: `Appliquer les procédures garantissant le respect des obligations légales` },
        ],
      },
      {
        code: 'E7.5',
        titre: `Assurer la cybersécurité d'une infrastructure réseau, d'un système et d'un service (SISR)`,
        sous: [
          { code: 'E7.5.1', titre: `Participer à la vérification des éléments contribuant à la sûreté d'une infrastructure informatique et à la conformité des services déployés` },
          { code: 'E7.5.2', titre: `Prendre en compte la sécurité dans un projet de mise en œuvre d'une solution d'infrastructure` },
          { code: 'E7.5.3', titre: `Mettre en œuvre et vérifier la conformité d'une infrastructure à un référentiel, une norme ou un standard de sécurité` },
          { code: 'E7.5.4', titre: `Prévenir les attaques` },
          { code: 'E7.5.5', titre: `Détecter les actions malveillantes` },
          { code: 'E7.5.6', titre: `Analyser les incidents de sécurité, proposer et mettre en œuvre des contre-mesures` },
        ],
      },
    ],
  },
];

/** Index rapide : code de sous-compétence → { épreuve, compétence, sous }. */
export function indexSousCompetences() {
  const map = new Map<string, { epreuve: Epreuve; competenceCode: string; competenceTitre: string; titre: string }>();
  for (const epreuve of referentiel) {
    for (const comp of epreuve.competences) {
      for (const s of comp.sous) {
        map.set(s.code, {
          epreuve,
          competenceCode: comp.code,
          competenceTitre: comp.titre,
          titre: s.titre,
        });
      }
    }
  }
  return map;
}
