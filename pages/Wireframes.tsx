
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Wireframes: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  // Mapped from the high-quality production UI screens inspired by the MyKart design system
  const appScreens = [
    { 
      title: "Authentication", 
      description: "Secure login/signup with OTP verification.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh7t8XGv7S8f_yW9p-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l" 
    },
    { 
      title: "Ghana Card Verification", 
      description: "Identity verification for secure payments and trust.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPp8-z_qWv3P-Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv_Wv" 
    },
    { 
      title: "Store Browsing", 
      description: "Shop from Shoprite, Melcom, or local Market Mamas.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX6IdYG5gZ1ig2wwDuzW1Mh_wiMfLWi3jezSpif86v-fv38DOYqc-IMn5DTyCLwoTLqUpmwGkr5iajlR7uKDM8nRzPpNxbImA7-jPCuKEsRQGn5eTDAIuF9aIK4SY40Bpbixu9vFzfie63ZW8OZlVVkM3ehDr7FSu1jqP9YKhR7m7_YzYucKJpH89wwG6y7Lr3vq41_UsiUvie35X1cEvEviNRrxn4DodCc7Z-wEGszVFnaWKNa2ybjzqq1wMt3JeqShj_VVYZb7k" 
    },
    { 
      title: "Real-time Tracking", 
      description: "Live GPS updates on your shopper and rider.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm9yQivXoP34fFXrvm3b9NKeSaOm5r5eHRJvlerRUuqNPSU_HiOxwYjTMo0jSnS_TWMKLj8Mn3HSKMpTzQJFb4YLdyAxhdyMuWVO9NoSNhhsiPTxbiqXyXQjIgVbwhDOQkz8Y84H9MuDKcxa_pJg1uu1TKknsamvOxkmv9srQc-Dl2uDxdVEvGA4vEpItcZTY8hpbQQdt9HsBCGdzX-7ze_XqrfFGDaA0ivmmYCD8eVRX4BSz-ukLXnhyCN3NVZKaUaBXSvotfkMA" 
    },
    { 
      title: "Roommate Run", 
      description: "Shared group carts for families and roommates.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1_h-xK0p_W_1_W9p-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l-m8l" 
    },
    { 
      title: "Vendor Dashboard", 
      description: "Tools for Market Mamas to manage orders.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k-z8k" 
    },
    { 
      title: "Community Schedule", 
      description: "Weekly truck routes for underserved areas.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsZ58jMLtlO6dHHfH3oT7Vq4pVrN85PRF41guC12ZTdjmGqITPoyv38RKdkNbtk8i8k_8iXp6jGQ3HOlN9byF-kHUtagNhJsVpc7M1xWRRzyT832pQYIYMhbYq-Ja0APXZQA_9JCGyjkGQhXrT1oIyGpcsEUPFEoO4W84U81X1cHbVRFDAYQgogxDju2KQIDqcKKBtwHvCPxnsBbLBoTtozz3DxtRqeTS63XtXkeSS6Fyaqz1TZrNhFKH3FIbERQiOTlv31_WdT2A" 
    },
    { 
      title: "User Profile", 
      description: "Manage loyalty points and Ghana Card details.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_kPOpx_83WwiEKqtZkWQfWRED61slNiHHp4tA3r6ZUHEsXhiQPXKDwjRXgnv7atk2A3mVKKQ2GENZzweXQ4dfNx9HVqXGM91i_H4ygzgzQGGo4wCgOgwaRm3Q9AqcufKJIZPqRmHHNkMd5bFh3NUWH6cZ6m_-Xa7VYy-U6EfrAEOztHKq2FajDxX71ooVpvws8MtUJXUTYTsFHpz8FWSZT0pvYcgupxgKivqfhcb52LOiAG8kgQcL5IBrl5rO47SL3FMkVz3_7NE" 
    },
  ];

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .app-screen-mask {
          mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
        }
      `}</style>

      <section className="py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4 tracking-[0.2em]">PLATFORM PREVIEW</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-dark tracking-tighter">Inside the MVP.</h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed font-medium">
            Explore the core screens and user flows currently in development for the initial release of MyKart Ghana.
          </p>
        </div>
      </section>

      {/* Hero Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9yQivXoP34fFXrvm3b9NKeSaOm5r5eHRJvlerRUuqNPSU_HiOxwYjTMo0jSnS_TWMKLj8Mn3HSKMpTzQJFb4YLdyAxhdyMuWVO9NoSNhhsiPTxbiqXyXQjIgVbwhDOQkz8Y84H9MuDKcxa_pJg1uu1TKknsamvOxkmv9srQc-Dl2uDxdVEvGA4vEpItcZTY8hpbQQdt9HsBCGdzX-7ze_XqrfFGDaA0ivmmYCD8eVRX4BSz-ukLXnhyCN3NVZKaUaBXSvotfkMA" 
                className="w-full h-auto rounded-[3rem] shadow-2xl relative z-10 border-8 border-white" 
                alt="App Showcase 1"
              />
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6 tracking-tight text-dark">Seamless Ordering</h2>
              <p className="text-lg text-muted leading-relaxed mb-8 font-medium">
                Our interface is designed for speed and reliability. Filter by store, search for specific local items like Ga Kenkey or Garden Eggs, and build your cart in seconds.
              </p>
              <ul className="space-y-4">
                {[
                  'Verified Inventory Sync',
                  'One-tap MoMo Payments',
                  'Direct Shopper Messaging',
                  'Real-time Status Tracking'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-dark">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="py-32 px-4 bg-white text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          {formStatus === 'success' ? (
            <div className="p-12 bg-green-50 rounded-[3rem] border border-green-100 animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-200">
                <span className="material-symbols-outlined text-4xl">check</span>
              </div>
              <h2 className="text-3xl font-black text-dark mb-4">You're on the list!</h2>
              <p className="text-muted text-lg font-medium">We'll notify you as soon as MyKart is ready for your neighborhood.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-8 text-primary font-bold hover:underline"
              >
                Join with another email
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-dark">Join the Waitlist</h2>
              <p className="text-xl text-muted mb-12 font-medium">Be the first to know when we go live in your neighborhood.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted px-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-6 py-4 bg-bg-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-dark"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted px-2">Neighborhood</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. East Legon"
                      className="w-full px-6 py-4 bg-bg-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-dark"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted px-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@example.com"
                    className="w-full px-6 py-4 bg-bg-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-dark"
                  />
                </div>
                
                <button 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-2xl shadow-primary/30 hover:bg-orange-600 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Get Early Access
                      <span className="material-symbols-outlined">bolt</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Side-Scrolling App Gallery */}
      <section className="py-24 bg-bg-light overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">FLOW PREVIEW</span>
          <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tighter">Experience the Platform.</h2>
          <p className="text-muted font-medium mt-4">Discover the production UI currently in internal testing.</p>
        </div>
        
        <div className="relative">
          <div className="animate-scroll gap-8 md:gap-12 px-12">
            {/* Doubling the array for a seamless loop */}
            {[...appScreens, ...appScreens].map((screen, idx) => (
              <div key={idx} className="w-[280px] md:w-[320px] shrink-0 group py-8">
                <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden bg-white border-[6px] md:border-[8px] border-dark shadow-2xl transition-all duration-500 group-hover:scale-[1.05] group-hover:-rotate-1">
                  <img 
                    src={screen.img} 
                    className="w-full h-full object-cover" 
                    alt={screen.title} 
                    loading="lazy"
                  />
                  {/* Subtle overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-lg font-black tracking-tight leading-tight">{screen.title}</p>
                    <p className="text-white/80 text-xs font-medium mt-1 mb-3">{screen.description}</p>
                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Production UI</p>
                  </div>
                </div>
                <p className="mt-6 text-center text-xs font-black text-dark uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  {screen.title}
                </p>
              </div>
            ))}
          </div>
          {/* Edge Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-bg-light to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-bg-light to-transparent z-10 pointer-events-none"></div>
        </div>

        <div className="max-w-4xl mx-auto mt-24 px-4 text-center">
          <div className="p-12 bg-white rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-black text-dark mb-4">Partner with MyKart</h3>
              <p className="text-lg text-muted mb-8 max-w-xl mx-auto font-medium">Are you an investor, a retail store, or a logistics provider? Join our ecosystem to scale grocery delivery across Ghana.</p>
              <Link 
                to="/reserve"
                className="inline-flex px-10 py-5 bg-dark text-white font-black rounded-2xl hover:bg-black transition-all shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Reserve Your Spot
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
            </div>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wireframes;
