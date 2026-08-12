export interface Product {
  id: string;
  name: string;
  category: 'watch' | 'ring' | 'necklace' | 'bracelet' | 'earring';
  price: number;
  metal: string;
  occasion: string;
  image: string;
  images: string[];
  description: string;
  specs: { label: string; value: string }[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isCoupleSet?: boolean;
}

export const products: Product[] = [
  {
    id: 'w1',
    name: 'Midnight Classic',
    category: 'watch',
    price: 129,
    metal: 'Stainless Steel',
    occasion: 'Daily Wear',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=800&fit=crop'
    ],
    description: 'A timeless piece featuring a midnight blue dial with silver indices and a polished stainless steel case. Water-resistant to 50m with a Japanese quartz movement.',
    specs: [
      { label: 'Movement', value: 'Japanese Quartz' },
      { label: 'Case Material', value: '316L Stainless Steel' },
      { label: 'Case Diameter', value: '40mm' },
      { label: 'Water Resistance', value: '50m / 5 ATM' },
      { label: 'Strap', value: 'Genuine Leather' },
      { label: 'Crystal', value: 'Mineral Glass' }
    ],
    rating: 4.8,
    reviewCount: 124,
    isBestseller: true
  },
  {
    id: 'w2',
    name: 'Aurum Elegance',
    category: 'watch',
    price: 189,
    metal: 'Gold Plated',
    occasion: 'Formal',
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&h=800&fit=crop'
    ],
    description: 'Elevate your formal attire with the Aurum Elegance. Gold-plated case with a champagne dial and Roman numeral markers. A statement of refined taste.',
    specs: [
      { label: 'Movement', value: 'Swiss Quartz' },
      { label: 'Case Material', value: 'Gold-Plated Brass' },
      { label: 'Case Diameter', value: '38mm' },
      { label: 'Water Resistance', value: '30m / 3 ATM' },
      { label: 'Strap', value: 'Mesh Bracelet' },
      { label: 'Crystal', value: 'Sapphire Coated' }
    ],
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: 'w3',
    name: 'Silver Tide',
    category: 'watch',
    price: 149,
    metal: 'Silver',
    occasion: 'Casual',
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&h=800&fit=crop'
    ],
    description: 'Clean, modern, and effortlessly stylish. The Silver Tide features a minimalist silver dial with a brushed stainless steel mesh strap.',
    specs: [
      { label: 'Movement', value: 'Japanese Quartz' },
      { label: 'Case Material', value: 'Brushed Steel' },
      { label: 'Case Diameter', value: '36mm' },
      { label: 'Water Resistance', value: '30m / 3 ATM' },
      { label: 'Strap', value: 'Mesh Steel' },
      { label: 'Crystal', value: 'Hardened Mineral' }
    ],
    rating: 4.6,
    reviewCount: 67,
    isNew: true
  },
  {
    id: 'w4',
    name: 'Royal Chronograph',
    category: 'watch',
    price: 249,
    metal: 'Stainless Steel',
    occasion: 'Formal',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&h=800&fit=crop'
    ],
    description: 'A sophisticated chronograph with three sub-dials, tachymeter bezel, and a robust stainless steel bracelet. Built for those who appreciate precision.',
    specs: [
      { label: 'Movement', value: 'Multi-Function Quartz' },
      { label: 'Case Material', value: '316L Stainless Steel' },
      { label: 'Case Diameter', value: '42mm' },
      { label: 'Water Resistance', value: '100m / 10 ATM' },
      { label: 'Strap', value: 'Steel Bracelet' },
      { label: 'Crystal', value: 'Sapphire' }
    ],
    rating: 4.9,
    reviewCount: 156,
    isBestseller: true
  },
  {
    id: 'w5',
    name: 'Rose Dawn',
    category: 'watch',
    price: 159,
    metal: 'Rose Gold',
    occasion: 'Daily Wear',
    image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop'
    ],
    description: 'Soft rose gold tones meet a blush mother-of-pearl dial. The Rose Dawn is designed for the modern woman who values understated luxury.',
    specs: [
      { label: 'Movement', value: 'Japanese Quartz' },
      { label: 'Case Material', value: 'Rose Gold Plated' },
      { label: 'Case Diameter', value: '34mm' },
      { label: 'Water Resistance', value: '30m / 3 ATM' },
      { label: 'Strap', value: 'Mesh Rose Gold' },
      { label: 'Crystal', value: 'Mineral Glass' }
    ],
    rating: 4.7,
    reviewCount: 98
  },
  {
    id: 'w6',
    name: 'Diver Pro',
    category: 'watch',
    price: 199,
    metal: 'Stainless Steel',
    occasion: 'Sports',
    image: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1619134778706-7015533a6150?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=800&fit=crop'
    ],
    description: 'Engineered for adventure. The Diver Pro features a unidirectional bezel, luminous hands, and 200m water resistance for serious underwater exploration.',
    specs: [
      { label: 'Movement', value: 'Automatic Seiko' },
      { label: 'Case Material', value: '316L Stainless Steel' },
      { label: 'Case Diameter', value: '43mm' },
      { label: 'Water Resistance', value: '200m / 20 ATM' },
      { label: 'Strap', value: 'Rubber Diver' },
      { label: 'Crystal', value: 'Sapphire' }
    ],
    rating: 4.8,
    reviewCount: 203,
    isNew: true
  },
  {
    id: 'r1',
    name: 'Eternity Band',
    category: 'ring',
    price: 79,
    metal: 'Sterling Silver',
    occasion: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=800&fit=crop'
    ],
    description: 'A continuous circle of cubic zirconia set in polished sterling silver. The Eternity Band symbolizes unending love and commitment.',
    specs: [
      { label: 'Metal', value: '925 Sterling Silver' },
      { label: 'Stones', value: 'Cubic Zirconia' },
      { label: 'Width', value: '3mm' },
      { label: 'Finish', value: 'High Polish' },
      { label: 'Sizes', value: '5-10' }
    ],
    rating: 4.6,
    reviewCount: 145,
    isBestseller: true
  },
  {
    id: 'r2',
    name: 'Gold Signet',
    category: 'ring',
    price: 99,
    metal: 'Gold Plated',
    occasion: 'Formal',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=800&fit=crop'
    ],
    description: 'A modern take on the classic signet ring. Gold-plated with a smooth, engravable face. A bold statement for the contemporary gentleman.',
    specs: [
      { label: 'Metal', value: 'Gold-Plated Brass' },
      { label: 'Face', value: '12mm Round' },
      { label: 'Width', value: '8mm at face' },
      { label: 'Finish', value: 'Matte + Polish' },
      { label: 'Sizes', value: '7-12' }
    ],
    rating: 4.5,
    reviewCount: 78
  },
  {
    id: 'r3',
    name: 'Rose Promise',
    category: 'ring',
    price: 89,
    metal: 'Rose Gold',
    occasion: 'Engagement',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop'
    ],
    description: 'Delicate and romantic, the Rose Promise features a solitaire cubic zirconia in a rose gold-plated setting. The perfect promise ring.',
    specs: [
      { label: 'Metal', value: 'Rose Gold Plated' },
      { label: 'Center Stone', value: '1ct CZ' },
      { label: 'Setting', value: '4-Prong' },
      { label: 'Finish', value: 'High Polish' },
      { label: 'Sizes', value: '5-9' }
    ],
    rating: 4.7,
    reviewCount: 112,
    isNew: true
  },
  {
    id: 'r4',
    name: 'Midnight Onyx',
    category: 'ring',
    price: 69,
    metal: 'Stainless Steel',
    occasion: 'Daily Wear',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=800&fit=crop'
    ],
    description: 'Bold and masculine, the Midnight Onyx features a black onyx stone set in brushed stainless steel. A ring that commands attention.',
    specs: [
      { label: 'Metal', value: '316L Stainless Steel' },
      { label: 'Stone', value: 'Black Onyx' },
      { label: 'Width', value: '10mm' },
      { label: 'Finish', value: 'Brushed' },
      { label: 'Sizes', value: '8-13' }
    ],
    rating: 4.4,
    reviewCount: 56
  },
  {
    id: 'n1',
    name: 'Celestial Chain',
    category: 'necklace',
    price: 59,
    metal: 'Sterling Silver',
    occasion: 'Daily Wear',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop'
    ],
    description: 'A delicate cable chain with a tiny star pendant. The Celestial Chain adds a whisper of sparkle to any outfit, day or night.',
    specs: [
      { label: 'Metal', value: '925 Sterling Silver' },
      { label: 'Length', value: '18" + 2" extender' },
      { label: 'Pendant', value: '8mm Star' },
      { label: 'Clasp', value: 'Spring Ring' },
      { label: 'Finish', value: 'High Polish' }
    ],
    rating: 4.5,
    reviewCount: 89
  },
  {
    id: 'n2',
    name: 'Gold Locket',
    category: 'necklace',
    price: 119,
    metal: 'Gold Plated',
    occasion: 'Gift',
    image: 'https://images.unsplash.com/photo-1599459183200-59c3a4655e6d?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1599459183200-59c3a4655e6d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop'
    ],
    description: 'A vintage-inspired oval locket in gold-plated brass. Opens to hold two small photos. A treasured keepsake for generations.',
    specs: [
      { label: 'Metal', value: 'Gold-Plated Brass' },
      { label: 'Length', value: '20"' },
      { label: 'Locket', value: '25x18mm Oval' },
      { label: 'Clasp', value: 'Lobster' },
      { label: 'Finish', value: 'Antique Gold' }
    ],
    rating: 4.8,
    reviewCount: 134,
    isBestseller: true
  },
  {
    id: 'n3',
    name: 'Pearl Strand',
    category: 'necklace',
    price: 149,
    metal: 'Silver',
    occasion: 'Formal',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=800&fit=crop'
    ],
    description: 'Lustrous freshwater pearls hand-knotted on silk thread with a sterling silver clasp. Timeless elegance for the most special occasions.',
    specs: [
      { label: 'Pearls', value: 'Freshwater 7-8mm' },
      { label: 'Length', value: '18" Princess' },
      { label: 'Clasp', value: 'Sterling Silver' },
      { label: 'Thread', value: 'Silk' },
      { label: 'Finish', value: 'Natural Luster' }
    ],
    rating: 4.9,
    reviewCount: 167
  },
  {
    id: 'n4',
    name: 'Layered Moon',
    category: 'necklace',
    price: 69,
    metal: 'Rose Gold',
    occasion: 'Casual',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=800&fit=crop'
    ],
    description: 'Two delicate chains in rose gold — one with a crescent moon, one with a tiny star. Layered beauty that catches the light with every movement.',
    specs: [
      { label: 'Metal', value: 'Rose Gold Plated' },
      { label: 'Lengths', value: '16" + 18"' },
      { label: 'Pendants', value: 'Moon + Star' },
      { label: 'Clasp', value: 'Spring Ring' },
      { label: 'Finish', value: 'High Polish' }
    ],
    rating: 4.6,
    reviewCount: 72,
    isNew: true
  },
  {
    id: 'b1',
    name: 'Cuff Bold',
    category: 'bracelet',
    price: 89,
    metal: 'Stainless Steel',
    occasion: 'Daily Wear',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop'
    ],
    description: 'A wide stainless steel cuff bracelet with a brushed finish. Minimal, architectural, and undeniably cool. Adjustable fit.',
    specs: [
      { label: 'Metal', value: '316L Stainless Steel' },
      { label: 'Width', value: '15mm' },
      { label: 'Diameter', value: '65mm (Adjustable)' },
      { label: 'Finish', value: 'Brushed' },
      { label: 'Weight', value: '45g' }
    ],
    rating: 4.5,
    reviewCount: 63
  },
  {
    id: 'b2',
    name: 'Chain Link',
    category: 'bracelet',
    price: 79,
    metal: 'Gold Plated',
    occasion: 'Formal',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop'
    ],
    description: 'A chunky curb chain bracelet in gold-plated steel. Bold links that catch the light and elevate any wrist stack.',
    specs: [
      { label: 'Metal', value: 'Gold-Plated Steel' },
      { label: 'Link Size', value: '8mm' },
      { label: 'Length', value: '7.5"' },
      { label: 'Clasp', value: 'Box Clasp' },
      { label: 'Finish', value: 'High Polish' }
    ],
    rating: 4.4,
    reviewCount: 51,
    isNew: true
  },
  {
    id: 'b3',
    name: 'Beaded Serenity',
    category: 'bracelet',
    price: 49,
    metal: 'Silver',
    occasion: 'Casual',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop'
    ],
    description: 'Smooth silver beads on an elastic cord for easy wear. The Beaded Serenity is perfect for stacking or wearing solo for a clean look.',
    specs: [
      { label: 'Metal', value: 'Silver-Plated Beads' },
      { label: 'Bead Size', value: '6mm' },
      { label: 'Fit', value: 'Elastic, One Size' },
      { label: 'Finish', value: 'Matte' },
      { label: 'Weight', value: '18g' }
    ],
    rating: 4.3,
    reviewCount: 38
  },
  {
    id: 'b4',
    name: 'Leather Wrap',
    category: 'bracelet',
    price: 59,
    metal: 'Stainless Steel',
    occasion: 'Casual',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop'
    ],
    description: 'Genuine leather wraps twice around the wrist, secured with a magnetic stainless steel clasp. Rugged sophistication for everyday wear.',
    specs: [
      { label: 'Material', value: 'Genuine Leather + Steel' },
      { label: 'Width', value: '10mm' },
      { label: 'Length', value: '16" (Wraps 2x)' },
      { label: 'Clasp', value: 'Magnetic Steel' },
      { label: 'Finish', value: 'Natural Leather' }
    ],
    rating: 4.6,
    reviewCount: 84,
    isBestseller: true
  },
  {
    id: 'e1',
    name: 'Stud Sparkle',
    category: 'earring',
    price: 39,
    metal: 'Sterling Silver',
    occasion: 'Daily Wear',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=800&fit=crop'
    ],
    description: 'Classic round stud earrings with brilliant-cut cubic zirconia. Set in sterling silver with secure butterfly backs. Your everyday sparkle.',
    specs: [
      { label: 'Metal', value: '925 Sterling Silver' },
      { label: 'Stones', value: 'Cubic Zirconia 5mm' },
      { label: 'Backing', value: 'Butterfly' },
      { label: 'Finish', value: 'Rhodium Plated' },
      { label: 'Weight', value: '1.5g pair' }
    ],
    rating: 4.7,
    reviewCount: 201,
    isBestseller: true
  },
  {
    id: 'e2',
    name: 'Hoop Dreams',
    category: 'earring',
    price: 49,
    metal: 'Gold Plated',
    occasion: 'Casual',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop'
    ],
    description: 'Medium-sized gold-plated hoops with a sleek, modern profile. Lightweight and comfortable for all-day wear. The ultimate versatile earring.',
    specs: [
      { label: 'Metal', value: 'Gold-Plated Brass' },
      { label: 'Diameter', value: '25mm' },
      { label: 'Width', value: '2mm' },
      { label: 'Backing', value: 'Hinged Snap' },
      { label: 'Finish', value: 'High Polish' }
    ],
    rating: 4.5,
    reviewCount: 112
  },
  {
    id: 'e3',
    name: 'Drop Pearl',
    category: 'earring',
    price: 69,
    metal: 'Silver',
    occasion: 'Formal',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop'
    ],
    description: 'Elegant drop earrings featuring teardrop freshwater pearls suspended from silver hooks. Movement, grace, and timeless beauty.',
    specs: [
      { label: 'Metal', value: 'Sterling Silver' },
      { label: 'Pearls', value: 'Freshwater Teardrop' },
      { label: 'Length', value: '35mm' },
      { label: 'Backing', value: 'Fish Hook' },
      { label: 'Finish', value: 'High Polish' }
    ],
    rating: 4.8,
    reviewCount: 95,
    isNew: true
  },
  {
    id: 'e4',
    name: 'Ear Climber',
    category: 'earring',
    price: 55,
    metal: 'Rose Gold',
    occasion: 'Party',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=800&fit=crop'
    ],
    description: 'A contemporary ear climber design in rose gold with pave-set cubic zirconia. Climbs up the earlobe for an edgy, modern look.',
    specs: [
      { label: 'Metal', value: 'Rose Gold Plated' },
      { label: 'Stones', value: 'Pave CZ' },
      { label: 'Length', value: '20mm' },
      { label: 'Backing', value: 'Ear Wire' },
      { label: 'Finish', value: 'High Polish' }
    ],
    rating: 4.4,
    reviewCount: 47
  }
];

