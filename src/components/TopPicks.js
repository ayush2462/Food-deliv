import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";

const TopPicks = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] mx-auto py-2 px-2">
        <Splide options={{ perPage: 3 }}>
          {topPicks.map((item, index) => (
            <SplideSlide key={index}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white flex flex-col justify-between">
                  <div className="px-2">
                    <p>{item.title}</p>
                  </div>
                  <button className="border-dotted border-white text-white mx-2 mb-2">Add to Cart</button>
                </div>
                <img 
                  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300" 
                  src={item.img} 
                  alt={item.title} 
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default TopPicks;
