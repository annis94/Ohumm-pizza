"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Award, Clock, Star } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  const yImage = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [150, 0, 0, 150]);
  
  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="py-16 md:py-24 bg-muted/50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: yImage }} className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Notre pizzeria"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-card p-4 rounded-xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Prix de la meilleure</p>
                  <p className="text-lg font-bold">Pizza artisanale 2023</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-card p-4 rounded-xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Plus de</p>
                  <p className="text-lg font-bold">2000 clients satisfaits</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div style={{ y: yText }}>
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Notre Histoire
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une passion pour les pizzas authentiques depuis 2005
            </h2>
            
            <p className="text-muted-foreground mb-8">
              O'HUMM PIZZA est née d'une passion pour la gastronomie italienne et d'un désir de créer des pizzas d'exception. Nous sélectionnons méticuleusement chaque ingrédient pour vous offrir une expérience gustative incomparable.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Ingrédients frais et locaux</h3>
                  <p className="text-muted-foreground">Nous privilégions les producteurs locaux pour garantir la fraîcheur de nos ingrédients.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Cuisson au feu de bois</h3>
                  <p className="text-muted-foreground">Nos pizzas sont cuites dans un four traditionnel à bois pour un goût authentique.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Recettes traditionnelles</h3>
                  <p className="text-muted-foreground">Nous respectons les traditions culinaires italiennes tout en y ajoutant notre touche personnelle.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">19+</p>
                  <p className="text-sm text-muted-foreground">Années d'expérience</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">30+</p>
                  <p className="text-sm text-muted-foreground">Types de pizzas</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-sm text-muted-foreground">Note moyenne</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;