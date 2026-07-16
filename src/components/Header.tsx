import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu } from "lucide-react";
import logo from "@/assets/lupel/lupel-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={logo} alt="Lupel" className="h-10 w-auto" />
          <nav className="hidden md:flex gap-6">
            <a href="#products" className="text-sm text-foreground hover:text-primary transition-smooth">
              Products
            </a>
            <a href="#about" className="text-sm text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-secondary">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
