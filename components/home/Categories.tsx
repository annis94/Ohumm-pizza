"use client";

import { motion } from 'framer-motion';
import { Pizza, Clock, Truck, Utensils, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    icon: Pizza,
    title: "Pizzas Artisanales",
    description: "Préparées avec des ingrédients frais et une pâte maison"
  },
  {
    id: 2,
    icon: Clock,
    title: "Service Rapide",
    description: "Livraison en 30 minutes ou moins dans un rayon de 5km"
  },
  {
    id: 3,
    icon: Truck,
    title: "Livraison Gratuite",
    description: "À partir de 25€ de commande dans un rayon de 3km"
  },
  {
    id: 4,
    icon: Utensils,
    title: "À Emporter",
    description: "Commandez et récupérez votre repas en quelques minutes"
  },
  {
    id: 5,
    icon: Phone,
    title: "Commande Facile",
    description: "Par téléphone ou en ligne, paiement sécurisé"
  },
  {
    id: 6,
    icon: MapPin,
    title: "Zone de Livraison",
    description: "Argenteuil et ses environs, vérifiez votre adresse"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Nos Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Découvrez tous les services que nous proposons pour vous offrir la meilleure expérience possible
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/10 p-6 rounded-xl hover:bg-card/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <service.icon className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Pizzas à votre goût</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Découvrez nos pizzas signatures ou créez la vôtre ! Choisissez parmi nos ingrédients frais et de qualité pour composer la pizza de vos rêves. Que vous préfériez nos créations du chef ou votre propre combinaison, chaque pizza est préparée avec passion.
          </p>
          <Link
            href="/menu"
            className="btn-primary inline-flex items-center bg-gradient-to-r from-primary to-pink-500 hover:from-pink-500 hover:to-primary"
          >
            Découvrir nos pizzas
          </Link>
        </div>
      </div>
    </section>
  );
}