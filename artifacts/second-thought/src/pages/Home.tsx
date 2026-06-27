import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { BornWide } from '@/components/sections/BornWide';
import { Products } from '@/components/sections/Products';
import { Research } from '@/components/sections/Research';
import { Publishing } from '@/components/sections/Publishing';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <Hero />
        <About />
        <div id="framework" className="scroll-mt-20">
          <BornWide />
        </div>
        <Products />
        <Research />
        <Publishing />
        <Contact />
      </main>

      <footer className="bg-secondary/50 py-12 px-4 md:px-6 mt-12 border-t border-border">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl font-semibold">
            Second Thought
          </div>
          <div className="font-sans text-sm text-muted-foreground flex flex-col sm:flex-row items-center gap-4">
            <span>© {new Date().getFullYear()} Second Thought Studio.</span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <span>Designed for everyone.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
