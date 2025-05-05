"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Loader2, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Le prénom doit contenir au moins 2 caractères',
  }),
  lastName: z.string().min(2, {
    message: 'Le nom doit contenir au moins 2 caractères',
  }),
  email: z.string().email({
    message: 'Adresse e-mail invalide',
  }),
  phone: z.string().min(10, {
    message: 'Numéro de téléphone invalide',
  }),
  address: z.string().min(5, {
    message: 'L\'adresse doit contenir au moins 5 caractères',
  }),
  city: z.string().min(2, {
    message: 'La ville doit contenir au moins 2 caractères',
  }),
  postalCode: z.string().min(5, {
    message: 'Code postal invalide',
  }),
  deliveryMethod: z.enum(['delivery', 'pickup']),
  paymentMethod: z.enum(['card', 'cash']),
  instructions: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CheckoutForm = () => {
  const router = useRouter();
  const { clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      deliveryMethod: 'delivery',
      paymentMethod: 'card',
      instructions: '',
    },
  });
  
  const deliveryMethod = watch('deliveryMethod');
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Success case
    toast({
      title: 'Commande confirmée !',
      description: 'Votre commande a été reçue et sera préparée rapidement.',
      duration: 5000,
    });
    
    // Clear cart and redirect
    clearCart();
    router.push('/');
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Informations personnelles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium">
              Prénom <span className="text-destructive">*</span>
            </label>
            <Input
              id="firstName"
              {...register('firstName')}
              className={errors.firstName ? 'border-destructive' : ''}
            />
            {errors.firstName && (
              <p className="text-sm text-destructive">{errors.firstName.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium">
              Nom <span className="text-destructive">*</span>
            </label>
            <Input
              id="lastName"
              {...register('lastName')}
              className={errors.lastName ? 'border-destructive' : ''}
            />
            {errors.lastName && (
              <p className="text-sm text-destructive">{errors.lastName.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">
              Téléphone <span className="text-destructive">*</span>
            </label>
            <Input
              id="phone"
              {...register('phone')}
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Mode de réception</h3>
        <RadioGroup
          defaultValue="delivery"
          {...register('deliveryMethod')}
          className="flex flex-col md:flex-row gap-4"
        >
          <div className="flex items-center space-x-2 border border-border rounded-lg p-4 flex-1 cursor-pointer hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="delivery" id="delivery" />
            <label
              htmlFor="delivery"
              className="font-medium cursor-pointer flex-1"
            >
              Livraison à domicile
            </label>
          </div>
          
          <div className="flex items-center space-x-2 border border-border rounded-lg p-4 flex-1 cursor-pointer hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="pickup" id="pickup" />
            <label
              htmlFor="pickup"
              className="font-medium cursor-pointer flex-1"
            >
              À emporter
            </label>
          </div>
        </RadioGroup>
      </div>
      
      {deliveryMethod === 'delivery' && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Adresse de livraison</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium">
                Adresse <span className="text-destructive">*</span>
              </label>
              <Input
                id="address"
                {...register('address')}
                className={errors.address ? 'border-destructive' : ''}
              />
              {errors.address && (
                <p className="text-sm text-destructive">{errors.address.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="city" className="block text-sm font-medium">
                  Ville <span className="text-destructive">*</span>
                </label>
                <Input
                  id="city"
                  {...register('city')}
                  className={errors.city ? 'border-destructive' : ''}
                />
                {errors.city && (
                  <p className="text-sm text-destructive">{errors.city.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="postalCode" className="block text-sm font-medium">
                  Code postal <span className="text-destructive">*</span>
                </label>
                <Input
                  id="postalCode"
                  {...register('postalCode')}
                  className={errors.postalCode ? 'border-destructive' : ''}
                />
                {errors.postalCode && (
                  <p className="text-sm text-destructive">{errors.postalCode.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Separator />
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Mode de paiement</h3>
        <RadioGroup
          defaultValue="card"
          {...register('paymentMethod')}
          className="flex flex-col md:flex-row gap-4"
        >
          <div className="flex items-center space-x-2 border border-border rounded-lg p-4 flex-1 cursor-pointer hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="card" id="card" />
            <label
              htmlFor="card"
              className="font-medium cursor-pointer flex-1"
            >
              Carte bancaire
            </label>
          </div>
          
          <div className="flex items-center space-x-2 border border-border rounded-lg p-4 flex-1 cursor-pointer hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="cash" id="cash" />
            <label
              htmlFor="cash"
              className="font-medium cursor-pointer flex-1"
            >
              Espèces à la livraison
            </label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="instructions" className="block text-sm font-medium">
          Instructions spéciales (optionnel)
        </label>
        <Textarea
          id="instructions"
          placeholder="Instructions pour la livraison ou la préparation..."
          {...register('instructions')}
          rows={3}
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Traitement de la commande...
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <Check className="h-5 w-5" />
            Confirmer la commande
          </div>
        )}
      </Button>
    </form>
  );
};

export default CheckoutForm;