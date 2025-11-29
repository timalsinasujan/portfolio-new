import React from 'react';
import { Mail, Facebook, Linkedin, Instagram, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Text & Info */}
          <div className="space-y-10 animate-fade-in opacity-0">
             <div>
               <span className="text-[#007fff] font-bold uppercase tracking-widest text-sm mb-2 block">Get in Touch</span>
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                 Let's Work <br /> <span className="text-[#007fff]">Together</span>
               </h2>
               <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                 Have a project in mind? Looking to elevate your content? Drop me a message and let's create something amazing.
               </p>
             </div>

             <div className="space-y-4">
                <a href="mailto:smarttechzbusiness@gmail.com" className="glass-card flex items-center gap-6 p-6 rounded-2xl border border-white/5 hover:border-[#007fff]/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#007fff]/10 flex items-center justify-center text-[#007fff] group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                    <span className="text-white font-medium group-hover:text-[#007fff] transition-colors">smarttechzbusiness@gmail.com</span>
                  </div>
                </a>

                <a href="https://wa.link/rbuumc" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-6 p-6 rounded-2xl border border-white/5 hover:border-[#007fff]/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">WhatsApp</h4>
                    <span className="text-white font-medium group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</span>
                  </div>
                </a>
             </div>

             <div className="flex gap-4 pt-4">
                <a href="https://www.facebook.com/sujantimalsina.9" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card border border-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#007fff] hover:to-[#0059b3] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/su_jan_timalsina/?__pwa=1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card border border-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#007fff] hover:to-[#0059b3] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/sujan-timalsina-bb8556321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card border border-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#007fff] hover:to-[#0059b3] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110">
                  <Linkedin size={20} />
                </a>
             </div>
          </div>

          {/* Form */}
          <div className="animate-fade-in opacity-0 delay-200">
            <form className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl space-y-6 bg-black/40">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007fff] focus:ring-1 focus:ring-[#007fff] transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007fff] focus:ring-1 focus:ring-[#007fff] transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                <input type="text" id="subject" placeholder="Project Inquiry" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007fff] focus:ring-1 focus:ring-[#007fff] transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea id="message" rows={4} placeholder="Tell me about your project..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007fff] focus:ring-1 focus:ring-[#007fff] transition-all"></textarea>
              </div>

              <button type="submit" className="w-full liquid-btn py-4 rounded-xl text-white font-bold text-lg flex justify-center items-center gap-2 group mt-4 shadow-lg">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;