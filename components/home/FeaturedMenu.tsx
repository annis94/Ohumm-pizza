"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';

// Featured items from the menu
const featuredItems = [
  {
    id: 'pizza-1',
    name: "4 Fromages",
    description: "Sauce tomate, chèvre, bleu, parmesan et emmental, olives.",
    price: 11.50,
    image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Pizzas",
  },
  {
    id: 'pizza-2',
    name: "Big Burger",
    description: "Sauce crème fraîche, sauce burger, fromage, jambon, viande hachée, cornichons, véritable cheddar.",
    price: 12.30,
    image: "https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Pizzas signatures",
  },
  {
    id: 'pizza-3',
    name: "Chèvre Miel",
    description: "Sauce crème fraîche, fromage, double chèvre, miel.",
    price: 10.50,
    image: "https://images.pexels.com/photos/13985154/pexels-photo-13985154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Pizzas",
  },
  {
    id: 'pizza-4',
    name: "Norvégienne",
    description: "Sauce crème fraîche, fromage, saumon, aneth, rondelles de citrons.",
    price: 11.80,
    image: "https://images.pexels.com/photos/4197447/pexels-photo-4197447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Pizzas signatures",
  },
];

const FeaturedMenu = () => {
  const { addToCart } = useCart();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  const handleAddToCart = (item: typeof featuredItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    });
    
    toast({
      title: "Ajouté au panier",
      description: `${item.name} a été ajouté à votre panier`,
      duration: 3000,
    });
  };
  
  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, y }}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos pizzas favorites</h2>
          <p className="section-subtitle">
            Découvrez notre sélection de pizzas préférées par nos clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="menu-item group"
            >
              <div className="relative h-52 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button
                  onClick={() => handleAddToCart(item)}
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-primary to-pink-500 rounded-full p-2 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label={`Ajouter ${item.name} au panier`}
                >
                  <PlusCircle size={24} />
                </button>
              </div>
              
              <h3 className="text-lg font-bold mb-1">{item.name}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
              <div className="mt-auto flex justify-between items-center">
                <span className="font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">{item.price.toFixed(2).replace('.', ',')} €</span>
                <span className="text-xs uppercase font-medium text-muted-foreground">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="btn-pizza inline-block"
          >
            Voir tout notre menu
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedMenu;