import Link from 'next/link';
import { Pizza, Mail, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card mt-16 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Restaurant Info */}
          <div>
            <div className="mb-4">
              <img src="/logo/logo.png" alt="O'HUMM PIZZA" className="h-12 w-auto mx-auto" />
            </div>
            <p className="text-muted-foreground mb-5">
              Des pizzas artisanales cuites au feu de bois, préparées avec des ingrédients frais et de qualité.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="shrink-0 text-primary mt-1" />
                <span>11 Rue Antonin Georges Belin<br />95100 Argenteuil</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="shrink-0 text-primary" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="shrink-0 text-primary" />
                <span>contact@ohummpiazza.fr</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horaires d'ouverture</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Clock size={20} className="shrink-0 text-primary mt-1" />
                <div>
                  <p>Lundi - Jeudi</p>
                  <p>11:30 - 14:30, 18:00 - 22:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="shrink-0 text-primary mt-1" />
                <div>
                  <p>Vendredi - Samedi</p>
                  <p>11:30 - 14:30, 18:00 - 23:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="shrink-0 text-primary mt-1" />
                <div>
                  <p>Dimanche</p>
                  <p>18:00 - 22:30</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Notre Menu
                </Link>
              </li>
              <li>
                <Link href="/avis" className="text-muted-foreground hover:text-primary transition-colors">
                  Avis clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 O'HUMM PIZZA | Réalisé par Anis Moulfi. Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;