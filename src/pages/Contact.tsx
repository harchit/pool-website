import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      title: "Our Location",
      content: "10095 Bramalea Rd, Brampton, ON L6R 0K1",
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Phone Number",
      content: "(289) 907-3904",
      link: "tel:2899073904",
      icon: <Phone className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Email Address",
      content: "info@onsightplumbersofbrampton.site",
      link: "mailto:info@onsightplumbersofbrampton.site",
      icon: <Mail className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Working Hours",
      content: "24/7 Emergency Service Available",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
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
            <h1 className="text-5xl font-extrabold mb-6">Contact Our <span className="text-blue-400">Brampton Plumbers</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Have a plumbing emergency or need a quote for a project? 
              Reach out to our expert Brampton plumbers today and our team will be happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Get In Touch</h2>
              <h3 className="text-4xl font-bold text-slate-900">Expert Brampton Plumbing Help</h3>
              <p className="text-slate-600 leading-relaxed">
                Whether it's a small leak or a major renovation, we're ready to provide the expert Brampton plumbing solutions you need. 
                Call us for immediate assistance or fill out the form and we'll get back to you shortly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col gap-4 p-6 bg-blue-50 rounded-3xl border border-blue-100">
                  <div className="p-3 bg-white rounded-2xl w-fit shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-slate-600 hover:text-blue-600 transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-slate-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-64 bg-slate-200 relative">
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

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-12">
                <div className="bg-green-100 p-6 rounded-full">
                  <CheckCircle2 className="h-16 w-16 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Thank You!</h3>
                <p className="text-slate-600 text-lg max-w-sm">
                  Your message has been sent successfully. One of our Brampton plumbers will contact you shortly.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
                  <p className="text-slate-500">Fill out the form below and our Brampton plumbers will get back to you within 24 hours.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required className="rounded-xl py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required className="rounded-xl py-6" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl py-6" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(289) 907-3904" required className="rounded-xl py-6" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <select 
                    id="service" 
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="drain">Drain Cleaning</option>
                    <option value="water-heater">Water Heater</option>
                    <option value="installation">New Installation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell our Brampton plumbers about your issue..." 
                    required 
                    className="rounded-xl min-h-[150px] p-4"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-8 text-lg font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;