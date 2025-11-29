import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group animate-fade-in opacity-0 delay-200">
             {/* Glow Effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#007fff] to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 glass-card">
              <img 
                src="me.jpg" 
                alt="Sujan Timalsina" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/600/700?grayscale'; 
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 glass-card p-4 rounded-xl border border-[#007fff]/30 bg-black/60 backdrop-blur-xl">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#007fff]">4+</span>
                  <span className="text-xs text-gray-300 uppercase tracking-wider">Years Exp.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-fade-in opacity-0 delay-300">
            <div>
              <h4 className="text-[#007fff] font-bold uppercase tracking-widest mb-2 text-sm">About Me</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Transforming Ideas into <br />
                <span className="text-[#007fff] text-glow">Digital Masterpieces</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hello! I'm Sujan Timalsina, a passionate graphic designer and content specialist based in Nepal. With a keen eye for aesthetics and user engagement, I help creators and businesses stand out in a crowded digital landscape.
              </p>
              <p>
                My approach combines technical proficiency with creative intuition. Whether it's a high-CTR YouTube thumbnail or a complete brand overhaul, I focus on delivering results that not only look good but perform exceptionally well.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[#007fff]/30 transition-colors group">
                <h3 className="text-4xl font-bold text-[#007fff] mb-1 group-hover:scale-110 transition-transform origin-left">225M+</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Total Views Generated</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[#007fff]/30 transition-colors group">
                <h3 className="text-4xl font-bold text-[#007fff] mb-1 group-hover:scale-110 transition-transform origin-left">500+</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Thumbnails Designed</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[#007fff]/30 transition-colors group">
                <h3 className="text-4xl font-bold text-[#007fff] mb-1 group-hover:scale-110 transition-transform origin-left">50+</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Happy Clients</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[#007fff]/30 transition-colors group">
                <h3 className="text-4xl font-bold text-[#007fff] mb-1 group-hover:scale-110 transition-transform origin-left">100%</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction Rate</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;