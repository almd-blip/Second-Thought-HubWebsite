import React from 'react';

const products = [
  {
    name: "Research Companion",
    description: "A calm, accessible research and note-taking environment built for focus and privacy.",
    status: "in development"
  },
  {
    name: "Harbour",
    description: "A safe digital space for emotional reflection and wellbeing.",
    status: "coming soon"
  },
  {
    name: "Born Accessible",
    description: "An accessibility auditing and guidance toolkit for design and engineering teams.",
    status: "coming soon"
  },
  {
    name: "Still Becoming",
    description: "A personal growth and journaling tool rooted in self-compassion.",
    status: "coming soon"
  }
];

export function Products() {
  return (
    <section 
      id="products" 
      className="py-24 md:py-32 px-4 md:px-6 bg-primary text-primary-foreground"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 
          id="products-heading"
          className="font-serif text-4xl md:text-5xl mb-16 md:mb-24"
        >
          Products
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {products.map((product, index) => (
            <article 
              key={index} 
              className="bg-primary-foreground/5 p-8 rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="font-serif text-2xl md:text-3xl">
                  {product.name}
                </h3>
                <span 
                  className={`shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-medium uppercase tracking-wider
                    ${product.status === 'in development' ? 'bg-accent text-accent-foreground' : 'bg-primary-foreground/20 text-primary-foreground'}
                  `}
                >
                  {product.status}
                </span>
              </div>
              <p className="font-sans text-lg text-primary-foreground/80 leading-relaxed">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
