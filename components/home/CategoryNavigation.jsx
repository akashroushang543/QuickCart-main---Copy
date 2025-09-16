"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from "../../assets/assets";
import { Cpu, Package, Keyboard, Monitor, Mic, Cable, Zap, Computer, Armchair, Gamepad2, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const childImageMapping = {
  "Cabinet": assets.cabinet,
  "Keyboard": assets.keyboard,
  "Mouse": assets.mouse,
  "Game Controllers": assets.game_controller,
  "Headphones": assets.headban,
  "Earphone": assets.earphone,
  "Cables": assets.cable,
  "Gaming Chair": assets.game_controller,
  "Cabinet Fans": assets.cabinet_fan,
  "Air Cooler": assets.air_cooler,
  "Converters / Adapters": assets.adapter,
  "Virtual Reality (VR)": assets.console,
  "Processor": assets.pc,
  "Prebuilt PC": assets.poster3,
  "UPS": assets.poster,
  "Microphone": assets.mic,
};

const categoryHierarchy = [
  { parent: "Core Components", image: assets.pc, icon: Cpu, children: ["Processor", "Motherboard", "RAM", "Graphics Card", "HDD", "SSD", "Power Supply"] },
  { parent: "Cooling & Cases", image: assets.cabinet, icon: Package, children: ["Cabinet", "Air Cooler", "Liquid Cooler", "Cabinet Fans", "Thermal Paste"] },
  { parent: "Input Peripherals", image: assets.mouse, icon: Keyboard, children: ["Keyboard", "Mouse", "Microphone", "Game Controllers", "Webcam"] },
  { parent: "Output Peripherals", image: assets.headban, icon: Monitor, children: ["Monitor", "Speakers", "Headphones", "Earphone"] },
  { parent: "Audio & Creation", image: assets.earphone, icon: Mic, children: ["Headphones", "Earphone", "Microphone", "Speakers", "Audio Mixing Solution", "Capture Card", "Stream Deck", "Prompter"] },
  { parent: "Connectivity", image: assets.cable, icon: Cable, children: ["Cables", "Converters / Adapters"] },
  { parent: "Power", image: assets.poster, icon: Zap, children: ["Power Supply", "UPS", "Powerbanks"] },
  { parent: "Prebuilt Systems", image: assets.poster3, icon: Computer, children: ["Prebuilt PC"] },
  { parent: "Ergonomics", image: assets.game_controller, icon: Armchair, children: ["Gaming Chair", "Mouse Pads", "Laptop Adjustable Stand", "Accessories", "Selfie Stick"] },
  { parent: "Gaming", image: assets.console, icon: Gamepad2, children: ["Game Controllers", "Gaming Chair", "Virtual Reality (VR)"] }
];

export default function CategoryNavigation() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const scrollRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (scrollRef.current) {
        setIsOverflowing(
          scrollRef.current.scrollWidth > scrollRef.current.clientWidth
        );
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => {
      window.removeEventListener('resize', checkOverflow);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = (categoryName) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(categoryName);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 150);
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <section className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {isOverflowing && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700/50 hover:bg-gray-600/50 text-white p-2 rounded-r-lg hidden md:block"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categoryHierarchy.map((category) => (
              <div key={category.parent} className="flex-shrink-0">
                <button
                  onClick={() => handleCategoryClick(category.parent)}
                  className="relative px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 flex items-center gap-2"
                >
                  {/* Desktop: Show image */}
                  <div className="hidden md:block">
                    <Image
                      src={category.image}
                      alt={category.parent}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                  </div>
                  
                  {/* Mobile: Show icon */}
                  <div className="md:hidden">
                    <category.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    {category.parent}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      activeCategory === category.parent ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              </div>
            ))}
          </div>

          {isOverflowing && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700/50 hover:bg-gray-600/50 text-white p-2 rounded-l-lg hidden md:block"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Expanded child categories grid */}
        {activeCategory && (
          <div className="pb-6">
            {categoryHierarchy
              .filter(category => category.parent === activeCategory)
              .map(category => (
                <div key={category.parent} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.children.map((child) => (
                    <Link
                      key={child}
                      href={`/category/${encodeURIComponent(child)}`}
                      className="flex flex-col items-center text-center gap-2 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-150"
                      onClick={() => setActiveCategory(null)}
                    >
                      <Image
                        src={childImageMapping[child] || category.image}
                        alt={child}
                        width={60}
                        height={60}
                        className="object-contain rounded-md"
                      />
                      <span className="text-sm text-gray-300 hover:text-orange-400">
                        {child}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
          </div>
        )}
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}