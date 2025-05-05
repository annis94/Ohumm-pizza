"use client";

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface CartProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Cart = ({ isOpen, setIsOpen }: CartProps) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart();
  
  const isEmpty = cart.length === 0;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-card shadow-xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-primary text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                <h2 className="font-bold text-lg">Votre Panier</h2>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <X size={20} />
              </Button>
            </div>
            
            {/* Content */}
            <div className="flex-grow overflow-y-auto p-6">
              {isEmpty ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={64} className="text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Votre panier est vide</h3>
                  <p className="text-muted-foreground mb-6">Ajoutez des pizzas délicieuses pour commencer votre commande</p>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="bg-primary text-primary-foreground"
                  >
                    Explorer le menu
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <ul className="space-y-4">
                    <AnimatePresence initial={false}>
                      {cart.map((item) => (
                        <motion.li
                          key={item.id}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex gap-4 py-2"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          <div className="flex-grow">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-primary font-semibold">
                              {item.price.toFixed(2).replace('.', ',')} €
                            </p>
                            
                            <div className="flex items-center gap-3 mt-2">
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                aria-label="Diminuer la quantité"
                              >
                                <Minus size={16} />
                              </button>
                              
                              <span className="font-medium text-sm w-5 text-center">
                                {item.quantity}
                              </span>
                              
                              <button
                                onClick={() => increaseQuantity(item.id)}
                                className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                                aria-label="Augmenter la quantité"
                              >
                                <Plus size={16} />
                              </button>
                              
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="ml-auto p-1 text-destructive hover:text-destructive/80 transition-colors"
                                aria-label="Supprimer du panier"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Footer */}
            {!isEmpty && (
              <div className="p-6 border-t border-border">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span className="font-medium">{totalPrice.toFixed(2).replace('.', ',')} €</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="font-medium">À calculer</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center font-bold">
                    <span>Total</span>
                    <span className="text-xl text-primary">{totalPrice.toFixed(2).replace('.', ',')} €</span>
                  </div>
                  
                  <Link
                    href="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3 flex justify-center items-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-full font-semibold"
                  >
                    Passer commande
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default Cart;