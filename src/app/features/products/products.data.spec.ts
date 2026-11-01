import { PRODUCTS } from './products.data';

describe('PRODUCTS', () => {
  it('provides products with unique ids and categories', () => {
    expect(PRODUCTS.length).toBeGreaterThan(0);
    expect(new Set(PRODUCTS.map((product) => product.id)).size).toBe(PRODUCTS.length);
    expect(PRODUCTS.every((product) => product.category.length > 0)).toBe(true);
  });
});
