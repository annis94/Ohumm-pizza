"use client";

import AvisGoogle from '@/components/reviews/AvisGoogle';

export default function AvisPage() {
  return (
    <main className="container mx-auto px-4 py-10 mt-20">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent whitespace-nowrap">
          Avis de nos clients
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
      <p className="text-center text-muted-foreground mb-8">
        Découvrez ce que nos clients pensent de notre service et de nos pizzas
      </p>
      <AvisGoogle />
    </main>
  );
}