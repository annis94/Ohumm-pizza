"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import OrderSummary from '@/components/checkout/OrderSummary';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Redirect if cart is empty
    if (cart.length === 0) {
      router.push('/menu');
    }
  }, [cart, router]);
  
  if (!isClient) {
    return null; // Avoid hydration errors
  }
  
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Button
        variant="ghost"
        className="mb-8 flex items-center gap-2"
        onClick={() => router.back()}
      >
        <ArrowLeft size={16} />
        Retour
      </Button>
      
      <h1 className="section-title">Finaliser votre commande</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className="order-2 lg:order-1">
          <CheckoutForm />
        </div>
        
        <div className="order-1 lg:order-2">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}