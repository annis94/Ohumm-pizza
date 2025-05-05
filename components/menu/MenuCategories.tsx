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
              className={`menu-category-tab ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-full"
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