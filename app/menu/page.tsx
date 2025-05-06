"use client";

import { useState, useEffect } from 'react';
import MenuHeader from '@/components/menu/MenuHeader';
import MenuCategories from '@/components/menu/MenuCategories';
import MenuItems from '@/components/menu/MenuItems';
import { menuData } from '@/data/menuData';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Pizzas');
  const [filteredItems, setFilteredItems] = useState(menuData.filter(item => item.category === 'Pizzas'));
  const [isLoading, setIsLoading] = useState(true);

  const categories = Array.from(new Set(menuData.map(item => item.category)));

  useEffect(() => {
    // Simulate data loading for smoother transitions
    setIsLoading(true);
    const timer = setTimeout(() => {
      setFilteredItems(menuData.filter(item => item.category === selectedCategory));
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 mt-20">
      <MenuHeader />
      <MenuCategories 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <MenuItems 
        items={filteredItems} 
        isLoading={isLoading}
        category={selectedCategory}
      />
    </div>
  );
}