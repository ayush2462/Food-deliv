import React from 'react';
import { mealData } from '../data/data';
const Meal = ({ meals }) => {
  return (
    <section className="meal-section">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
    Our Meal
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mealData.map((meal, index) => (
          <div key={index} className="meal-item rounded-lg overflow-hidden shadow-md">
            <img 
              src={meal.image} 
              alt={meal.name} 
              className="w-full h-40 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{meal.name}</h3>
              <p className="text-sm text-gray-600">{meal.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meal;
