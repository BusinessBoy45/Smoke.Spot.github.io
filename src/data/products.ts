export interface Product {
  name: string;
  description: string;
  category: string;
}

export const categories = [
  {
    name: 'Tobacco Products',
    items: [
      { name: 'Cigarettes', description: 'Wide variety of domestic and imported brands' },
      { name: 'Cigars', description: 'Premium hand-rolled and machine-made cigars' },
      { name: 'Pipe Tobacco', description: 'Quality blends for pipe enthusiasts' },
      { name: 'Chewing Tobacco', description: 'Various styles and flavors available' },
      { name: 'Snuff', description: 'Traditional nasal tobacco products' },
    ],
  },
  {
    name: 'Vaping Products',
    items: [
      { name: 'Disposable Vapes', description: 'Convenient single-use devices' },
      { name: 'Vape Pens', description: 'Refillable and customizable options' },
      { name: 'Vape Mods', description: 'Advanced devices for experienced vapers' },
      { name: 'E-Liquids', description: 'Wide range of flavors and nicotine strengths' },
      { name: 'Nicotine Salts', description: 'Smooth and satisfying nic salt e-liquids' },
      { name: 'Vape Accessories', description: 'Coils, pods, chargers, and batteries' },
    ],
  },
  {
    name: 'Hookah & Accessories',
    items: [
      { name: 'Hookah Pipes', description: 'Traditional and modern styles' },
      { name: 'Shisha', description: 'Premium flavored tobacco' },
      { name: 'Hookah Accessories', description: 'Charcoal, foil, tongs, and mouth tips' },
    ],
  },
  {
    name: 'Glass & Accessories',
    items: [
      { name: 'Glass Pipes', description: 'Hand-crafted artistic pieces' },
      { name: 'Water Pipes', description: 'Various sizes and styles' },
      { name: 'Accessories', description: 'Cleaning supplies, storage, and more' },
    ],
  },
  {
    name: 'Rolling Supplies',
    items: [
      { name: 'Rolling Papers', description: 'Various sizes and materials' },
      { name: 'Blunt Wraps', description: 'Multiple flavors available' },
      { name: 'Pre-rolled Cones', description: 'Ready-to-use rolling papers' },
      { name: 'Accessories', description: 'Grinders, lighters, and rolling trays' },
    ],
  },
  {
    name: 'Merchandise',
    items: [
      { name: 'Apparel', description: 'T-shirts, hoodies, and hats' },
      { name: 'Accessories', description: 'Posters, stickers, and keychains' },
    ],
  },
];