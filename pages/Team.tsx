
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
      name: 'Ama Asabea',
      role: 'Founder & Project Lead',
      description: 'Leads product vision and coordinates cross-functional teams to deliver myKart.',
      category: 'lead',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhZ7bfEsIaJZHlspRysCl0Sl0hIazPJ5T26m0fgJXtspoCkidzFDM-KYKXg62D8OzibGYBEt94jZmv7V34xiZSeOyDD9TZJlgzaeJ6tN0oMCo-qe1eHG604BrGz2IXdWouVcoIAyUNQpTYxR7alN6eItIamvsXIKEWxlsXe9QobeBt_s0VMpHq_KWX-5CA3FHEbUoRPh-zjmjIPjXO9c0QEMjxFhmsfxuw-RedlcET2mCCW5wZOSIM3UKHF1f-rBpML2HDJ1gNfro'
    },
    // Tech Lead
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
    // Tech Devs
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
    // Design
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
    // Ops
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
      <div className="flex justify-between items-start">
        <div className={`${isLarge ? 'w-32 h-32 md:w-48 md:h-48' : 'w-14 h-14'} bg-bg-light rounded-2xl md:rounded-[2rem] flex items-center justify-center font-black text-primary overflow-hidden border border-gray-50 shadow-inner`}>
          {member.image ? (
            <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
          ) : (
            <span className={isLarge ? 'text-4xl' : 'text-lg'}>
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all" onClick={(e) => e.stopPropagation()}>
              <span className="material-symbols-outlined text-[20px]">link</span>
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted hover:bg-dark hover:text-white transition-all" onClick={(e) => e.stopPropagation()}>
              <span className="material-symbols-outlined text-[20px]">terminal</span>
            </a>
          )}
        </div>
      </div>
      <div className={isLarge ? 'text-center md:text-left mt-4' : ''}>
        <h4 className={`${isLarge ? 'text-3xl md:text-4xl' : 'text-lg'} font-black text-dark group-hover:text-primary transition-colors`}>{member.name}</h4>
        <p className={`${isLarge ? 'text-sm mb-4' : 'text-[10px]'} text-primary font-extrabold uppercase tracking-widest`}>{member.role}</p>
        {isLarge && <p className="text-muted text-lg leading-relaxed">{member.description}</p>}
      </div>
      {!isLarge && <div className="mt-2 text-[10px] text-muted/30 font-bold uppercase tracking-tighter">View Bio</div>}
    </div>
  );

  const renderSection = (title: string, category: 'tech' | 'design' | 'ops') => {
    const members = team.filter(m => m.category === category);
    if (members.length === 0) return null;

    return (
      <div className="mb-20">
        <h2 className="text-sm font-black mb-8 border-l-4 border-primary pl-4 uppercase tracking-widest text-dark/40">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, idx) => renderMemberCard(member, idx))}
        </div>
      </div>
    );
  };

  const leadMember = team.find(m => m.category === 'lead')!;

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      {/* Team Header */}
      <section className="pt-24 pb-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">EST. 2024</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-dark tracking-tighter">Our Core Team.</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed font-medium">
            A cross-functional unit of engineers, designers, and strategists dedicated to modernizing Ghana's supply chain.
          </p>
        </div>
      </section>

      {/* Leadership Centered Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-black mb-12 text-center uppercase tracking-widest text-dark/40">Project Leadership</h2>
          {renderMemberCard(leadMember, 0, true)}
        </div>
      </section>

      {/* Grid Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {renderSection('Technology Team', 'tech')}
          {renderSection('Design & Experience', 'design')}
          {renderSection('Operations, Growth & Research', 'ops')}
          
          <div className="mt-20 pt-8 border-t border-gray-100 text-center">
            <p className="text-xs text-muted/40 font-bold tracking-widest uppercase">
              Team roles reflect current project responsibilities and may evolve as the product develops.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <a 
            href="https://tally.so/r/WO2v4v" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden transition-all hover:scale-[1.01]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Want to Join Us?</h2>
              <p className="text-gray-400 text-xl max-w-xl mx-auto mb-10 leading-relaxed font-medium">
                We are always looking for passionate volunteers and collaborators to help scale MyKart across Ghana.
              </p>
              <div className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-2xl shadow-primary/20 group-hover:bg-orange-600 transition-all">
                Become a Partner
                <span className="material-symbols-outlined font-bold">north_east</span>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0"></div>
          </a>
        </div>
      </section>

      {/* Detail Popup Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedMember(null)}>
          <div 
            className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-12 relative">
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-muted hover:bg-gray-100 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center font-black text-3xl text-primary mb-8 overflow-hidden shadow-inner">
                {selectedMember.image ? (
                  <img src={selectedMember.image} className="w-full h-full object-cover" alt={selectedMember.name} />
                ) : (
                  selectedMember.name.split(' ').map(n => n[0]).join('')
                )}
              </div>
              
              <h2 className="text-4xl font-black text-dark mb-2 tracking-tight">{selectedMember.name}</h2>
              <p className="text-primary font-black text-sm uppercase tracking-widest mb-6">{selectedMember.role}</p>
              
              <div className="h-px w-full bg-gray-100 mb-6"></div>
              
              <p className="text-xl text-muted leading-relaxed mb-10 font-medium">
                {selectedMember.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-gray-50 rounded-xl font-bold text-muted hover:bg-primary hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">link</span>
                    LinkedIn
                  </a>
                )}
                {selectedMember.github && (
                  <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-gray-50 rounded-xl font-bold text-muted hover:bg-dark hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">terminal</span>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
