"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] sm:h-[600px] rounded-2xl overflow-hidden">
          {/* Image de fond */}
          <Image
            src="/images/8878188_OHummpizza_Hero.jpg"
            alt="Ambiance Diner sur le lac"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay pour assurer la lisibilité */}
          <div className="absolute inset-0 bg-black/80" />

          {/* Contenu */}
          <div className="relative h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl px-6 sm:px-0 sm:ml-8 md:ml-12 text-center sm:text-left"
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 text-white">
                Pizzas faites maison
                <br />
                <span className="text-primary">saveurs vraies</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto sm:mx-0">
                Une pâte artisanale, des ingrédients soigneusement sélectionnés,
                et l'amour du goût dans chaque part.
              </p>
              <Link
                href="/menu"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base sm:text-lg shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl"
              >
                Découvrir le menu
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
