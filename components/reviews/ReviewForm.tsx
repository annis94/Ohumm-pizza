"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Le nom doit contenir au moins 2 caractères',
  }),
  email: z.string().email({
    message: 'Adresse e-mail invalide',
  }),
  comment: z.string().min(10, {
    message: 'L\'avis doit contenir au moins 10 caractères',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ReviewFormProps {
  onClose: () => void;
}

const ReviewForm = ({ onClose }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      comment: '',
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    if (rating === 0) {
      toast({
        title: 'Attention',
        description: 'Veuillez attribuer une note avant de soumettre votre avis',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Success case
    toast({
      title: 'Merci pour votre avis !',
      description: 'Votre avis a été soumis avec succès et sera publié après modération.',
      duration: 5000,
    });
    
    reset();
    setRating(0);
    setIsSubmitting(false);
    onClose();
  };
  
  return (
    <div className="bg-card border border-border rounded-xl p-8 shadow-lg mb-10">
      <h2 className="text-2xl font-bold mb-6">Partagez votre expérience</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center mb-4">
          <p className="font-medium mb-2">Votre note</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 focus:outline-none"
              >
                <Star 
                  className={`h-8 w-8 ${
                    star <= (hoverRating || rating) 
                      ? 'fill-secondary text-secondary' 
                      : 'fill-muted text-muted'
                  } transition-colors`}
                />
              </button>
            ))}
          </div>
          {rating === 0 && (
            <p className="text-sm text-muted-foreground mt-2">Cliquez sur les étoiles pour évaluer</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Nom <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              placeholder="Votre nom"
              {...register('name')}
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              {...register('email')}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="comment" className="block text-sm font-medium">
            Votre avis <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="comment"
            placeholder="Partagez votre expérience avec nos pizzas..."
            rows={5}
            {...register('comment')}
            className={errors.comment ? 'border-destructive' : ''}
          />
          {errors.comment && (
            <p className="text-sm text-destructive">{errors.comment.message}</p>
          )}
        </div>
        
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Annuler
          </Button>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              'Soumettre mon avis'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;