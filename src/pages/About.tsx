import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, Award, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Integrity",
      description: "We believe in honest pricing and transparent communication. No hidden fees, no surprises from our Brampton plumbers.",
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Expertise",
      description: "Our team consists of highly trained and certified Brampton plumbing professionals who stay updated with the latest industry standards.",
      icon: <Award className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Community",
      description: "As a local Brampton business, we are committed to serving our neighbors and supporting our local community.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-6">About Our <span className="text-blue-200">Brampton Plumbing Company</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Your trusted local Brampton plumbers in Ontario. We've built our reputation on reliability, quality, and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Story</h2>
            <h3 className="text-4xl font-bold text-slate-900">Serving Brampton with Pride</h3>
            <p className="text-slate-600 leading-relaxed">
              On-Sight Plumbers of Brampton was founded with a simple mission: to provide high-quality plumbing services that homeowners and businesses can rely on. 
              We saw a need for a Brampton plumbing company that combines technical expertise with a personal touch.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Over the years, we've grown from a small team to a full-service plumbing company, but our core values remain the same. 
              We treat every home as if it were our own and every customer like family. Our Brampton plumbers are dedicated to excellence.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Local Focus</p>
                  <p className="text-sm text-slate-500">Brampton & GTA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">24/7 Support</p>
                  <p className="text-sm text-slate-500">Always Available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=1000" 
                alt="Brampton Plumbers Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 p-8 rounded-2xl shadow-xl text-white hidden sm:block">
              <p className="text-4xl font-bold text-blue-400">15+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">What Drives Our Brampton Plumbers</h3>
            <p className="text-slate-600">Our values are the foundation of everything we do. They guide our decisions and ensure we deliver the best possible service to our Brampton clients.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-6">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=500" alt="Brampton Plumber at work" className="rounded-2xl shadow-md" />
                <img src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=500" alt="Brampton Plumbing tools" className="rounded-2xl shadow-md mt-8" />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Team</h2>
              <h3 className="text-4xl font-bold text-slate-900">Professional, Licensed Brampton Plumbers</h3>
              <p className="text-slate-600 leading-relaxed">
                Every member of our team is carefully selected for their skills, experience, and commitment to customer service. 
                We invest in continuous training to ensure our Brampton technicians are equipped with the latest knowledge and tools.
              </p>
              <ul className="space-y-4">
                {[
                  "Fully licensed and insured Brampton technicians",
                  "Background-checked and drug-tested",
                  "Ongoing safety and technical training",
                  "Respectful and professional conduct",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <ShieldCheck className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-fit px-8 py-6">
                <Link to="/contact" className="flex items-center gap-2">
                  Work With Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold">Ready to Experience the Best Brampton Plumbers?</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Join the hundreds of satisfied customers in Brampton who trust us with their plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-8 text-xl">
              <a href="tel:2899073904" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                (289) 907-3904
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-8 text-xl border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
