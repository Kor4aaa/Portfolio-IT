// ============================================================================
//  RÉALISATIONS
// ----------------------------------------------------------------------------
//  Règle : aucun fait inventé. Les descriptions reformulent des éléments réels
//  (livrables du dépôt, CV, TP documentés). Quand une preuve ou un résultat
//  n'existe pas encore, il est marqué `etat: 'a-produire'` ou le champ reste
//  volontairement vide — jamais rempli au hasard.
// ============================================================================
import type { Realisation } from './types';

export const realisations: Realisation[] = [
  // ──────────────────────────────────────────────────────────────────────
  //  HOME LAB — réalisation majeure (infrastructure physique personnelle)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'home-lab',
    titre: 'Home Lab / Cyber Range sur infrastructure physique',
    resume:
      "Laboratoire personnel d'administration et de sécurité sur matériel physique : " +
      'virtualisation Proxmox, segmentation VLAN multi-zones, pare-feu pfSense, services ' +
      "d'annuaire et supervision.",
    categories: ['reseau', 'systeme', 'securite'],
    contexte: 'Projet personnel — apprentissage et expérimentation en continu',
    organisation: 'Personnel',
    periode: 'En cours',
    environnement: [
      'Infrastructure physique dédiée · 32 Go de RAM',
      'Proxmox VE 9 · bridge VLAN-aware (vmbr1, 802.1Q)',
      'Pare-feux pfSense en série (CARP)',
      '8 VLAN : 7 zones internes + DMZ (VLAN 70)',
    ],
    technologies: [
      'Proxmox VE 9', 'pfSense (CARP/pfsync)', 'VLAN 802.1Q', 'DMZ', 'Tailscale',
      'Guacamole', 'reverse proxy', 'Postfix · Dovecot', 'BIND9 / DNS', 'DHCP',
      'LDAP', 'step-ca (PKI)', 'FreeRADIUS', "Let's Encrypt", 'FreeBSD · ZFS',
      'PostgreSQL', 'MariaDB', 'Docker', 'GLPI', 'Graylog', 'Zeek', 'Cowrie',
      'Proxmox Backup Server', 'Wi-Fi 802.1X',
    ],
    probleme:
      "Disposer d'un environnement réaliste et maîtrisé pour concevoir, administrer et " +
      "sécuriser une infrastructure complète — au-delà de ce qu'un TP ponctuel permet.",
    objectifs: [
      "Construire une infrastructure segmentée en plusieurs zones (dont une DMZ).",
      'Mettre en place des services réseau et système : annuaire, DNS, DHCP, PKI, RADIUS.',
      'Expérimenter la haute disponibilité et la continuité (CARP/pfsync, sauvegardes).',
      'Superviser et détecter : métrologie, collecte de logs, détection réseau.',
    ],
    demarche: [
      'Virtualisation sur Proxmox VE 9 avec un bridge VLAN-aware (trunk 802.1Q, vmbr1).',
      "Architecture « sandwich » : deux étages de pare-feux pfSense (CARP) encadrant une " +
        'DMZ de relais (VLAN 70 : reverse proxy SRV-RP01, relais SMTP SRV-SMTP01).',
      'Segmentation en 7 zones internes routées par fw-int01 (routage pur, sans NAT) : ' +
        'administration (90), socle (10), supervision (30), applicatif (50), formation (20), ' +
        'champ de tir (40), terminaux mobiles (60).',
      'Administration unique par le VLAN 90 : accès distant Tailscale limité aux ports ' +
        '22/80/443/8006, bastion Guacamole.',
      "Services d'infrastructure (VLAN 10) : annuaire LDAP, DNS et DHCP (SRV-CORE01), PKI " +
        'interne step-ca + FreeRADIUS (SRV-PKI01), base PostgreSQL sur FreeBSD/ZFS (SRV-BSD01).',
      'Zone applicative (VLAN 50) : SRV-APP01 sous Debian/Docker (GLPI + MariaDB, inventaire ' +
        'natif), messagerie Postfix/Dovecot, backends web.',
      'Supervision et détection : Graylog et Zeek (SRV-SOC01), pot de miel Cowrie (VLAN 40).',
      "Sauvegardes centralisées (Proxmox Backup Server) et terminaison TLS (Let's Encrypt).",
    ],
    miseEnOeuvre: [
      'Plan d\'adressage par zone (192.168.<vlan>.0/24) et flux inter-zones maîtrisés au pare-feu.',
      'Pare-feux fw-ext01 et fw-int01 en service ; jeux de règles VLAN 10 et VLAN 50 écrits et testés.',
      'SRV-APP01 (VLAN 50) et pve01 (VLAN 90) en service ; reste des services en cours de déploiement.',
    ],
    tests: [
      'Règles des VLAN 10 et 50 testées : le trafic autorisé passe, le reste est jeté et journalisé.',
    ],
    resultats: [
      'Socle réseau opérationnel : virtualisation, segmentation VLAN et pare-feux en service.',
      'Zone applicative active (GLPI/MariaDB en conteneurs, inventaire natif).',
    ],
    difficultes: [],
    solutions: [],
    bilan:
      "Le Home Lab est le fil conducteur de ma montée en compétences SISR : la conception " +
      "d'ensemble est posée, le socle réseau et une première zone applicative sont en service. " +
      'Le déploiement des zones restantes et la collecte des preuves (captures, configurations, ' +
      'supervision) se poursuivent avant de considérer les compétences comme pleinement démontrées.',
    aCompleter: true,
    vedette: true,
    preuves: [
      { id: 'hl-schema', type: 'schema', titre: "Schéma d'architecture du Home Lab", pourquoi: "Conception de l'infrastructure : sandwich de pare-feux, DMZ et 7 zones segmentées (volet conception E6.1).", href: '/', etat: 'disponible' },
      { id: 'hl-pfsense', type: 'configuration', titre: 'Export de configuration pfSense (VLAN, règles)', pourquoi: "La configuration des pare-feux et des VLAN prouverait l'installation et le filtrage (E6.2).", etat: 'a-produire' },
      { id: 'hl-ha', type: 'capture', titre: 'État CARP/pfsync (bascule testée)', pourquoi: "Une capture d'une bascule CARP démontrerait la continuité de service (E6.2.2 / E5.1.4).", etat: 'a-produire' },
      { id: 'hl-superv', type: 'capture', titre: 'Supervision Graylog / détection Zeek', pourquoi: 'La métrologie et les journaux prouveraient la gestion d\'indicateurs et la supervision (E6.3.3).', etat: 'a-produire' },
      { id: 'hl-detect', type: 'log', titre: 'Détection Zeek / journaux Cowrie', pourquoi: 'La détection d\'actions malveillantes illustrerait la cybersécurité de l\'infrastructure (E7.5.5).', etat: 'a-produire' },
      { id: 'hl-pbs', type: 'capture', titre: 'Jobs de sauvegarde Proxmox Backup Server', pourquoi: 'Les sauvegardes prouveraient la gestion de la continuité (E5.1.5).', etat: 'a-produire' },
      { id: 'hl-pki', type: 'configuration', titre: 'PKI step-ca + annuaire LDAP + FreeRADIUS', pourquoi: 'La PKI interne et l\'authentification centralisée relèvent de la sécurisation des accès (E7.2 / E7.5.3).', etat: 'a-produire' },
      { id: 'hl-app', type: 'capture', titre: 'SRV-APP01 — GLPI/MariaDB en conteneurs', pourquoi: "Le service applicatif déployé (Debian/Docker) illustrerait la mise à disposition d'un service (E5.5).", etat: 'a-produire' },
    ],
    competences: [
      { sous: 'E6.1.1', niveau: 'mobilisee', justification: "Analyse du besoin d'un laboratoire SISR réaliste et de ses contraintes, traduite en architecture.", preuves: ['hl-schema'] },
      { sous: 'E6.1.3', niveau: 'mobilisee', justification: "Dossier de conception : choix d'une architecture segmentée et spécifications par zone.", preuves: ['hl-schema'] },
      { sous: 'E6.1.5', niveau: 'mobilisee', justification: "Maquette de la solution d'infrastructure (schéma d'architecture détaillé).", preuves: ['hl-schema'] },
      { sous: 'E6.1.4', niveau: 'en-cours', justification: 'Choix d\'éléments de disponibilité : pare-feux CARP/pfsync, sauvegardes PBS.', preuves: ['hl-ha', 'hl-pbs'] },
      { sous: 'E6.2.1', niveau: 'en-cours', justification: 'Installation et configuration de Proxmox, pfSense et des services d\'infrastructure.', preuves: ['hl-pfsense'] },
      { sous: 'E6.2.2', niveau: 'en-cours', justification: 'Continuité assurée par CARP/pfsync et par Proxmox Backup Server.', preuves: ['hl-ha', 'hl-pbs'] },
      { sous: 'E6.3.1', niveau: 'en-cours', justification: 'Administration à distance sécurisée via Tailscale (VLAN 90).', preuves: ['hl-pfsense'] },
      { sous: 'E6.3.3', niveau: 'en-cours', justification: 'Indicateurs et journaux : Graylog (métrologie/logs), Zeek (analyse réseau).', preuves: ['hl-superv'] },
      { sous: 'E5.1.4', niveau: 'en-cours', justification: 'Dispositifs de continuité de service (haute disponibilité, sauvegardes).', preuves: ['hl-ha'] },
      { sous: 'E5.1.5', niveau: 'en-cours', justification: 'Sauvegardes centralisées avec Proxmox Backup Server.', preuves: ['hl-pbs'] },
      { sous: 'E5.5.2', niveau: 'en-cours', justification: 'Déploiement d\'un service applicatif conteneurisé (SRV-APP01 : GLPI/MariaDB).', preuves: ['hl-app'] },
      { sous: 'E7.2.1', niveau: 'en-cours', justification: 'Identité et confiance internes : PKI step-ca, annuaire LDAP.', preuves: ['hl-pki'] },
      { sous: 'E7.5.1', niveau: 'en-cours', justification: 'Vérification de la sûreté des éléments conçus (segmentation, DMZ, durcissement).', preuves: ['hl-schema', 'hl-pfsense'] },
      { sous: 'E7.5.2', niveau: 'mobilisee', justification: 'Sécurité prise en compte dès la conception : segmentation 7 zones, DMZ, double pare-feu.', preuves: ['hl-schema'] },
      { sous: 'E7.5.3', niveau: 'en-cours', justification: 'Conformité des accès : PKI interne, LDAP, FreeRADIUS, 802.1X.', preuves: ['hl-pki'] },
      { sous: 'E7.5.5', niveau: 'en-cours', justification: 'Détection des actions malveillantes : Zeek, pot de miel Cowrie.', preuves: ['hl-detect'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  ACTIVE DIRECTORY — TP documenté, preuves réelles
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'active-directory',
    titre: 'Déploiement d\'un domaine Active Directory',
    resume:
      "Mise en place complète d'un domaine Windows Server : contrôleur de domaine, DNS, " +
      'unités d\'organisation, comptes et groupes, GPO et durcissement des mots de passe.',
    categories: ['systeme', 'securite'],
    contexte: 'TP BTS SIO SISR',
    organisation: 'Formation',
    periode: '2026',
    environnement: ['Oracle VirtualBox', 'Windows Server 2019 Standard', 'Domaine btssio.local', 'Serveur SRV-AD01'],
    technologies: ['Windows Server 2019', 'Active Directory DS', 'DNS', 'GPO', 'PowerShell', 'Import CSV'],
    probleme:
      "Centraliser la gestion des utilisateurs, des postes et des droits d'une organisation " +
      'simulée, avec une politique de sécurité appliquée à l\'échelle du domaine.',
    objectifs: [
      'Installer le rôle AD DS et promouvoir un contrôleur de domaine.',
      'Structurer l\'annuaire (unités d\'organisation, comptes, groupes).',
      'Appliquer des stratégies de groupe et une politique de mots de passe.',
    ],
    demarche: [
      'Préparation de la VM (SRV-AD01) et installation de Windows Server 2019.',
      'Configuration IP statique (192.168.10.10) et DNS local.',
      'Installation du rôle AD DS et promotion en contrôleur de domaine btssio.local.',
      'Création des unités d\'organisation, des comptes et des groupes de sécurité.',
      'Import d\'utilisateurs en masse depuis un fichier CSV.',
      'Définition des GPO et de la politique de mots de passe / verrouillage.',
      'Activation de la stratégie d\'audit et consultation du journal de sécurité.',
    ],
    miseEnOeuvre: [
      'Arborescence : OU=Utilisateurs, OU=Groupes, OU=Ordinateurs, OU=Services.',
      'Politique de mots de passe : longueur minimale 8, complexité activée, durées de vie définies.',
      'Verrouillage de compte : seuil à 3 tentatives, durée 15 minutes.',
      'Audit activé (connexions, gestion des comptes, accès aux objets, etc.).',
    ],
    tests: [
      'Vérification des rôles AD DS et DNS dans le Gestionnaire de serveur.',
      'Contrôle de la zone DNS btssio.local et de la création du domaine dans ADUC.',
      'Connexion au domaine avec un compte du domaine.',
    ],
    resultats: [
      'Domaine btssio.local opérationnel avec contrôleur de domaine et DNS.',
      'Comptes, groupes et GPO en place ; politique de sécurité appliquée.',
    ],
    difficultes: ['Des avertissements DNS/réplication sont apparus dans les journaux pendant la mise en place.'],
    solutions: ['Analyse des événements via le Gestionnaire de serveur et l\'Observateur d\'événements.'],
    bilan:
      "TP le plus abouti et le mieux documenté : il démontre la mise en place d'un service " +
      "d'annuaire et l'application d'une politique de sécurité à l'échelle d'un domaine.",
    aCompleter: false,
    vedette: true,
    liens: [
      { label: 'Livrable complet (4 séances)', href: '/livrables/active-directory/' },
    ],
    preuves: [
      { id: 'ad-livrable', type: 'documentation', titre: 'Livrable Active Directory (4 séances)', pourquoi: 'Documentation technique structurée de bout en bout de la mise en œuvre.', href: '/livrables/active-directory/', etat: 'disponible' },
      { id: 'ad-adds', type: 'capture', titre: 'Rôles AD DS et DNS actifs', pourquoi: 'Prouve l\'installation et la configuration des éléments d\'infrastructure.', href: '/livrables/active-directory/adds.jpg', alt: 'Gestionnaire de serveur montrant les rôles AD DS et DNS', etat: 'disponible' },
      { id: 'ad-ip', type: 'capture', titre: 'Configuration IP statique du serveur', pourquoi: 'Montre la configuration réseau du contrôleur de domaine.', href: '/livrables/active-directory/ip.jpg', alt: 'Propriétés IPv4 : 192.168.10.10 / 255.255.255.0', etat: 'disponible' },
      { id: 'ad-ou', type: 'capture', titre: 'Structure des unités d\'organisation', pourquoi: 'Recensement et organisation des ressources de l\'annuaire.', href: '/livrables/active-directory/ou.jpg', alt: 'Console ADUC avec les OU du domaine btssio.local', etat: 'disponible' },
      { id: 'ad-gpo', type: 'capture', titre: 'Objets de stratégie de groupe (GPO)', pourquoi: 'Mise en place des habilitations et des règles de sécurité du domaine.', href: '/livrables/active-directory/gpo.jpg', alt: 'Console de gestion des stratégies de groupe', etat: 'disponible' },
      { id: 'ad-mdp', type: 'capture', titre: 'Politique de mots de passe', pourquoi: 'Durcissement : complexité, longueur et durées de vie des mots de passe.', href: '/livrables/active-directory/mdp.jpg', alt: 'Stratégie de mot de passe dans la Default Domain Policy', etat: 'disponible' },
      { id: 'ad-verrou', type: 'capture', titre: 'Verrouillage de compte', pourquoi: 'Défense contre les tentatives répétées d\'authentification.', href: '/livrables/active-directory/verrou.jpg', alt: 'Stratégie de verrouillage de compte : 3 tentatives, 15 minutes', etat: 'disponible' },
      { id: 'ad-audit', type: 'capture', titre: 'Stratégie d\'audit', pourquoi: 'Journalisation des événements de sécurité du domaine.', href: '/livrables/active-directory/audit.jpg', alt: 'Stratégie d\'audit (réussite/échec) sur les contrôleurs de domaine', etat: 'disponible' },
    ],
    competences: [
      { sous: 'E5.1.1', niveau: 'mobilisee', justification: 'Recensement des ressources de l\'annuaire (OU, comptes, groupes).', preuves: ['ad-ou'] },
      { sous: 'E5.1.3', niveau: 'demontree', justification: 'Niveaux d\'habilitation via groupes, OU et GPO.', preuves: ['ad-gpo', 'ad-ou'] },
      { sous: 'E6.2.1', niveau: 'demontree', justification: 'Installation et configuration du contrôleur de domaine, DNS et réseau.', preuves: ['ad-adds', 'ad-ip'] },
      { sous: 'E6.2.4', niveau: 'demontree', justification: 'Rédaction d\'une documentation technique complète (livrable 4 séances).', preuves: ['ad-livrable'] },
      { sous: 'E6.2.5', niveau: 'mobilisee', justification: 'Liste de vérification des services AD/DNS et contrôle du domaine.', preuves: ['ad-livrable'] },
      { sous: 'E6.3.3', niveau: 'mobilisee', justification: 'Stratégie d\'audit activée et consultation du journal de sécurité.', preuves: ['ad-audit'] },
      { sous: 'E7.3.2', niveau: 'mobilisee', justification: 'Gestion des accès et des privilèges (groupes, GPO, politique de mots de passe).', preuves: ['ad-gpo', 'ad-mdp'] },
      { sous: 'E7.3.1', niveau: 'en-cours', justification: 'Défenses de base : verrouillage de compte et audit des connexions.', preuves: ['ad-verrou', 'ad-audit'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  VLAN — TP documenté (Packet Tracer), preuve = livrable
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'vlan-comptafinance',
    titre: 'Segmentation VLAN et routage inter-VLAN',
    resume:
      "Conception et configuration d'un réseau segmenté en VLAN pour un cabinet, avec " +
      'routage inter-VLAN (router-on-a-stick) et serveur DHCP centralisé via relais.',
    categories: ['reseau'],
    contexte: 'TP BTS SIO SISR — cas « Cabinet Comptafinance »',
    organisation: 'Formation',
    periode: '2025',
    environnement: ['Cisco Packet Tracer', 'Switch Cisco 2960', 'Routeur Cisco (sous-interfaces 802.1Q)'],
    technologies: ['VLAN 802.1Q', 'Trunk', 'Router-on-a-stick', 'DHCP relay (ip helper-address)', 'Cisco IOS'],
    probleme:
      'Séparer deux services (Accueil et Gestion) pour améliorer la sécurité et ' +
      "l'organisation du réseau, tout en gardant une administration centralisée de l'adressage.",
    objectifs: [
      'Créer deux VLAN distincts (Accueil, Gestion).',
      'Assurer le routage inter-VLAN et un serveur DHCP centralisé.',
      'Partager une imprimante réseau entre les deux VLAN.',
    ],
    demarche: [
      'Élaboration du plan d\'adressage et de l\'architecture (switch central + routeur).',
      'Création des VLAN 10 (Accueil) et 20 (Gestion) et affectation des ports.',
      'Configuration du lien trunk 802.1Q entre switch et routeur.',
      'Sous-interfaces du routeur et relais DHCP (ip helper-address).',
      'Configuration des pools DHCP et tests de connectivité.',
    ],
    miseEnOeuvre: [
      'VLAN 10 : 192.168.10.0/24 — VLAN 20 : 192.168.20.0/24.',
      'Routage inter-VLAN par sous-interfaces (router-on-a-stick).',
      'Relais DHCP du VLAN 20 vers le serveur du VLAN 10.',
    ],
    tests: [
      'Connectivité intra-VLAN et inter-VLAN validée par ping.',
      'Attribution DHCP vérifiée sur les postes des deux VLAN.',
      'Accès à l\'imprimante réseau depuis les deux VLAN.',
    ],
    resultats: [
      'Réseau segmenté fonctionnel avec routage inter-VLAN et DHCP centralisé.',
      'Documentation technique complète (plan d\'adressage, configurations, tests, glossaire).',
    ],
    difficultes: [],
    solutions: [],
    bilan:
      'TP réseau complet et documenté : il démontre la maquette d\'une solution ' +
      "d'infrastructure segmentée et sa configuration.",
    aCompleter: false,
    liens: [{ label: 'Livrable complet (guide + annexes)', href: '/livrables/vlan/' }],
    preuves: [
      { id: 'vlan-livrable', type: 'documentation', titre: 'Livrable VLAN (guide complet)', pourquoi: 'Dossier technique : contexte, architecture, plan d\'adressage, configurations, tests et dépannage.', href: '/livrables/vlan/', etat: 'disponible' },
    ],
    competences: [
      { sous: 'E6.1.3', niveau: 'mobilisee', justification: 'Plan d\'adressage et spécifications techniques de la solution.', preuves: ['vlan-livrable'] },
      { sous: 'E6.1.5', niveau: 'demontree', justification: 'Maquette et prototypage de l\'infrastructure sous Packet Tracer.', preuves: ['vlan-livrable'] },
      { sous: 'E6.1.6', niveau: 'mobilisee', justification: 'Plan de tests de validation défini dans le livrable.', preuves: ['vlan-livrable'] },
      { sous: 'E6.2.1', niveau: 'demontree', justification: 'Configuration des VLAN, du trunk, du routage et du DHCP.', preuves: ['vlan-livrable'] },
      { sous: 'E6.2.4', niveau: 'demontree', justification: 'Documentation technique complète de la solution.', preuves: ['vlan-livrable'] },
      { sous: 'E6.2.5', niveau: 'mobilisee', justification: 'Tests d\'intégration et d\'acceptation (connectivité, DHCP, impression).', preuves: ['vlan-livrable'] },
      { sous: 'E7.5.2', niveau: 'mobilisee', justification: 'Prise en compte de la sécurité par la segmentation réseau.', preuves: ['vlan-livrable'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  ALTERNANCE — support (preuves à produire, contexte professionnel)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'support-alternance',
    titre: 'Support utilisateurs en environnement grand compte',
    resume:
      "Traitement des incidents et demandes d'assistance en alternance : prise en charge, " +
      'diagnostic, résolution et suivi, avec rédaction de procédures.',
    categories: ['pro', 'service'],
    contexte: 'Alternance — technicien support utilisateurs',
    organisation: 'Econocom (client Engie)',
    periode: 'Depuis septembre 2025',
    environnement: ['Postes Windows', 'Outil de gestion de tickets (ITSM)', 'Environnement grand compte'],
    technologies: ['Support N1/N2', 'ITSM / ticketing', 'Windows', 'Gestion des incidents'],
    probleme:
      'Assurer la continuité du service aux utilisateurs dans un environnement exigeant, ' +
      'avec des procédures et des niveaux de service à respecter.',
    objectifs: [
      'Collecter, qualifier et suivre les demandes des utilisateurs.',
      'Traiter les incidents système et réseau de niveau 1 et 2.',
      'Documenter les procédures pour fiabiliser la résolution.',
    ],
    demarche: [
      'Prise en charge des tickets et qualification des demandes.',
      'Diagnostic, résolution ou escalade selon le niveau.',
      'Suivi jusqu\'à la clôture et rédaction de procédures.',
    ],
    miseEnOeuvre: [],
    tests: [],
    resultats: [],
    difficultes: [],
    solutions: [],
    bilan:
      "Cette expérience alimente directement le bloc E5. Les preuves (procédures, extraits " +
      "d'activité) doivent être produites sous une forme anonymisée, compatible avec la " +
      'confidentialité du contexte professionnel.',
    aCompleter: true,
    preuves: [
      { id: 'sup-proc', type: 'documentation', titre: 'Procédure de résolution (anonymisée)', pourquoi: 'Une procédure rédigée prouverait la formalisation du traitement des demandes (E5.2).', etat: 'a-produire' },
      { id: 'sup-ticket', type: 'capture', titre: 'Exemple de suivi de ticket (anonymisé)', pourquoi: 'Le cycle de vie d\'un incident illustrerait la collecte et le suivi des demandes (E5.2.1).', etat: 'a-produire' },
    ],
    competences: [
      { sous: 'E5.2.1', niveau: 'mobilisee', justification: 'Collecte, suivi et orientation des demandes utilisateurs.', preuves: ['sup-ticket'] },
      { sous: 'E5.2.2', niveau: 'mobilisee', justification: 'Traitement de demandes concernant les services système et réseau.', preuves: ['sup-proc'] },
      { sous: 'E5.5.3', niveau: 'mobilisee', justification: 'Accompagnement des utilisateurs dans l\'usage de leurs services.', preuves: ['sup-proc'] },
      { sous: 'E5.1.6', niveau: 'en-cours', justification: 'Application des règles d\'utilisation des ressources dans un cadre encadré.', preuves: ['sup-proc'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  GLPI / KANBOARD — TP ITSM (preuves à produire)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'glpi-kanboard',
    titre: 'Service ITSM : GLPI et gestion de projet Kanboard',
    resume:
      "Déploiement d'un outil de gestion des services (GLPI) et d'un outil de gestion de " +
      'projet (Kanboard) sur un serveur Linux, avec gestion des tickets et de l\'inventaire.',
    categories: ['service', 'systeme'],
    contexte: 'TP BTS SIO SISR',
    organisation: 'Formation',
    periode: '2025',
    environnement: ['Debian', 'Apache', 'MySQL/MariaDB', 'PHP'],
    technologies: ['GLPI', 'Kanboard', 'LAMP', 'Debian', 'ITSM'],
    probleme:
      "Outiller la gestion des incidents, de l'inventaire et du suivi de projet, comme dans " +
      'un service informatique réel.',
    objectifs: [
      'Installer une pile LAMP sur Debian.',
      'Déployer et paramétrer GLPI (catégories, priorités, groupes).',
      'Mettre en place Kanboard pour le suivi de projet.',
    ],
    demarche: [
      'Installation et configuration de la pile LAMP.',
      'Déploiement de GLPI et paramétrage du helpdesk et de l\'inventaire.',
      'Déploiement de Kanboard (tableaux, colonnes de workflow).',
      'Simulation d\'un cycle de vie de ticket, de l\'ouverture à la clôture.',
    ],
    miseEnOeuvre: [],
    tests: [],
    resultats: [],
    difficultes: [],
    solutions: [],
    bilan:
      'TP orienté services et mode projet (E5). Les preuves (captures, exports de ' +
      'configuration) restent à ajouter pour documenter la réalisation.',
    aCompleter: true,
    preuves: [
      { id: 'glpi-helpdesk', type: 'capture', titre: 'Helpdesk GLPI configuré', pourquoi: 'Montrerait la mise à disposition d\'un service de gestion des demandes (E5.2 / E5.5).', etat: 'a-produire' },
      { id: 'glpi-inv', type: 'capture', titre: 'Inventaire du parc dans GLPI', pourquoi: 'Illustrerait le recensement des ressources numériques (E5.1.1).', etat: 'a-produire' },
      { id: 'glpi-kanban', type: 'capture', titre: 'Tableau Kanboard', pourquoi: 'Illustrerait l\'organisation du travail en mode projet (E5.4).', etat: 'a-produire' },
    ],
    competences: [
      { sous: 'E5.1.1', niveau: 'en-cours', justification: 'Inventaire du parc matériel et logiciel dans GLPI.', preuves: ['glpi-inv'] },
      { sous: 'E5.2.1', niveau: 'en-cours', justification: 'Collecte et suivi des demandes via le helpdesk GLPI.', preuves: ['glpi-helpdesk'] },
      { sous: 'E5.4.2', niveau: 'en-cours', justification: 'Planification et suivi des activités avec Kanboard.', preuves: ['glpi-kanban'] },
      { sous: 'E5.5.2', niveau: 'en-cours', justification: 'Déploiement d\'un service applicatif sur serveur Linux.', preuves: ['glpi-helpdesk'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  LAB SÉCURITÉ — audit en environnement isolé (preuves à produire)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'lab-securite',
    titre: 'Analyse de vulnérabilités en environnement de lab',
    resume:
      "Travaux pratiques de sécurité en environnement isolé et encadré : découverte de " +
      'services, identification de vulnérabilités et rédaction de recommandations.',
    categories: ['securite'],
    contexte: 'TP BTS SIO SISR — environnement de lab isolé, encadré',
    organisation: 'Formation',
    periode: '2025',
    environnement: ['Environnement virtualisé isolé', 'Cible de lab intentionnellement vulnérable'],
    technologies: ['Découverte réseau', 'Analyse de vulnérabilités', 'Rapport de sécurité'],
    probleme:
      "Comprendre comment une infrastructure est analysée afin de mieux la défendre, dans " +
      'un cadre strictement pédagogique et autorisé.',
    objectifs: [
      'Découvrir les hôtes et services exposés.',
      'Identifier et qualifier des vulnérabilités.',
      'Proposer des contre-mesures et les présenter.',
    ],
    demarche: [
      'Reconnaissance et découverte des services en environnement isolé.',
      'Identification des vulnérabilités et de leur criticité.',
      'Rédaction d\'un rapport orienté contre-mesures.',
    ],
    miseEnOeuvre: [],
    tests: [],
    resultats: [],
    difficultes: [],
    solutions: [],
    bilan:
      "Approche défensive : l'objectif est l'analyse et la remédiation, pas l'attaque. Les " +
      'preuves (rapport anonymisé, synthèse des contre-mesures) restent à formaliser.',
    aCompleter: true,
    preuves: [
      { id: 'sec-rapport', type: 'documentation', titre: 'Rapport de vulnérabilités (contre-mesures)', pourquoi: 'Un rapport orienté remédiation prouverait l\'analyse d\'incidents et les contre-mesures (E7.5.6).', etat: 'a-produire' },
    ],
    competences: [
      { sous: 'E7.4.1', niveau: 'en-cours', justification: "Caractérisation des risques liés à l'utilisation malveillante d'un service.", preuves: ['sec-rapport'] },
      { sous: 'E7.5.5', niveau: 'en-cours', justification: 'Identification de services et de faiblesses exploitables (volet détection).', preuves: ['sec-rapport'] },
      { sous: 'E7.5.6', niveau: 'en-cours', justification: 'Analyse et proposition de contre-mesures dans un rapport.', preuves: ['sec-rapport'] },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  //  PORTFOLIO — le site lui-même est la preuve (E5.3 / E5.6)
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: 'portfolio-web',
    titre: 'Conception de ce portfolio de preuves',
    resume:
      "Conception et développement d'un site statique reliant le référentiel BTS SIO SISR " +
      'aux réalisations et aux preuves, avec une attention au référencement et à l\'accessibilité.',
    categories: ['service'],
    contexte: 'Projet personnel',
    organisation: 'Personnel',
    periode: '2026',
    environnement: ['Astro', 'TypeScript', 'CSS moderne', 'GitHub Pages', 'Domaine wenselreyes.tech'],
    technologies: ['Astro', 'TypeScript', 'HTML sémantique', 'CSS', 'SEO', 'Accessibilité'],
    probleme:
      'Présenter clairement, pour un jury ou un recruteur, quelles compétences du ' +
      'référentiel sont démontrées, par quelles réalisations et avec quelles preuves.',
    objectifs: [
      'Structurer le contenu autour de Référentiel → Compétence → Réalisation → Preuve.',
      'Produire un site rapide, accessible et bien référencé.',
    ],
    demarche: [
      'Modèle de données typé (référentiel, réalisations, preuves, veille).',
      'Génération statique avec Astro et CSS sans dépendance lourde.',
      'Métadonnées SEO, Open Graph, sitemap et robots.txt.',
    ],
    miseEnOeuvre: [
      'Statuts de compétences calculés automatiquement à partir des réalisations.',
      'Tableau de synthèse réalisations × compétences.',
    ],
    tests: ['Build statique, vérification des liens internes, contrôle responsive.'],
    resultats: [
      'Site publié sur wenselreyes.tech, mis à jour par simple ajout de données.',
    ],
    difficultes: [],
    solutions: [],
    bilan:
      "Le site est à la fois l'outil de suivi du référentiel et une preuve en soi pour E5.3 " +
      '(présence en ligne) et E5.6 (identité professionnelle).',
    aCompleter: false,
    liens: [
      { label: 'Code source (GitHub)', href: 'https://github.com/Kor4aaa/Portfolio-IT' },
    ],
    preuves: [
      { id: 'pf-site', type: 'depot', titre: 'Dépôt GitHub du portfolio', pourquoi: 'Le code source et l\'historique documentent la conception et l\'évolution du site.', href: 'https://github.com/Kor4aaa/Portfolio-IT', etat: 'disponible' },
      { id: 'pf-seo', type: 'documentation', titre: 'Métadonnées, sitemap et robots.txt', pourquoi: 'Le référencement et la mesure de visibilité relèvent de E5.3.2.', href: '/sitemap.xml', etat: 'disponible' },
    ],
    competences: [
      { sous: 'E5.3.2', niveau: 'mobilisee', justification: 'Référencement du site (métadonnées, sitemap, robots) et mesure de visibilité.', preuves: ['pf-seo'] },
      { sous: 'E5.3.3', niveau: 'demontree', justification: 'Conception et évolution d\'un site Web exploitant des données structurées.', preuves: ['pf-site'] },
      { sous: 'E5.6.3', niveau: 'mobilisee', justification: 'Gestion de l\'identité professionnelle en ligne.', preuves: ['pf-site'] },
      { sous: 'E5.4.1', niveau: 'en-cours', justification: 'Analyse des objectifs et organisation du projet de portfolio.', preuves: ['pf-site'] },
    ],
  },
];
