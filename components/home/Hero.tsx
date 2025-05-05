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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Diner<br />
              <span className="text-primary">Sur le lac</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Délicieuse nourriture pour votre table avec une ambiance inoubliable. Savourez nos plats préparés avec passion et des ingrédients de qualité.
            </p>
            <Link 
              href="/menu"
              className="btn-primary inline-flex items-center"
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
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
                alt="Chef cuisinier"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto px-4 mt-12">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Image
              src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg`}
              alt={`Plat ${i}`}
              width={300}
              height={300}
              className="rounded-3xl w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}