import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-md h-full">
      <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 rounded-full p-3 shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Adresse</h3>
            <p className="text-muted-foreground">
              11 Rue Antonin Georges Belin<br />
              95100 Argenteuil<br />
              France
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 rounded-full p-3 shrink-0">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Téléphone</h3>
            <p className="text-muted-foreground">
              <a href="tel:+33123456789" className="hover:text-primary transition-colors">
                01 23 45 67 89
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 rounded-full p-3 shrink-0">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-muted-foreground">
              <a href="mailto:contact@ohummpiazza.fr" className="hover:text-primary transition-colors">
                contact@ohummpiazza.fr
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 rounded-full p-3 shrink-0">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Horaires d'ouverture</h3>
            <div className="text-muted-foreground space-y-1">
              <p>Lundi - Jeudi: 11:30 - 14:30, 18:00 - 22:30</p>
              <p>Vendredi - Samedi: 11:30 - 14:30, 18:00 - 23:30</p>
              <p>Dimanche: 18:00 - 22:30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;