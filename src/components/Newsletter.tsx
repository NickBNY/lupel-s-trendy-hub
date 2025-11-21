import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-luxury p-12 md:p-16 text-center shadow-elegant">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCwyIDQsNGMwLDItMiw0LTQsNHMtNC0yLTQtNHptMC0xNmMwLTIgMi00IDQtNHM0LDIgNCw0YzAsMi0yLDQtNCw0cy00LTItNC00em0tMTYgMTZjMC0yIDItNCA0LTRzNCwyIDQsNGMwLDItMiw0LTQsNHMtNC0yLTQtNHptMC0xNmMwLTIgMi00IDQtNHM0LDIgNCw0YzAsMi0yLDQtNCw0cy00LTItNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            
            <div className="relative z-10">
              <Mail className="h-12 w-12 mx-auto mb-6 text-white" />
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
                Join Our Beauty Circle
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to receive exclusive offers, beauty tips, and be the first
                to know about new product launches.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground flex-1"
                />
                <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90">
                  Subscribe
                </Button>
              </form>
              
              <p className="text-sm text-white/80 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
