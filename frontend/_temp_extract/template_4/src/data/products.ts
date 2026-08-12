export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  goals: string[];
  description: string;
  supplementFacts: {
    servingSize: string;
    servingsPerContainer: number;
    nutrients: {
      name: string;
      amount: string;
      dailyValue?: string;
    }[];
  };
  doctorRecommended: boolean;
  bestseller: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'premium-whey-protein',
    name: 'Premium Whey Protein Isolate',
    category: 'Protein',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviews: 1247,
    image: '/images/product-protein.jpg',
    goals: ['Muscle', 'Energy'],
    description: 'Ultra-pure whey protein isolate with 25g protein per serving. Fast-absorbing formula for optimal muscle recovery and growth. Zero added sugar, gluten-free, and third-party tested for purity.',
    supplementFacts: {
      servingSize: '1 Scoop (30g)',
      servingsPerContainer: 30,
      nutrients: [
        { name: 'Calories', amount: '120' },
        { name: 'Protein', amount: '25g', dailyValue: '50%' },
        { name: 'Carbohydrates', amount: '3g', dailyValue: '1%' },
        { name: 'Sugar', amount: '1g' },
        { name: 'Fat', amount: '1.5g', dailyValue: '2%' },
        { name: 'BCAAs', amount: '5.5g' },
        { name: 'Glutamine', amount: '4.2g' },
      ]
    },
    doctorRecommended: true,
    bestseller: true,
    inStock: true
  },
  {
    id: 'multivitamin-complete',
    name: 'Complete Multivitamin Complex',
    category: 'Vitamins',
    price: 34.99,
    rating: 4.7,
    reviews: 892,
    image: '/images/product-vitamins.jpg',
    goals: ['Immunity', 'Energy'],
    description: 'Comprehensive daily multivitamin with 25+ essential vitamins and minerals. Enhanced with antioxidants and probiotics for maximum absorption and immune support.',
    supplementFacts: {
      servingSize: '2 Capsules',
      servingsPerContainer: 30,
      nutrients: [
        { name: 'Vitamin A', amount: '5000 IU', dailyValue: '100%' },
        { name: 'Vitamin C', amount: '500mg', dailyValue: '556%' },
        { name: 'Vitamin D3', amount: '2000 IU', dailyValue: '500%' },
        { name: 'Vitamin E', amount: '30 IU', dailyValue: '100%' },
        { name: 'Vitamin B12', amount: '500mcg', dailyValue: '8333%' },
        { name: 'Zinc', amount: '15mg', dailyValue: '136%' },
      ]
    },
    doctorRecommended: true,
    bestseller: true,
    inStock: true
  },
  {
    id: 'super-greens-powder',
    name: 'Organic Super Greens Powder',
    category: 'Greens',
    price: 39.99,
    rating: 4.6,
    reviews: 654,
    image: '/images/product-greens.jpg',
    goals: ['Energy', 'Immunity', 'Weight Loss'],
    description: 'Nutrient-dense blend of 20+ organic greens, fruits, and vegetables. Supports natural energy, detoxification, and alkaline balance. Delicious natural flavor with no artificial ingredients.',
    supplementFacts: {
      servingSize: '1 Scoop (10g)',
      servingsPerContainer: 30,
      nutrients: [
        { name: 'Calories', amount: '35' },
        { name: 'Organic Greens Blend', amount: '5g' },
        { name: 'Spirulina', amount: '500mg' },
        { name: 'Chlorella', amount: '500mg' },
        { name: 'Probiotics', amount: '1 Billion CFU' },
        { name: 'Fiber', amount: '2g', dailyValue: '7%' },
      ]
    },
    doctorRecommended: false,
    bestseller: true,
    inStock: true
  },
  {
    id: 'omega-3-fish-oil',
    name: 'Premium Omega-3 Fish Oil',
    category: 'Omega',
    price: 29.99,
    rating: 4.8,
    reviews: 1089,
    image: '/images/product-omega.jpg',
    goals: ['Immunity', 'Energy'],
    description: 'High-potency omega-3 fish oil with EPA & DHA for heart, brain, and joint health. Molecularly distilled for purity, burp-free formula with natural lemon flavor.',
    supplementFacts: {
      servingSize: '2 Softgels',
      servingsPerContainer: 45,
      nutrients: [
        { name: 'Calories', amount: '20' },
        { name: 'Total Omega-3s', amount: '2000mg' },
        { name: 'EPA', amount: '1200mg' },
        { name: 'DHA', amount: '800mg' },
        { name: 'Total Fat', amount: '2g', dailyValue: '3%' },
      ]
    },
    doctorRecommended: true,
    bestseller: false,
    inStock: true
  },
  {
    id: 'sleep-aid-formula',
    name: 'Deep Sleep Aid Formula',
    category: 'Sleep',
    price: 27.99,
    rating: 4.5,
    reviews: 423,
    image: '/images/product-vitamins.jpg',
    goals: ['Sleep'],
    description: 'Natural sleep support with melatonin, L-theanine, and calming herbs. Non-habit forming formula helps you fall asleep faster and wake up refreshed.',
    supplementFacts: {
      servingSize: '2 Capsules',
      servingsPerContainer: 30,
      nutrients: [
        { name: 'Melatonin', amount: '5mg' },
        { name: 'L-Theanine', amount: '200mg' },
        { name: 'Valerian Root', amount: '300mg' },
        { name: 'Chamomile Extract', amount: '150mg' },
        { name: 'Magnesium', amount: '100mg', dailyValue: '25%' },
      ]
    },
    doctorRecommended: false,
    bestseller: false,
    inStock: true
  },
  {
    id: 'thermogenic-fat-burner',
    name: 'Thermogenic Fat Burner',
    category: 'Weight Loss',
    price: 44.99,
    originalPrice: 54.99,
    rating: 4.4,
    reviews: 567,
    image: '/images/product-protein.jpg',
    goals: ['Weight Loss', 'Energy'],
    description: 'Advanced thermogenic formula with green tea extract, caffeine, and L-carnitine. Supports metabolism, fat oxidation, and clean energy without jitters.',
    supplementFacts: {
      servingSize: '2 Capsules',
      servingsPerContainer: 30,
      nutrients: [
        { name: 'Caffeine Anhydrous', amount: '200mg' },
        { name: 'Green Tea Extract', amount: '500mg' },
        { name: 'L-Carnitine', amount: '500mg' },
        { name: 'Cayenne Pepper', amount: '50mg' },
        { name: 'Black Pepper Extract', amount: '5mg' },
      ]
    },
    doctorRecommended: false,
    bestseller: true,
    inStock: true
  }
];

