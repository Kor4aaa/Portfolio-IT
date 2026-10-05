// ============================================================================
//  RÉALISATIONS
// ----------------------------------------------------------------------------
//  Sources réelles : CV 2026 + Tableau de synthèse officiel E5 (session 2026).
//  Les compétences E5 reprennent exactement les croix du tableau de synthèse ;
//  E6/E7 sont déduites du contenu technique réel des réalisations.
//  Les documents listés dans la synthèse officielle existent (à joindre au
//  portfolio) : les preuves non encore téléversées sont marquées « à produire ».
//  Le Home Lab respecte le découpage du CV : « déjà en production » = démontré,
//  « en cours de déploiement » = en cours.
// ============================================================================
import type { Realisation } from './types';

export const realisations: Realisation[] = [
  // ──────────────────────────────────────────────────────────────────────
  //  HOME LAB — cyber range (réalisation majeure, E6/E7)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'home-lab',
    titre: 'Home Lab — cyber range sur infrastructure physique',
    resume:
      "Conception et déploiement complets, réalisés seul, d'une plateforme segmentée sous " +
      'Proxmox et pfSense : 7 zones cloisonnées, cloisonnement inter-VLAN testé et prouvé, ' +
      'accès distant sécurisé.',
    categories: ['reseau', 'systeme', 'securite'],
    contexte: 'Projet personnel',
    organisation: 'Personnel',
    periode: '2026 · en cours',
    environnement: [
      'Mini PC dédié · Proxmox VE 9 · 32 Go',
      'Bridge VLAN-aware 802.1Q (pas une maquette logicielle)',
      'Pare-feu pfSense · 7 zones cloisonnées',
    ],
    technologies: [
      'Proxmox VE 9', 'pfSense', 'VLAN 802.1Q', 'DMZ', 'Tailscale', "Let's Encrypt",
      'cron', 'CARP · pfsync', 'HAProxy', 'LDAPS', 'BIND9', 'DHCP Kea', 'step-ca (PKI)',
      'FreeRADIUS', 'FreeBSD 14 · ZFS', 'PostgreSQL', 'NFS', 'GLPI', 'Wazuh', 'Zeek',
      'Zabbix', 'Cowrie', 'Proxmox Backup Server',
    ],
    probleme:
      "Disposer d'un environnement réaliste et maîtrisé pour concevoir, déployer et " +
      "sécuriser une infrastructure complète — « ce que je fais le soir sur mon lab, je veux " +
      "le faire en entreprise ».",
    objectifs: [
      "Virtualiser et segmenter une infrastructure sur matériel physique.",
      'Cloisonner les zones au pare-feu et prouver l\'isolation inter-VLAN.',
      'Sécuriser les accès distants et préparer la haute disponibilité et la supervision.',
    ],
    demarche: [
      'Hyperviseur Proxmox VE 9 sur matériel physique, bridge VLAN-aware 802.1Q.',
      'Pare-feu pfSense : 7 zones cloisonnées (socle, postes, SOC, champ de tir, applicatif, ' +
        'DMZ, WAN), règles par alias.',
      'Cloisonnement inter-VLAN testé et prouvé (le trafic autorisé passe, le reste est bloqué).',
      'Accès distant sécurisé par Tailscale (subnet router).',
      "Certificat Let's Encrypt renouvelé automatiquement par tâche cron.",
    ],
    miseEnOeuvre: [
      'Déjà en production : virtualisation, segmentation 7 zones, cloisonnement prouvé, accès distant.',
      'En cours de déploiement : haute disponibilité (CARP/pfsync + HAProxy), services d\'annuaire/PKI, supervision.',
    ],
    tests: [
      'Cloisonnement inter-VLAN testé et prouvé au pare-feu (règles par alias).',
    ],
    resultats: [
      'Socle d\'infrastructure en production : hyperviseur, 7 zones segmentées, accès distant sécurisé.',
    ],
    difficultes: [],
    solutions: [],
    bilan:
      "Projet conçu et déployé seul, en production sur matériel physique. Le socle (virtualisation, " +
      'segmentation, cloisonnement, accès distant) est opérationnel ; la haute disponibilité, les ' +
      'services d\'infrastructure et la supervision sont en cours de déploiement.',
    aCompleter: true,
    vedette: true,
    liens: [{ label: 'Schéma d\'architecture (accueil)', href: '/' }],
    preuves: [
      { id: 'hl-schema', type: 'schema', titre: "Schéma d'architecture du Home Lab", pourquoi: "Conception de l'infrastructure : sandwich de pare-feux, DMZ et 7 zones segmentées (E6.1).", href: '/', etat: 'disponible' },
      { id: 'hl-rules', type: 'test', titre: 'Cloisonnement inter-VLAN testé et prouvé', pourquoi: "L'isolation entre zones vérifiée au pare-feu démontre les tests d'acceptation et la sûreté (E6.2.5 / E7.5.1).", etat: 'a-produire' },
      { id: 'hl-pfsense', type: 'configuration', titre: 'Configuration pfSense (VLAN, alias, règles)', pourquoi: "La configuration des VLAN et des règles prouve l'installation des éléments d'infrastructure (E6.2.1).", etat: 'a-produire' },
      { id: 'hl-tailscale', type: 'configuration', titre: 'Accès distant Tailscale (subnet router)', pourquoi: "L'accès distant chiffré illustre l'administration à distance sécurisée (E6.3.1).", etat: 'a-produire' },
      { id: 'hl-cron', type: 'script', titre: "Renouvellement Let's Encrypt par cron", pourquoi: "L'automatisation du renouvellement TLS relève de l'automatisation des tâches d'administration (E6.3.2).", etat: 'a-produire' },
      { id: 'hl-ha', type: 'capture', titre: 'Haute disponibilité CARP/pfsync + HAProxy', pourquoi: 'La bascule CARP et la répartition de charge démontreraient la continuité de service (E6.2.2).', etat: 'a-produire' },
      { id: 'hl-superv', type: 'capture', titre: 'Supervision Wazuh · Zeek · Zabbix', pourquoi: 'La métrologie et la détection illustreraient la supervision et la cybersécurité (E6.3.3 / E7.5.5).', etat: 'a-produire' },
      { id: 'hl-pbs', type: 'capture', titre: 'Sauvegardes Proxmox Backup Server', pourquoi: 'Les sauvegardes prouveraient la gestion de la continuité (E5.1.5).', etat: 'a-produire' },
    ],
    competences: [
      { sous: 'E6.1.1', niveau: 'demontree', justification: "Analyse du besoin et conception complète de l'infrastructure.", preuves: ['hl-schema'] },
      { sous: 'E6.1.3', niveau: 'demontree', justification: "Dossier de conception : architecture segmentée et spécifications par zone.", preuves: ['hl-schema'] },
      { sous: 'E6.1.5', niveau: 'demontree', justification: "Maquette puis déploiement réel de la solution d'infrastructure.", preuves: ['hl-schema'] },
      { sous: 'E6.1.4', niveau: 'en-cours', justification: 'Éléments de disponibilité (CARP/pfsync, HAProxy) en cours de déploiement.', preuves: ['hl-ha'] },
      { sous: 'E6.2.1', niveau: 'demontree', justification: 'Installation et configuration de Proxmox, pfSense, VLAN et règles par alias.', preuves: ['hl-pfsense', 'hl-schema'] },
      { sous: 'E6.2.5', niveau: 'demontree', justification: "Cloisonnement inter-VLAN testé et prouvé (tests d'acceptation).", preuves: ['hl-rules'] },
      { sous: 'E6.2.2', niveau: 'en-cours', justification: 'Continuité (CARP/pfsync, sauvegardes PBS) en cours de déploiement.', preuves: ['hl-ha', 'hl-pbs'] },
      { sous: 'E6.3.1', niveau: 'demontree', justification: 'Administration à distance sécurisée via Tailscale (subnet router).', preuves: ['hl-tailscale'] },
      { sous: 'E6.3.2', niveau: 'demontree', justification: "Automatisation : renouvellement Let's Encrypt par tâche cron.", preuves: ['hl-cron'] },
      { sous: 'E6.3.3', niveau: 'en-cours', justification: 'Supervision (Wazuh, Zeek, Zabbix) en cours de déploiement.', preuves: ['hl-superv'] },
      { sous: 'E5.1.4', niveau: 'en-cours', justification: 'Continuité de service (haute disponibilité) en cours.', preuves: ['hl-ha'] },
      { sous: 'E5.1.5', niveau: 'en-cours', justification: 'Sauvegardes centralisées (PBS) en cours de déploiement.', preuves: ['hl-pbs'] },
      { sous: 'E7.5.1', niveau: 'demontree', justification: 'Sûreté des éléments déployés : segmentation, DMZ, cloisonnement prouvé.', preuves: ['hl-rules', 'hl-schema'] },
      { sous: 'E7.5.2', niveau: 'demontree', justification: 'Sécurité prise en compte dès la conception : 7 zones, DMZ, règles par alias.', preuves: ['hl-schema'] },
      { sous: 'E7.5.4', niveau: 'mobilisee', justification: 'Prévention par cloisonnement inter-VLAN et filtrage par alias.', preuves: ['hl-rules'] },
      { sous: 'E7.5.3', niveau: 'en-cours', justification: 'Conformité des accès (PKI step-ca, LDAPS, FreeRADIUS) en cours.', preuves: ['hl-superv'] },
      { sous: 'E7.5.5', niveau: 'en-cours', justification: 'Détection (Wazuh, Zeek, honeypot Cowrie) en cours de déploiement.', preuves: ['hl-superv'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  TP ACTIVE DIRECTORY — Windows Server 2022 (E5 : C, F, G, H)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'active-directory',
    titre: 'TP Active Directory — Windows Server 2022',
    resume:
      "Déploiement d'un domaine Active Directory : unités d'organisation, utilisateurs, groupes " +
      'de sécurité, GPO, DHCP/DNS et scripts PowerShell de création de comptes en masse.',
    categories: ['systeme', 'securite'],
    contexte: 'TP BTS SIO SISR — en cours de formation',
    organisation: 'Formation (ESUP)',
    periode: '10/2025 → 12/2025',
    environnement: ['Windows Server 2022', 'Active Directory DS', 'DHCP · DNS', 'PowerShell'],
    technologies: ['Windows Server 2022', 'Active Directory DS', 'GPO', 'DHCP', 'DNS', 'PowerShell'],
    probleme:
      "Centraliser la gestion des utilisateurs, des postes et des droits d'une organisation, " +
      'avec une politique de sécurité appliquée à l\'échelle du domaine.',
    objectifs: [
      'Installer AD DS et structurer l\'annuaire (OU, comptes, groupes de sécurité).',
      'Déployer des GPO, le DHCP et le DNS.',
      'Industrialiser la création de comptes par scripts PowerShell.',
    ],
    demarche: [
      'Installation d\'AD DS et promotion en contrôleur de domaine.',
      'Création des unités d\'organisation, comptes et groupes de sécurité.',
      'Déploiement des GPO et de la configuration intégrée DHCP/DNS.',
      'Scripts PowerShell de création de comptes en masse (import).',
    ],
    miseEnOeuvre: [
      'Politique de sécurité appliquée par GPO (mots de passe, verrouillage, audit).',
      'Jonction de postes et vérification de l\'application des stratégies.',
    ],
    tests: ['Vérification des services AD DS/DNS et de l\'application des GPO.'],
    resultats: ['Domaine opérationnel : annuaire structuré, GPO, DHCP/DNS et comptes gérés.'],
    difficultes: [],
    solutions: [],
    bilan:
      "TP système complet : il démontre la mise à disposition d'un service d'annuaire, " +
      "l'automatisation par script et l'application d'une politique de sécurité de domaine.",
    aCompleter: false,
    liens: [{ label: 'Livrable détaillé (4 séances)', href: '/livrables/active-directory/' }],
    preuves: [
      { id: 'ad-livrable', type: 'documentation', titre: 'Rapport de TP Active Directory', pourquoi: 'Documentation technique structurée de la mise en œuvre.', href: '/livrables/active-directory/', etat: 'disponible' },
      { id: 'ad-scripts', type: 'script', titre: 'Scripts PowerShell (comptes en masse)', pourquoi: "L'automatisation de la création de comptes relève de l'automatisation d'administration (E6.3.2).", etat: 'a-produire' },
      { id: 'ad-gpo', type: 'capture', titre: 'GPO / DHCP / DNS', pourquoi: 'Mise en place des habilitations et des services (E5.1.3 / E6.2.1).', href: '/livrables/active-directory/gpo.jpg', alt: 'Console de gestion des stratégies de groupe', etat: 'disponible' },
      { id: 'ad-mdp', type: 'capture', titre: 'Politique de mots de passe', pourquoi: 'Durcissement : complexité, longueur et durées de vie (E7.3.2).', href: '/livrables/active-directory/mdp.jpg', alt: 'Stratégie de mot de passe', etat: 'disponible' },
    ],
    competences: [
      { sous: 'E5.1.1', niveau: 'demontree', justification: 'Recensement et organisation des ressources de l\'annuaire (OU, comptes, groupes).', preuves: ['ad-livrable'] },
      { sous: 'E5.1.3', niveau: 'demontree', justification: 'Niveaux d\'habilitation via groupes de sécurité et GPO.', preuves: ['ad-gpo'] },
      { sous: 'E5.4.1', niveau: 'demontree', justification: 'Analyse des objectifs et organisation du TP.', preuves: ['ad-livrable'] },
      { sous: 'E5.4.2', niveau: 'demontree', justification: 'Planification des séances de mise en œuvre.', preuves: ['ad-livrable'] },
      { sous: 'E5.5.1', niveau: 'demontree', justification: 'Tests d\'intégration et d\'acceptation des services AD/DNS.', preuves: ['ad-livrable'] },
      { sous: 'E5.5.2', niveau: 'demontree', justification: 'Déploiement du service d\'annuaire et des postes joints au domaine.', preuves: ['ad-livrable'] },
      { sous: 'E5.6.4', niveau: 'demontree', justification: 'Développement du projet professionnel (compétences système).', preuves: ['ad-livrable'] },
      { sous: 'E6.2.1', niveau: 'demontree', justification: 'Installation et configuration du contrôleur de domaine, DHCP et DNS.', preuves: ['ad-gpo'] },
      { sous: 'E6.2.4', niveau: 'demontree', justification: 'Rédaction du rapport de TP (documentation technique).', preuves: ['ad-livrable'] },
      { sous: 'E6.3.2', niveau: 'demontree', justification: 'Automatisation : création de comptes en masse par PowerShell.', preuves: ['ad-scripts'] },
      { sous: 'E7.3.2', niveau: 'demontree', justification: 'Gestion des accès et privilèges (groupes, GPO, politique de mots de passe).', preuves: ['ad-gpo', 'ad-mdp'] },
      { sous: 'E7.3.1', niveau: 'mobilisee', justification: 'Défenses : verrouillage de compte et audit des connexions.', preuves: ['ad-mdp'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  TP VLAN — Cisco Packet Tracer (E5 : C, F, G, H)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'vlan-cisco',
    titre: 'TP Infrastructure VLAN — Cisco Packet Tracer',
    resume:
      "Architecture réseau segmentée : VLAN par département, routage inter-VLAN " +
      '(router-on-a-stick), ACL et ports trunk/access 802.1Q.',
    categories: ['reseau'],
    contexte: 'TP BTS SIO SISR — en cours de formation',
    organisation: 'Formation (ESUP)',
    periode: '11/2025 → 01/2026',
    environnement: ['Cisco Packet Tracer', 'Switch & routeur Cisco', '802.1Q'],
    technologies: ['VLAN 802.1Q', 'Trunk / Access', 'Router-on-a-stick', 'ACL', 'DHCP', 'Cisco IOS'],
    probleme:
      'Segmenter le réseau par département pour la sécurité et l\'organisation, avec routage ' +
      'inter-VLAN contrôlé et adressage centralisé.',
    objectifs: [
      'Créer les VLAN par département et les affecter aux ports.',
      'Assurer le routage inter-VLAN et filtrer les flux par ACL.',
      'Documenter le plan d\'adressage et les configurations.',
    ],
    demarche: [
      'Création des VLAN et affectation des ports (access/trunk 802.1Q).',
      'Routage inter-VLAN par router-on-a-stick.',
      'Mise en place d\'ACL pour contrôler les flux entre VLAN.',
      'Plan d\'adressage IP et tests de connectivité.',
    ],
    miseEnOeuvre: ['Un sous-réseau par VLAN, routage par sous-interfaces, filtrage par ACL.'],
    tests: ['Connectivité intra/inter-VLAN validée ; flux filtrés conformes aux ACL.'],
    resultats: [
      'Réseau segmenté fonctionnel et documenté (schéma, plan d\'adressage, configurations).',
    ],
    difficultes: [],
    solutions: [],
    bilan:
      'TP réseau complet : il démontre la maquette d\'une infrastructure segmentée, sa ' +
      'configuration et la prise en compte de la sécurité par la segmentation.',
    aCompleter: false,
    liens: [{ label: 'Livrable complet (guide + annexes)', href: '/livrables/vlan/' }],
    preuves: [
      { id: 'vlan-livrable', type: 'documentation', titre: 'Rapport de configuration (switches/routeurs)', pourquoi: 'Dossier technique : architecture, plan d\'adressage, configurations et tests.', href: '/livrables/vlan/', etat: 'disponible' },
      { id: 'vlan-schema', type: 'schema', titre: 'Schéma réseau + plan d\'adressage IP', pourquoi: 'Spécifications et maquette de la solution (E6.1.3 / E6.1.5).', href: '/livrables/vlan/', etat: 'disponible' },
    ],
    competences: [
      { sous: 'E5.1.1', niveau: 'demontree', justification: 'Recensement des ressources et plan d\'adressage.', preuves: ['vlan-schema'] },
      { sous: 'E5.4.1', niveau: 'demontree', justification: 'Analyse des objectifs et organisation du TP.', preuves: ['vlan-livrable'] },
      { sous: 'E5.4.2', niveau: 'demontree', justification: 'Planification des étapes de configuration.', preuves: ['vlan-livrable'] },
      { sous: 'E5.5.1', niveau: 'demontree', justification: 'Tests d\'intégration et d\'acceptation (connectivité, ACL).', preuves: ['vlan-livrable'] },
      { sous: 'E5.6.4', niveau: 'demontree', justification: 'Développement du projet professionnel (compétences réseau).', preuves: ['vlan-livrable'] },
      { sous: 'E6.1.3', niveau: 'demontree', justification: 'Plan d\'adressage et spécifications techniques.', preuves: ['vlan-schema'] },
      { sous: 'E6.1.5', niveau: 'demontree', justification: 'Maquette de l\'infrastructure sous Packet Tracer.', preuves: ['vlan-schema'] },
      { sous: 'E6.2.1', niveau: 'demontree', justification: 'Configuration des VLAN, trunks, routage inter-VLAN et ACL.', preuves: ['vlan-livrable'] },
      { sous: 'E6.2.4', niveau: 'demontree', justification: 'Documentation technique de la solution.', preuves: ['vlan-livrable'] },
      { sous: 'E6.2.5', niveau: 'demontree', justification: 'Tests d\'intégration et d\'acceptation de la solution.', preuves: ['vlan-livrable'] },
      { sous: 'E7.5.2', niveau: 'mobilisee', justification: 'Sécurité prise en compte par la segmentation et les ACL.', preuves: ['vlan-schema'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  TP CYBERSÉCURITÉ — Kali Linux (E5 : C, D, F, H)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'cybersecurite-kali',
    titre: 'TP Cybersécurité — Kali Linux (chiffrement, audit, exploitation)',
    resume:
      'Chiffrement symétrique/asymétrique et protocoles sécurisés, audit réseau (Nmap, ' +
      'Wireshark) et exploitation encadrée d\'une faille Pixie Dust WPS, avec rapport de ' +
      'vulnérabilités et contre-mesures.',
    categories: ['securite'],
    contexte: 'TP BTS SIO SISR — en cours de formation, environnement encadré',
    organisation: 'Formation (ESUP)',
    periode: '01/2026 → 04/2026',
    environnement: ['Kali Linux', 'Environnement de lab encadré'],
    technologies: ['Chiffrement (sym./asym.)', 'Nmap', 'Wireshark', 'Aircrack-ng', 'Rapport de sécurité'],
    probleme:
      'Comprendre les mécanismes de chiffrement et la manière dont une infrastructure est ' +
      'analysée, afin de mieux la défendre, dans un cadre strictement pédagogique et autorisé.',
    objectifs: [
      'Mettre en œuvre le chiffrement symétrique/asymétrique et des protocoles sécurisés.',
      'Réaliser un audit réseau (découverte, analyse de trames).',
      'Qualifier une vulnérabilité et proposer des contre-mesures.',
    ],
    demarche: [
      'Chiffrement symétrique/asymétrique et protocoles sécurisés.',
      'Audit réseau : scan Nmap, analyse Wireshark.',
      'Exploitation encadrée de la faille Pixie Dust WPS (Aircrack-ng).',
      'Rédaction d\'un rapport de vulnérabilités orienté contre-mesures.',
    ],
    miseEnOeuvre: [],
    tests: [],
    resultats: [
      'Rapport d\'audit et rapport de faille exploitée, avec contre-mesures (ex. désactivation WPS).',
    ],
    difficultes: [],
    solutions: [],
    bilan:
      "Approche défensive : l'objectif est l'analyse, la qualification du risque et la " +
      'remédiation. Ce TP alimente directement le volet cybersécurité (E7).',
    aCompleter: false,
    preuves: [
      { id: 'kali-audit', type: 'documentation', titre: "Rapport d'audit réseau", pourquoi: 'Analyse des services et des faiblesses, orientée remédiation (E7.5.5 / E7.5.6).', etat: 'a-produire' },
      { id: 'kali-faille', type: 'documentation', titre: 'Rapport de faille + contre-mesures', pourquoi: 'Qualification du risque et contre-mesures (E7.4.1 / E7.5.4).', etat: 'a-produire' },
      { id: 'kali-captures', type: 'capture', titre: 'Captures Nmap / Aircrack-ng / Wireshark', pourquoi: 'Preuves techniques de l\'audit et de l\'analyse de trames.', etat: 'a-produire' },
    ],
    competences: [
      { sous: 'E5.1.2', niveau: 'demontree', justification: 'Exploitation de référentiels et de standards de sécurité lors de l\'audit.', preuves: ['kali-audit'] },
      { sous: 'E5.2.2', niveau: 'demontree', justification: 'Traitement d\'un incident de sécurité réseau (audit et remédiation).', preuves: ['kali-faille'] },
      { sous: 'E5.4.1', niveau: 'demontree', justification: 'Analyse des objectifs et organisation du TP.', preuves: ['kali-audit'] },
      { sous: 'E5.6.2', niveau: 'demontree', justification: 'Veille et outils de sécurité mis en œuvre.', preuves: ['kali-audit'] },
      { sous: 'E7.4.1', niveau: 'demontree', justification: "Caractérisation des risques liés à l'utilisation malveillante d'un service.", preuves: ['kali-faille'] },
      { sous: 'E7.5.4', niveau: 'demontree', justification: 'Contre-mesures proposées pour prévenir l\'attaque (ex. WPS).', preuves: ['kali-faille'] },
      { sous: 'E7.5.5', niveau: 'demontree', justification: 'Détection et identification de services et faiblesses (Nmap, Wireshark).', preuves: ['kali-captures'] },
      { sous: 'E7.5.6', niveau: 'demontree', justification: 'Analyse de l\'incident et proposition de contre-mesures (rapport).', preuves: ['kali-faille'] },
      { sous: 'E7.3.1', niveau: 'mobilisee', justification: 'Identification des menaces et des défenses appropriées.', preuves: ['kali-audit'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  PORTFOLIO — wenselreyes.tech (E5 : E, F, G, H)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'portfolio-web',
    titre: 'Portfolio professionnel — wenselreyes.tech',
    resume:
      "Conception et déploiement d'un site portfolio hébergé en ligne avec domaine personnalisé, " +
      "mettant en valeur l'identité et les projets professionnels BTS SIO SISR.",
    categories: ['service'],
    contexte: 'Projet personnel — en cours de formation',
    organisation: 'Personnel',
    periode: '03/2026 → 04/2026',
    environnement: ['Astro · TypeScript · CSS', 'GitHub Pages', 'Domaine wenselreyes.tech'],
    technologies: ['Astro', 'TypeScript', 'HTML/CSS', 'SEO', 'GitHub Pages'],
    probleme:
      'Présenter clairement, pour un jury ou un recruteur, quelles compétences du référentiel ' +
      'sont démontrées, par quelles réalisations et avec quelles preuves.',
    objectifs: [
      'Structurer le contenu autour de Référentiel → Compétence → Réalisation → Preuve.',
      'Déployer un site rapide, accessible et référencé, avec domaine personnalisé.',
    ],
    demarche: [
      'Modèle de données typé (référentiel, réalisations, preuves).',
      'Génération statique (Astro) et déploiement continu sur GitHub Pages.',
      'Métadonnées SEO, Open Graph, sitemap et robots.txt ; domaine personnalisé.',
    ],
    miseEnOeuvre: ['Statuts de compétences calculés automatiquement ; tableau de synthèse E5.'],
    tests: ['Build statique, vérification des liens, contrôle responsive et accessibilité.'],
    resultats: ['Site publié sur wenselreyes.tech, mis à jour par simple ajout de données.'],
    difficultes: [],
    solutions: [],
    bilan:
      "Le site valorise l'identité professionnelle en ligne et sert d'outil de suivi du " +
      'référentiel ; il est lui-même une preuve pour E5.3 et E5.6.',
    aCompleter: false,
    liens: [{ label: 'Code source (GitHub)', href: 'https://github.com/Kor4aaa/Portfolio-IT' }],
    preuves: [
      { id: 'pf-site', type: 'depot', titre: 'Dépôt GitHub du portfolio', pourquoi: 'Le code et l\'historique documentent la conception et l\'évolution du site.', href: 'https://github.com/Kor4aaa/Portfolio-IT', etat: 'disponible' },
      { id: 'pf-seo', type: 'documentation', titre: 'Métadonnées, sitemap et robots.txt', pourquoi: 'Référencement et mesure de visibilité (E5.3.2).', href: '/sitemap.xml', etat: 'disponible' },
    ],
    competences: [
      { sous: 'E5.3.2', niveau: 'demontree', justification: 'Référencement du site (métadonnées, sitemap, robots) et mesure de visibilité.', preuves: ['pf-seo'] },
      { sous: 'E5.3.3', niveau: 'demontree', justification: 'Conception et évolution d\'un site Web exploitant des données structurées.', preuves: ['pf-site'] },
      { sous: 'E5.4.1', niveau: 'demontree', justification: 'Analyse des objectifs et organisation du projet.', preuves: ['pf-site'] },
      { sous: 'E5.4.2', niveau: 'demontree', justification: 'Planification de la conception et du déploiement.', preuves: ['pf-site'] },
      { sous: 'E5.5.2', niveau: 'demontree', justification: 'Déploiement du service en ligne (GitHub Pages, domaine personnalisé).', preuves: ['pf-site'] },
      { sous: 'E5.6.3', niveau: 'demontree', justification: 'Gestion de l\'identité professionnelle en ligne.', preuves: ['pf-site'] },
      { sous: 'E5.6.4', niveau: 'demontree', justification: 'Développement du projet professionnel.', preuves: ['pf-site'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  ALTERNANCE — Econocom × Engie (E5 : C, D, F, G, H)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'support-alternance',
    titre: 'Econocom × Engie — technicien support utilisateurs',
    resume:
      "Support IT quotidien en environnement grand compte : suivi et résolution de tickets " +
      "d'incidents, optimisation logicielle des postes, relation utilisateur et respect de " +
      'processus clients stricts.',
    categories: ['pro', 'service'],
    contexte: 'Alternance — en milieu professionnel (1ʳᵉ année)',
    organisation: 'Econocom (client Engie)',
    periode: '01/09/2025 → aujourd\'hui',
    environnement: ['Environnement grand compte', 'Postes Windows', 'Outil de ticketing (ITSM)'],
    technologies: ['Support N1/N2', 'ITSM / ticketing', 'Windows', 'Optimisation logicielle'],
    probleme:
      'Assurer la continuité du service aux utilisateurs dans un environnement exigeant, avec ' +
      'des processus et des niveaux de service à respecter.',
    objectifs: [
      'Collecter, suivre et résoudre les incidents dans les délais.',
      'Optimiser les postes de travail et accompagner les utilisateurs.',
      'Respecter les processus clients et soigner la relation utilisateur.',
    ],
    demarche: [
      'Prise en charge et qualification des tickets.',
      'Diagnostic et résolution d\'incidents (résolution < 25 min).',
      'Optimisation logicielle des postes ; suivi jusqu\'à la clôture.',
    ],
    miseEnOeuvre: [],
    tests: [],
    resultats: [
      'Résolution d\'incidents dans les délais et respect des processus clients.',
    ],
    difficultes: [],
    solutions: [],
    bilan:
      "Expérience professionnelle au cœur du bloc E5 : collecte et traitement des demandes, " +
      'mise à disposition de services et développement professionnel. Documents à joindre sous ' +
      'forme anonymisée (confidentialité grand compte).',
    aCompleter: true,
    preuves: [
      { id: 'alt-rapport', type: 'documentation', titre: "Rapport d'activité d'alternance", pourquoi: 'Formalise le périmètre, les demandes traitées et le suivi (E5.2).', etat: 'a-produire' },
      { id: 'alt-ticket', type: 'capture', titre: 'Outil de ticketing (anonymisé)', pourquoi: 'Illustre la collecte et le suivi des demandes (E5.2.1).', etat: 'a-produire' },
      { id: 'alt-bilan', type: 'document', titre: 'Bilan de résolution d\'incidents', pourquoi: 'Indicateurs de traitement des incidents (E5.2 / E5.5).', etat: 'a-produire' },
    ],
    competences: [
      { sous: 'E5.1.6', niveau: 'demontree', justification: 'Application des règles d\'utilisation et des processus clients.', preuves: ['alt-rapport'] },
      { sous: 'E5.2.1', niveau: 'demontree', justification: 'Collecte, suivi et orientation des demandes (ticketing).', preuves: ['alt-ticket'] },
      { sous: 'E5.2.2', niveau: 'demontree', justification: 'Traitement de demandes concernant les services système et réseau.', preuves: ['alt-bilan'] },
      { sous: 'E5.2.3', niveau: 'mobilisee', justification: 'Traitement de demandes concernant les applications.', preuves: ['alt-ticket'] },
      { sous: 'E5.4.1', niveau: 'demontree', justification: 'Organisation du travail selon les processus et les priorités.', preuves: ['alt-rapport'] },
      { sous: 'E5.5.3', niveau: 'demontree', justification: 'Accompagnement des utilisateurs et optimisation de leurs postes.', preuves: ['alt-rapport'] },
      { sous: 'E5.6.1', niveau: 'demontree', justification: 'Environnement d\'apprentissage en situation professionnelle.', preuves: ['alt-rapport'] },
      { sous: 'E5.6.3', niveau: 'demontree', justification: 'Gestion de l\'identité et de la posture professionnelles.', preuves: ['alt-rapport'] },
      { sous: 'E5.6.4', niveau: 'demontree', justification: 'Développement du projet professionnel.', preuves: ['alt-rapport'] },
    ],
  },
];
