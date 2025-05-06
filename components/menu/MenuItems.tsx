"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, Info, X, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import { MenuItem } from '@/types/menu';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface MenuItemsProps {
  items: MenuItem[];
  isLoading: boolean;
}

const MenuItems = ({ items, isLoading }: MenuItemsProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  
  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast({
      title: "Ajouté au panier",
      description: `${item.name} a été ajouté à votre panier`,
    });
  };

  const handleOrder = () => {
    setShowPhoneModal(true);
  };
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-video bg-muted rounded-lg mb-4" />
            <div className="h-6 bg-muted rounded w-3/4 mb-2" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{item.price.toFixed(2)} €</span>
                <Button
                  onClick={() => setShowPhoneModal(true)}
                  className="bg-primary hover:bg-primary/90"
                >
                  Commander
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Phone Modal */}
      <AnimatePresence>
        {showPhoneModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPhoneModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-lg p-6 max-w-sm w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPhoneModal(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
              <div className="text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Commander par téléphone</h3>
                <p className="text-muted-foreground mb-4">
                  Appelez-nous pour passer votre commande
                </p>
                <a
                  href="tel:+33123456789"
                  className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
                >
                  01 23 45 67 89
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Ou fermez cette fenêtre pour continuer à parcourir le menu
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuItems;