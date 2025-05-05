import { MenuItem } from '@/types/menu';

export const menuData: MenuItem[] = [
  // Formules
  {
    id: 'formule-1',
    name: 'Formule 4 pizzas sénior',
    description: 'Économisez jusqu\'à 20% sur l\'achat de 4 pizzas taille senior',
    price: 42.00,
    image: 'https://images.pexels.com/photos/5902891/pexels-photo-5902891.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Formules',
  },
  
  // Menus enfants
  {
    id: 'menu-enfant-1',
    name: 'Menu enfant',
    description: 'Marguerita junior + 1 ingrédient au choix, Capri-sun 25 cl et Kinder surprise',
    price: 8.50,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Menus enfants',
  },
  
  // Pizzas classiques
  {
    id: 'pizza-1',
    name: 'La française',
    description: 'Sauce tomate, fromage, champignons, jambon.',
    price: 11.50,
    image: 'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas',
    ingredients: ['Sauce tomate', 'Fromage', 'Champignons', 'Jambon'],
  },
  {
    id: 'pizza-2',
    name: 'Marguerita',
    description: 'Sauce tomate, double fromage.',
    price: 10.00,
    image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas',
    ingredients: ['Sauce tomate', 'Double fromage'],
  },
  {
    id: 'pizza-3',
    name: 'Campione',
    description: 'Sauce tomate, fromage, viande hachée, champignons, œufs.',
    price: 10.50,
    image: 'https://images.pexels.com/photos/13985159/pexels-photo-13985159.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas',
    ingredients: ['Sauce tomate', 'Fromage', 'Viande hachée', 'Champignons', 'Œufs'],
  },
  {
    id: 'pizza-4',
    name: 'Orientale',
    description: 'Sauce tomate, fromage, merguez, poivron, œuf.',
    price: 10.50,
    image: 'https://images.pexels.com/photos/16115909/pexels-photo-16115909/free-photo-of-repas-plat-culinaire-italien.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas',
    ingredients: ['Sauce tomate', 'Fromage', 'Merguez', 'Poivron', 'Œuf'],
  },
  {
    id: 'pizza-5',
    name: '4 fromages',
    description: 'Sauce tomate, chèvre, Bleu, parmesan et emmental, olives.',
    price: 11.50,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas',
    ingredients: ['Sauce tomate', 'Chèvre', 'Bleu', 'Parmesan', 'Emmental', 'Olives'],
  },
  {
    id: 'pizza-6',
    name: 'Chèvre miel',
    description: 'Sauce crème fraîche, fromage, double chèvre, miel.',
    price: 10.50,
    image: 'https://images.pexels.com/photos/13985154/pexels-photo-13985154.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas',
    ingredients: ['Sauce crème fraîche', 'Fromage', 'Double chèvre', 'Miel'],
  },
  
  // Pizzas signatures
  {
    id: 'signature-1',
    name: 'Fruits de mer',
    description: 'Sauce tomate, fromage, fruits de mer, persillade maison.',
    price: 11.30,
    image: 'https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas signatures',
    ingredients: ['Sauce tomate', 'Fromage', 'Fruits de mer', 'Persillade maison'],
  },
  {
    id: 'signature-2',
    name: 'Big burger',
    description: 'Sauce crème fraîche, sauce burger, fromage, jambon, viande hachée, cornichons, véritable cheddar.',
    price: 12.30,
    image: 'https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas signatures',
    ingredients: ['Sauce crème fraîche', 'Sauce burger', 'Fromage', 'Jambon', 'Viande hachée', 'Cornichons', 'Cheddar'],
  },
  {
    id: 'signature-3',
    name: 'Humm pizza',
    description: 'Sauce crème fraîche, viande hachée, poulet rôti, pepperoni, lardons.',
    price: 12.30,
    image: 'https://images.pexels.com/photos/845802/pexels-photo-845802.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas signatures',
    ingredients: ['Sauce crème fraîche', 'Viande hachée', 'Poulet rôti', 'Pepperoni', 'Lardons'],
  },
  {
    id: 'signature-4',
    name: 'Norvégienne',
    description: 'Sauce crème fraîche, fromage, saumon, aneth, rondelles de citrons.',
    price: 11.80,
    image: 'https://images.pexels.com/photos/4197447/pexels-photo-4197447.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pizzas signatures',
    ingredients: ['Sauce crème fraîche', 'Fromage', 'Saumon', 'Aneth', 'Rondelles de citrons'],
  },
  
  // Calzones
  {
    id: 'calzone-1',
    name: 'Calzone Jambon',
    description: 'Jambon, fromage, champignons.',
    price: 9.50,
    image: 'https://images.pexels.com/photos/9289638/pexels-photo-9289638.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Calzones',
    ingredients: ['Jambon', 'Fromage', 'Champignons'],
  },
  {
    id: 'calzone-2',
    name: 'Calzone Poulet rôti',
    description: 'Poulet rôti, fromage, pommes de terre, oignons.',
    price: 9.50,
    image: 'https://images.pexels.com/photos/7363068/pexels-photo-7363068.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Calzones',
    ingredients: ['Poulet rôti', 'Fromage', 'Pommes de terre', 'Oignons'],
  },
  
  // Tex Mex
  {
    id: 'texmex-1',
    name: 'Wings',
    description: 'Ailes de poulet marinées et épicées.',
    price: 7.50,
    image: 'https://images.pexels.com/photos/14706125/pexels-photo-14706125.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Tex mex',
  },
  {
    id: 'texmex-2',
    name: 'Tenders',
    description: 'Filets de poulet panés et croustillants.',
    price: 7.50,
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Tex mex',
  },
  
  // Desserts
  {
    id: 'dessert-1',
    name: 'Tiramisu',
    description: 'Dessert italien classique au mascarpone et café.',
    price: 3.50,
    image: 'https://images.pexels.com/photos/6133305/pexels-photo-6133305.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Desserts',
  },
  {
    id: 'dessert-2',
    name: 'Tarte au Daim',
    description: 'Tarte sucrée garnie de morceaux de chocolat Daim.',
    price: 3.50,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Desserts',
  },
  
  // Boissons
  {
    id: 'boisson-1',
    name: 'Oasis tropical',
    description: 'Boisson fruitée saveur tropical.',
    price: 1.80,
    image: 'https://images.pexels.com/photos/9370387/pexels-photo-9370387.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Boissons',
  },
  {
    id: 'boisson-2',
    name: 'Ice Tea 1,5 L',
    description: 'Thé glacé au goût de pêche.',
    price: 3.50,
    image: 'https://images.pexels.com/photos/2101150/pexels-photo-2101150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Boissons',
  },
];