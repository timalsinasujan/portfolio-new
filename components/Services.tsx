import React from 'react';
import { Layout, PenTool, Camera } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Thumbnail Design',
      description: 'High-CTR thumbnails tailored for gaming and vlog channels that grab attention instantly.',
      icon: <Layout size={40} />,
    },
    {
      title: 'Channel Branding',
      description: 'Complete visual identity packages including logos, banners, and overlays.',
      icon: <PenTool size={40} />,
    },
    {
      title: 'Social Media Graphics',
      description: 'Eye-catching posts and stories for Instagram, Facebook, and LinkedIn.',
      icon: <Camera size={40} />,
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in opacity-0">
          <span className="text-[#007fff] font-bold uppercase tracking-widest text-sm mb-2 block">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What I <span className="text-[#007fff]">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-[#007fff] mx-auto rounded-full opacity-50 shadow-[0_0_15px_#007fff]"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-10 rounded-3xl border border-white/5 hover:border-[#007fff] transition-all duration-500 group animate-fade-in opacity-0 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-8 w-20 h-20 bg-[#007fff]/10 rounded-2xl flex items-center justify-center text-[#007fff] group-hover:scale-110 group-hover:bg-[#007fff] group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(0,127,255,0.1)]">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#007fff] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;