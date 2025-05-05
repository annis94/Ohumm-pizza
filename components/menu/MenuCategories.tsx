"use client";

import { motion } from 'framer-motion';

interface MenuCategoriesProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const MenuCategories = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}: MenuCategoriesProps) => {
  return (
    <div className="mb-12">
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-2 rounded-full font-semibold transition-colors duration-200
                ${selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-foreground hover:bg-primary/10'}
              `}
              style={{ minWidth: 120 }}
            >
              {category}
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-full border-2 border-primary pointer-events-none"
                  style={{ zIndex: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategories;