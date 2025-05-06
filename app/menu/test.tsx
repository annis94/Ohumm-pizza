"use client";

export default function TestImages() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Test des images</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>Pizza Fermière</p>
          <img 
            src="/images/8878188_OHummpizza_Food_PizzaFermière.jpg" 
            alt="Pizza Fermière"
            className="w-40 h-40 object-cover"
          />
        </div>
        <div>
          <p>Pizza Canibale</p>
          <img 
            src="/images/8878188_OHummpizza_Food_PizzaCanibale.jpg" 
            alt="Pizza Canibale"
            className="w-40 h-40 object-cover"
          />
        </div>
        <div>
          <p>Pizza Mexicaine</p>
          <img 
            src="/images/8878188_OHummpizza_Food_PizzaMexicaine.jpg" 
            alt="Pizza Mexicaine"
            className="w-40 h-40 object-cover"
          />
        </div>
        <div>
          <p>Pizza Suprème Boursin</p>
          <img 
            src="/images/8878188_OHummpizza_Food_PizzaSuprèmeBoursin.jpg" 
            alt="Pizza Suprème Boursin"
            className="w-40 h-40 object-cover"
          />
        </div>
      </div>
    </div>
  );
} 