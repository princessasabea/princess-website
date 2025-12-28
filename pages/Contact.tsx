
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">Get in Touch</h1>
            <p className="text-xl text-muted leading-relaxed mb-12">
              Have questions, ideas, or want to follow our progress? Drop us a message and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
               <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[32px]">mail</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg">Email Us</h4>
                    <p className="text-muted">info@mykartgrocery.com</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[32px]">map</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg">Headquarters</h4>
                    <p className="text-muted">Accra, Ghana</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100">
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                   <label className="block text-sm font-bold mb-2 text-dark">Full Name</label>
                   <input 
                     type="text" 
                     placeholder="Jane Doe" 
                     className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-bg-light text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium" 
                   />
                </div>
                <div>
                   <label className="block text-sm font-bold mb-2 text-dark">Email Address</label>
                   <input 
                     type="email" 
                     placeholder="jane@example.com" 
                     className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-bg-light text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium" 
                   />
                </div>
                <div>
                   <label className="block text-sm font-bold mb-2 text-dark">Message</label>
                   <textarea 
                     rows={4} 
                     placeholder="How can we help you?" 
                     className="w-full px-6 py-4 rounded-2xl border border-gray-300 bg-bg-light text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none font-medium"
                   ></textarea>
                </div>
                <button className="w-full py-5 bg-primary text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3 hover:bg-orange-600 transition-all">
                   Send Message
                   <span className="material-symbols-outlined">send</span>
                </button>
             </form>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4">
         <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-black mb-6">Stay Updated</h2>
               <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">Join the MyKart kommunity! Get the latest news on our launch and fresh features.</p>
               <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                  <input type="email" placeholder="Enter your email" className="flex-1 px-8 py-4 rounded-2xl text-dark outline-none font-bold" />
                  <button className="px-8 py-4 bg-dark text-white font-bold rounded-2xl shadow-xl hover:bg-black transition-colors">Subscribe</button>
               </div>
            </div>
            <div className="absolute top-[-20px] left-[-20px] opacity-10">
               <span className="material-symbols-outlined text-[300px]">mail</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
