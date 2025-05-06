"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SpecialOffers() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/wings-tenders.png"
              alt="Tenders et Wings"
              width={650}
              height={150}
              className="rounded-3xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Pas que des pizzas, promis
              </h2>
              <p className="text-muted-foreground mb-8">
                Oui, nos pizzas déchirent. Mais si t'as envie d'autre chose, nos
                tenders et wings sont là pour te régaler. Bien croustillants,
                bien assaisonnés ... parfaits pour changer, ou juste pour te
                faire plaisir. Tenders ou wings ?
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
  );
}
