"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Delivery() {
  return (
    <section className="delivery-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="red-circle w-32 h-32 -left-8 -top-8" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Services de livraison</h2>
              <p className="text-muted-foreground mb-8">
                Profitez de nos délicieux plats directement chez vous. Notre service de livraison rapide et fiable vous garantit des repas chauds et savoureux.
              </p>
              <Link 
                href="/contact"
                className="btn-primary inline-flex items-center"
              >
                Commander maintenant
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
              alt="Service de livraison"
              width={600}
              height={400}
              className="rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}