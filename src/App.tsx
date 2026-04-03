import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Menu, 
  X, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Thermometer, 
  Wind, 
  Settings, 
  Wrench, 
  CheckCircle2, 
  Star, 
  ChevronRight,
  Calendar,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { COMPANY_NAME, PHONE_NUMBER, PHONE_LINK, ADDRESS, SERVICE_AREAS, YEARS_EXPERIENCE } from './constants';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-brand-blue leading-none">PELHAM</span>
            <span className="text-[10px] font-bold text-brand-red tracking-[0.2em] uppercase">Heating & Air Conditioning</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors">Services</Link>
            <Link to="/maintenance" className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors">Maintenance</Link>
            <Link to="/about" className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors">About</Link>
            <a href={PHONE_LINK} className="flex items-center bg-brand-blue text-white px-4 py-2 rounded-md font-bold hover:bg-brand-blue/90 transition-all">
              <Phone className="w-4 h-4 mr-2 fill-current" />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <a href={PHONE_LINK} className="mr-4 p-2 text-brand-red">
              <Phone className="w-6 h-6 fill-current" />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-blue">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-brand-blue border-b border-gray-50">Services</Link>
              <Link to="/maintenance" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-brand-blue border-b border-gray-50">Maintenance Plans</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-brand-blue border-b border-gray-50">About Us</Link>
              <Link to="/request-service" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-brand-red">Request Service</Link>
              <div className="pt-4">
                <a href={PHONE_LINK} className="flex items-center justify-center w-full bg-brand-red text-white py-4 rounded-lg font-black text-lg shadow-lg">
                  <Phone className="w-5 h-5 mr-2 fill-current" />
                  CALL NOW: {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
          alt="HVAC Technician at work" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-brand-red/10 text-brand-red mb-6"
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              24/7 Emergency Service Available
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl tracking-tight font-black text-brand-blue sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9]"
            >
              Heating & AC Repair <br />
              <span className="text-brand-red">You Can Trust.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 sm:text-xl max-w-xl lg:mx-0 mx-auto"
            >
              Serving Stamford and Fairfield County for over {YEARS_EXPERIENCE} years. Family-owned, professional, and fast response times when you need it most.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4"
            >
              <a href={PHONE_LINK} className="btn-primary text-xl py-4 px-8 shadow-xl hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 mr-2 fill-current" />
                Call Now: {PHONE_NUMBER}
              </a>
              <Link to="/request-service" className="btn-secondary text-xl py-4 px-8 bg-white">
                Request Service
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-6 grayscale opacity-60"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-black text-brand-blue">4.5/5</span>
                <div className="flex text-brand-orange">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Google Rating</span>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-black text-brand-blue">{YEARS_EXPERIENCE}+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Years Local</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800" 
                alt="HVAC Unit Installation" 
                className="w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-blue/90 backdrop-blur-sm p-6 text-white">
                <div className="flex items-center space-x-3">
                  <div className="bg-brand-red p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider">Verified Local Experts</p>
                    <p className="text-xs opacity-80">Licensed & Insured in Connecticut</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const features = [
    { icon: ShieldCheck, text: "Family-Owned & Operated" },
    { icon: Clock, text: "40+ Years Experience" },
    { icon: MapPin, text: "Serving Fairfield County" },
    { icon: Wrench, text: "Licensed & Insured" }
  ];

  return (
    <div className="bg-brand-blue py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center justify-center space-x-3 text-white">
              <f.icon className="w-6 h-6 text-brand-red shrink-0" />
              <span className="text-sm font-bold uppercase tracking-wide">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Heating Repair",
      desc: "Fast diagnostics and repair for furnaces, boilers, and heat pumps.",
      icon: Thermometer,
      link: "/services/heating"
    },
    {
      title: "AC Repair",
      desc: "Emergency cooling service to keep your home comfortable all summer.",
      icon: Wind,
      link: "/services/cooling"
    },
    {
      title: "New Installation",
      desc: "Energy-efficient systems tailored to your home's specific needs.",
      icon: Settings,
      link: "/services/installation"
    },
    {
      title: "Maintenance",
      desc: "Preventative care to extend system life and lower energy bills.",
      icon: Calendar,
      link: "/maintenance"
    }
  ];

  return (
    <section className="section-padding bg-brand-light">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-brand-blue sm:text-4xl uppercase tracking-tight">Our Core Services</h2>
        <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4"></div>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From emergency repairs to full system replacements, we handle everything HVAC with professional precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <div className="bg-brand-blue/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <s.icon className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-black text-brand-blue mb-3">{s.title}</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">{s.desc}</p>
            <Link to={s.link} className="inline-flex items-center text-brand-red font-bold text-sm hover:underline">
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const EmergencySection = () => {
  return (
    <section className="bg-brand-red text-white py-16 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
        <AlertTriangle className="w-96 h-96" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl mb-4">NO HEAT? NO AC?</h2>
            <p className="text-xl font-bold opacity-90 mb-8">
              Don't wait in discomfort. Our technicians are on standby 24/7 for emergency repairs in Stamford and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={PHONE_LINK} className="bg-white text-brand-red px-8 py-4 rounded-md font-black text-2xl shadow-xl hover:bg-gray-100 transition-colors flex items-center">
                <Phone className="w-6 h-6 mr-3 fill-current" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 flex items-center space-x-4 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <Clock className="w-12 h-12 text-white" />
            <div>
              <p className="text-2xl font-black">Fast Response</p>
              <p className="font-bold opacity-80 uppercase tracking-widest text-xs">Technicians Ready Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "40 Years of Trust",
      desc: "We've been serving the Stamford community since the 1980s. We aren't going anywhere."
    },
    {
      title: "Family Owned",
      desc: "You get personalized service from a local family, not a faceless national franchise."
    },
    {
      title: "Honest Pricing",
      desc: "No hidden fees or high-pressure sales. Just fair, upfront pricing for quality work."
    },
    {
      title: "Expert Technicians",
      desc: "Our team is highly trained, professional, and respectful of your home."
    }
  ];

  return (
    <section className="section-padding">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-black text-brand-blue sm:text-4xl uppercase tracking-tight mb-8">
            Why Stamford Homeowners <br />
            <span className="text-brand-red">Choose Pelham</span>
          </h2>
          <div className="space-y-8">
            {reasons.map((r, i) => (
              <div key={i} className="flex space-x-4">
                <div className="shrink-0">
                  <div className="bg-brand-red/10 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-brand-red" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black text-brand-blue">{r.title}</h3>
                  <p className="text-gray-600">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/about" className="btn-secondary">Learn More About Our History</Link>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 relative">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
            alt="HVAC Service Van" 
            className="rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-xl border border-gray-100 hidden md:block">
            <p className="text-4xl font-black text-brand-blue leading-none">10k+</p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Systems Serviced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Call or Request", desc: "Contact us 24/7. We'll listen to your issue and schedule a visit." },
    { num: "02", title: "Expert Diagnosis", desc: "A technician arrives on time and identifies the root cause quickly." },
    { num: "03", title: "Fixed Right", desc: "We provide clear pricing and perform the repair with quality parts." }
  ];

  return (
    <section className="section-padding bg-brand-blue text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black sm:text-4xl uppercase tracking-tight">Simple 3-Step Process</h2>
        <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((s, i) => (
          <div key={i} className="relative text-center">
            <div className="text-6xl font-black text-white/10 absolute -top-8 left-1/2 -translate-x-1/2">{s.num}</div>
            <h3 className="text-2xl font-black mb-4 relative z-10">{s.title}</h3>
            <p className="text-white/70 relative z-10">{s.desc}</p>
            {i < 2 && <ArrowRight className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-brand-red w-8 h-8" />}
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Michael R.",
      location: "Stamford",
      text: "Pelham came out on a Sunday when our AC died. The technician was professional, found the issue in 10 minutes, and had it fixed an hour later. Fair pricing too!",
      stars: 5
    },
    {
      name: "Sarah J.",
      location: "Darien",
      text: "We've used Pelham for over 10 years. They installed our new furnace last year and the energy savings have been incredible. Highly recommend this family business.",
      stars: 5
    },
    {
      name: "David L.",
      location: "Greenwich",
      text: "Fast response and very knowledgeable. They didn't try to upsell me on a new unit when a simple repair was all that was needed. Honest people.",
      stars: 5
    }
  ];

  return (
    <section className="section-padding bg-brand-light">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-brand-blue sm:text-4xl uppercase tracking-tight">What Your Neighbors Say</h2>
        <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex text-brand-orange mb-4">
              {[...Array(r.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-gray-600 italic mb-6">"{r.text}"</p>
            <div>
              <p className="font-black text-brand-blue">{r.name}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{r.location}, CT</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-2 text-brand-blue font-bold">
          <span>4.5 Average on Google</span>
          <div className="flex text-brand-orange">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-black tracking-tighter text-white leading-none">PELHAM</span>
              <span className="text-[10px] font-bold text-brand-red tracking-[0.2em] uppercase">Heating & Air Conditioning</span>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Stamford's trusted HVAC experts for over 40 years. Family-owned and dedicated to keeping your home comfortable year-round.
            </p>
            <div className="flex space-x-4">
              <a href={PHONE_LINK} className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link to="/services/heating" className="hover:text-white transition-colors">Heating Repair</Link></li>
              <li><Link to="/services/cooling" className="hover:text-white transition-colors">AC Repair</Link></li>
              <li><Link to="/services/installation" className="hover:text-white transition-colors">System Installation</Link></li>
              <li><Link to="/maintenance" className="hover:text-white transition-colors">Maintenance Plans</Link></li>
              <li><Link to="/emergency" className="hover:text-white transition-colors">Emergency Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider">Service Area</h4>
            <ul className="grid grid-cols-2 gap-2 text-white/60 text-sm">
              {SERVICE_AREAS.map((area, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-2 text-brand-red" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-white/60">{ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <a href={PHONE_LINK} className="text-xl font-black hover:text-brand-red transition-colors">{PHONE_NUMBER}</a>
              </div>
              <div className="pt-4">
                <Link to="/request-service" className="btn-primary w-full">Request Service</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

const StickyMobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100">
      <a 
        href={PHONE_LINK} 
        className="flex items-center justify-center w-full bg-brand-red text-white py-4 rounded-xl font-black text-xl shadow-2xl active:scale-95 transition-transform"
      >
        <Phone className="w-6 h-6 mr-3 fill-current" />
        CALL NOW: {PHONE_NUMBER}
      </a>
    </div>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <EmergencySection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <section className="section-padding text-center">
        <h2 className="text-4xl font-black text-brand-blue mb-6">Ready to get started?</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether it's a routine checkup or a midnight emergency, Pelham is here to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={PHONE_LINK} className="btn-primary text-2xl py-5 px-10">
            <Phone className="w-6 h-6 mr-3 fill-current" />
            {PHONE_NUMBER}
          </a>
          <Link to="/request-service" className="btn-secondary text-2xl py-5 px-10">
            Request Quote
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

const RequestServicePage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-brand-blue p-8 text-white text-center">
            <h1 className="text-3xl font-black uppercase tracking-tight">Request Service</h1>
            <p className="mt-2 opacity-80">Fill out the form below and we'll contact you shortly.</p>
          </div>
          
          <div className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-black text-brand-blue mb-2">Request Received!</h2>
                <p className="text-gray-600 mb-8">One of our team members will call you within 30 minutes during business hours.</p>
                <Link to="/" className="btn-primary">Back to Home</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" placeholder="(203) 000-0000" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all">
                    <option>Heating Repair</option>
                    <option>AC Repair</option>
                    <option>New Installation Quote</option>
                    <option>Maintenance Visit</option>
                    <option>Other / Emergency</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Zip Code</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" placeholder="06907" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Describe the Issue</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" placeholder="e.g. AC is making a loud noise and not cooling..."></textarea>
                </div>
                
                <div className="bg-brand-red/5 p-4 rounded-lg border border-brand-red/10 flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <p className="text-sm text-brand-red font-bold">
                    For immediate emergency service, please call us directly at {PHONE_NUMBER}.
                  </p>
                </div>
                
                <button type="submit" className="btn-primary w-full py-4 text-xl">
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/request-service" element={<RequestServicePage />} />
            {/* Fallback for other routes to keep it simple for this demo */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </Router>
  );
}
