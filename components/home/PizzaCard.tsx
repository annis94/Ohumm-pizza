import React from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface PizzaCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  onOrder?: () => void;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ image, name, description, price, badge, onOrder }) => (
  <div className="relative group bg-red-200 bg-gradient-to-br from-[#fff7ed] via-[#fff] to-[#ffe4e6] rounded-3xl shadow-2xl overflow-visible p-0 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:shadow-primary/30">
    {/* TEST: Nouveau design */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 text-xs font-bold text-pink-700 bg-white px-3 py-1 rounded-full shadow">Nouveau design !</div>
    {/* Badge angle */}
    {badge && (
      <div className="absolute -top-3 -left-3 z-20 bg-gradient-to-r from-primary to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-[-12deg]">
        {badge}
      </div>
    )}
    {/* Image pop-out */}
    <div className="relative w-32 h-32 -mt-10 z-10 drop-shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover rounded-full border-4 border-white shadow-lg group-hover:shadow-pink-200"
        sizes="128px"
      />
    </div>
    {/* Carte */}
    <div className="w-full flex-1 flex flex-col items-center bg-white/80 rounded-3xl pt-16 pb-6 px-6 mt-[-2rem] shadow-inner backdrop-blur-xl relative">
      {/* Prix néon */}
      <div className="absolute -top-7 right-6 z-20">
        <span className="inline-block w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-pink-500 text-white text-xl font-extrabold shadow-xl ring-4 ring-white/60 animate-pulse border-4 border-white">
          {price}
        </span>
      </div>
      <h3 className="text-2xl font-extrabold mb-2 text-gray-900 drop-shadow text-center group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-muted-foreground mb-4 text-center text-base font-medium min-h-[48px] flex items-center justify-center">
        {description}
      </p>
      <button
        onClick={onOrder}
        className="mt-4 inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-to-r from-primary to-pink-500 text-primary-foreground hover:from-pink-500 hover:to-primary shadow-lg px-7 py-3 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:scale-105"
      >
        <ShoppingCart size={20} /> Commander
      </button>
    </div>
  </div>
);

export default PizzaCard; 