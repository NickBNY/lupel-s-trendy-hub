import { Shield, Leaf, Sparkles, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Dermatologist Tested",
    description: "All our products are clinically tested and approved by dermatologists",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We use only the finest natural and organic ingredients",
  },
  {
    icon: Sparkles,
    title: "Long-Lasting",
    description: "Professional-grade formulas that last all day",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by beauty experts worldwide",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">
            Why Choose Lupel
          </p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            The Lupel Difference
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-luxury flex items-center justify-center">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2 text-foreground">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
