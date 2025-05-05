import { Review } from '@/types/review';

export const reviewsData: Review[] = [
  {
    name: 'Thomas Renaud',
    date: '2 juin 2023',
    rating: 5,
    comment: 'Les meilleures pizzas d\'Argenteuil ! La pâte est parfaite et les ingrédients sont toujours frais. Je recommande particulièrement la 4 fromages et la Big Burger.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    reply: 'Merci beaucoup pour votre avis Thomas ! Nous sommes ravis que nos pizzas vous plaisent et espérons vous revoir bientôt.',
    replyDate: '3 juin 2023',
  },
  {
    name: 'Sophie Martin',
    date: '15 mai 2023',
    rating: 4,
    comment: 'Très bonnes pizzas, livraison rapide. La Chèvre Miel est un délice ! Seul petit bémol, la pizza était un peu moins chaude que d\'habitude.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Antoine Dubois',
    date: '28 avril 2023',
    rating: 5,
    comment: 'Service impeccable et pizzas délicieuses. Les wings sont également excellents. Rapport qualité/prix au top !',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Julie Lefebvre',
    date: '10 avril 2023',
    rating: 3,
    comment: 'Pizzas correctes mais j\'ai trouvé que la pâte manquait un peu de cuisson. La livraison était rapide cependant, et le livreur très sympathique.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    reply: 'Merci pour votre retour Julie. Nous sommes désolés que la cuisson n\'ait pas été à votre goût. N\'hésitez pas à nous préciser vos préférences lors de votre prochaine commande !',
    replyDate: '12 avril 2023',
  },
  {
    name: 'Lucas Bernard',
    date: '25 mars 2023',
    rating: 5,
    comment: 'Fan de la Norvégienne ! Les ingrédients sont frais et l\'aneth apporte une touche originale. Je recommande vivement !',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Camille Petit',
    date: '18 mars 2023',
    rating: 4,
    comment: 'J\'adore les calzones, ils sont bien garnis et délicieux. Le tiramisu en dessert est également très bon. Petite suggestion : proposer plus d\'options végétariennes ?',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    reply: 'Merci Camille pour votre suggestion ! Nous travaillons justement sur de nouvelles recettes végétariennes qui devraient arriver prochainement sur notre carte.',
    replyDate: '19 mars 2023',
  }
];