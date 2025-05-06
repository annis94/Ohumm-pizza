"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="container mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Contactez-nous</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Informations de contact */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-muted-foreground">
                    O'Humm Pizza<br />
                    123 Rue de la Pizza<br />
                    75000 Paris
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-muted-foreground">01 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">contact@ohumm-pizza.fr</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Horaires d'ouverture</h3>
                  <p className="text-muted-foreground">
                    Lundi - Vendredi : 11h30 - 14h30 / 18h30 - 22h30<br />
                    Samedi - Dimanche : 11h30 - 23h00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Sujet
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet de votre message"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Votre message"
                className="min-h-[150px]"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}