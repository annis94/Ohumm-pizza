"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg"
              alt="Petit-déjeuner spécial"
              width={600}
              height={400}
              className="rounded-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="red-circle w-32 h-32 -right-8 -top-8" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">petit-déjeuner</h2>
              <p className="text-muted-foreground mb-8">
                Commencez votre journée avec notre sélection de petits-déjeuners gourmands. Des produits frais et de qualité pour un moment délicieux.
              </p>
              <Link 
                href="/menu"
                className="btn-primary inline-flex items-center"
              >
                Commander maintenant
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}