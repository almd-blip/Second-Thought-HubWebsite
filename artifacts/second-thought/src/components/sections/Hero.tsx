import React from 'react';

export function Hero() {
  return (
    <section 
      className="min-h-[90vh] flex items-center pt-24 pb-12 px-4 md:px-6"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <h1 
          id="hero-heading"
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          Technology that begins with the human.
        </h1>
        <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-[65ch] mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
          Second Thought builds frameworks, tools, and research for a world where every person belongs from the start.
        </p>
        <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <a 
            href="#framework"
            className="inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-sans font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Explore our Framework
          </a>
          <a 
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-sans font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            About the Studio
          </a>
        </div>
      </div>
    </section>
  );
}
