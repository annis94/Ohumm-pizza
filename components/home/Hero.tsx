"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Pizzas faites maison<br />
              <span className="text-primary">saveurs vraies</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Une pâte artisanale, des ingrédients soigneusement sélectionnés, et l'amour du goût dans chaque part.
            </p>
            <Link 
              href="/menu"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:bg-primary/90 transition"
            >
              Découvrir le menu
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="red-circle w-72 h-72 -right-12 -top-12" />
            <div className="relative z-10 rounded-full overflow-hidden aspect-square">
              <Image
                src="/images/8878188_OHummpizza_Hero.jpg"
                alt="Ambiance Diner sur le lac"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}