import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[var(--bg-secondary)] my-16 rounded-xl overflow-hidden">
      <Image
        className="max-w-56"
        src={assets.poster}
        alt="gaming devices"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px] text-[var(--text-primary)]">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[343px] font-medium text-[var(--text-secondary)]">
          From immersive sound to precise controls—everything you need to win
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-gradient-to-r from-neon-orange to-orange-500 text-bg-primary hover:from-orange-500 hover:to-neon-orange transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,149,0,0.5)] rounded font-medium tracking-wide">
          Buy now
          <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon_white} alt="arrow_icon_white" />
        </button>
      </div>
      <Image
        className="hidden md:block max-w-80"
        src={assets.poster3}
        alt="In - House PC Setup"
      />
      <Image
        className="md:hidden"
        src={assets.poster3}
        alt="In - House PC Setup"
      />
    </div>
  );
};

export default Banner;