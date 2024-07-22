import React, { useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials  = [
  {
    id: 1,
    title: "Another Happy Customer",
    content: "We ordered shirts to promote our new LLC which turned out amazing! The print was fantastic, exactly as I put it on the website; the shirts fit perfectly! From the final products to their phenomenal customer service, this place is the place to order...",
    author: "Alison D.",
    verified: true
  },
  {
    id: 2,
    title: "Great Shirts",
    content: "The shirts are great, we got a tri blend which are super soft and comfortable, we've had people ask where they can get them. Ordering was easy and intuitive, shirts arrived on time, logos and writing were exactly what we wanted. Definitely...",
    author: "Jonathan N.",
    verified: true
  },
  {
    id: 3,
    title: "Amazing Service, will def use again!",
    content: "I had an order I needed a really quick turnaround. Rush Order Tees made it so easy to get some designs started with their online system and their email, chat and phone services were really wonderful throughout the whole process. My shirts came in...",
    author: "Allison A.",
    verified: true
  },
  {
    id: 4,
    title: " def use again!",
    content: "I had an order I needed a really quick turnaround. Rush Order Tees made it so easy to get some designs started with their online system and their email, chat and phone services were really wonderful throughout the whole process. My shirts came in...",
    author: "Allison A.",
    verified: true
  },
  {
    id: 5,
    title: " again!",
    content: "I had an order I needed a really quick turnaround. Rush Order Tees made it so easy to get some designs started with their online system and their email, chat and phone services were really wonderful throughout the whole process. My shirts came in...",
    author: "Allison A.",
    verified: true
  },
  {
    id: 6,
    title: "Service, will def use again!",
    content: "I had an order I needed a really quick turnaround. Rush Order Tees made it so easy to get some designs started with their online system and their email, chat and phone services were really wonderful throughout the whole process. My shirts came in...",
    author: "Allison A.",
    verified: true
  },
];

const Testimonials = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Adjust the number of items per page based on window width
    if (windowWidth < 768) { // Assuming 768px is your breakpoint for 'md' size
      setItemsPerPage(1);
    } else {
      setItemsPerPage(3);
    }
  }, [windowWidth]);

  const nextTestimonials = () => {
    setCurrentStartIndex((currentStartIndex + itemsPerPage) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentStartIndex((currentStartIndex - itemsPerPage + testimonials.length) % testimonials.length);
  };

  const currentTestimonials = testimonials.slice(currentStartIndex, currentStartIndex + itemsPerPage);

  return (
    <div className="bg-[#F3F4F6] py-8 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Customers Love Us</h2>
        <div className="relative flex items-center justify-center">
          <button onClick={prevTestimonials} className="absolute left-[-1%] top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowLeft className="w-10 h-10 text-black border-2  rounded-full p-2 border-black hover:bg-black hover:border-white hover:text-white transition duration-300 ease-in-out" />
          </button>
          <div className="flex justify-around w-full">
            {currentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-4 bg-white shadow-lg rounded-lg flex-1 mx-2">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{testimonial.title}</h3>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                {testimonial.verified && (
                  <div className="flex items-center justify-center text-green-500">
                    <FaCheckCircle />
                    <span className="ml-1 text-sm">Verified Review on Yotpo</span>
                  </div>
                )}
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
          <button onClick={nextTestimonials} className="absolute right-[-1%] top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowRight className="w-10 h-10 text-black border-2  rounded-full p-2 border-black hover:bg-black hover:border-white hover:text-white transition duration-300 ease-in-out"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

