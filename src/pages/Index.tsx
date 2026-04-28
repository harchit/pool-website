"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Droplets, ShieldCheck, Clock, MapPin, ArrowRight, Star, Wrench, Search, Settings, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Emergency Plumbing",
      description: "Available 24/7 for burst pipes, major leaks, and urgent repairs. Our Brampton plumbers are always on standby.",
      icon: <Clock className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Drain Cleaning",
      description: "Professional clearing of stubborn clogs and slow-moving drains by expert Brampton plumbing specialists.",
      icon: <Droplets className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Water Heaters",
      description: "Installation, repair, and maintenance of all water heater types. Trusted Brampton plumbers for your home.",
      icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Toilet Repair & Replacement",
      description: "Expert repair and installation of all toilet models. We fix leaks, clogs, and running toilets quickly.",
      icon: <Wrench className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Leaky Faucet & Pipe Repair",
      description: "Stop wasting water and money. We provide fast, reliable repairs for leaky faucets and damaged pipes.",
      icon: <Droplets className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Garbage Disposal Repair",
      description: "Professional repair and installation of garbage disposals to keep your kitchen sink running smoothly.",
      icon: <Trash2 className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Sewer Camera Inspection",
      description: "High-tech video inspections to accurately diagnose sewer line issues without unnecessary digging.",
      icon: <Search className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Tankless Water Heaters",
      description: "Energy-efficient tankless water heater installation for endless hot water and lower utility bills.",
      icon: <Settings className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Sewer Line Repair",
      description: "Comprehensive sewer line repair and replacement services to protect your property and health.",
      icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
    },
  ];

  const testimonials = [
    {
      name: "Majhi",
      text: "Absolutely outstanding service! The plumber arrived right on time, quickly diagnosed the issue and had everything fixed faster than I expected.",
      rating: 5,
    },
    {
      name: "Manav",
      text: "Were easy to speak with on the phone and the plumber came quick. Fixed our issues with the toilet!",
      rating: 5,
    },
    {
      name: "Yash",
      text: "Best plumbing services, I like that they charge fairly and they come on times. Totally satisfied with the quality of work.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 rounded-bl-[100px] hidden lg:block" />
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider w-fit">
              <MapPin className="h-4 w-4" />
              Serving Brampton & Surrounding Areas
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              On-Sight <span className="text-blue-600">Plumbers of Brampton</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed mt-4">
              From emergency repairs to routine maintenance, On-Sight Plumbers of Brampton provides expert solutions with a focus on quality and customer satisfaction. Your local Brampton plumbing experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-200">
                <a href="tel:2899073904" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (289) 907-3904
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link to="/services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Happy Brampton Plumbing Customer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-700">113+ Happy Customers in Brampton</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Brampton Plumbers at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Licensed & Insured</p>
                  <p className="text-xs text-slate-500">Professional Technicians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-0 pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">What We Do</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Brampton Plumbing Solutions</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden group bg-white">
                <CardHeader className="p-4 pb-2">
                  <div className="mb-3 p-2 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                  <Link to="/services" className="text-blue-600 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800" alt="Plumbing Repair Service" className="rounded-2xl shadow-md w-full aspect-video object-cover" />
                <div className="bg-blue-600 p-8 rounded-2xl text-white">
                  <p className="text-4xl font-bold mb-2">15+</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-900 p-8 rounded-2xl text-white">
                  <p className="text-4xl font-bold mb-2">24/7</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Emergency Support</p>
                </div>
                <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=500" alt="Brampton Plumber Working" className="rounded-2xl shadow-md" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-slate-900">The Most Trusted Plumbers in Brampton</h3>
            <p className="text-slate-600 leading-relaxed">
              We understand that plumbing issues can be stressful. That's why we prioritize clear communication, fair pricing, and exceptional workmanship. When you need Brampton plumbers you can count on, we are here.
            </p>
            <ul className="space-y-4">
              {[
                "Upfront, transparent pricing with no hidden fees",
                "Highly trained and certified Brampton plumbers",
                "Clean and respectful service in your home",
                "Guaranteed satisfaction on every job",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-fit px-8 py-6">
              <Link to="/about">About Our Company</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-bold uppercase tracking-widest text-sm mb-4 opacity-80">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col gap-4">
                <div className="flex text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <p className="italic text-base leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-sm">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Need a Brampton Plumber Right Now?</h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                Don't wait for a small leak to become a big problem. Call our expert Brampton plumbers today for a free estimate or emergency service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-8 text-xl shadow-xl shadow-blue-900/20">
                  <a href="tel:2899073904" className="flex items-center gap-3">
                    <Phone className="h-6 w-6" />
                    (289) 907-3904
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-8 text-xl border-2 border-white !text-white hover:bg-white hover:!text-slate-900 transition-all bg-transparent">
                  <Link to="/contact">Book Online</Link>
                </Button>
              </div>
              <p className="text-blue-400 font-medium flex items-center gap-2">
                <Clock className="h-5 w-5" />
                24/7 Emergency Service Available in Brampton
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pt-0 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Location</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Find Us in Brampton</h3>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white h-[500px] relative">
            <iframe
              src="https://maps.google.com/maps?q=10095%20Bramalea%20Rd,%20Brampton,%20ON%20L6R%200K1&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="On-Sight Plumbers of Brampton Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;