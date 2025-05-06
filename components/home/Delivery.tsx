"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Truck, Phone } from 'lucide-react';

export default function Delivery() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fff7ed] via-[#fff] to-[#ffe4e6] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/40">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Services de livraison</h2>
              <p className="text-muted-foreground mb-8">
                Profitez de nos délicieux plats directement chez vous. Notre service de livraison rapide et fiable vous garantit des repas chauds et savoureux.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-primary/10 to-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Zone de livraison</h3>
                    <p className="text-muted-foreground">Argenteuil et ses environs dans un rayon de 5km</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-primary/10 to-pink-500/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Délai de livraison</h3>
                    <p className="text-muted-foreground">30-45 minutes en moyenne</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-primary/10 to-pink-500/10 p-3 rounded-lg">
                    <Truck className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Livraison gratuite</h3>
                    <p className="text-muted-foreground">À partir de 25€ de commande</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-pink-500 hover:from-pink-500 hover:to-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
                >
                  Commander maintenant
                </Link>
                <Link 
                  href="tel:+33123456789"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary border border-primary/20 hover:bg-primary/5 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
                >
                  <Phone size={18} />
                  01 23 45 67 89
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}