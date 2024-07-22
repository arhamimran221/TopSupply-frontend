import React from "react";
import Brand from "../assets/brand.avif"; 
const FeaturedBrands = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/2">
          <img src={Brand} alt="Brand" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 mt-4  lg:mt-0 p-10">
          <h1 className="text-4xl font-bold mb-3">Brands You Know</h1>
          <p className="text-gray-600 mb-6">
            We offer a wide selection of brand-name apparel that's primed for personalization. 
            Choose from popular brands like Nike, Carhartt, Comfort Colors, and Under Armour and create 
            distinctive, custom-made apparel.
          </p>
          <button className="bg-blue-500 h-[50px] hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">  
            SHOP FEATURED BRANDS
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