export const coupleSets = [
  {
    id: 'cs1',
    name: 'His & Hers Classic',
    price: 249,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=500&fit=crop',
    items: ['Midnight Classic Watch', 'Rose Dawn Watch'],
    description: 'A perfectly matched pair of timepieces — the bold Midnight Classic for him and the delicate Rose Dawn for her.'
  },
  {
    id: 'cs2',
    name: 'Eternal Bond Rings',
    price: 149,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=500&fit=crop',
    items: ['Eternity Band (His)', 'Eternity Band (Hers)'],
    description: 'Matching Eternity Bands in complementary widths. A symbol of your unending commitment to each other.'
  },
  {
    id: 'cs3',
    name: 'Starlight Necklace Set',
    price: 99,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=500&fit=crop',
    items: ['Celestial Chain', 'Layered Moon'],
    description: 'Two celestial-inspired necklaces that complement each other beautifully — one subtle, one layered.'
  }
];

export const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: 'The Midnight Classic exceeded all my expectations. The build quality is incredible for the price, and the leather strap feels premium. My new daily watch!',
    product: 'Midnight Classic',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    rating: 5,
    text: 'Bought the Eternal Bond Rings for our anniversary. My wife absolutely loved them. The packaging was beautiful too — felt like a luxury brand.',
    product: 'Eternal Bond Rings',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    rating: 4,
    text: 'The Pearl Strand is stunning. Real freshwater pearls at this price point is unheard of. Wore it to my sister\'s wedding and got so many compliments.',
    product: 'Pearl Strand',
    date: '3 weeks ago'
  },
  {
    id: 4,
    name: 'Vikram Patel',
    rating: 5,
    text: 'I\'ve been collecting watches for years and the Diver Pro punches way above its weight. The automatic movement keeps excellent time. Highly recommend.',
    product: 'Diver Pro',
    date: '2 months ago'
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    rating: 5,
    text: 'The Stud Sparkle earrings are my go-to for everything. They\'ve held up beautifully after months of daily wear. Buying another pair as a gift!',
    product: 'Stud Sparkle',
    date: '1 week ago'
  }
];

export const giftIdeas = [
  {
    id: 'g1',
    title: 'For Her',
    subtitle: 'Elegant pieces she\'ll treasure',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    products: ['Rose Dawn', 'Pearl Strand', 'Drop Pearl']
  },
  {
    id: 'g2',
    title: 'For Him',
    subtitle: 'Bold designs for modern men',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=400&fit=crop',
    products: ['Midnight Classic', 'Diver Pro', 'Gold Signet']
  },
  {
    id: 'g3',
    title: 'Anniversary',
    subtitle: 'Celebrate your journey together',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop',
    products: ['Eternity Band', 'Gold Locket', 'His & Hers Classic']
  },
  {
    id: 'g4',
    title: 'Just Because',
    subtitle: 'Surprise someone special',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
    products: ['Stud Sparkle', 'Celestial Chain', 'Layered Moon']
  }
];
