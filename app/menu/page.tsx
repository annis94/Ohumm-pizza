"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, X, Phone, Clock } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

// Catégories disponibles
const categories = [
  "Pizzas",
  "Pizzas signatures",
  "Calzones",
  "Menus enfants",
  "Tex mex",
  "Desserts",
  "Boissons",
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/menu-items');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du menu');
        }
        const data = await response.json();
        
        // Formater les données si nécessaire
        const formattedData = data.map((item: MenuItem) => ({
          ...item,
          price: item.price.toFixed(2) + '€' // Formater le prix en chaîne "XX,YY €"
        }));
        
        setMenuItems(formattedData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        console.error('Erreur:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Filtrage par catégorie
  const filteredItems = menuItems.filter((item) => item.category === selectedCategory);

  const handleOrderClick = (item: MenuItem) => {
    setSelectedItem(item);
    setShowOrderModal(true);
  };

  return (
    <div className="min-h-screen w-full pt-24 md:pt-32 pb-8 md:pb-24 px-4 bg-gradient-to-br from-[#fff7ed] via-[#fff] to-[#ffe4e6]">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Notre Menu
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Découvrez nos pizzas artisanales, calzones, menus enfants, tex mex, desserts et boissons.
        </p>
      </div>

      {/* Catégories */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 md:pb-6 mb-12 md:mb-16 max-w-3xl mx-auto px-2 md:px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold border-2 transition-all whitespace-nowrap text-sm md:text-base
              ${selectedCategory === cat
                ? "bg-gradient-to-r from-primary to-pink-500 text-white border-primary shadow-lg scale-105"
                : "bg-white/80 text-primary border-primary/30 hover:bg-primary/10"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* État de chargement */}
      {isLoading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Chargement du menu...</p>
        </div>
      )}

      {/* Message d'erreur */}
      {error && (
        <div className="text-center py-12">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Grille de produits */}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 max-w-7xl mx-auto px-4">
          {filteredItems.length === 0 && (
            <div className="col-span-full text-center text-muted-foreground py-12 md:py-16">
              Aucun élément trouvé dans cette catégorie.
            </div>
          )}
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white/80 rounded-3xl shadow-2xl overflow-visible p-0 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-pink-200 hover:ring-2 hover:ring-primary/30"
            >
              {/* Image pop-out */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 -mt-8 md:-mt-12 z-10 drop-shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="object-cover rounded-full border-4 border-white shadow-lg group-hover:shadow-pink-200 w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Carte */}
              <div className="w-full flex-1 flex flex-col items-center bg-white/80 rounded-3xl pt-14 md:pt-20 pb-6 md:pb-8 px-6 md:px-8 mt-[-1rem] md:mt-[-2rem] shadow-inner backdrop-blur-xl relative">
                {/* Prix néon */}
                <div className="absolute -top-5 md:-top-8 right-5 md:right-8 z-20">
                  <span className="inline-block w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-pink-500 text-white text-base md:text-xl font-extrabold shadow-xl ring-4 ring-white/60 animate-pulse border-4 border-white px-1">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-2 md:mb-3 text-gray-900 drop-shadow text-center group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4 md:mb-6 text-center text-sm md:text-base font-medium min-h-[48px] md:min-h-[60px] flex items-center justify-center">
                  {item.description}
                </p>
                <button
                  onClick={() => handleOrderClick(item)}
                  className="mt-4 md:mt-6 inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-full text-sm md:text-base font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-to-r from-primary to-pink-500 text-primary-foreground hover:from-pink-500 hover:to-primary shadow-lg px-6 md:px-8 py-3 md:py-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:scale-105"
                >
                  <ShoppingCart size={18} className="md:w-5 md:h-5" /> Commander
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

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
    </div>
  );
} 