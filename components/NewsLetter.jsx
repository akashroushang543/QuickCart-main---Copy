import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-medium text-[var(--text-primary)]">
        Subscribe now & get 20% off
      </h1>
      <p className="md:text-base text-[var(--text-secondary)] pb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-[var(--bg-tertiary)] rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-[var(--text-secondary)] bg-[var(--bg-card)]"
          type="text"
          placeholder="Enter your email id"
        />
        <button className="md:px-12 px-8 h-full text-bg-primary bg-gradient-to-r from-neon-orange to-orange-500 hover:from-orange-500 hover:to-neon-orange transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,149,0,0.5)] rounded-md rounded-l-none font-medium tracking-wide">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
