"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, ArrowRight, Star, ShieldCheck, Waves, Sun, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const poolTypes = [
    {
      title: "Vinyl Liner Pools",
      description: "Highly customizable and affordable. Vinyl pools offer a smooth surface and endless shape possibilities for your dream backyard.",
      icon: <Waves className="h-6 w-6 text-blue-600" />,
      link: "/vinyl-pools"
    },
    {
      title: "Fiberglass Pools",
      description: "Durable, low maintenance, and quick to install. Enjoy a beautiful, smooth finish that resists algae and lasts for decades.",
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
      link: "/fiberglass-pools"
    },
    {
      title: "Custom Concrete Pools",
      description: "The ultimate in luxury and durability. Concrete (Gunite) pools can be built to any size, shape, or depth with premium finishes.",
      icon: <Sun className="h-6 w-6 text-blue-600" />,
      link: "/concrete-pools"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Bluestone Pool Construction transformed our backyard! Their team was professional, and our new fiberglass pool is absolutely gorgeous. Highly recommended in Houston.",
      rating: 5,
    },
    {
      name: "David T.",
      text: "The concrete pool they built for us in Dallas exceeded all our expectations. The custom tile work and water features are stunning.",
      rating: 5,
    },
    {
      name: "Jessica R.",
      text: "Great experience from start to finish. They helped us design the perfect vinyl pool for our family in San Antonio. Excellent communication and quality work.",
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
              Serving Houston, Dallas & San Antonio
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Build Your Dream <span className="text-blue-600">Backyard Oasis</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed mt-4">
              Bluestone Pool Construction specializes in custom vinyl, fiberglass, and concrete pools. Transform your outdoor living space with Texas's premier pool builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-200">
                <a href="tel:6479655067" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (647) 965-5067
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                <a href="#pool-types" className="flex items-center gap-2">
                  View Pool Types
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Happy Customer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-700">Hundreds of Happy Texas Families</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Custom Pool Construction" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Licensed & Insured</p>
                  <p className="text-xs text-slate-500">Expert Pool Builders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Pool Types Section */}
      <section id="pool-types" className="pt-12 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Perfect Pool</h3>
            <p className="text-slate-600">We offer the three most popular and reliable pool construction methods to fit any backyard, budget, and style preference.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {poolTypes.map((pool, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group bg-white flex flex-col h-full">
                <CardHeader className="p-6 pb-4">
                  <div className="mb-4 p-3 bg-blue-50 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {pool.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{pool.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{pool.description}</p>
                  <Link to={pool.link} className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto inline-flex w-fit">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800" alt="Beautiful Texas Pool" className="rounded-2xl shadow-lg w-full aspect-square object-cover" />
                <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-lg">
                  <p className="text-4xl font-bold mb-2">100%</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Custom Designs</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-lg">
                  <p className="text-4xl font-bold mb-2">3</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Major Texas Cities</p>
                </div>
                <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=500" alt="Pool Construction Process" className="rounded-2xl shadow-lg aspect-square object-cover" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Why Choose Bluestone</h2>
            <h3 className="text-4xl font-bold text-slate-900">Texas's Premier Pool Construction Experts</h3>
            <p className="text-slate-600 leading-relaxed">
              Building a pool is a significant investment in your home. At Bluestone Pool Construction, we guide you through every step of the process—from initial 3D design to the final fill. Serving Houston, Dallas, and San Antonio, our commitment to quality craftsmanship ensures a stunning result.
            </p>
            <ul className="space-y-4">
              {[
                "Custom 3D design and consultation",
                "High-quality materials and advanced equipment",
                "Dedicated project managers for your build",
                "Transparent pricing and timelines",
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
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full -mr-32 -mt-32 blur-[100px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full -ml-32 -mb-32 blur-[100px] opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col gap-6 hover:bg-white/10 transition-colors">
                <div className="flex text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl text-white">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-white">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-50 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden border border-blue-100">
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Ready to Dive In?</h2>
              <p className="text-slate-600 text-lg max-w-2xl">
                Contact Bluestone Pool Construction today to schedule your free backyard consultation and start designing the pool of your dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-8 text-xl shadow-xl shadow-blue-900/20">
                  <a href="tel:6479655067" className="flex items-center gap-3">
                    <Phone className="h-6 w-6" />
                    (647) 965-5067
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-8 text-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all bg-transparent">
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;