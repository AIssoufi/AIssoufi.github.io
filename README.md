# issoufi-v3

> Portfolio personnel d'**ADAM Issoufi** — Développeur full-stack JavaScript passionné par l'UX et l'UI Design.

## 🛠 Stack technique

| Catégorie           | Technologies        |
| ------------------- | ------------------- |
| **Framework**       | React 19            |
| **Build**           | Vite 6              |
| **Langage**         | TypeScript 5        |
| **Styling**         | styled-components 6 |
| **Routing**         | React Router 7      |
| **Package Manager** | pnpm                |

## 🚀 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) (LTS recommandé)
- [pnpm](https://pnpm.io/)

### Installation

```bash
pnpm install
```

### Développement

```bash
pnpm dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000).

### Production

```bash
pnpm build
pnpm preview
```

### Tests

```bash
pnpm test          # Exécution unique
pnpm test:watch    # Mode watch
```

## 📁 Structure du projet

```
src/
├── App/                  # Composant principal + layout
│   ├── Header/           # Navigation, menu burger, liens
│   └── Modal/            # Modal informative
├── pages/
│   ├── Home/             # Page d'accueil
│   ├── Projects/         # Projets personnels & freelance
│   ├── Experiences/      # Expériences professionnelles
│   ├── Skills/           # Compétences techniques
│   └── NotFound/         # Page 404
└── index.tsx             # Point d'entrée
```

## 📝 Conventions

- **Commits** : [Conventional Commits](https://www.conventionalcommits.org/) via commitlint
- **Formatage** : Prettier (via lint-staged + husky)
