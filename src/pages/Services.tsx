import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Droplets, ShieldCheck, Clock, Hammer, Settings, Zap, Thermometer, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Emergency Plumbing",
      description: "Burst pipes, major leaks, and overflowing toilets don't wait for business hours. Our emergency Brampton plumbers are available 24/7 to handle your most urgent crises.",
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      features: ["24/7 Availability", "Rapid Response Time", "Expert Troubleshooting", "Immediate Repairs"],
    },
    {
      title: "Drain Cleaning & Repair",
      description: "Stubborn clogs and slow drains can be a major inconvenience. We use advanced techniques like hydro-jetting to clear your pipes and keep them flowing smoothly.",
      icon: <Droplets className="h-10 w-10 text-blue-600" />,
      features: ["Hydro-Jetting", "Clog Removal", "Drain Snaking", "Sewer Line Inspection"],
    },
    {
      title: "Water Heater Services",
      description: "Whether you need a new installation or a quick repair, we handle all types of water heaters, including tankless, gas, and electric models in Brampton.",
      icon: <Thermometer className="h-10 w-10 text-blue-600" />,
      features: ["New Installations", "Repair & Maintenance", "Tankless Upgrades", "Efficiency Checks"],
    },
    {
      title: "Pipe Installation & Repair",
      description: "From fixing a small leak to complete repiping of your home or business, our Brampton plumbing experts ensure your system is durable and leak-free.",
      icon: <Hammer className="h-10 w-10 text-blue-600" />,
      features: ["Copper & PEX Piping", "Leak Detection", "Repiping Services", "Joint Repairs"],
    },
    {
      title: "Fixture Installation",
      description: "Upgrading your kitchen or bathroom? We install faucets, sinks, toilets, showers, and more with precision and care for Brampton residents.",
      icon: <Settings className="h-10 w-10 text-blue-600" />,
      features: ["Kitchen Faucets", "Bathroom Fixtures", "Toilet Replacement", "Showerhead Upgrades"],
    },
    {
      title: "Sump Pump Services",
      description: "Protect your basement from flooding with a reliable sump pump. We offer installation, testing, and repair services to keep your Brampton home dry.",
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      features: ["New Installations", "Battery Backups", "Testing & Maintenance", "Pump Repairs"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-6">Professional <span className="text-blue-400">Brampton Plumbing Services</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive plumbing solutions for residential and commercial properties in Brampton. 
              We combine years of experience with modern technology to deliver results you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden flex flex-col">
                <CardHeader className="pb-4">
                  <div className="mb-6 p-4 bg-blue-50 rounded-2xl w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3">{service.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Key Features:</h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <ShieldCheck className="h-4 w-4 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6">
                      <a href="tel:2899073904" className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        Book This Service
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img
                src="https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80&w=1000"
                alt="Commercial Plumbing in Brampton"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-8 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-3xl font-bold text-blue-600">Commercial</p>
              <p className="text-slate-500 font-medium">Specialized Solutions</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Business Solutions</h2>
            <h3 className="text-4xl font-bold text-slate-900">Commercial Brampton Plumbing Services</h3>
            <p className="text-slate-600 leading-relaxed">
              We provide specialized plumbing services for businesses, restaurants, and industrial facilities in Brampton. 
              Our team understands the unique requirements of commercial plumbing systems and works efficiently to minimize downtime.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Preventative Maintenance",
                "Grease Trap Cleaning",
                "Backflow Testing",
                "Industrial Pipe Repair",
                "Commercial Water Heaters",
                "Emergency Repairs",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <ArrowRight className="h-3 w-3 text-blue-600" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white rounded-full w-fit px-8 py-6">
              <a href="tel:2899073904">Get a Commercial Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-600 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Need a Brampton Plumber Right Now?</h2>
              <p className="text-blue-100 text-lg max-w-2xl">
                We handle all types of plumbing projects, big and small. Give our Brampton plumbers a call to discuss your specific needs and get a free estimate.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-8 text-xl shadow-xl">
                <a href="tel:2899073904" className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  (289) 907-3904
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
