import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Ambient Background Elements (Glows) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Top Left Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#007fff]/10 rounded-full blur-[100px] animate-pulse-glow"></div>
        
        {/* Top Right Glow */}
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-glow delay-1000"></div>
        
        {/* Bottom Left Glow */}
        <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-[#007fff]/5 rounded-full blur-[80px]"></div>
        
        {/* Center Right Glow */}
        <div className="absolute top-[40%] right-[10%] w-[200px] h-[200px] bg-[#007fff]/10 rounded-full blur-[60px] animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="animate-fade-in opacity-0">
             <span className="inline-block py-2 px-6 rounded-full border border-[#007fff]/30 bg-[#007fff]/10 text-[#007fff] font-medium text-sm tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,127,255,0.2)]">
               Graphics & Thumbnail Designer
             </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-tight animate-fade-in delay-100 opacity-0 drop-shadow-2xl">
            Sujan <span className="text-[#007fff] text-glow">Timalsina</span>
          </h1>
          
          {/* Subtext */}
          <p className="mt-2 text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in delay-200 opacity-0 font-light">
            Crafting digital experiences with precision. Specializing in high-impact visuals for content creators and brands that drive results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-300 opacity-0">
            <a 
              href="#portfolio" 
              className="liquid-btn px-10 py-4 rounded-full text-white font-bold text-lg flex items-center gap-3 group"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              className="px-10 py-4 rounded-full border border-white/10 glass-card text-white font-semibold hover:bg-white/5 transition-all duration-300 hover:border-[#007fff]/30 hover:shadow-[0_0_20px_rgba(0,127,255,0.15)]"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;