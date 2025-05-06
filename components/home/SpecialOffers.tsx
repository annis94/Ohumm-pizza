"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SpecialOffers() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative z-10 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Pizzas à votre goût</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
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
          <div className="relative">
            {/* Design asymétrique avec image et texte */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image principale avec effet de profondeur */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 relative"
              >
                <div className="relative h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/wings-tenders.png"
                    alt="Tenders et Wings"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Élément décoratif */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                </div>
              </motion.div>

              {/* Contenu avec style unique */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    Pas que des pizzas,
                    <span className="block text-primary mt-2">promis</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Oui, nos pizzas déchirent. Mais si t'as envie d'autre chose, nos tenders et wings sont là pour te régaler. Bien croustillants, bien assaisonnés ... parfaits pour changer, ou juste pour te faire plaisir.
                  </p>
                  <Link
                    href="/menu"
                    className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:translate-y-[-2px]"
                  >
                    À toi de voir
                  </Link>
                </div>
                {/* Élément décoratif */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
