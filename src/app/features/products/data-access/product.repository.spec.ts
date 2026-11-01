import { ProductRepository } from './product.repository';

describe('ProductRepository', () => {
  it('provides products with unique ids and categories', () => {
    const products = new ProductRepository().getAll();

    expect(products.length).toBeGreaterThan(0);
    expect(new Set(products.map((product) => product.id)).size).toBe(products.length);
    expect(products.every((product) => product.category.length > 0)).toBe(true);
  });
});
