
import React from 'react';
import { Link } from 'react-router-dom';

const Community: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Community Hero */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Sbljej5snsrBHTmjEsn7SA0gbcWPjazQ-1yjgG4qWx6JzpDG4o4CA5Dd9tgK-H-fLOIj4FHIz3Sg0EQkSsy6-sbwhrOe1M8TK8IQzkDpSFiaqbrKM20lBuKwmxZOAPFG_tA3kko_w0ySnrVYeHjgPJ2AKwttkbB3ctkBx7JyvJePp-zD8vGMX5ucGz_QkAmJtVPhdEDuv7Qceu0s4m_eTKeV1cZeAHJ_Jz0J5tWxSHITkWcIw82qMFv0Nx3ZPq3BRr3XO58MaQQ" 
            className="w-full h-full object-cover" 
            alt="Ghanaian Market Scene"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16 w-full">
          <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4">OUR MISSION</span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4">Our Kommunity Spirit</h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
            Growing together with the Ghanaian ecosystem, one basket at a time. Empowering local vendors through digitisation.
          </p>
        </div>
      </section>

      {/* Market Mamas Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">VENDOR SUPPORT</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Direct from Market Mamas</h3>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We partner with over 200 local vendors across Makola, Agbogbloshie, and Tema to bring authentic freshness to your door. By digitising their inventory, we help traditional vendors reach a new generation of customers in our growing Kommunity.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-cream rounded-2xl text-center">
                <p className="text-3xl font-black text-primary mb-1">200+</p>
                <p className="text-xs font-bold text-muted uppercase">Market Partners</p>
              </div>
              <div className="p-6 bg-cream rounded-2xl text-center">
                <p className="text-3xl font-black text-primary mb-1">100%</p>
                <p className="text-xs font-bold text-muted uppercase">Fair Trade</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVu0xE8vu_kBi9Zf0ygcbU9f9jUu3thgrVZGZi-3MaTH5JtzGKjufd6lzIobj25yPzK_OKHLvqL-9phNaxS_uwwxooWvfZMnAzN0KN2YZtnnaGG84flOYegQvDBidW0VRy8ML5qfVZ70n16Grz1Sb0PlV4bmQOEEzNtrcVk7Z5Xiwu1jtga56qmSly0HotxZdatMGqV95mIKnJRrsu-3MGYZlfojFteQO6ZSzjBYE89AW53xWVQjXwHe8nnvrP6W9XolzpZiQdRxw" 
              className="w-full rounded-[2.5rem] shadow-2xl" 
              alt="Fresh Local Produce"
            />
          </div>
        </div>
      </section>

      {/* Kommunity Truck */}
      <section className="py-24 bg-dark text-white px-4 overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
             <div className="bg-primary/20 p-4 rounded-3xl inline-block mb-8">
                <span className="material-symbols-outlined text-primary text-[40px]">local_shipping</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-extrabold mb-6">The Kommunity Truck</h2>
             <p className="text-gray-300 text-lg leading-relaxed mb-8">
               "No delivery zone? No problem." Our weekly Kommunity Truck brings essentials to underserved neighborhoods at bulk prices, ensuring quality nutrition is accessible to everyone.
             </p>
             <Link to="/truck-schedule" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg shadow-primary/20">
                View Truck Schedule
             </Link>
          </div>
          <div className="flex-1">
            <div className="relative p-4">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqsLfSScRC9-KJf0BkFs7yI_o_4Ii2oZw9MQrSvz7XwgF7cRozZJoyI7nIrV6Oud_dSRZeaLnZDxb8h4tQF-5HlttV5ZlDz4mGGTAE6v2yGksl5cve1qg2PXzQPF4dfTP_btEwRUigXlkmWS97Mh5pRKsLTkDNu5DKu6yJxvBUCo9kL9lLHy3GZpGTc5CyeXVIXe3UrLcrsOq4ZE2pKnxlPJkad-JM3hbKO4f6YNX-VdjFEGGJNhnc_SC2SsZpW9biiVUe0HPWcCc" 
                className="w-full rounded-3xl shadow-2xl relative z-10" 
                alt="MyKart Truck"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creator Quote */}
      <section className="py-24 bg-bg-light px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="material-symbols-outlined text-[60px] text-primary opacity-30 mb-8">format_quote</span>
          <p className="text-2xl md:text-4xl font-bold italic leading-tight mb-12">
            "MyKart has changed my life. I can sell my yam and cassava to people all over the city without leaving my stall."
          </p>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 border-4 border-white shadow-lg overflow-hidden">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU2nTF3e_Pfk3HxGvcjC1OCainWfhtvmFhYpKYW2iRvuH4Uc6m7ORkxyeMQ8F5GKE68xotiDw3OqmZwEoyl1du725caX35_QVsKHfSsOepAIvu1lO8buQnsTz1Jizjkr9mf6C8WN3TvXZNKQvOO2T3L9y7Qtbs2R-7xwlT4C_CZE-tiNPwJ9mr7XhFkNlH7BPRIo1wnxPQazqMaqA5JstTEvvlpRTeIDq2nk6nttXwkJest6NQRcK_Rd5FtWrVqdrjWDp-ThwGVEw" className="w-full h-full object-cover" alt="Auntie Yaa" />
            </div>
            <p className="font-bold text-xl">Auntie Yaa</p>
            <p className="text-muted font-medium uppercase text-xs tracking-widest">Makola Market Vendor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
