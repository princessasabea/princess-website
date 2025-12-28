
import React from 'react';
import { Link } from 'react-router-dom';

const Story: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      {/* Story Hero */}
      <section className="py-24 px-4 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">OUR JOURNEY</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-dark tracking-tighter leading-[0.95]">
            From Dorm Rooms <br/> to a <span className="text-primary italic">Global Vision.</span>
          </h1>
          <p className="text-2xl text-muted max-w-2xl leading-relaxed font-medium">
            The ongoing story of a student-led team building the future of Ghanaian retail.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      </section>

      {/* The Origin Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* The Student Roots */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-20 h-20 bg-dark rounded-3xl flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[40px]">school</span>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-dark">A Student Spark</h2>
                <div className="text-muted text-lg leading-relaxed font-medium space-y-4">
                  <p>
                    MyKart started with a simple, hungry idea: a small group of students looking to create an UberEats-style app for the Ghanaian community. But we wanted something <span className="text-dark font-bold underline decoration-primary decoration-4">different</span>. 
                  </p>
                  <p>
                    We wanted to blend global technology with what we call a <span className="italic text-primary font-bold">"Swift Culture Touch"</span>—a modern, fast-paced approach that respects traditional market values while embracing digital speed.
                  </p>
                </div>
              </div>
            </div>

            {/* The Research Phase */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[40px]">query_stats</span>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-dark">Data Meets Friendship</h2>
                <div className="text-muted text-lg leading-relaxed font-medium space-y-4">
                  <p>
                    We weren't just building an app; we were solving our own frustrations. Our features weren't chosen in a boardroom, but in late-night discussions based on our own delivery struggles, surveys of hundreds of urban shoppers, and honest feedback from our circles of friends.
                  </p>
                  <p>
                    We spoke to over 100 potential users. The data was clear: <span className="text-dark font-bold">65% of Ghanaians</span> avoid online groceries because they want to physically see their items. This insight became the foundation of our "Personal Shopper" model.
                  </p>
                </div>
              </div>
            </div>

            {/* The Setbacks */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center text-muted shrink-0">
                <span className="material-symbols-outlined text-[40px]">warning</span>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-dark">The Struggle is Real</h2>
                <div className="text-muted text-lg leading-relaxed font-medium space-y-4">
                  <p>
                    The team kept growing, and with every new member came a fresh touch of creativity. It wasn't always smooth—as students, we faced setbacks, balancing lectures with logistics, and deadlines with development. 
                  </p>
                  <p>
                    There were days when exams and deployment bugs collided, but the vision of a more accessible Ghana kept us pushing through the noise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Team Highlight */}
      <section className="py-24 bg-dark text-white px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
             <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">A Truly <span className="text-primary italic">Global Force.</span></h2>
             <p className="text-xl text-gray-400 leading-relaxed font-medium mb-8">
               Our story now spans across different continents. We have team members working from:
             </p>
             <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                   <h4 className="text-primary font-black text-2xl mb-1">North America</h4>
                   <p className="text-sm text-gray-400">Canada & USA</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                   <h4 className="text-primary font-black text-2xl mb-1">Africa</h4>
                   <p className="text-sm text-gray-400">Ghana</p>
                </div>
             </div>
             <p className="text-gray-300 font-medium">
               This diversity allows us to think globally while executing locally with deep Ghanaian roots.
             </p>
          </div>
          <div className="flex-1 relative">
             <div className="w-full aspect-square bg-white/5 rounded-[4rem] border border-white/10 flex items-center justify-center p-8">
                <span className="material-symbols-outlined text-[200px] text-primary/20">public</span>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                </div>
             </div>
          </div>
        </div>
        {/* Background texture */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      </section>

      {/* Market Insight & Future */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-dark mb-6">Understanding the Market</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-medium">
              We're not just building an app; we're building the infrastructure for a changing economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-dark">The 83% Reality</h3>
              <p className="text-muted leading-relaxed font-medium">
                83% of Ghana's grocery market is informal. We are the bridge between these local Market Mamas and the modern digital consumer.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-dark">Urban Price Paradox</h3>
              <p className="text-muted leading-relaxed font-medium">
                We're solving the inefficiency where city staples cost more than imports. Logistics is the cure, and we are the pharmacists.
              </p>
            </div>
          </div>

          <div className="p-12 bg-bg-light rounded-[3rem] border border-gray-100 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-dark mb-6 italic">"The story isn't over. It's just beginning."</h3>
              <p className="text-muted text-lg font-medium mb-10 max-w-2xl mx-auto">
                We are still in the process of bringing our idea to life. We are ready to grow, ready to expand, and we need <span className="text-primary font-bold">all the support we can get.</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/reserve" className="px-10 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                   Support Our Growth
                </Link>
                <Link to="/contact" className="px-10 py-5 bg-dark text-white font-black rounded-2xl hover:scale-105 transition-all">
                   Contact the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Progress Footer Area Cleaned up */}
      <section className="py-24 px-4 bg-bg-light border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
           <h2 className="text-2xl font-black text-dark mb-4">Stay tuned for Chapter Two.</h2>
           <p className="text-muted font-medium">Follow our journey to watch us build in real-time.</p>
        </div>
      </section>
    </div>
  );
};

export default Story;
