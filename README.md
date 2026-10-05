# Portfolio BTS SIO SISR — Wensel Reyes

Portfolio **de preuves** : il relie le référentiel BTS SIO option SISR (épreuves
**E5**, **E6**, **E7**) aux **réalisations** et aux **preuves** qui les justifient.

> Concept central : **Référentiel → Compétence → Réalisation → Preuve**

Site : <https://wenselreyes.tech>

## Stack

- [Astro](https://astro.build) (génération statique) + **TypeScript**
- CSS moderne (tokens, thème clair/sombre) — **sans framework UI**, JavaScript minimal
- Déploiement **GitHub Pages** via GitHub Actions

## Démarrage

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build statique dans dist/
npm run preview   # prévisualisation du build
```

## Structure

```text
src/
├── data/            # modèle de données (source de vérité, typé)
│   ├── types.ts         # types (Realisation, Preuve, Competence…)
│   ├── referentiel.ts   # E5/E6/E7, compétences et sous-compétences officielles
│   ├── realisations.ts  # réalisations + preuves + liens vers les compétences
│   ├── experiences.ts   # alternance, stages, formation
│   ├── veille.ts        # entrées de veille (E5.6)
│   ├── profil.ts        # identité, contacts, SEO
│   └── derive.ts        # calcul des statuts, matrices de synthèse, validation
├── components/      # composants Astro (Header, Footer, cartes, badges…)
├── layouts/         # gabarit de base (Base.astro)
├── pages/           # accueil, référentiel, réalisations, preuves, synthèse,
│                    # parcours, veille, 404, sitemap
└── styles/          # tokens.css + global.css
public/
└── livrables/       # preuves réelles (Active Directory, VLAN)
```

## Mettre à jour le contenu

Tout le contenu vit dans `src/data/` — l'interface se régénère seule.

- **Ajouter une réalisation** : une entrée dans `src/data/realisations.ts`
  (avec ses `preuves` et ses `competences` liées). Les statuts du référentiel
  et le tableau de synthèse se recalculent automatiquement.
- **Ajouter une preuve** : un objet dans le tableau `preuves` de la réalisation,
  référencé par son `id` dans les liens de compétences. Mettre les fichiers
  (captures, documents) dans `public/livrables/…`.
- **Ajouter une entrée de veille** : compléter `src/data/veille.ts`
  (un modèle est documenté dans le fichier).

Le build **échoue** si un lien pointe vers une sous-compétence ou une preuve
inexistante (contrôle d'intégrité dans `derive.ts`).

### Règle de contenu

Aucune information inventée. Une compétence n'est jamais marquée à partir d'une
simple technologie : son statut provient d'un lien explicite (justification +
preuve). Les éléments non encore documentés sont marqués « à produire ».

## Déploiement

Le workflow `.github/workflows/deploy.yml` construit le site et le publie sur
GitHub Pages à chaque `push` sur `main`.

À faire une seule fois dans le dépôt : **Settings → Pages → Build and deployment
→ Source : GitHub Actions**. Le fichier `public/CNAME` conserve le domaine
`wenselreyes.tech`.

## Référentiel

Intitulés conformes à la réforme (session 2025 et suivantes) — arrêté du
29 avril 2019 modifié (arrêté du 8 juillet 2024), RNCP40792. Les sources sont
listées en bas de la page *Référentiel*.
