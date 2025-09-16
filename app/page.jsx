'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import CategoryNavigation from "@/components/home/CategoryNavigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <CategoryNavigation />
      
      {/* Full-width HeaderSlider */}
      <div className="w-full">
        <div className="relative">
          <div className="absolute -top-4 left-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl"></div>
          <HeaderSlider />
        </div>
      </div>
      
      {/* Rest of content with padding */}
      <div className="px-6 md:px-16 lg:px-32 space-y-16 py-8">
        <CategoryShowcase />
        
        <div className="relative">
          <div className="absolute -top-8 -right-8 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl"></div>
          <HomeProducts />
        </div>
        
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-neon-pink/10 rounded-full blur-2xl"></div>
          <FeaturedProduct />
        </div>
        
        <Banner />
        
        <div className="relative">
          <div className="absolute -top-4 -right-4 w-36 h-36 bg-neon-green/10 rounded-full blur-2xl"></div>
          <NewsLetter />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
