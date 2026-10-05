// ============================================================================
//  TABLEAU DE SYNTHÈSE DES RÉALISATIONS PROFESSIONNELLES — E5 (session 2026)
//  Reproduction fidèle du document officiel de Wensel Reyes (fichier .xlsx).
//  Ne pas « inventer » de croix : ce tableau reprend exactement l'original.
// ============================================================================

export const enteteE5 = {
  diplome: 'BTS SERVICES INFORMATIQUES AUX ORGANISATIONS',
  session: 'SESSION 2026',
  titre: 'Tableau de synthèse des réalisations professionnelles',
  nom: 'REYES Wensel',
  candidat: '',
  centre: 'ESUP — Paris',
  option: 'SISR',
  url: 'wenselreyes.tech',
};

export const colonnesE5 = [
  { code: 'E5.1', titre: 'Gérer le patrimoine informatique', sous: [
    'Recenser et identifier les ressources numériques',
    'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
    "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
    "Vérifier les conditions de la continuité d'un service informatique",
    'Gérer des sauvegardes',
    "Vérifier le respect des règles d'utilisation des ressources numériques",
  ] },
  { code: 'E5.2', titre: "Répondre aux incidents et aux demandes d'assistance et d'évolution", sous: [
    'Collecter, suivre et orienter des demandes',
    'Traiter des demandes concernant les services réseau et système, applicatifs',
    'Traiter des demandes concernant les applications',
  ] },
  { code: 'E5.3', titre: "Développer la présence en ligne de l'organisation", sous: [
    "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
    "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
    "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
  ] },
  { code: 'E5.4', titre: 'Travailler en mode projet', sous: [
    "Analyser les objectifs et les modalités d'organisation d'un projet",
    'Planifier les activités',
    "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
  ] },
  { code: 'E5.5', titre: 'Mettre à disposition des utilisateurs un service informatique', sous: [
    "Réaliser les tests d'intégration et d'acceptation d'un service",
    'Déployer un service',
    'Accompagner les utilisateurs dans la mise en place d\'un service',
  ] },
  { code: 'E5.6', titre: 'Organiser son développement professionnel', sous: [
    "Mettre en place son environnement d'apprentissage personnel",
    'Mettre en œuvre des outils et stratégies de veille informationnelle',
    'Gérer son identité professionnelle',
    'Développer son projet professionnel',
  ] },
];

export interface LigneE5 {
  titre: string;
  description: string;
  documents: string;
  periode: string;
  /** Cases cochées, dans l'ordre E5.1 … E5.6 */
  croix: boolean[];
}

export interface SectionE5 {
  titre: string;
  lignes: LigneE5[];
}

export const sectionsE5: SectionE5[] = [
  {
    titre: 'Réalisations en cours de formation',
    lignes: [
      {
        titre: 'TP Active Directory — Windows Server 2022',
        description: "Déploiement d'un domaine AD : UO, utilisateurs, groupes de sécurité, GPO, DHCP/DNS, scripts PowerShell de création de comptes en masse.",
        documents: 'Rapport de TP, scripts PowerShell, captures GPO/DHCP/DNS',
        periode: '10/2025 au 12/2025',
        croix: [true, false, false, true, true, true],
      },
      {
        titre: 'TP Infrastructure VLAN — Cisco Packet Tracer',
        description: "Architecture réseau segmentée : VLAN par département, routage inter-VLAN router-on-a-stick, ACL, ports trunk/access 802.1Q.",
        documents: "Schéma réseau, plan d'adressage IP, rapport de configuration switches/routeurs",
        periode: '11/2025 au 01/2026',
        croix: [true, false, false, true, true, true],
      },
      {
        titre: 'TP Cybersécurité — Kali Linux (chiffrement, audit, exploitation)',
        description: "Chiffrement symétrique/asymétrique, protocoles sécurisés. Audit réseau : scan Nmap, analyse Wireshark. Exploitation faille Pixie Dust WPS via Aircrack-ng — rapport de vulnérabilités + contre-mesures.",
        documents: "Rapport d'audit, rapport faille exploitée, captures Nmap/Aircrack-ng/Wireshark",
        periode: '01/2026 au 04/2026',
        croix: [true, true, false, true, false, true],
      },
      {
        titre: 'Portfolio professionnel — wenselreyes.tech',
        description: "Conception et déploiement d'un site portfolio hébergé en ligne avec domaine custom. Mise en valeur de l'identité et des projets professionnels BTS SIO SISR.",
        documents: 'URL wenselreyes.tech, code source GitHub (Kor4aaa), captures pages/animations',
        periode: '03/2026 au 04/2026',
        croix: [false, false, true, true, true, true],
      },
    ],
  },
  {
    titre: 'Réalisations en milieu professionnel en cours de première année',
    lignes: [
      {
        titre: 'Econocom × Engie — Technicien Support Utilisateurs (Alternance)',
        description: "Support IT quotidien en environnement grand compte : suivi et résolution de tickets d'incidents < 25 min, optimisation logicielle des postes de travail, relation utilisateur, respect des processus clients stricts.",
        documents: "Rapport d'activité alternance, captures outil ticketing, bilan résolution incidents",
        periode: '01/09/25 au auj.',
        croix: [true, true, false, true, true, true],
      },
    ],
  },
  {
    titre: 'Réalisations en milieu professionnel en cours de seconde année',
    lignes: [],
  },
];
