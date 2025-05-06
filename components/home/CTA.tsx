"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-pink-500">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white translate-x-[-30%] translate-y-[-50%]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white translate-x-[30%] translate-y-[50%]" />
          </div>
          
          <div className="relative z-10 px-6 py-16 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Envie d'une délicieuse pizza ?
            </h2>
            
            <p className="text-white/80 md:text-lg max-w-2xl mx-auto mb-10">
              Commandez en ligne ou contactez-nous par téléphone pour savourer nos pizzas artisanales, livrées chaudes à votre porte ou à emporter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="btn-pizza bg-white text-primary hover:bg-white/90 flex items-center justify-center gap-2 group"
              >
                Commander en ligne
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="tel:+33123456789"
                className="btn-pizza bg-secondary text-secondary-foreground hover:bg-secondary/90 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                01 23 45 67 89
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;