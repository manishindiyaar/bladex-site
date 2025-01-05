import React from 'react';
import { FloatingNav } from "../components/ui/FloatingNavbar"; // Adjust path if necessary
import { navItems } from '../data/index'; // Adjust path if necessary

export default function AIVIsualsPage() {
  return (
    <div className="min-h-screen bg-black py-20">
      <FloatingNav navItems={navItems} />
      <div className="container mx-auto px-4 prose prose-invert max-w-4xl md:prose-lg mt-20">
        <h1 className="text-5xl font-bold mb-4">Loading...</h1>
        <p className="text-lg">
          we are working on it
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}