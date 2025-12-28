
import React, { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  github?: string;
  image?: string;
  category: 'lead' | 'tech' | 'design' | 'ops';
}

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: 'Ama Obeng',
      role: 'Founder & Project Lead',
      description: 'The visionary force behind MyKart, orchestrating the product roadmap and leading a global team to modernize Ghanaian retail.',
      category: 'lead',
    },
    {
      name: 'Alyn Tetteh',
      role: 'Frontend Team Lead',
      description: 'Leads the development of user-facing features and frontend architecture.',
      category: 'tech',
      linkedin: 'https://www.linkedin.com/in/alyn-tetteh',
      github: 'https://github.com/AlynTetteh'
    },
    {
      name: 'Kwaku Aboagye-Frempong',
      role: 'Backend Team Lead',
      description: 'Leads backend architecture, APIs, and core system design.',
      category: 'tech',
      linkedin: 'https://www.linkedin.com/in/kwaku-aboagye-frempong'
    },
    {
      name: 'Seth Akoto',
      role: 'Frontend Developer',
      description: 'Builds and refines responsive interfaces across the myKart platform.',
      category: 'tech',
      linkedin: 'https://www.linkedin.com/in/sethakoto/'
    },
    {
      name: 'Nana Yaw',
      role: 'Frontend Developer',
      description: 'Implements website features and maintains frontend performance and usability.',
      category: 'tech'
    },
    {
      name: 'Peter Kersi',
      role: 'Frontend Developer',
      description: 'Builds and refines responsive interfaces across the myKart platform.',
      category: 'tech',
      linkedin: 'https://www.linkedin.com/in/peter-kersi-9826372b7/',
      github: 'https://github.com/jpkersi'
    },
    {
      name: 'Theoford Gyanfosu',
      role: 'Backend Developer',
      description: 'Builds and maintains backend services supporting orders and data flow.',
      category: 'tech',
      linkedin: 'https://www.linkedin.com/in/theoford-gyanfosu-7b2a5a2b8/',
      github: 'https://github.com/nanagyanfosu'
    },
    {
      name: 'Damilola',
      role: 'UI/UX Designer',
      description: 'Designs intuitive user flows and validates product experience through research.',
      category: 'design',
      linkedin: 'https://www.linkedin.com/in/damilola-tomisin-ayodeji-12b801336',
      github: 'https://github.com/deji445'
    },
    {
      name: 'Josiah',
      role: 'Brand & Visual Designer',
      description: 'Creates the myKart brand identity, logo, and visual design system.',
      category: 'design'
    },
    {
      name: 'Joanna Oseghale',
      role: 'Business & Strategy',
      description: 'Handles business modeling, pricing ideas, and partnerships support.',
      category: 'ops',
      linkedin: 'https://www.linkedin.com/in/joanna-oseghale-753b63260'
    },
    {
      name: 'Antown',
      role: 'Marketing & Growth',
      description: 'Leads early growth strategy and customer acquisition.',
      category: 'ops',
      linkedin: 'https://www.linkedin.com/in/antoungmine-omar'
    },
    {
      name: 'Akua Obeng',
      role: 'Market Research & Operations',
      description: 'Conducts user research and supports operational planning.',
      category: 'ops'
    }
  ];

  const renderMemberCard = (member: TeamMember, idx: number, isLarge: boolean = false) => (
    <div 
      key={idx} 
      onClick={() => setSelectedMember(member)}
      className={`group cursor-pointer bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-gray-200/50 transition-all flex flex-col gap-4 relative overflow-hidden ${isLarge ? 'p-10 rounded-[3rem] max-w-2xl mx-auto' : 'p-6 rounded-3xl'}`}
    >
      <div className={`flex justify-between items-start ${isLarge ? 'flex-col items-center text-center' : ''}`}>
        <div className={`${isLarge ? 'w-32 h-32 md:w-48 md:h-48 mb-6' : 'w-14 h-14'} bg-bg-light rounded-2xl md:rounded-[2rem] flex items-center justify-center font-black text-primary overflow-hidden border border-gray-50 shadow-inner`}>
          {member.image ? (
            <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
          ) : (
            <span className={isLarge ? 'text-4xl' : 'text-lg'}>
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        {!isLarge && (
          <div className="flex gap-2">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all" onClick={(e) => e.stopPropagation()}>
                <span className="material-symbols-outlined text-[20px]">link</span>
              </a>
            )}
          </div>
        )}
      </div>
      <div className={isLarge ? 'text-center' : ''}>
        <h4 className={`${isLarge ? 'text-3xl md:text-4xl' : 'text-lg'} font-black text-dark group-hover:text-primary transition-colors`}>{member.name}</h4>
        <p className={`${isLarge ? 'text-sm mb-4' : 'text-[10px]'} text-primary font-extrabold uppercase tracking-widest`}>{member.role}</p>
        {isLarge && <p className="text-muted text-lg leading-relaxed max-w-lg mx-auto">{member.description}</p>}
      </div>
      {!isLarge && <div className="mt-2 text-[10px] text-muted/30 font-bold uppercase tracking-tighter">View Bio</div>}
    </div>
  );

  const leadMember = team.find(m => m.category === 'lead')!;

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <section className="pt-24 pb-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">EST. 2025</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-dark tracking-tighter">Our Core Team.</h1>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-black mb-12 text-center uppercase tracking-widest text-dark/40">Founder & Lead</h2>
          {renderMemberCard(leadMember, 0, true)}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {['tech', 'design', 'ops'].map(cat => {
            const members = team.filter(m => m.category === cat);
            const title = cat === 'tech' ? 'Technology' : cat === 'design' ? 'Design' : 'Operations';
            return (
              <div key={cat} className="mb-20">
                <h2 className="text-sm font-black mb-8 border-l-4 border-primary pl-4 uppercase tracking-widest text-dark/40">{title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((m, idx) => renderMemberCard(m, idx))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Team;
