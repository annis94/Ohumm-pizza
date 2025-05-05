"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import { MenuItem } from '@/types/menu';

interface MenuItemsProps {
  items: MenuItem[];
  isLoading: boolean;
}

const MenuItems = ({ items, isLoading }: MenuItemsProps) => {
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  
  const handleAddToCart = (item: MenuItem) => {
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
    <div>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="menu-item animate-pulse"
              >
                <div className="h-48 bg-muted rounded-xl mb-4"></div>
                <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-muted rounded w-full mb-2"></div>
                <div className="h-4 bg-muted rounded w-full mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-muted rounded w-16"></div>
                  <div className="h-10 bg-muted rounded-full w-10"></div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="menu-item group"
              >
                <div className="relative h-80 mb-4 overflow-hidden rounded-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="bg-card/90 hover:bg-card rounded-full p-2 text-foreground transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      aria-label={`Voir les détails de ${item.name}`}
                    >
                      <Info size={20} />
                    </button>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-primary rounded-full p-2 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      aria-label={`Ajouter ${item.name} au panier`}
                    >
                      <PlusCircle size={20} />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-bold text-primary">{item.price.toFixed(2).replace('.', ',')} €</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="md:hidden text-primary hover:text-primary/80"
                    aria-label={`Ajouter ${item.name} au panier`}
                  >
                    <PlusCircle size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Item Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-card max-w-lg w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{selectedItem.name}</h3>
              <p className="text-muted-foreground mb-4">{selectedItem.description}</p>
              
              {selectedItem.ingredients && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Ingrédients :</h4>
                  <p className="text-muted-foreground">{selectedItem.ingredients.join(', ')}</p>
                </div>
              )}
              
              <div className="flex justify-between items-center mt-6">
                <span className="text-xl font-bold text-primary">{selectedItem.price.toFixed(2).replace('.', ',')} €</span>
                <button
                  onClick={() => {
                    handleAddToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="btn-pizza py-2 px-4"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MenuItems;