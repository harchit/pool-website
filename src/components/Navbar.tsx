import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
            <Droplets className="text-white h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-xl leading-none", scrolled ? "text-blue-900" : "text-blue-900")}>
              On-Sight
            </span>
            <span className={cn("text-xs font-medium tracking-wider uppercase", scrolled ? "text-blue-600" : "text-blue-600")}>
              Plumbers of Brampton
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-blue-600",
                location.pathname === link.path ? "text-blue-600" : "text-slate-700"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
            <a href="tel:2899073904" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (289) 907-3904
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-semibold",
                location.pathname === link.path ? "text-blue-600" : "text-slate-700"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 text-lg">
            <a href="tel:2899073904" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              (289) 907-3904
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
