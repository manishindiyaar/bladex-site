"use client";

import React from "react";

import { companies, testimonials } from "../data/index";
import { InfiniteMovingCards } from "./ui/InfinityCard";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <section className="w-full py-20 relative">
      <section id="clients" className="py-20">
      <h1 className="heading"> 
        <span className="text-purple"> satisfied clients</span>
      </h1>
      </section>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
          {companies.map((company) => (
            <motion.div
              key={company.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: company.id * 0.2 }}
            >
              <div className="relative overflow-hidden rounded-lg bg-black/20 p-6 backdrop-blur-sm border border-white/[0.1] transition-colors group-hover:border-white/[0.2]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-0" />
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-full h-12 object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-200"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;