export const healthGoals = [
  { id: 'weight-loss', name: 'Weight Loss', icon: 'Flame' },
  { id: 'muscle', name: 'Muscle', icon: 'Dumbbell' },
  { id: 'energy', name: 'Energy', icon: 'Zap' },
  { id: 'immunity', name: 'Immunity', icon: 'Shield' },
  { id: 'sleep', name: 'Sleep', icon: 'Moon' }
];

export const blogPosts = [
  {
    id: 1,
    title: '10 Essential Nutrients Your Body Needs Daily',
    excerpt: 'Discover the key vitamins and minerals that support optimal health and how to incorporate them into your diet through food and supplements.',
    image: '/images/blog-nutrition.jpg',
    category: 'Nutrition',
    date: 'Dec 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Science Behind Quality Sleep and Recovery',
    excerpt: 'Learn how proper sleep impacts muscle recovery, cognitive function, and overall wellness, plus tips for improving your sleep quality.',
    image: '/images/blog-sleep.jpg',
    category: 'Wellness',
    date: 'Dec 12, 2024',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Maximizing Your Workout Results with Proper Nutrition',
    excerpt: 'Expert tips on pre and post-workout nutrition, supplement timing, and meal planning to get the most out of your fitness routine.',
    image: '/images/blog-fitness.jpg',
    category: 'Fitness',
    date: 'Dec 10, 2024',
    readTime: '6 min read'
  }
];
