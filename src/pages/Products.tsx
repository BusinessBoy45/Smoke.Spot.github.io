import React from 'react';
import { categories } from '../data/products';
import ProductCategory from '../components/ProductCategory';

const Products = () => {
  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Products</h1>
        <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Explore our wide selection of premium tobacco, vaping products, and accessories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <ProductCategory
              key={category.name}
              name={category.name}
              items={category.items}
            />
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for Something Specific?</h2>
          <p className="text-lg mb-4">
            Can't find what you're looking for? Visit our store or give us a call!
          </p>
          <a
            href="tel:4107027252"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Call Us: (410) 702-7252
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;