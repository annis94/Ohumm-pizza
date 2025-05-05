import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import Map from '@/components/contact/Map';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="section-title">Contactez-nous</h1>
      <p className="section-subtitle">
        Nous sommes à votre écoute pour toutes vos questions ou commandes spéciales
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <ContactInfo />
        <ContactForm />
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Où nous trouver</h2>
        <Map />
      </div>
    </div>
  );
}