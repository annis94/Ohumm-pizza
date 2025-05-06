import React from 'react';
import { FaShoppingBag, FaMotorcycle } from 'react-icons/fa';

const offers = [
  {
    title: 'Nos offres',
    subtitle: 'à emporter',
    badgeColor: 'from-orange-400 to-yellow-400',
    solo: {
      label: 'MENU SOLO',
      desc: '1 pizza senior au choix\n+ 1 canette\n+ 1 dessert au choix',
      price: '11€',
    },
    trio: {
      label: 'TRIO SENIOR',
      desc: '3 pizzas senior au choix\n+ 1 bouteille Mecca Cola 1.5L',
      price: '23.90€',
    },
    icon: <FaShoppingBag size={32} className="text-orange-500" />,
  },
  {
    title: 'Nos offres',
    subtitle: 'en livraison',
    badgeColor: 'from-blue-500 to-cyan-400',
    solo: {
      label: 'MENU SOLO',
      desc: '1 pizza senior au choix\n+ 1 canette\n+ 1 dessert au choix',
      price: '14€',
    },
    trio: {
      label: 'TRIO SENIOR',
      desc: '3 pizzas senior au choix\n+ 1 bouteille de Mecca Cola 1.5L',
      price: '25.90€',
    },
    icon: <FaMotorcycle size={32} className="text-blue-500" />,
  },
];

const HomeOffers = () => (
  <section className="w-full py-14 bg-gradient-to-br from-[#fff7ed] via-[#fff] to-[#ffe4e6] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none select-none opacity-30" style={{backgroundImage: 'url(/images/8878188_OHummpizza_Hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
    <div className="relative z-10 max-w-4xl mx-auto px-2">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 drop-shadow-lg">
        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Nos offres spéciales</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="flex-1 rounded-3xl bg-white/60 backdrop-blur-md shadow-2xl p-7 flex flex-col justify-between border border-white/40 hover:scale-105 transition-transform duration-300 group"
            style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}
          >
            <div className="flex flex-col items-center mb-6">
              <div className={`mb-3 inline-block px-4 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${offer.badgeColor} shadow-md`}>
                {offer.subtitle}
              </div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-2 border-4 border-white group-hover:shadow-orange-200 group-hover:shadow-md transition-all">
                {offer.icon}
              </div>
            </div>
            <div className="mb-6">
              <div className="font-bold text-lg mb-1 text-center tracking-wide text-gray-800 drop-shadow-sm">{offer.solo.label}</div>
              <div className="whitespace-pre-line text-sm mb-1 text-center text-gray-700">{offer.solo.desc}</div>
              <div className="text-center mt-2">
                <span className="inline-block text-2xl font-extrabold text-white px-4 py-1 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 shadow-lg ring-2 ring-white/60 group-hover:from-orange-400 group-hover:to-pink-500 group-hover:shadow-pink-200 transition-all">
                  {offer.solo.price}
                </span>
              </div>
            </div>
            <div className="mb-2">
              <div className="font-bold text-lg mb-1 text-center tracking-wide text-gray-800 drop-shadow-sm">{offer.trio.label}</div>
              <div className="whitespace-pre-line text-sm mb-1 text-center text-gray-700">{offer.trio.desc}</div>
              <div className="text-center mt-2">
                <span className="inline-block text-2xl font-extrabold text-white px-4 py-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-400 shadow-lg ring-2 ring-white/60 group-hover:from-blue-400 group-hover:to-cyan-500 group-hover:shadow-cyan-200 transition-all">
                  {offer.trio.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeOffers; 