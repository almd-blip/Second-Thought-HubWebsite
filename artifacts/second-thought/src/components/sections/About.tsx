import React from 'react';

export function About() {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 px-4 md:px-6 bg-secondary/30"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <div>
            <h2 
              id="about-heading"
              className="font-sans text-sm font-semibold tracking-wider uppercase text-primary mb-4"
            >
              About Second Thought
            </h2>
          </div>
          <div>
            <div className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground space-y-6">
              <p>
                Second Thought is an independent research and design studio. We believe inclusive design is not an afterthought — it is the foundation.
              </p>
              <p>
                Our work spans frameworks, products, research, and publishing, all guided by a single question: <em className="text-primary not-italic">what would this look like if it truly worked for everyone?</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
