import React from 'react';
import { mealData } from '../data/data';

const Meal = ({ meals }) => {
  return (
    <section className="meal-section py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center text-orange-500">Delicious Meals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {mealData.map((meal) => (
            <div key={meal.id} className="meal-item rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out relative">
              <img 
                src={meal.image} 
                alt={meal.name} 
                className="w-full h-60 object-cover rounded-t-lg hover:opacity-80 transition duration-300 ease-in-out" 
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-white bg-opacity-80">
                <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                <p className="text-blue-500 mb-4">{meal.category}</p>
              </div>
              <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-b-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out">
                <span className="text-2xl font-bold">{meal.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meal;
