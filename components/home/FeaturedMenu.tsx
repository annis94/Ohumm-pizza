"use client";

import { CirclePlus } from "lucide-react";

const pizzas = [
  {
    id: 1,
    name: "4 Fromages",
    description: "Sauce tomate, chèvre, bleu, parmesan et emmental, olives.",
    price: "11,50 €",
    image: "/images/8878188_OHummpizza_Food_PizzaSupremeBoursin.jpg",
    category: "Pizzas",
  },
  {
    id: 2,
    name: "Big Burger",
    description: "Sauce crème fraîche, sauce burger, fromage, jambon, viande hachée, cornichons, véritable cheddar.",
    price: "12,30 €",
    image: "/images/8878188_OHummpizza_Food_PizzaCanibale.jpg",
    category: "Pizzas signatures",
  },
  {
    id: 3,
    name: "Chèvre Miel",
    description: "Sauce crème fraîche, fromage, double chèvre, miel.",
    price: "10,50 €",
    image: "/images/8878188_OHummpizza_Food_PizzaChevreMiel.jpg",
    category: "Pizzas",
  },
  {
    id: 4,
    name: "Norvégienne",
    description: "Sauce crème fraîche, fromage, saumon, aneth, rondelles de citrons.",
    price: "11,80 €",
    image: "/images/8878188_OHummpizza_Food_PizzaFermiere.jpg",
    category: "Pizzas signatures",
  },
];

export default function FeaturedMenu() {
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
          Nos Pizzas Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="menu-item group">
              <div className="relative h-52 mb-4 overflow-hidden rounded-xl">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-primary to-pink-500 rounded-full p-2 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label={`Ajouter ${pizza.name} au panier`}
                >
                  <CirclePlus className="w-6 h-6" />
                </button>
              </div>
              <h3 className="text-lg font-bold mb-1">{pizza.name}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {pizza.description}
              </p>
              <div className="mt-auto flex justify-between items-center">
                <span className="font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                  {pizza.price}
                </span>
                <span className="text-xs uppercase font-medium text-muted-foreground">
                  {pizza.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}