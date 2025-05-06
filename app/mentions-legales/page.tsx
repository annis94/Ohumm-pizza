export default function MentionsLegalesPage() {
  return (
    <main className="container mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Mentions Légales</h1>
      
      <div className="max-w-3xl mx-auto prose prose-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
          <p>
            O'Humm Pizza<br />
            123 Rue de la Pizza<br />
            75000 Paris<br />
            France
          </p>
          <p>
            Téléphone : 01 23 45 67 89<br />
            Email : contact@ohumm-pizza.fr
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Protection des données personnelles</h2>
          <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment désactiver l'utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur.
          </p>
        </section>
      </div>
    </main>
  );
}