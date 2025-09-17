import React from 'react';

const SectionHeading = ({ title, subtitle, align = 'center', className = '' }) => {
  return (
    <div className={`mb-0 ${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold section-bounce font-azonix text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[var(--text-secondary)] mt-3 md:mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-orange)] to-[var(--neon-pink)] mx-auto mt-4 md:mt-6 animate-neon-pulse"></div>
    </div>
  );
};

export default SectionHeading;