import React from 'react';

const pillars = [
  {
    title: "Welcoming",
    description: "Every entry point assumes the broadest possible audience. No gatekeeping, no prerequisites, no assumptions about who belongs."
  },
  {
    title: "Inclusive and Accessible",
    description: "Design and technology that remove barriers rather than create them. WCAG compliance is the floor, not the ceiling."
  },
  {
    title: "Diverse and Equitable",
    description: "Representation in the room and in the work. Equity in outcomes, not just intention."
  }
];

export function BornWide() {
  return (
    <section 
      id="born-wide" 
      className="py-24 md:py-32 px-4 md:px-6"
      aria-labelledby="born-wide-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 
            id="born-wide-heading"
            className="font-serif text-4xl md:text-5xl text-foreground mb-6"
          >
            The Born WIDE Framework
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Our core methodology for accessible, inclusive product design. It serves as a compass for every project we undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-4 bg-secondary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary font-serif font-bold text-xl" aria-hidden="true">
                  {index + 1}
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
