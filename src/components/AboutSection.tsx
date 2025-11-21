import { Sparkles, Globe, Heart } from "lucide-react";
import parisImage from "@/assets/paris-aesthetic.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Crafted with the finest ingredients for exceptional results",
  },
  {
    icon: Globe,
    title: "Paris Designed",
    description: "Inspired by French elegance and sophistication",
  },
  {
    icon: Heart,
    title: "Made in America",
    description: "Proudly manufactured with the highest standards",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">
              Our Story
            </p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              Designed in Paris,
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                Made in America
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Lupel brings together the timeless elegance of Parisian beauty with
              American innovation and quality. Each product is meticulously crafted
              to enhance your natural radiance and provide exceptional results.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-luxury flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-1 text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-luxury opacity-20 blur-3xl rounded-full" />
            <img 
              src={parisImage} 
              alt="Paris aesthetic"
              className="relative rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
