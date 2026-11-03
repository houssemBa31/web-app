import { Component, HostListener, computed, effect, inject, signal } from '@angular/core';
import { ProductService } from '../products/data-access/product.service';
import type { Product } from '../products/models/product.model';
import { NgClass } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

interface CartLine {
  product: Product;
  qty: number;
}

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'rating';

const CART_KEY = 'houss-store-cart';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  imports: [NgClass],
})
export class HomePage {
  private readonly productService = inject(ProductService);
  readonly products: Product[] = this.productService.getAll();
  readonly categories: string[] = [
    'All',
    ...new Set(this.products.map((product) => product.category)),
  ];

  // --- Filtres ---
  readonly searchQuery = signal('');
  readonly selectedCategory = signal('All');
  readonly sortBy = signal<SortKey>('featured');
  readonly onlyNew = signal(false);

  readonly filteredProducts = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    const cat = this.selectedCategory();

    const list = this.products.filter(
      (p) =>
        (cat === 'All' || p.category === cat) &&
        (!this.onlyNew() || p.isNew) &&
        (!q || `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(q)),
    );

    switch (this.sortBy()) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  });

  readonly hasActiveFilters = computed(
    () => !!this.searchQuery() || this.selectedCategory() !== 'All' || this.onlyNew(),
  );

  // --- Panier (persisté) ---
  readonly cart = signal<CartLine[]>(this.loadCart());
  readonly cartOpen = signal(false);
  readonly toast = signal<string | null>(null);
  private toastTimer?: ReturnType<typeof setTimeout>;

  readonly cartCount = computed(() => this.cart().reduce((n, l) => n + l.qty, 0));
  readonly cartTotal = computed(() =>
    this.cart().reduce((sum, l) => sum + l.product.price * l.qty, 0),
  );

  constructor() {
    effect(() => {
      const data = JSON.stringify(this.cart());
      try {
        localStorage.setItem(CART_KEY, data);
      } catch {
        /* stockage indisponible : on ignore */
      }
    });
  }

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  showNewArrivals(): void {
    this.resetFilters();
    this.onlyNew.set(true);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }

  resetFilters(): void {
    this.searchQuery.set('');
    this.selectedCategory.set('All');
    this.onlyNew.set(false);
    this.sortBy.set('featured');
  }

  addToCart(product: Product): void {
    this.cart.update((lines) => {
      const found = lines.find((l) => l.product.id === product.id);
      return found
        ? lines.map((l) => (l === found ? { ...l, qty: l.qty + 1 } : l))
        : [...lines, { product, qty: 1 }];
    });
    this.showToast(`${product.name} added to cart`);
  }

  changeQty(id: number, delta: number): void {
    this.cart.update((lines) =>
      lines
        .map((l) => (l.product.id === id ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0),
    );
  }

  removeLine(id: number): void {
    this.cart.update((lines) => lines.filter((l) => l.product.id !== id));
  }

  @HostListener('document:keydown.escape')
  closeCart(): void {
    this.cartOpen.set(false);
  }

  fmt(value: number): string {
    return `${value.toLocaleString('fr-DZ')} DA`;
  }

  private showToast(message: string): void {
    this.toast.set(message);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toast.set(null), 2200);
  }

  private loadCart(): CartLine[] {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY) ?? '[]');
    } catch {
      return [];
    }
  }
}