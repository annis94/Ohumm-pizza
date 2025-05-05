"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const OrderSummary = () => {
  const { cart, removeFromCart, totalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(true);
  
  const deliveryFee = 2.90;
  const finalTotal = totalPrice + deliveryFee;
  
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Résumé de commande</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </Button>
        </div>
        
        <div className={`mt-6 space-y-4 ${isOpen ? 'block' : 'hidden lg:block'}`}>
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Quantité: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {(item.price * item.quantity).toFixed(2).replace('.', ',')} €
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-destructive hover:text-destructive/80 transition-colors flex items-center gap-1 mt-1"
                    >
                      <Trash2 size={14} />
                      Retirer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <Separator className="my-6" />
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sous-total</span>
              <span>{totalPrice.toFixed(2).replace('.', ',')} €</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Frais de livraison</span>
              <span>{deliveryFee.toFixed(2).replace('.', ',')} €</span>
            </div>
            
            <Separator className="my-3" />
            
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-primary text-xl">
                {finalTotal.toFixed(2).replace('.', ',')} €
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;