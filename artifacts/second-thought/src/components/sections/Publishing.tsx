import React from 'react';

export function Publishing() {
  return (
    <section 
      id="publishing" 
      className="py-24 md:py-32 px-4 md:px-6 bg-secondary/30"
      aria-labelledby="publishing-heading"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="w-16 h-16 mx-auto mb-8 text-primary opacity-50" aria-hidden="true">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 
          id="publishing-heading"
          className="font-serif text-4xl md:text-5xl text-foreground mb-8"
        >
          Publishing
        </h2>
        <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto">
          Second Thought publishes books, guides, and research that make the principles of inclusive design legible to practitioners, leaders, and everyday people.
        </p>
      </div>
    </section>
  );
}
