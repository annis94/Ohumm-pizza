"use client";

import AvisGoogle from '@/components/reviews/AvisGoogle';

export default function AvisPage() {
  return (
    <main className="container mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Avis de nos clients</h1>
      <p className="text-center text-muted-foreground mb-8">
        Découvrez ce que nos clients pensent de notre service et de nos pizzas
      </p>
      <AvisGoogle />
    </main>
  );
}