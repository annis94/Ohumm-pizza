import Image from 'next/image';
import { Review } from '@/types/review';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{review.name}</h3>
          <p className="text-sm text-muted-foreground">{review.date}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`h-5 w-5 ${star <= review.rating ? 'fill-secondary text-secondary' : 'fill-muted text-muted'}`}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground">{review.comment}</p>
      
      {review.reply && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-primary/10">
              <Image
                src="/logo.png"
                alt="O'HUMM PIZZA"
                fill
                className="object-cover p-1"
              />
            </div>
            <div>
              <h4 className="font-medium text-sm">Réponse de O'HUMM PIZZA</h4>
              <p className="text-xs text-muted-foreground">{review.replyDate}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{review.reply}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;