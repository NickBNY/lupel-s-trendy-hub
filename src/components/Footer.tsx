import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/lupel/lupel-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Lupel" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/80 text-sm">
              Luxury cosmetics designed in Paris, made in America.
            </p>
          </div>
          
          <div>
            <h5 className="font-serif font-bold mb-4">Shop</h5>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Lips</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Face</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Eyes</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-serif font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-serif font-bold mb-4">Follow Us</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>&copy; 2024 Lupel Cosmetics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
