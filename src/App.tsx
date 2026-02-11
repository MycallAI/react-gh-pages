import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Wifi, 
  Users, 
  Zap, 
  Menu, 
  X, 
  Cpu, 
  ArrowRight, 
  MessageSquare, 
  MapPin,
  Mail
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-gradient-to-tr from-cyan-400 to-purple-500 p-2 rounded-lg">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">MYCALLA INC.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Mission', 'Services', 'Vision', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 bg-slate-100 text-slate-950 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-950 transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
            {['Mission', 'Services', 'Vision', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-medium text-slate-300 py-2 border-b border-slate-800/50"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 lg:pt-52 lg:pb-32 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-6 uppercase tracking-wider animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Connecting Puerto Rico
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Empowering People Through <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Innovative Communication
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            MYCALLA INC. is dedicated to bridging gaps and enhancing the quality of life across the island. We leverage cutting-edge technology to create a more connected and prosperous community.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-slate-900 text-slate-300 font-semibold rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <div className="relative z-10 border-y border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Focus', value: 'Puerto Rico' },
              { label: 'Technology', value: 'Cutting-Edge' },
              { label: 'Impact', value: 'Social & Economic' },
              { label: 'Goal', value: 'Collaboration' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services / Bento Grid Section */}
      <section id="services" className="relative z-10 py-24 px-6 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Transforming Experiences</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Our mission is to be the leading force in communication solutions, prioritizing customer satisfaction and local partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card 1 - Large */}
            <div className="md:col-span-2 row-span-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe size={180} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 text-blue-400">
                  <Globe />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bridging Gaps</h3>
                  <p className="text-slate-400">
                    We break down barriers to create seamless communication channels for individuals and businesses across Puerto Rico, fostering a truly connected island.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-1 bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                <Cpu />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tech-Driven</h3>
              <p className="text-slate-400 text-sm">
                Leveraging the latest in IT and bio-communication research to deliver reliable solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="md:col-span-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-400">
                <Users />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Local Partnerships</h3>
              <p className="text-slate-400 text-sm">
                Fostering collaboration with local entities to drive positive social and economic impact.
              </p>
            </div>

            {/* Card 4 - Large */}
            <div className="md:col-span-2 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 h-full">
                 <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0 text-blue-400">
                  <Zap />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Reliable Solutions</h3>
                  <p className="text-slate-400">
                    Our commitment is to quality of life. We provide robust systems that businesses and families can depend on, ensuring you stay informed and connected when it matters most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / About Section */}
      <section id="vision" className="relative z-10 py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision for the Future</h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p>
                    MYCALLA INC. envisions a Puerto Rico where every individual and business has the tools to thrive. 
                  </p>
                  <p>
                    By combining innovative technology with a deep understanding of local needs, we are building a more informed and prosperous community. We are not just a service provider; we are partners in the island's growth.
                  </p>
                  <ul className="space-y-3 mt-4">
                    {[
                      'Driving positive social impact',
                      'Creating economic opportunities',
                      'Prioritizing customer satisfaction'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="text-slate-200 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] bg-slate-800 rounded-3xl border border-slate-700 p-8 flex flex-col justify-center items-center text-center">
                 <MessageSquare className="w-20 h-20 text-slate-600 mb-6" />
                 <p className="text-xl font-serif italic text-slate-400">
                   "Communication is the bridge between confusion and clarity."
                 </p>
                 <div className="mt-6 pt-6 border-t border-slate-700 w-full">
                    <p className="font-bold text-white">MYCALLA INC.</p>
                    <p className="text-sm text-slate-500">Puerto Rico</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="relative z-10 bg-slate-950 pt-20 pb-10 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-tr from-cyan-400 to-purple-500 p-1.5 rounded-lg">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">MYCALLA INC.</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Leading the force in transforming communication experiences in Puerto Rico.
              </p>
              <div className="flex flex-col gap-4 text-slate-400">
                <div className="flex items-center gap-3">
                   <MapPin className="w-5 h-5 text-cyan-500" />
                   <span>Puerto Rico</span>
                </div>
                <div className="flex items-center gap-3">
                   <Mail className="w-5 h-5 text-cyan-500" />
                   <span>contact@mycallai.github.io</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <textarea 
                  placeholder="How can we help?" 
                  rows="3"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                ></textarea>
                <button className="w-full py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-cyan-50 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-slate-900 text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} MYCALLA INC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
