import type { Product } from './product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Classic Sneakers',
    description: 'Comfortable everyday sneakers.',
    price: 8500,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    category: 'Shoes',
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: 'Minimalist Watch',
    description: 'A timeless design for every occasion.',
    price: 12000,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    category: 'Accessories',
    rating: 4.7,
    isNew: false,
  },
  {
    id: 3,
    name: 'Everyday Backpack',
    description: 'A practical backpack for daily use.',
    price: 6500,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
    category: 'Accessories',
    rating: 4.6,
    isNew: true,
  },
  {
    id: 4,
    name: 'Essential T-Shirt',
    description: 'A clean and versatile everyday T-shirt.',
    price: 2500,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80',
    category: 'Clothing',
    rating: 4.5,
    isNew: false,
  },
  {
    id: 5,
    name: 'Running Shoes',
    description: 'Lightweight shoes designed for movement.',
    price: 9500,
    image:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=80',
    category: 'Shoes',
    rating: 4.9,
    isNew: true,
  },
  {
    id: 6,
    name: 'Leather Shoulder Bag',
    description: 'A versatile bag with a refined silhouette.',
    price: 7800,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
    category: 'Accessories',
    rating: 4.4,
    isNew: false,
  },
];