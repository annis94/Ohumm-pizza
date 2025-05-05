"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Pizza, Phone, Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Cart from '@/components/cart/Cart';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Avis', path: '/avis' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Pizza className="h-8 w-8 text-primary" />
          <span className="font-playfair font-bold text-xl md:text-2xl">O'HUMM PIZZA</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "font-medium text-lg transition-colors hover:text-primary",
                isActive(link.path) ? "text-primary font-semibold" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link href="tel:+33123456789" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Phone size={18} />
            <span className="font-medium">01 23 45 67 89</span>
          </Link>
          
          <Button
            onClick={() => setCartOpen(true)}
            variant="outline"
            className="relative"
            aria-label="Voir le panier"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </Button>
          
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "py-2 font-medium transition-colors",
                    isActive(link.path) ? "text-primary font-semibold" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="tel:+33123456789" className="py-2 flex items-center gap-2 text-foreground">
                <Phone size={18} />
                <span>01 23 45 67 89</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cart Sidebar */}
      <Cart isOpen={cartOpen} setIsOpen={setCartOpen} />
    </header>
  );
};

export default Header;