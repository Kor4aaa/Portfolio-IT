// ============================================================================
//  EXPÉRIENCES & FORMATION
//  Source : CV / contenu déjà publié par Wensel Reyes. Aucun fait ajouté.
//  Les expériences renvoient vers des réalisations concrètes quand elles existent.
// ============================================================================
import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    slug: 'econocom-engie',
    poste: 'Technicien support utilisateurs',
    organisation: 'Econocom',
    client: 'Engie',
    type: 'alternance',
    periode: 'Depuis septembre 2025',
    missions: [
      'Support N1/N2 : prise en charge et suivi des demandes utilisateurs.',
      'Diagnostic et résolution d\'incidents, gestion des postes.',
      'Rédaction de procédures et application des processus internes.',
    ],
    realisations: ['support-alternance'],
    enCours: true,
  },
  {
    slug: 'cite-sciences',
    poste: 'Stagiaire technicien support de proximité',
    organisation: 'Cité des Sciences et de l\'Industrie',
    type: 'stage',
    periode: '2024',
    dureeNote: '4 semaines',
    missions: [
      'Support informatique et help desk.',
      'Masterisation et déploiement de postes.',
    ],
  },
  {
    slug: 'alten',
    poste: 'Stagiaire technicien support de proximité',
    organisation: 'Alten',
    type: 'stage',
    periode: '2023',
    dureeNote: '4 semaines',
    missions: [
      'Masterisation de postes (réseau PXE, filaire, clé USB).',
      'Préparation de postes en volume.',
    ],
  },
  {
    slug: 'ministere-affaires-sociales',
    poste: 'Stagiaire technicien support informatique',
    organisation: 'Ministère des Affaires sociales',
    type: 'stage',
    periode: '2022',
    dureeNote: '4 semaines',
    missions: [
      'Support auprès d\'utilisateurs en environnement sensible.',
      'Gestion des demandes et suivi via outil de ticketing.',
    ],
  },
  {
    slug: 'chateau-versailles',
    poste: 'Stagiaire technicien réseau & systèmes',
    organisation: 'Château de Versailles',
    type: 'stage',
    periode: '2022',
    dureeNote: '4 semaines',
    missions: [
      'Configuration de baies de brassage et câblage.',
      'Participation à l\'administration de serveurs physiques.',
    ],
  },
  {
    slug: 'econocom-2021',
    poste: 'Stagiaire technicien support de proximité',
    organisation: 'Econocom',
    type: 'stage',
    periode: '2021',
    dureeNote: '4 semaines',
    missions: [
      'Découverte des processus de support et du help desk.',
      'Premières opérations de masterisation.',
    ],
  },
];

export const formation: Experience[] = [
  {
    slug: 'bts-sio-sisr',
    poste: 'BTS SIO — option SISR (2ᵉ année)',
    organisation: 'ESUP',
    type: 'formation',
    periode: '2025 – 2027',
    missions: [
      'Réseaux : Active Directory sécurisé, VLAN Cisco, routage / switching.',
      'Virtualisation (Proxmox, VMware, VirtualBox) ; cybersécurité (RGPD, audits Kali, pentesting).',
      'Préparation des épreuves professionnelles E5, E6 et E7.',
    ],
    realisations: ['active-directory', 'vlan-cisco', 'cybersecurite-kali', 'portfolio-web'],
    enCours: true,
  },
  {
    slug: 'baccalaureat',
    poste: 'Baccalauréat (mention) — option Cybersécurité',
    organisation: 'Lycée Les Côtes de Villebon',
    type: 'formation',
    periode: '2021 – 2024',
    missions: [
      'Baccalauréat obtenu en 2024 avec mention.',
    ],
  },
];
