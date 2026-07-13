# 🔴 Portfolio – Ornella NANA

Portfolio interactif professionnel développé avec React.js.

---

## 🚀 Comment le lancer ?

### Prérequis
- **Node.js** version 16 ou supérieure → https://nodejs.org
- **npm** (inclus avec Node.js)

### Étapes

```bash
# 1. Aller dans le dossier du projet
cd ornella-portfolio

# 2. Installer les dépendances (une seule fois)
npm install

# 3. Lancer le serveur de développement
npm start
```

Le navigateur s'ouvre automatiquement sur **http://localhost:3000** 🎉

---

## 📦 Créer la version finale (pour héberger)

```bash
npm run build
```

Cela génère un dossier `/build` prêt à déployer sur Netlify, Vercel, GitHub Pages, etc.

---

## 🌐 Déploiement gratuit en 2 minutes sur Netlify

1. Va sur https://netlify.com et crée un compte (gratuit)
2. Glisse-dépose le dossier `/build` sur la page Netlify
3. Ton portfolio est en ligne avec une URL publique !

---

## 📁 Structure du projet

```
ornella-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.js         ← Tout le contenu et les composants
│   ├── App.css        ← Tout le style (thème rouge)
│   └── index.js       ← Point d'entrée React
├── package.json
└── README.md
```

---

## ✏️ Modifier le contenu

Tout le contenu est centralisé dans l'objet `DATA` au début du fichier `src/App.js`.
Tu peux facilement :
- Changer tes informations de contact
- Ajouter un projet
- Modifier une compétence

---

## 🔧 Technologies utilisées

- React.js 18
- CSS custom properties (variables)
- Google Fonts : Syne + Inter + JetBrains Mono
- Intersection Observer API (animations au scroll)
