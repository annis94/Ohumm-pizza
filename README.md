# O'Humm Pizza - Site Web de Commande en Ligne

Ce projet est un site web moderne et réactif pour la pizzeria "O'Humm Pizza". Il permet aux clients de consulter le menu, de découvrir les offres, de lire les avis, de contacter la pizzeria et potentiellement de passer des commandes en ligne (la fonctionnalité de commande actuelle est une maquette front-end).

## Table des Matières

1.  [Fonctionnalités Principales](#fonctionnalités-principales)
2.  [Technologies Utilisées](#technologies-utilisées)
3.  [Structure du Projet](#structure-du-projet)
4.  [Pages Principales (Routes)](#pages-principales-routes)
5.  [Composants Clés](#composants-clés)
6.  [Installation et Lancement](#installation-et-lancement)
7.  [Déploiement](#déploiement)
8.  [Points d'Attention & Améliorations Possibles](#points-dattention--améliorations-possibles)
9.  [Pour le Client](#pour-le-client)

## Fonctionnalités Principales

*   **Page d'Accueil Dynamique (`/`)**: Présentation de la pizzeria, offres spéciales, catégories de produits, informations de livraison et appel à l'action.
*   **Menu Interactif (`/menu`)**:
    *   Affichage des produits par catégories (Pizzas, Pizzas signatures, Calzones, etc.).
    *   Cartes produits détaillées avec image, nom, description et prix.
    *   Possibilité d'ajouter des produits au panier (fonctionnalité de panier simulée ou contextuelle).
*   **Panier d'Achat (via `CartContext` et `components/cart/Cart.tsx`)**:
    *   Affichage des articles ajoutés.
    *   Modification des quantités.
    *   Suppression d'articles.
    *   Calcul du sous-total.
*   **Processus de Commande (`/checkout`)**:
    *   Formulaire de saisie des informations personnelles et de livraison.
    *   Choix du mode de réception (livraison, à emporter).
    *   Choix du mode de paiement (simulé).
    *   Récapitulatif de la commande.
    *   Validation du formulaire avec Zod et React Hook Form.
    *   Redirection si le panier est vide.
*   **Avis Clients (`/avis`)**: Intégration des avis Google via un widget Elfsight.
*   **Page de Contact (`/contact`)**:
    *   Affichage des coordonnées (adresse, téléphone, horaires).
    *   Carte Google Maps intégrée.
    *   (Formulaire de contact présent dans `components/contact/ContactForm.tsx` mais non utilisé sur la page `/contact/page.tsx` directement, pourrait être une future intégration).
*   **Mentions Légales (`/mentions-legales`)**: Page statique avec les informations légales requises.
*   **Design Réactif**: Adapté pour une consultation sur ordinateurs, tablettes et mobiles.
*   **Thème Clair/Sombre**: Support de la thématique grâce à `ThemeProvider`.
*   **Notifications Toast**: Pour les actions utilisateur (ex: confirmation de commande).

## Technologies Utilisées

*   **Framework Frontend**: Next.js 13+ (avec App Router)
*   **Langage**: TypeScript
*   **Styling**: Tailwind CSS
*   **Composants UI**: Shadcn/ui (bibliothèque de composants réutilisables construits avec Radix UI et Tailwind CSS)
*   **Animations**: Framer Motion
*   **Gestion de Formulaires**: React Hook Form
*   **Validation de Schéma**: Zod
*   **Gestion d'État (Panier)**: React Context API (`CartContext`)
*   **Icônes**: Lucide React
*   **Avis Clients**: Intégration Elfsight pour les avis Google
*   **Polices**: Playfair Display, Poppins (via `next/font`)
*   **Déploiement**: Vercel (mentionné dans les mentions légales)

## Structure du Projet


o-humm-pizza/
├── app/ # Pages et routes (Next.js App Router)
│ ├── (nom_page)/page.tsx # Fichier principal de chaque route
│ ├── layout.tsx # Layout principal de l'application
│ └── globals.css # Styles globaux et configuration Tailwind
├── components/ # Composants React réutilisables
│ ├── ui/ # Composants Shadcn/ui (button, card, input, etc.)
│ ├── cart/ # Composants liés au panier (Cart.tsx)
│ ├── checkout/ # Composants pour la page de commande (CheckoutForm.tsx, OrderSummary.tsx)
│ ├── contact/ # Composants pour la page contact (ContactForm.tsx, ContactInfo.tsx, Map.tsx)
│ ├── home/ # Composants spécifiques à la page d'accueil (Hero.tsx, FeaturedMenu.tsx, etc.)
│ ├── layout/ # Composants de structure (Header.tsx, Footer.tsx)
│ ├── menu/ # Composants pour la page menu (MenuCategories.tsx, MenuItems.tsx, etc.)
│ └── reviews/ # Composants pour les avis (AvisGoogle.tsx)
├── context/ # Contexte React (ex: CartContext.tsx)
├── hooks/ # Hooks personnalisés (ex: use-toast.ts)
├── lib/ # Fonctions utilitaires (ex: utils.ts pour cn)
├── public/ # Fichiers statiques (images, logos)
│ ├── images/
│ └── logo/
├── types/ # Définitions TypeScript (ex: menu.ts)
├── .eslintrc.json # Configuration ESLint
├── next.config.js # Configuration Next.js
├── package.json # Dépendances et scripts du projet
├── postcss.config.js # Configuration PostCSS (pour Tailwind)
├── tailwind.config.js # Configuration Tailwind CSS
├── tsconfig.json # Configuration TypeScript
└── README.md # Ce fichier

## Pages Principales (Routes)

*   `/` (`app/page.tsx`): Page d'accueil.
*   `/menu` (`app/menu/page.tsx`): Affiche le menu complet des pizzas et autres produits, avec filtrage par catégories.
*   `/checkout` (`app/checkout/page.tsx`): Page pour finaliser la commande.
*   `/avis` (`app/avis/page.tsx`): Affiche les avis des clients via un widget Google Reviews.
*   `/contact` (`app/contact/page.tsx`): Contient les informations de contact de la pizzeria et une carte.
*   `/mentions-legales` (`app/mentions-legales/page.tsx`): Page des mentions légales.

## Composants Clés

*   **`app/layout.tsx`**: Définit la structure HTML de base, inclut les polices, le `ThemeProvider`, le `CartProvider`, le `Header`, le `Footer` et le `Toaster` pour les notifications.
*   **`components/layout/Header.tsx`**: Barre de navigation principale, responsive, avec gestion du scroll.
*   **`components/layout/Footer.tsx`**: Pied de page avec liens utiles, informations de contact et horaires.
*   **`components/cart/Cart.tsx`**: Panneau latéral affichant le contenu du panier, permettant la modification et la redirection vers le checkout.
*   **`context/CartContext.tsx`**: Fournit l'état global du panier et les fonctions pour le manipuler (ajout, suppression, modification de quantité, calcul du total). Les données du panier sont persistées dans `localStorage`.
*   **`components/checkout/CheckoutForm.tsx`**: Formulaire de commande avec validation Zod et React Hook Form. Simule une soumission de commande.
*   **`components/checkout/OrderSummary.tsx`**: Affiche le récapitulatif des articles de la commande sur la page de checkout.
*   **`components/reviews/AvisGoogle.tsx`**: Intègre le widget Elfsight pour afficher les avis Google.
*   **`components/home/*`**: Divers composants modulaires pour construire la page d'accueil (Hero, HomeOffers, SpecialOffers, Categories, Delivery, FeaturedMenu, CTA).
*   **`components/ui/*`**: Bibliothèque de composants Shadcn/ui utilisés à travers l'application (Button, Card, Input, Dialog, Toast, etc.).

## Installation et Lancement

1.  **Cloner le dépôt** (si applicable) ou décompresser l'archive du projet.
2.  **Naviguer dans le répertoire du projet**:
    ```bash
    cd chemin/vers/pizza-maquette-copie
    ```
3.  **Installer les dépendances**:
    ```bash
    npm install
    # ou
    yarn install
    ```
4.  **Variables d'environnement** (si nécessaire):
    Si des clés API ou des configurations spécifiques sont requises (par exemple pour Elfsight si l'ID du widget doit être configurable), créer un fichier `.env.local` à la racine du projet et y ajouter les variables nécessaires.
    Exemple:
    ```env
    NEXT_PUBLIC_ELFSIGHT_WIDGET_ID=d5d9de0a-d7b2-40dd-bbb9-46ef97ce01e4
    ```
    (Actuellement, l'ID du widget Elfsight est codé en dur dans `AvisGoogle.tsx`).
5.  **Lancer le serveur de développement**:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
    L'application sera accessible à l'adresse `http://localhost:3000`.

## Déploiement

Le site est configuré pour être déployé sur des plateformes comme **Vercel** (mentionné dans les mentions légales comme hébergeur), qui offre une intégration native avec Next.js.

## Points d'Attention & Améliorations Possibles

*   **Données du Menu**: Les données des pizzas dans `app/menu/page.tsx` sont actuellement statiques (codées en dur). Pour une application réelle, elles proviendraient d'une base de données ou d'un CMS via une API.
*   **Logique de Commande**: Le `CheckoutForm.tsx` simule un appel API (`await new Promise((resolve) => setTimeout(resolve, 2000))`). Une intégration avec un backend réel et une passerelle de paiement serait nécessaire pour des commandes fonctionnelles.
*   **Gestion des Erreurs**: Améliorer la gestion des erreurs pour les appels API simulés ou futurs appels réels.
*   **Tests**: Ajouter des tests unitaires et d'intégration.
*   **Optimisation des Images**: Bien que `next/image` soit utilisé, s'assurer que toutes les images sont optimisées pour le web. Les images actuelles semblent provenir d'un dossier `public/images/`.
*   **Internationalisation (i18n)**: Si la pizzeria sert une clientèle multilingue.
*   **Accessibilité (a11y)**: Vérifier et améliorer l'accessibilité pour tous les utilisateurs.
*   **Backend/CMS**: Pour une gestion dynamique du contenu (menu, offres, etc.), un backend ou un CMS serait nécessaire.
*   **Authentification Utilisateur**: Pour suivre l'historique des commandes, sauvegarder les adresses, etc.
*   **Suivi de Commande en Temps Réel**: Une fonctionnalité avancée pour les clients.

## Pour le Client

Ce README fournit une vue d'ensemble technique du projet "O'Humm Pizza". Il détaille les fonctionnalités implémentées, les technologies utilisées et la structure du code.

Le site est conçu pour être facilement maintenable et extensible. Les composants sont modulaires, et l'utilisation de Tailwind CSS et Shadcn/ui permet une personnalisation aisée de l'apparence.

Les données actuelles du menu et le processus de commande sont des maquettes fonctionnelles. Pour une mise en production complète avec prise de commandes réelles, des développements backend supplémentaires seront nécessaires.

N'hésitez pas à nous contacter pour toute question, demande de modification ou discussion sur les prochaines étapes de développement.
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END
