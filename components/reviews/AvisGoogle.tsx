'use client';
import { useEffect } from 'react';

/**
 * Composant qui intègre les avis Google via Elfsight
 * Ce composant charge dynamiquement le script Elfsight et affiche le widget des avis
 */
const AvisGoogle = () => {
  useEffect(() => {
    // Création et chargement du script Elfsight
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    // Nettoyage du script lors du démontage du composant
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="my-10">
      {/* Widget Elfsight pour les avis Google */}
      <div
        className="elfsight-app-d5d9de0a-d7b2-40dd-bbb9-46ef97ce01e4"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default AvisGoogle; 