import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProductCategoryProps {
  name: string;
  items: {
    name: string;
    description: string;
  }[];
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ name, items }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-start space-x-2 p-4 bg-black rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;