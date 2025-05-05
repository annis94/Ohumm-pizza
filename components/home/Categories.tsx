"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { id: 1, name: "Répertoire", link: "/menu" },
  { id: 2, name: "Dîner après", link: "/menu" },
  { id: 3, name: "Menu à la carte", link: "/menu" },
  { id: 4, name: "Spécial du chef", link: "/menu" },
  { id: 5, name: "Pizza & Pizza", link: "/menu" },
  { id: 6, name: "Pasta", link: "/menu" },
];

export default function Categories() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.link}>
                <div className="category-card">
                  <span className="text-2xl font-bold block mb-2">0{category.id}</span>
                  <h3 className="text-xl font-medium">{category.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}