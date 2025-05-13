# O'Humm Pizza - Site Web de Pizzeria (Next.js & TypeScript)

Ce projet est une application web moderne et responsive pour la pizzeria "O'Humm Pizza", développée avec Next.js (App Router), TypeScript, et Tailwind CSS. Elle permet aux utilisateurs de consulter le menu, de voir les avis clients, de contacter l'établissement et simule un processus de commande en ligne.


## Table des Matières

1.  [Fonctionnalités Clés](#fonctionnalités-clés)
2.  [Stack Technique](#stack-technique)
3.  [Structure du Projet](#structure-du-projet)
4.  [Pages Principales (Routes)](#pages-principales-routes)
5.  [Composants Notables](#composants-notables)
6.  [Prérequis](#prérequis)
7.  [Installation](#installation)
8.  [Lancement du Projet](#lancement-du-projet)
9.  [Variables d'Environnement](#variables-denvironnement)
10. [Déploiement](#déploiement)
11. [Limitations Actuelles & Améliorations Possibles](#limitations-actuelles--améliorations-possibles)

## Fonctionnalités Clés

*   **Page d'Accueil Dynamique (`/`)**: Présentation de la pizzeria, offres spéciales, catégories de produits, informations de livraison et CTA.
*   **Menu Interactif (`/menu`)**:
    *   Filtrage des produits par catégories.
    *   Affichage détaillé des produits (image, nom, description, prix).
    *   Simulation d'ajout au panier.
*   **Panier d'Achat (via `CartContext`)**:
    *   Affichage des articles ajoutés dans un panneau latéral.
    *   Modification des quantités et suppression d'articles.
    *   Calcul dynamique du sous-total.
    *   Persistance du panier dans `localStorage`.
*   **Processus de Commande Simulé (`/checkout`)**:
    *   Formulaire pour les informations personnelles et de livraison.
    *   Choix du mode de réception (livraison / à emporter).
    *   Choix du mode de paiement (maquetté).
    *   Récapitulatif de la commande.
    *   Validation des champs avec Zod et React Hook Form.
    *   Redirection si le panier est vide.
*   **Avis Clients (`/avis`)**: Intégration d'un widget Elfsight pour les avis Google.
*   **Page de Contact (`/contact`)**:
    *   Coordonnées (adresse, téléphone, horaires).
    *   Carte Google Maps intégrée.
*   **Mentions Légales (`/mentions-legales`)**: Page statique.
*   **Design Responsive**: Adaptabilité sur desktop, tablette et mobile.
*   **Thème Clair/Sombre**: Supporté via `ThemeProvider` (next-themes).
*   **Notifications Toast**: Pour les confirmations d'actions (ex: commande simulée).

## Stack Technique

*   **Framework**: Next.js 13+ (App Router)
*   **Langage**: TypeScript
*   **Styling**: Tailwind CSS
*   **Composants UI**: Shadcn/ui (basé sur Radix UI & Tailwind CSS)
*   **Animations**: Framer Motion
*   **Gestion de Formulaires**: React Hook Form
*   **Validation de Schéma**: Zod
*   **Gestion d'État (Panier)**: React Context API
*   **Icônes**: Lucide React
*   **Polices**: Playfair Display, Poppins (via `next/font`)
*   **Linting/Formatting**: ESLint, Prettier (implicite avec la stack Shadcn/ui)

## Structure du Projet


o-humm-pizza/
├── app/ # Routes et layouts (Next.js App Router)
│ ├── (nom_page)/page.tsx # Fichier principal de chaque route
│ ├── layout.tsx # Layout racine de l'application
│ └── globals.css # Styles globaux et directives Tailwind
├── components/ # Composants React réutilisables
│ ├── ui/ # Composants Shadcn/ui (Button, Card, etc.)
│ ├── cart/ # Composants relatifs au panier
│ ├── checkout/ # Composants pour la page de paiement
│ ├── contact/ # Composants pour la page de contact
│ ├── home/ # Composants spécifiques à la page d'accueil
│ ├── layout/ # Header, Footer
│ ├── menu/ # Composants pour la page du menu
│ └── reviews/ # Composants pour les avis
├── context/ # Contexte React (CartContext.tsx)
├── hooks/ # Hooks personnalisés (use-toast.ts)
├── lib/ # Fonctions utilitaires (utils.ts pour cn)
├── public/ # Fichiers statiques (images, logos)
├── types/ # Définitions TypeScript (menu.ts)
├── .env.local.example # Exemple de fichier pour les variables d'environnement
├── next.config.js # Configuration Next.js
├── package.json # Dépendances et scripts
├── tailwind.config.js # Configuration Tailwind CSS
└── tsconfig.json # Configuration TypeScript

## Pages Principales (Routes)

*   `/` (`app/page.tsx`): Page d'accueil.
*   `/menu` (`app/menu/page.tsx`): Catalogue des produits.
*   `/checkout` (`app/checkout/page.tsx`): Page de finalisation de commande.
*   `/avis` (`app/avis/page.tsx`): Page des avis clients.
*   `/contact` (`app/contact/page.tsx`): Informations de contact.
*   `/mentions-legales` (`app/mentions-legales/page.tsx`): Mentions légales.

## Composants Notables

*   **`app/layout.tsx`**: Structure de base incluant `ThemeProvider`, `CartProvider`, `Header`, `Footer`, `Toaster`.
*   **`components/cart/Cart.tsx`**: Panneau latéral du panier avec gestion des articles.
*   **`context/CartContext.tsx`**: Logique centrale du panier d'achat avec persistance `localStorage`.
*   **`components/checkout/CheckoutForm.tsx`**: Formulaire de commande avec validation client-side.
*   **`components/reviews/AvisGoogle.tsx`**: Intégration du script Elfsight.
*   **Shadcn/ui components (`components/ui/*`)**: Utilisation extensive pour une UI cohérente et accessible.

## Prérequis

*   Node.js (version 18.x ou supérieure recommandée)
*   npm ou yarn

## Installation

1.  Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-nom-utilisateur/o-humm-pizza.git
    cd o-humm-pizza
    ```
2.  Installez les dépendances :
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  (Optionnel) Copiez le fichier d'exemple pour les variables d'environnement :
    ```bash
    cp .env.local.example .env.local
    ```
    Modifiez `.env.local` si nécessaire (actuellement, pas de variables critiques pour le fonctionnement de base).

## Lancement du Projet

Pour démarrer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END

Ouvrez http://localhost:3000 dans votre navigateur.

Variables d'Environnement

Actuellement, l'ID du widget Elfsight est codé en dur dans components/reviews/AvisGoogle.tsx. Si vous souhaitez le rendre configurable :

Ajoutez dans .env.local:

NEXT_PUBLIC_ELFSIGHT_WIDGET_ID=votre_id_widget_elfsight
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Env
IGNORE_WHEN_COPYING_END

Modifiez AvisGoogle.tsx pour utiliser process.env.NEXT_PUBLIC_ELFSIGHT_WIDGET_ID.

Déploiement

Ce projet est optimisé pour un déploiement sur des plateformes comme Vercel, qui s'intègrent nativement avec Next.js.



