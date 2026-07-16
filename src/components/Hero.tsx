import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lupel/makeup-hero.jpg";
import lipGloss from "@/assets/lupel/lip-gloss.jpg";
import blushPalette from "@/assets/lupel/blush-palette.jpg";
import liquidShimmer from "@/assets/lupel/liquid-shimmer.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

          <div className="hidden lg:block relative h-[520px] animate-fade-in">
            <div className="absolute top-0 right-16 w-56 h-56 rounded-3xl overflow-hidden shadow-elegant animate-float">
              <img src={blushPalette} alt="Blush Palette" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-40 right-0 w-48 h-48 rounded-3xl overflow-hidden shadow-elegant animate-float" style={{ animationDelay: "1s" }}>
              <img src={liquidShimmer} alt="Liquid Shimmer" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-24 w-64 h-64 rounded-3xl overflow-hidden shadow-elegant animate-float" style={{ animationDelay: "2s" }}>
              <img src={lipGloss} alt="Lip Gloss" className="w-full h-full object-cover" />
            </div>
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

