import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Droplets, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Droplets className="text-white h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-white">
                On-Sight
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-blue-400">
                Plumbers of Brampton
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed">
            Professional plumbing services for Brampton and surrounding areas. 
            Reliable, efficient, and always on-sight when you need us most.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg">Our Services</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Emergency Plumbing</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Drain Cleaning</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Water Heater Repair</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Pipe Installation</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg">Contact Info</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
              <span>10095 Bramalea Rd, Brampton, ON L6R 0K1</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-400 shrink-0" />
              <a href="tel:2899073904" className="hover:text-blue-400 transition-colors">(289) 907-3904</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-400 shrink-0" />
              <a href="mailto:info@onsightplumbersofbrampton.site" className="hover:text-blue-400 transition-colors">info@onsightplumbersofbrampton.site</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {currentYear} On-Sight Plumbers of Brampton. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;