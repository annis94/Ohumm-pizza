"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MenuItem } from '@/types/menu';

interface MenuItemsProps {
  items: MenuItem[];
  category: string;
  isLoading: boolean;
}

export default function MenuItems({ items, category, isLoading }: MenuItemsProps) {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-card rounded-xl p-6 animate-pulse">
            <div className="w-full h-48 bg-muted rounded-lg mb-4" />
            <div className="h-6 bg-muted rounded w-3/4 mb-2" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Aucun élément trouvé dans cette catégorie.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-xl overflow-hidden"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{item.price}€</span>
                <Button
                  onClick={() => setShowPhoneModal(true)}
                  className="btn-primary"
                >
                  Commander
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showPhoneModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-8 rounded-xl max-w-md w-full mx-4">
            <div className="text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Commander par téléphone</h3>
              <a 
                href="tel:0123456789" 
                className="text-2xl font-bold text-primary hover:underline block mb-4"
              >
                01 23 45 67 89
              </a>
              <p className="text-muted-foreground mb-6">
                Appelez-nous pour passer votre commande. Nous sommes à votre disposition pour vous conseiller.
              </p>
              <Button
                onClick={() => setShowPhoneModal(false)}
                variant="outline"
                className="w-full"
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}