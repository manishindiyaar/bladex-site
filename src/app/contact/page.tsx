import React from 'react';
import { FloatingNav } from "../components/ui/FloatingNavbar"; // Adjust path if necessary
import { navItems } from '../data/index'; // Adjust path if necessary
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black py-20">
      <FloatingNav navItems={navItems} />
      <div className="container mx-auto px-4 prose prose-invert max-w-4xl md:prose-lg mt-20">
        <ContactForm/>
        
        {/* Add more content as needed */}
      </div>
    </div>
  );
}