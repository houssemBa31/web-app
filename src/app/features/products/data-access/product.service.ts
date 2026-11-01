import { Injectable, inject } from '@angular/core';
import { ProductRepository } from './product.repository';
import type { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly productRepository = inject(ProductRepository);

  getAll(): Product[] {
    return this.productRepository.getAll();
  }
}
