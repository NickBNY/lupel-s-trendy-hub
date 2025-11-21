import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cosmetics.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Luxury Cosmetics
          </p>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground leading-tight">
            Experience Radiant,
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">
              Healthy Skin
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Designed in Paris, made in America. Discover the finest luxury cosmetics
            that enhance your natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant group">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
