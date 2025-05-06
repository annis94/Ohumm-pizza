"use client";

import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-10 mt-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Contactez-nous
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg p-8">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Nos coordonnées</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Adresse</h3>
                  <p className="text-muted-foreground text-base">
                    O'Humm Pizza<br />
                    123 Rue de la Pizza<br />
                    75000 Paris
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Téléphone</h3>
                  <p className="text-muted-foreground text-base">01 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Horaires d'ouverture</h3>
                  <p className="text-muted-foreground text-base">
                    Lundi - Vendredi : 11h30 - 14h30 / 18h30 - 22h30<br />
                    Samedi - Dimanche : 11h30 - 23h00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}