import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import productsImage from "@/assets/products-featured.jpg";

const products = [
  {
    name: "Automatic Lip Liner",
    subtitle: "Juliet",
    price: "$24.99",
    rating: 5,
    image: productsImage,
  },
  {
    name: "Luminous Foundation",
    subtitle: "Natural Glow",
    price: "$42.99",
    rating: 5,
    image: productsImage,
  },
  {
    name: "Silk Powder Blush",
    subtitle: "Rose Petal",
    price: "$32.99",
    rating: 5,
    image: productsImage,
  },
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <h4 className="font-serif text-xl font-bold mb-1 text-foreground">
                  {product.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Add to Cart
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
