import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";
import SectionHeading from "./shared/SectionHeading";

const HomeProducts = () => {

  const { products, router } = useAppContext()

  return (
    <div className="flex flex-col items-center py-16">
      {/* Unified section heading */}
      <SectionHeading 
        title="Popular Products" 
        subtitle="Discover our curated collection of cutting-edge tech products"
      />

      {/* Enhanced product grid with neon styling */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mt-8 w-full">
        {products.map((product, index) => (
          <div key={index} className="transform transition-all duration-500 hover:scale-105" style={{ animationDelay: `${index * 100}ms` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Neon "See More" button */}
      <button 
        onClick={() => { router.push('/all-products') }} 
        className="mt-12 relative px-8 py-3 text-bg-primary bg-gradient-to-r from-neon-blue to-sky-400 hover:from-sky-400 hover:to-neon-blue rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] hover-glow group overflow-hidden tracking-wide"
      >
        <span className="relative z-10">See More</span>
        <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -inset-0.5 bg-gradient-neon rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-neon-pulse"></div>
      </button>
    </div>
  );
};

export default HomeProducts;
