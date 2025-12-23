
import React from 'react';

const Delivery: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">Delivery Your Way</h1>
            <p className="text-xl text-muted leading-relaxed">
              From the city center to the outskirts, we get it to you. Choose the method that fits your schedule, location, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Direct Delivery', 
                tag: 'STANDARD', 
                text: 'Standard door-to-door service for city zones. Reliable, trackable, and safe.',
                icon: 'verified',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_kPOpx_83WwiEKqtZkWQfWRED61slNiHHp4tA3r6ZUHEsXhiQPXKDwjRXgnv7atk2A3mVKKQ2GENZzweXQ4dfNx9HVqXGM91i_H4ygzgzQGGo4wCgOgwaRm3Q9AqcufKJIZPqRmHHNkMd5bFh3NUWH6cZ6m_-Xa7VYy-U6EfrAEOztHKq2FajDxX71ooVpvws8MtUJXUTYTsFHpz8FWSZT0pvYcgupxgKivqfhcb52LOiAG8kgQcL5IBrl5rO47SL3FMkVz3_7NE'
              },
              { 
                title: 'Community Truck', 
                tag: 'WIDEST REACH', 
                text: 'Scheduled stops for out-of-zone areas. We meet you at local landmarks.',
                icon: 'groups',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqsLfSScRC9-KJf0BkFs7yI_o_4Ii2oZw9MQrSvz7XwgF7cRozZJoyI7nIrV6Oud_dSRZeaLnZDxb8h4tQF-5HlttV5ZlDz4mGGTAE6v2yGksl5cve1qg2PXzQPF4dfTP_btEwRUigXlkmWS97Mh5pRKsLTkDNu5DKu6yJxvBUCo9kL9lLHy3GZpGTc5CyeXVIXe3UrLcrsOq4ZE2pKnxlPJkad-JM3hbKO4f6YNX-VdjFEGGJNhnc_SC2SsZpW9biiVUe0HPWcCc'
              },
              { 
                title: 'Express Bike', 
                tag: 'FASTEST', 
                text: 'Beat the traffic. Paid priority delivery for when you need it right now.',
                icon: 'bolt',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX6IdYG5gZ1ig2wwDuzW1Mh_wiMfLWi3jezSpif86v-fv38DOYqc-IMn5DTyCLwoTLqUpmwGkr5iajlR7uKDM8nRzPpNxbImA7-jPCuKEsRQGn5eTDAIuF9aIK4SY40Bpbixu9vFzfie63ZW8OZlVVkM3ehDr7FSu1jqP9YKhR7m7_YzYucKJpH89wwG6y7Lr3vq41_UsiUvie35X1cEvEviNRrxn4DodCc7Z-wEGszVFnaWKNa2ybjzqq1wMt3JeqShj_VVYZb7k'
              },
              { 
                title: 'Shared Bike', 
                tag: 'ECO SAVER', 
                text: 'Eco-friendly, low-cost delivery for nearby neighborhoods. Save more, waste less.',
                icon: 'eco',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDztooCWYmsq_ja8R-8kjzFaYhxha2XRauEQVDALL6u96JPaGEGbjGIkukyDjX0vbk08lM-XPi-pNv8MF4O4mPSBNmKzPxB90GC_UOS9DtTF6KaCgHoxD9YgBFWhQoYz9N1Y-TYPFQDZgPQ04zG45UB7cTIJ27WCTJjs1qRMjNnuf81WayMd0ZJJi2uU9f7sxg1syjqkcMCIMJjJ-awp4ZvGsqVXawQ9J8PJDQRzNAC9ypPiFYjtIaPDCXLYIu8sgvy-Iehxx6TB5w'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                </div>
                <div className="p-8">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full mb-4 uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{item.text}</p>
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                    Explore Details <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
