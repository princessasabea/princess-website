
import React from 'react';

const Vision: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Vision Hero */}
      <section className="py-20 px-4 bg-dark text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
             <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Who We Are</span>
             <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">Reimagining Grocery Delivery in Ghana.</h1>
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                MyKart was born from a simple observation: getting reliable groceries shouldn't be a gamble. We are bridging the gap between modern technology and local market realities through our vibrant Kommunity.
             </p>
          </div>
          <div className="flex-1">
             <div className="relative">
                <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] rounded-[3rem] border-[12px] border-black shadow-2xl overflow-hidden bg-bg-light">
                   <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9yQivXoP34fFXrvm3b9NKeSaOm5r5eHRJvlerRUuqNPSU_HiOxwYjTMo0jSnS_TWMKLj8Mn3HSKMpTzQJFb4YLdyAxhdyMuWVO9NoSNhhsiPTxbiqXyXQjIgVbwhDOQkz8Y84H9MuDKcxa_pJg1uu1TKknsamvOxkmv9srQc-Dl2uDxdVEvGA4vEpItcZTY8hpbQQdt9HsBCGdzX-7ze_XqrfFGDaA0ivmmYCD8eVRX4BSz-ukLXnhyCN3NVZKaUaBXSvotfkMA" 
                      className="w-full h-full object-cover" 
                      alt="MyKart App Interface"
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-24 px-4 bg-bg-light">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">The MyKart Difference</h2>
          <p className="text-muted text-lg">Turning frustrations into trust across three core pillars.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Transparent Costs', text: 'No hidden fees or fluctuating prices. What you see on the app is what you pay.', icon: 'verified_user', color: 'bg-orange-500' },
            { title: 'Real-time Stock', text: 'Live inventory integration with vendors means no more out-of-stock surprises.', icon: 'inventory_2', color: 'bg-green-500' },
            { title: 'Scheduled Drops', text: 'Reliable delivery times that fit your schedule. No more "African Time" delays.', icon: 'schedule', color: 'bg-blue-500' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50 text-center flex flex-col items-center">
              <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center">Our Journey</h2>
           <div className="space-y-16">
              <div className="flex gap-8 group">
                 <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-primary rounded-full ring-8 ring-primary/20"></div>
                    <div className="w-1 flex-1 bg-primary group-last:bg-transparent mt-2"></div>
                 </div>
                 <div className="pb-12">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">ACTIVE DEVELOPMENT</span>
                    <h4 className="text-2xl font-black mb-4">Core Grocery Platform</h4>
                    <p className="text-muted leading-relaxed max-w-xl">
                       Building a rock-solid foundation for inventory management and last-mile delivery. Establishing partnerships with Shoprite, Melcom, and Palace.
                    </p>
                 </div>
              </div>

              <div className="flex gap-8 group opacity-50">
                 <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full ring-8 ring-gray-100"></div>
                    <div className="w-1 flex-1 bg-gray-100 group-last:bg-transparent mt-2"></div>
                 </div>
                 <div className="pb-12">
                    <span className="text-muted font-bold text-xs uppercase tracking-widest mb-2 block">NEXT PHASE</span>
                    <h4 className="text-2xl font-black mb-4">Expansion & Infrastructure</h4>
                    <p className="text-muted leading-relaxed max-w-xl">
                       Moving beyond groceries to daily essentials. Launching the "Deliverect" style infrastructure for B2B partners across West Africa, powered by our Kommunity.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
