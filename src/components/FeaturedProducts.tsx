import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import lipLiner from "@/assets/lupel/lip-liner.jpg";
import lipLinerAlt from "@/assets/lupel/lip-liner-2.png";
import blushPalette from "@/assets/lupel/blush-palette.jpg";
import blushPaletteAlt from "@/assets/lupel/blush-palette-2.png";
import moistureBlend from "@/assets/lupel/moisture-blend.jpg";
import moistureBlendAlt from "@/assets/lupel/moisture-blend-2.png";
import lipGloss from "@/assets/lupel/lip-gloss.jpg";
import lipGlossAlt from "@/assets/lupel/lip-gloss-2.png";
import lipGlossShine from "@/assets/lupel/lip-gloss-shine.png";
import lipGlossShineAlt from "@/assets/lupel/lip-gloss-shine-2.png";
import liquidShimmer from "@/assets/lupel/liquid-shimmer.jpg";
import liquidShimmerAlt from "@/assets/lupel/liquid-shimmer-2.png";
import matteLipStain from "@/assets/lupel/matte-lip-stain.jpg";
import matteLipStainAlt from "@/assets/lupel/matte-lip-stain-2.png";
import mensMoisturizer from "@/assets/lupel/mens-moisturizer.jpg";
import mensMoisturizerAlt from "@/assets/lupel/mens-moisturizer-2.png";
import plumpingGloss from "@/assets/lupel/plumping-lip-gloss.jpg";

const products = [
  { name: "Automatic Lip Liner", subtitle: "Juliet", price: "$20.00", rating: 5, image: lipLiner, alt: lipLinerAlt },
  { name: "Blush Palette", subtitle: "Squish", price: "$24.00", rating: 5, image: blushPalette, alt: blushPaletteAlt },
  { name: "Extreme Moisture Blend", subtitle: "Deep hydration", price: "$23.00", rating: 5, image: moistureBlend, alt: moistureBlendAlt },
  { name: "Lip Gloss", subtitle: "Seduction", price: "$21.00", rating: 5, image: lipGloss, alt: lipGlossAlt },
  { name: "Lip Gloss", subtitle: "Shine", price: "$21.00", rating: 5, image: lipGlossShine, alt: lipGlossShineAlt },
  { name: "Liquid Shimmer", subtitle: "Hottie", price: "$25.00", rating: 5, image: liquidShimmer, alt: liquidShimmerAlt },
  { name: "Matte Lip Stain", subtitle: "Dusty Pear", price: "$22.00", rating: 5, image: matteLipStain, alt: matteLipStainAlt },
  { name: "Men's Face Moisturizer", subtitle: "Daily hydration", price: "$50.00", rating: 5, image: mensMoisturizer, alt: mensMoisturizerAlt },
  { name: "Plumping Lip Gloss", subtitle: "Fuller-looking lips", price: "$29.00", rating: 5, image: plumpingGloss, alt: plumpingGloss },
];

export const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">
            Bestsellers
          </p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Featured Products
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved products, crafted with the finest ingredients
            for exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden bg-luxury-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <img
                  src={product.alt}
                  alt={`${product.name} alternate view`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <h4 className="font-serif text-lg font-bold mb-1 text-foreground">
                  {product.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  {product.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-secondary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
