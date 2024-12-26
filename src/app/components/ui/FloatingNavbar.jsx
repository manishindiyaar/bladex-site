"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";



export const FloatingNav = ({ navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 inset-x-0 max-w-4xl mx-auto z-50 px-4"
    >
      <nav className={`
        w-full px-8 py-4 rounded-2xl flex justify-between items-center
        backdrop-blur-2xl border border-white/20
        ${isScrolled ? 'bg-black/40' : 'bg-black/60'}
        transition-all duration-200 ease-in-out
        shadow-[0_16px_48px_0_rgba(31,38,135,0.47)]
      `}>
        
        <div className="flex items-center justify-between w-full gap-1">
  {navItems.map((item, index) => {
    // Only show specific items on small screens
    const isVisibleOnSmallScreens = item.name === "home" || item.name === "about" || item.name === "blogs" || item.name === "contact";
    
    return (
      <Link
        key={item.name}
        href={item.link}
        className={`relative group flex-1 text-center ${isVisibleOnSmallScreens ? 'block' : 'hidden md:block'}`} // Hide on small screens
      >
        <span className="relative z-20 text-sm font-medium text-zinc-300 transition-colors duration-100 group-hover:text-white">
          {item.name}
        </span>
        <motion.span
          layoutId="navbar-pill"
          transition={{ type: "spring", bounce: 0.3 }}
          className="absolute inset-0 -z-15 rounded-full bg-gradient-to-r from-purple-600/50 to-cyan-600/50 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-200"
        />
      </Link>
    );
  })}
</div>

        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </nav>
    </motion.div>
  );
};

export default FloatingNav;