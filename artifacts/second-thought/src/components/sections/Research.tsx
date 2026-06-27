import React from 'react';

const themes = [
  "Inclusive AI",
  "Accessible interfaces",
  "Emotional safety in digital spaces",
  "Privacy-first design"
];

export function Research() {
  return (
    <section 
      id="research" 
      className="py-24 md:py-32 px-4 md:px-6"
      aria-labelledby="research-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 
            id="research-heading"
            className="font-serif text-4xl md:text-5xl text-foreground mb-6"
          >
            Research
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ongoing initiatives and explorations into how technology intersects with human vulnerability and capability.
          </p>
        </div>

        <div className="grid gap-6">
          <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-primary mb-2 text-center">
            Current Themes
          </h3>
          <ul className="flex flex-wrap justify-center gap-4" aria-label="Research themes">
            {themes.map((theme, index) => (
              <li 
                key={index}
                className="bg-secondary px-6 py-3 rounded-full font-sans text-secondary-foreground text-sm md:text-base border border-border"
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
