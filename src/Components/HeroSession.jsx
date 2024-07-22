import React from "react";
import HeroImg from "../assets/hero-img.avif";

export default function HeroSession() {
  return (
    <div className="bg-white px-10">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-1/2 mb-20 lg:mb-0">
          <h1 className="lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-bold text-gray-800 mb-4">
            Customize Anything on Any Deadline
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apparel and promo products for your event, business, group, or team
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              SHOP PRODUCTS
            </button>
            <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              START DESIGNING
            </button>
          </div>
          <div className="bg-gray-100 py-8 px-4">
            <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3  gap-4 text-center">
              {/* First Column */}
              <div className="flex flex-col items-center py-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Free Delivery
                </h2>
                <p className="text-gray-600 mt-2">As soon as Fri, May 24</p>
              </div>

              {/* Vertical Divider */}
              <div className="flex flex-col items-center py-4  md:border-r md:border-l lg:border-r lg:border-l border-blue-500">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Rush Delivery
                </h2>
                <p className="text-gray-600 mt-2">Guaranteed by Wed, May 15</p>
              </div>

              {/* Third Column */}
              <div className="flex flex-col items-center py-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Need it Sooner?
                </h2>
                <p className="text-gray-600 mt-2">
                  Call 1-800-620-1233 or Live Chat
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={HeroImg}
            alt="Promo Products"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
