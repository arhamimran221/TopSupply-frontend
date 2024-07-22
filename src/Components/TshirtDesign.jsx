import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// Import assets for each color
import whiteShirt from "../assets/product/ZoomImage.jpeg";
import redShirt from "../assets/product/RedShirt.jpeg";
import orangeShirt from "../assets/product/orangeShirt.jpeg";
import yellowShirt from "../assets/product/yellowShirt.jpeg";
import greenShirt from "../assets/product/greenShirt.jpeg";
import purpleShirt from "../assets/product/purpleShirt.jpeg";
import lightpurpleShirt from "../assets/product/lightpurpleShirt.jpeg";
import pinkShirt from "../assets/product/pinkShirt.jpeg";
import blackShirt from "../assets/product/blackShirt.jpeg";
import gryShirt from "../assets/product/gryShirt.jpeg";
import DarkBlueShirt from "../assets/product/DarkBlueShirt.jpeg";
import LightBlueShirt from "../assets/product/LightBlueShirt.jpeg";
import { useNavigate } from "react-router-dom";

export default function TshirtDesign() {
  const [shirtImage, setShirtImage] = useState(whiteShirt); // Default to white shirt
  const [selectedColor, setSelectedColor] = useState("White"); // Default selected color

  const changeColor = (color, imageName) => {
    setShirtImage(imageName);
    setSelectedColor(color);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(
      '/design',
      {
        state: {
          color: selectedColor
        }
      }
    )
  }

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row items-start justify-center gap-4">
        {/* Image Column */}
        <div className="w-full md:w-1/2">
          <img
            src={shirtImage}
            alt="Customizable T-Shirt"
            className="mx-auto object-contain"
            style={{ maxHeight: "85vh", width: "auto", maxWidth: "100%" }}
          />
        </div>

        {/* Details Column */}
        <div className="w-full md:w-1/2 mt-4 md:mt-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
              <div className="text-sm text-gray-700 ml-2">
                28,000+ 5-star reviews
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold my-2">
              Design Custom T-Shirts
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-3">
              Make and print your own shirt design
            </p>
            <h3 className="text-lg font-semibold mb-2">
              Selected Color: {selectedColor}
            </h3>
            <div className="flex flex-row gap-2 my-5">
              <button
                onClick={() => changeColor("White", whiteShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "White" ? "border-black" : "border-gray-400"
                } bg-[#FFFFFF] focus:outline-none`}
              ></button>
              <button
                onClick={() => changeColor("Red", redShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Red" ? "border-black" : "border-gray-400"
                } bg-[#B2000C] focus:outline-none focus:shadow shadow-blue-600`}
              ></button>
              <button
                onClick={() => changeColor("Orange", orangeShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Orange" ? "border-black" : "border-gray-400"
                } bg-[#E25822] focus:outline-none`}
              ></button>
              <button
                onClick={() => changeColor("Yellow", yellowShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Yellow" ? "border-black" : "border-gray-400"
                } bg-[#FFE642] focus:outline-none`}
              ></button>
              <button
                onClick={() => changeColor("Green", greenShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Green" ? "border-black" : "border-gray-400"
                } bg-[#25AB79] focus:outline-none`}
              ></button>
              <button
                onClick={() => changeColor("Purple", purpleShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Purple" ? "border-black" : "border-gray-400"
                } bg-[#4D2379] focus:outline-none`}
              ></button>
            </div>
            <div className="flex flex-row gap-2">
              <button
                onClick={() => changeColor("Light purple", lightpurpleShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Light purple" ? "border-black" : "border-gray-400"
                } bg-[#9583B3] focus:outline-none`}
              ></button>
              <button
                onClick={() => changeColor("Pink", pinkShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Pink" ? "border-black" : "border-gray-400"
                } bg-[#F25894] focus:outline-none`}
              ></button>
              <button
                onClick={() => changeColor("Black", blackShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Black" ? "border-black" : "border-gray-400"
                } bg-[#36373B] focus:outline-none`}
              ></button>
              <button
                onClick={() => changeColor("Grey", gryShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Grey" ? "border-black" : "border-gray-400"
                } bg-[#94989B] focus:outline-none`}
              ></button>
              <button
                onClick={() => changeColor("Dark blue", DarkBlueShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Dark blue" ? "border-black" : "border-gray-400"
                } bg-[#546AA4] focus:outline-none`}
              ></button>
              <button
                onClick={() => changeColor("Light blue", LightBlueShirt)}
                className={`w-10 h-10 rounded-full border-4 ${
                  selectedColor === "Light blue" ? "border-black" : "border-gray-400"
                } bg-[#5AA1CD] focus:outline-none`}
              ></button>
            </div>
            <button
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-10"
              onClick={() => handleNavigation()}
            >
              Start Designing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
