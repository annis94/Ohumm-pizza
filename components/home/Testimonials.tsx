"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, StarHalf, Quote } from 'lucide-react';
import { reviewsData } from '@/data/reviewsData';

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  // Take only first 3 reviews for the homepage
  const featuredReviews = reviewsData.slice(0, 3);
  
  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, y }}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Ce que nos clients disent</h2>
          <p className="section-subtitle">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all"
            >
              <div className="absolute -top-6 left-8">
                <Quote className="h-12 w-12 text-primary/20 rotate-180" />
              </div>
              
              <div className="flex flex-col h-full">
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < review.rating ? 'fill-secondary text-secondary' : 'fill-muted text-muted'}`}
                    />
                  ))}
                </div>
                
                <p className="italic text-muted-foreground mb-6 flex-grow">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;