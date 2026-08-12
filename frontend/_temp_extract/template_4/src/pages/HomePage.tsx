import { useState } from 'react';
import Hero from '../components/Hero';
import HealthGoalFilter from '../components/HealthGoalFilter';
import BestsellersGrid from '../components/BestsellersGrid';
import QuizCTA from '../components/QuizCTA';
import BlogSection from '../components/BlogSection';
import LoyaltyCTA from '../components/LoyaltyCTA';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';
import type { Product } from '../data/products';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

export default function HomePage({ onAddToCart }: HomePageProps) {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  return (
    <main>
      <Hero />
      <HealthGoalFilter selectedGoal={selectedGoal} onGoalSelect={setSelectedGoal} />
      <BestsellersGrid 
        products={products} 
        selectedGoal={selectedGoal} 
        onAddToCart={onAddToCart} 
      />
      <QuizCTA />
      <BlogSection />
      <LoyaltyCTA />
      <Newsletter />
    </main>
  );
}
