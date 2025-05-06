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
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.1234567890123!2d2.2475!3d48.9475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665e5c0c5c0c5%3A0x1234567890abcdef!2sO%27Humm%20Pizza!5e0!3m2!1sfr!2sfr!4v1234567890!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}