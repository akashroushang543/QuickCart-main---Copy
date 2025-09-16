import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary/50 backdrop-blur-sm border-t border-neon-blue/20 mt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-secondary/50 to-transparent pointer-events-none"></div>
      
      <div className="relative flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-16 text-text-secondary">
        {/* Logo and Description */}
        <div className="w-full md:w-2/5">
          <div className="relative inline-block group">
            <Image 
              className="w-32 md:w-36 hover-glow transition-all duration-300" 
              src={assets.logo} 
              alt="logo" 
            />
            <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-500"></div>
          </div>
          
          <p className="mt-6 text-sm leading-relaxed text-text-secondary/80 max-w-md">
            Experience the future of e-commerce with our cutting-edge platform. 
            Discover premium tech products enhanced with stunning neon aesthetics 
            and seamless shopping experience.
          </p>
          
          {/* Social media icons with neon styling */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: assets.facebook_icon, name: 'Facebook' },
              { icon: assets.instagram_icon, name: 'Instagram' },
              { icon: assets.twitter_icon, name: 'Twitter' }
            ].map((social, index) => (
              <button 
                key={index} 
                className="p-2 rounded-lg bg-bg-tertiary/50 border border-neon-blue/20 hover:border-neon-blue hover:bg-neon-blue/20 transition-all duration-300 hover-glow"
              >
                <Image 
                  className="w-5 h-5 filter brightness-0 invert hover:brightness-100 transition-all duration-300" 
                  src={social.icon} 
                  alt={social.name} 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/4">
          <h2 className="font-bold text-lg text-text-primary mb-6 relative">
            Company
            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-neon rounded-full"></div>
          </h2>
          <ul className="space-y-3">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact Us', href: '/contact' },
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms of Service', href: '/terms' }
            ].map((link, index) => (
              <li key={index}>
                <a 
                  className="text-sm text-text-secondary/80 hover:text-neon-blue transition-all duration-300 group flex items-center gap-2"
                  href={link.href}
                >
                  <span className="w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-4"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/4">
          <h2 className="font-bold text-lg text-text-primary mb-6 relative">
            Get in Touch
            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-neon rounded-full"></div>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-neon-pulse"></div>
              <p className="text-sm text-text-secondary/80">+91 9565029912</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
              <p className="text-sm text-text-secondary/80">contact@greatstack.dev</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-neon-pink rounded-full animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
              <p className="text-sm text-text-secondary/80">Sakinaka, Mumbai (MH)</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="w-full md:w-1/4">
          <h2 className="font-bold text-lg text-text-primary mb-6 relative">
            Newsletter
            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-neon rounded-full"></div>
          </h2>
          <p className="text-sm text-text-secondary/80 mb-4">Stay updated with our latest products and offers.</p>
        <div className="flex flex-row items-center md:flex-col md:items-stretch md:gap-2 bg-bg-tertiary/50 border border-neon-blue/20 rounded-lg p-1 focus-within:border-neon-blue focus-within:shadow-neon-blue transition-all duration-300">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-grow px-4 py-2 bg-transparent text-text-primary placeholder-text-secondary/50 focus:outline-none"
          />
          <button className="flex-shrink-0 md:w-full px-4 py-1.5 bg-neon-blue text-bg-primary rounded-md text-sm font-medium hover:bg-neon-purple transition-all duration-300 hover:shadow-neon-purple">
            Subscribe
          </button>
        </div>
      </div>
    </div>

          {/* <p className="text-sm text-text-secondary/80 mb-4">Stay updated with our latest products and offers.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 bg-bg-tertiary/50 border border-neon-blue/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-neon-blue focus:shadow-neon-blue transition-all duration-300"
            />
            <button className="absolute right-1 top-1 px-4 py-1.5 bg-neon-blue text-bg-primary rounded-md text-sm font-medium hover:bg-neon-purple transition-all duration-300 hover:shadow-neon-purple">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}

      {/* Copyright with neon styling */}
      <div className="relative bg-bg-primary/50 backdrop-blur-sm py-6 border-t border-neon-blue/10">
      <p className="text-center text-sm md:text-base flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span className="text-gray-400">Copyright 2025 ©</span>
        <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-sky-500 bg-clip-text text-transparent">
          {" "}
          RRJ Traders{" "}
        </span>
        <span className="hidden md:inline text-gray-600">|</span>
        <span className="text-gray-400">All Rights Reserved</span>
      </p>
    </div>

      {/* <div className="relative bg-bg-primary/50 backdrop-blur-sm py-6 border-t border-neon-blue/10">
        <p className="text-center text-sm text-text-secondary/70">
          <span className="text-neon-blue">Copyright 2025 ©</span>
          <span className="text-neon-purple"> RRJ Traders </span>
          <span className="text-neon-pink"> All Rights Reserved</span>
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <div className="w-2 h-2 bg-neon-blue rounded-full animate-neon-pulse"></div>
          <div className="w-2 h-2 bg-neon-purple rounded-full animate-neon-pulse" style={{ animationDelay: '0.33s' }}></div>
          <div className="w-2 h-2 bg-neon-pink rounded-full animate-neon-pulse" style={{ animationDelay: '0.66s' }}></div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;