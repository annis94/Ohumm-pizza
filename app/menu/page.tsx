"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";

// Catégories et données de test
const categories = [
  "Pizzas",
  "Pizzas signatures",
  "Calzones",
  "Menus enfants",
  "Tex mex",
  "Desserts",
  "Boissons",
];

const pizzas = [
  {
    id: 1,
    name: "Campione",
    description: "Sauce tomate, fromage, viande hachée, champignons, œufs.",
    price: "10.5€",
    image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&w=400",
    category: "Pizzas",
    badge: "Best-seller",
  },
  {
    id: 2,
    name: "4 Fromages",
    description: "Sauce tomate, chèvre, bleu, parmesan, emmental, olives.",
    price: "11.5€",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&w=400",
    category: "Pizzas",
    badge: "Végétarienne",
  },
  {
    id: 3,
    name: "Big Burger",
    description: "Sauce crème, sauce burger, fromage, jambon, viande hachée, cheddar.",
    price: "12.3€",
    image: "https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&w=400",
    category: "Pizzas signatures",
    badge: "Signature",
  },
  // ...ajoute d'autres pizzas si tu veux
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filtrage par catégorie
  const filteredPizzas = pizzas.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen w-full py-12 md:py-20 px-2 bg-gradient-to-br from-[#fff7ed] via-[#fff] to-[#ffe4e6]">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Notre Menu
        </h1>
        <p className="text-muted-foreground text-lg">
          Découvrez nos pizzas artisanales, calzones, menus enfants, tex mex, desserts et boissons.
        </p>
      </div>

      {/* Catégories */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-10 max-w-3xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold border-2 transition-all whitespace-nowrap
              ${selectedCategory === cat
                ? "bg-gradient-to-r from-primary to-pink-500 text-white border-primary shadow-lg scale-105"
                : "bg-white/80 text-primary border-primary/30 hover:bg-primary/10"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de pizzas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filteredPizzas.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-12">
            Aucun élément trouvé dans cette catégorie.
          </div>
        )}
        {filteredPizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="relative group bg-white/80 rounded-3xl shadow-2xl overflow-visible p-0 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-pink-200 hover:ring-2 hover:ring-primary/30"
          >
            {/* Badge angle */}
            {pizza.badge && (
              <div className="absolute -top-3 -left-3 z-20 bg-gradient-to-r from-primary to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-[-12deg]">
                {pizza.badge}
              </div>
            )}
            {/* Image pop-out */}
            <div className="relative w-32 h-32 -mt-10 z-10 drop-shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
              <img
                src={pizza.image}
                alt={pizza.name}
                className="object-cover rounded-full border-4 border-white shadow-lg group-hover:shadow-pink-200 w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Carte */}
            <div className="w-full flex-1 flex flex-col items-center bg-white/80 rounded-3xl pt-16 pb-6 px-6 mt-[-2rem] shadow-inner backdrop-blur-xl relative">
              {/* Prix néon */}
              <div className="absolute -top-7 right-6 z-20">
                <span className="inline-block w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-pink-500 text-white text-xl font-extrabold shadow-xl ring-4 ring-white/60 animate-pulse border-4 border-white">
                  {pizza.price}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold mb-2 text-gray-900 drop-shadow text-center group-hover:text-primary transition-colors">
                {pizza.name}
              </h3>
              <p className="text-muted-foreground mb-4 text-center text-base font-medium min-h-[48px] flex items-center justify-center">
                {pizza.description}
              </p>
              <button
                className="mt-4 inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-to-r from-primary to-pink-500 text-primary-foreground hover:from-pink-500 hover:to-primary shadow-lg px-7 py-3 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:scale-105"
              >
                <ShoppingCart size={20} /> Commander
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}