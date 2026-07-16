import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import lipLiner from "@/assets/lupel/lip-liner.jpg";
import blushPalette from "@/assets/lupel/blush-palette.jpg";
import moistureBlend from "@/assets/lupel/moisture-blend.jpg";
import lipGloss from "@/assets/lupel/lip-gloss.jpg";
import liquidShimmer from "@/assets/lupel/liquid-shimmer.jpg";
import matteLipStain from "@/assets/lupel/matte-lip-stain.jpg";
import mensMoisturizer from "@/assets/lupel/mens-moisturizer.jpg";
import plumpingGloss from "@/assets/lupel/plumping-lip-gloss.jpg";

const products = [
  { name: "Automatic Lip Liner", subtitle: "Precision definition", price: "$24.99", rating: 5, image: lipLiner },
  { name: "Blush Palette", subtitle: "Radiant color", price: "$34.99", rating: 5, image: blushPalette },
  { name: "Extreme Moisture Blend", subtitle: "Deep hydration", price: "$29.99", rating: 5, image: moistureBlend },
  { name: "Lip Gloss", subtitle: "High shine finish", price: "$19.99", rating: 5, image: lipGloss },
  { name: "Liquid Shimmer", subtitle: "Luminous glow", price: "$27.99", rating: 5, image: liquidShimmer },
  { name: "Matte Lip Stain", subtitle: "Long-lasting color", price: "$22.99", rating: 5, image: matteLipStain },
  { name: "Men's Face Moisturizer", subtitle: "Daily hydration", price: "$32.99", rating: 5, image: mensMoisturizer },
  { name: "Plumping Lip Gloss", subtitle: "Fuller-looking lips", price: "$24.99", rating: 5, image: plumpingGloss },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden bg-luxury-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
