"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SpecialOffers() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Pizzas à votre goût</h2>
                <p className="text-muted-foreground mb-8">
                  Découvrez nos pizzas signatures ou créez la vôtre ! Choisissez parmi nos ingrédients frais et de qualité pour composer la pizza de vos rêves. Que vous préfériez nos créations du chef ou votre propre combinaison, chaque pizza est préparée avec passion.
                </p>
                <Link
                  href="/menu"
                  className="btn-primary inline-flex items-center"
                >
                  Découvrir nos pizzas
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/Pizzas personnalisables.png"
                  alt="Pizzas personnalisables"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/wings-tenders.png"
                  alt="Tenders et Wings"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Pas que des pizzas, promis</h2>
                <p className="text-muted-foreground mb-8">
                  Oui, nos pizzas déchirent. Mais si t'as envie d'autre chose, nos tenders et wings sont là pour te régaler. Bien croustillants, bien assaisonnés ... parfaits pour changer, ou juste pour te faire plaisir. Tenders ou wings ?
                </p>
                <Link
                  href="/menu"
                  className="btn-primary inline-flex items-center"
                >
                  À toi de voir
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
