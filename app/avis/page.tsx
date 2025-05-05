"use client";

import { useState } from 'react';
import { reviewsData } from '@/data/reviewsData';
import { StarIcon } from 'lucide-react';
import ReviewCard from '@/components/reviews/ReviewCard';
import ReviewForm from '@/components/reviews/ReviewForm';

export default function ReviewsPage() {
  const [showForm, setShowForm] = useState(false);
  
  // Calculate average rating
  const averageRating = reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length;
  
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="section-title">Avis clients</h1>
      
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon 
              key={star}
              className={`h-8 w-8 ${star <= Math.round(averageRating) ? 'fill-secondary text-secondary' : 'fill-muted text-muted'}`}
            />
          ))}
        </div>
        <p className="text-2xl font-bold">{averageRating.toFixed(1)}/5</p>
        <p className="text-muted-foreground">Basé sur {reviewsData.length} avis</p>
      </div>
      
      <div className="flex justify-center mb-10">
        <button 
          onClick={() => setShowForm(!showForm)}
          className="btn-pizza bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          {showForm ? 'Annuler' : 'Laisser un avis'}
        </button>
      </div>
      
      {showForm && <ReviewForm onClose={() => setShowForm(false)} />}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {reviewsData.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}