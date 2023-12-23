import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";

const TopPicks = () => {
  return (
    <section className="top-picks-section py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-10 text-center text-orange-500">Top Picks</h1>
        <div className="hidden lg:flex max-w-[1520px] mx-auto py-2 px-2">
          <Splide options={{ perPage: 3 }}>
            {topPicks.map((item, index) => (
              <SplideSlide key={index}>
                <div className="rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                  <img 
                    className="w-full h-60 object-cover rounded-t-lg hover:opacity-80 transition duration-300 ease-in-out" 
                    src={item.img} 
                    alt={item.title} 
                  />
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white flex flex-col justify-between p-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-200">{item.description}</p>
                    </div>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300 ease-in-out">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
