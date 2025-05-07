"use client";

import { useState, useEffect } from "react";
import { CirclePlus, X, Phone, Clock } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function FeaturedMenu() {
  const [featuredPizzas, setFeaturedPizzas] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    const fetchFeaturedPizzas = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/menu-items');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du menu');
        }
        const data = await response.json();
        
        // Filtrer pour n'avoir que les pizzas (normales et signatures)
        const pizzas = data.filter((item: MenuItem) => 
          item.category === "Pizzas" || item.category === "Pizzas signatures"
        );
        
        // Sélectionner 4 pizzas aléatoires
        const randomPizzas = pizzas
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)
          .map((item: MenuItem) => ({
            ...item,
            price: item.price.toFixed(2) + '€'
          }));
        
        setFeaturedPizzas(randomPizzas);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        console.error('Erreur:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedPizzas();
  }, []);

  const handleOrderClick = (pizza: MenuItem) => {
    setSelectedItem(pizza);
    setShowOrderModal(true);
  };

  if (isLoading) {
    return (
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Nos Pizzas Favorites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="w-64 h-64 rounded-full bg-gray-200 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Nos Pizzas Favorites
          </h2>
          <div className="text-center text-red-500">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
          Nos Pizzas Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPizzas.map((pizza) => (
            <div key={pizza.id} className="menu-item group flex flex-col items-center">
              <div className="relative w-64 h-64 mb-4 overflow-hidden rounded-full">
                <img
                  src={pizza.imageUrl}
                  alt={pizza.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                <button
                  onClick={() => handleOrderClick(pizza)}
                  className="absolute bottom-6 right-6 bg-gradient-to-r from-primary to-pink-500 rounded-full p-3 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label={`Commander ${pizza.name}`}
                >
                  <CirclePlus className="w-7 h-7" />
                </button>
              </div>
              <h3 className="text-lg font-bold mb-1">{pizza.name}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2 text-center">
                {pizza.description}
              </p>
              <div className="mt-auto flex justify-between items-center w-full">
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

      {/* Modal de commande */}
      {showOrderModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 relative">
            {/* Bouton fermer */}
            <button
              onClick={() => setShowOrderModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Contenu */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Commander {selectedItem.name}
              </h3>
              
              <div className="space-y-6">
                {/* Prix */}
                <div className="text-3xl font-bold text-primary">
                  {selectedItem.price}
                </div>

                {/* Horaires de livraison */}
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 text-gray-600 mb-2">
                    <Clock size={20} />
                    <span className="font-semibold">Horaires de livraison :</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Du lundi au dimanche<br />
                    De 11h30 à 14h30 et de 18h30 à 22h30
                  </p>
                </div>

                {/* Numéro de téléphone */}
                <div className="bg-primary/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <Phone size={20} />
                    <span className="font-semibold">Commander par téléphone :</span>
                  </div>
                  <a
                    href="tel:0123456789"
                    className="text-2xl font-bold text-primary hover:text-pink-500 transition-colors"
                  >
                    01 23 45 67 89
                  </a>
                </div>

                {/* Message */}
                <p className="text-sm text-gray-500">
                  Appelez-nous pour passer votre commande. Nous vous livrons dans un rayon de 5km.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}