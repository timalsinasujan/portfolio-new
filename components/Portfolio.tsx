import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Creating a list of work items based on file names thumbnail1.jpg to thumbnail9.jpg
  const works = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `thumbnail${i + 1}.jpg`,
    title: `Project ${i + 1}`
  }));

  return (
    <section id="portfolio" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Side Button */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-fade-in opacity-0">
          <div>
            <span className="text-[#007fff] font-bold uppercase tracking-widest text-sm mb-2 block">My Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-[#007fff]">Work</span>
            </h2>
          </div>
          <a 
            href="https://ytjobs.co/talent/vitrine/428100" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-[#007fff] transition-colors pb-1 border-b border-transparent hover:border-[#007fff]"
          >
            <span>View Full Portfolio on YTJobs</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div 
              key={work.id} 
              className="group relative rounded-xl overflow-hidden aspect-video bg-[#111] border border-white/5 animate-fade-in opacity-0 glass-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/800/450?random=${work.id}`;
                }}
              />
              
              {/* Subtle Border Glow on Hover - No Text */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#007fff]/50 transition-colors duration-300 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Main View More Button (Visible on all screens now for better UX) */}
        <div className="mt-16 text-center animate-fade-in opacity-0 delay-200">
          <a 
            href="https://ytjobs.co/talent/vitrine/428100" 
             target="_blank" 
             rel="noopener noreferrer"
            className="liquid-btn inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg"
          >
            View More Works on YTJobs
            <ArrowRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;