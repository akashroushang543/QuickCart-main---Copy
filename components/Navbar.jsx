"use client"
import React, { useState } from "react";
import { assets, BagIcon, CartIcon} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {openSignIn} = useClerk();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 bg-bg-secondary/80 backdrop-blur-md border-b border-neon-blue/20 sticky top-0 z-50">
      {/* Logo with neon glow */}
      <div className="relative">
        <Image
          className="cursor-pointer w-28 md:w-32 hover:scale-105 transition-transform duration-300 hover-glow"
          onClick={() => router.push('/')}
          src={assets.logo}
          alt="logo"
        />
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-neon opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Navigation links with neon hover effects */}
      <div className="flex items-center gap-6 lg:gap-10 max-md:hidden">
        <Link href="/" className="relative text-text-primary hover:text-neon-blue transition-all duration-300 group">
          <span className="relative z-10 text-lg md:text-xl lg:text-2xl font-bold">Home</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/all-products" className="relative text-text-primary hover:text-neon-blue transition-all duration-300 group">
          <span className="relative z-10 text-lg md:text-xl lg:text-2xl font-bold">Shop</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/" className="relative text-text-primary hover:text-neon-blue transition-all duration-300 group">
          <span className="relative z-10 text-lg md:text-xl lg:text-2xl font-bold">About Us</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/" className="relative text-text-primary hover:text-neon-blue transition-all duration-300 group">
          <span className="relative z-10 text-lg md:text-xl lg:text-2xl font-bold">Contact</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {isSeller && (
          <button 
            onClick={() => router.push('/seller')} 
            className="relative text-xs px-6 py-2 rounded-full border-2 border-transparent bg-gradient-to-r from-neon-blue to-sky-400 text-bg-primary hover:from-sky-400 hover:to-neon-blue transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] font-medium tracking-wide"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Search and Account icons with neon styling */}
      <ul className="hidden md:flex items-center gap-6">
        <button className="relative p-2 text-text-secondary hover:text-neon-blue transition-all duration-300 hover-glow">
          <Image className="w-5 h-5" src={assets.search_icon} alt="search icon" />
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
        </button>
      
      {
       user
        ? <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
           <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
        </UserButton>
        </>
        
        : <button onClick={openSignIn} className="flex items-center gap-2 text-text-secondary hover:text-neon-blue transition-all duration-300 group">
          <Image className="w-5 h-5" src={assets.user_icon} alt="user icon" />
          <span className="relative text-lg md:text-xl lg:text-2xl font-bold">
            Account
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>}
      </ul>

      {/* Mobile menu with neon styling */}
      <div className="flex items-center md:hidden gap-4">
        {isSeller && (
          <button 
            onClick={() => router.push('/seller')} 
            className="text-xs px-4 py-2 rounded-full border-2 border-transparent bg-gradient-to-r from-neon-blue to-sky-400 text-bg-primary hover:from-sky-400 hover:to-neon-blue transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] font-medium tracking-wide"
          >
            Dashboard
          </button>
        )}
        {
       user
        ? <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
           <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
        </UserButton>
        </>
        
        : <button className="flex items-center gap-2 text-text-secondary hover:text-neon-blue transition-all duration-300">
          <Image className="w-5 h-5" src={assets.user_icon} alt="user icon" />
          <span>Account</span>
        </button>}
      </div>

      {/* Mobile menu button with neon styling */}
      <button 
        className="md:hidden p-2 text-text-secondary hover:text-neon-blue transition-colors duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-gradient-to-b from-bg-secondary via-bg-card to-bg-primary border-t border-neon-blue/20 z-40 backdrop-blur-lg">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative flex flex-col items-center gap-6 py-8 px-6 bg-gradient-to-b from-bg-secondary/95 via-bg-card/90 to-bg-primary/95 backdrop-blur-xl shadow-2xl shadow-neon-blue/10">
            <Link 
              href="/" 
              className="text-text-primary hover:text-neon-blue transition-all duration-300 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/all-products" 
              className="text-text-primary hover:text-neon-blue transition-all duration-300 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/" 
              className="text-text-primary hover:text-neon-blue transition-all duration-300 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/" 
              className="text-text-primary hover:text-neon-blue transition-all duration-300 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="flex items-center gap-4 mt-4">
              {/* <button className="p-2 text-text-secondary hover:text-neon-blue transition-all duration-300">
                <Image className="w-5 h-5" src={assets.search_icon} alt="search icon" />
              </button> */}
             {
       user
        ? <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
           <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
        </UserButton>
        </>
        
        :  <button className="flex items-center gap-2 text-text-secondary hover:text-neon-blue transition-all duration-300">
                <Image className="w-5 h-5" src={assets.user_icon} alt="user icon" />
                <span>Account</span>
              </button>}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;