import React from "react";
import HeroSession from "../Components/HeroSession";
import ProductCategories from "../Components/ProductCategories";
import FeaturedBrands from "../Components/FeaturedBrands";
import PromoProducts from "../Components/PromoProducts";
import Deserves from "../Components/Deserves";
import Testimonials from "../Components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSession />
      <ProductCategories />
      <FeaturedBrands />
      <PromoProducts />
      <Deserves />
      <Testimonials />
    </>
  );
}
