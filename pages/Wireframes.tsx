
import React, { useState } from 'react';
import TruckSchedule from './TruckSchedule';

const Wireframes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'screens' | 'schedule'>('screens');

  const appScreens = [
    { 
      title: "Authentication", 
      description: "Secure login/signup with Ghana Card integration.",
      img: "/sign-in.png" 
    },
    { 
      title: "Become a Partner", 
      description: "Vendor onboarding for market mamas and chefs.",
      img: "/vendordashboard.png" 
    },
    { 
      title: "Identity Verification", 
      description: "Securing trust through identity check.",
      img: "/verify_identity.png" 
    },
    { 
      title: "Order History", 
      description: "Transparent log of all past and current orders.",
      img: "//order-history.png" 
    },
    { 
      title: "Roommate Run", 
      description: "Shared group carts for kommunity purchasing.",
      img: "/group-order.png" 
    },
    { 
      title: "Active Tracking", 
      description: "Live GPS updates for direct and truck deliveries.",
      img: "/chef scrren.png" 
    }
  ];

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <section className="py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">PRODUCTION PREVIEW</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-dark tracking-tighter">View MVP.</h1>
          
          <div className="flex gap-4 mt-8">
            <button 
              onClick={() => setActiveTab('screens')}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${activeTab === 'screens' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-gray-100 text-muted'}`}
            >
              App Screens
            </button>
            <button 
              onClick={() => setActiveTab('schedule')}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${activeTab === 'schedule' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-gray-100 text-muted'}`}
            >
              Kommunity Truck Schedule
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'screens' ? (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {appScreens.map((screen, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[9/19] rounded-[2.5rem] border-[10px] border-dark overflow-hidden shadow-2xl bg-white transition-transform group-hover:scale-[1.02]">
                  <img src={screen.img} className="w-full h-full object-cover" alt={screen.title} />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-black text-dark">{screen.title}</h4>
                  <p className="text-muted text-sm font-medium">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <TruckSchedule />
      )}
    </div>
  );
};

export default Wireframes;
