import React from 'react';
import { categories } from '../data/data';

const Categories = () => {
  return (
    <section className="categories-section py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center text-orange-500">Explore Yum Eats Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category) => (
            <div key={category.id} className="category-item rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-60 object-cover rounded-t-lg hover:opacity-80 transition duration-300 ease-in-out" 
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold mb-3 text-orange-500">{category.name}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
