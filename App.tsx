
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Vision from './pages/Vision';
import Delivery from './pages/Delivery';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Wireframes from './pages/Wireframes';
import Reserve from './pages/Reserve';
import TruckSchedule from './pages/TruckSchedule';
import Story from './pages/Story';
import Terms from './pages/Terms';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-bg-light/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-dark">MyKart</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">Home</Link>
          <Link to="/vision" className="text-sm font-semibold hover:text-primary transition-colors">Vision</Link>
          <Link to="/delivery" className="text-sm font-semibold hover:text-primary transition-colors">Delivery</Link>
          <Link to="/community" className="text-sm font-semibold hover:text-primary transition-colors">Kommunity</Link>
          <Link to="/team" className="text-sm font-semibold hover:text-primary transition-colors">Team</Link>
          <Link to="/wireframes" className="px-5 py-2 bg-dark text-white text-sm font-bold rounded-full hover:bg-black transition-all active:scale-95 shadow-md">
            View MVP
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined text-dark">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[61px] bg-bg-light z-40 p-6 flex flex-col gap-6 md:hidden">
          <Link to="/" className="text-2xl font-bold border-b border-gray-100 pb-2">Home</Link>
          <Link to="/vision" className="text-2xl font-bold border-b border-gray-100 pb-2">Vision</Link>
          <Link to="/delivery" className="text-2xl font-bold border-b border-gray-100 pb-2">Delivery Modes</Link>
          <Link to="/community" className="text-2xl font-bold border-b border-gray-100 pb-2">Our Kommunity</Link>
          <Link to="/team" className="text-2xl font-bold border-b border-gray-100 pb-2">The Team</Link>
          <Link to="/wireframes" className="text-2xl font-bold border-b border-gray-100 pb-2">View MVP</Link>
          <Link to="/contact" className="text-2xl font-bold border-b border-gray-100 pb-2">Contact Us</Link>
          <div className="mt-auto">
            <Link to="/reserve" className="block w-full py-4 bg-primary text-white text-center font-bold rounded-2xl text-lg shadow-xl shadow-primary/20">
              Partner with Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100 py-12 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
          </div>
          <span className="text-xl font-black text-dark">MyKart</span>
        </div>
        <p className="text-muted text-sm leading-relaxed max-sm mb-6">
          Ghana's first reliable grocery delivery ecosystem. We connect modern shoppers with fresh market produce and trusted retailers.
        </p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/mykartstartup/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all" title="LinkedIn">
             <span className="material-symbols-outlined text-[20px]">link</span>
          </a>
          <a href="mailto:info@mykartgrocery.com" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all" title="Email Us">
             <span className="material-symbols-outlined text-[20px]">mail</span>
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4">Company</h4>
        <div className="flex flex-col gap-2">
          <Link to="/vision" className="text-sm text-muted hover:text-primary">Our Vision</Link>
          <Link to="/team" className="text-sm text-muted hover:text-primary">Meet the Team</Link>
          <Link to="/community" className="text-sm text-muted hover:text-primary">Kommunity Focus</Link>
          <Link to="/story" className="text-sm text-muted hover:text-primary">Our Story</Link>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4">Legal</h4>
        <div className="flex flex-col gap-2">
          <Link to="/privacy" className="text-sm text-muted hover:text-primary">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-muted hover:text-primary">Terms of Service</Link>
          <Link to="/contact" className="text-sm text-muted hover:text-primary">Support</Link>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center">
      <p className="text-xs text-muted/60">© 2025 MyKart Ghana. Reimagining retail for the Ghanaian context.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/wireframes" element={<Wireframes />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/truck-schedule" element={<TruckSchedule />} />
            <Route path="/story" element={<Story />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
