import React from 'react';
import { Star, Youtube, Quote } from 'lucide-react';

interface Client {
  name: string;
  link: string;
  image: string;
  review: string;
}

const Testimonials: React.FC = () => {
  const clients: Client[] = [
    {
      name: 'Tonde Gamer',
      link: 'https://youtube.com/@tondegamer?si=3DUL4hjLXXqeK0kR',
      image: 'client1.jpg',
      review: 'Sujan is an absolute visionary! The thumbnails and channel art he designed completely transformed my branding. Highly recommended for any serious creator.'
    },
    {
      name: 'Laka Gaming',
      link: 'https://www.youtube.com/@LakaGamingz',
      image: 'client2.jpg',
      review: 'Incredible attention to detail. Sujan understood my gaming niche perfectly and delivered graphics that instantly boosted my CTR.'
    },
    {
      name: 'ABHISHEK YT',
      link: 'https://youtube.com/@-abhishek_yt?si=O20L3SXT_rIzxWqv',
      image: 'client3.jpg',
      review: 'Fast turnaround and high quality. The visual effects in the edits were exactly what I needed to keep my audience engaged.'
    },
    {
      name: 'chunu vlogs',
      link: 'https://www.youtube.com/@Chunuvlogs',
      image: 'client4.jpg',
      review: 'Professional and creative. Sujan brought a fresh look to my vlog thumbnails that really makes them pop in the feed.'
    },
    {
      name: 'ZEROTH YT',
      link: 'https://www.youtube.com/@zerothyt10',
      image: 'client5.jpg',
      review: 'A pleasure to work with. He listens to feedback and delivers designs that are top-tier in the industry. 10/10 service.'
    },
    {
      name: 'MOTEY FF',
      link: 'https://www.youtube.com/@moteyff111',
      image: 'client6.jpg',
      review: 'Sujan has a unique style that separates you from the competition. The best graphic designer I\'ve worked with so far.'
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in opacity-0">
          <span className="text-[#007fff] font-bold uppercase tracking-widest text-sm mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted By <span className="text-[#007fff]">Creators</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-[#007fff]/40 transition-all duration-300 relative group animate-fade-in opacity-0 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,127,255,0.15)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-[#007fff]/20 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#007fff]/50 p-0.5 group-hover:border-[#007fff] transition-colors">
                    <img 
                      src={client.image} 
                      alt={client.name} 
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/100/100?random=${index + 10}`;
                      }}
                    />
                  </div>
                </div>
                <div>
                  <a 
                    href={client.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-lg text-white hover:text-[#007fff] transition-colors flex items-center gap-2 group/link"
                  >
                    {client.name}
                    {/* Updated Youtube Icon: Stroke only, turns red on hover */}
                    <Youtube size={20} className="text-gray-400 group-hover/link:text-[#FF0000] transition-colors duration-300" />
                  </a>
                  <div className="flex text-[#007fff] mt-1 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-400 text-sm leading-7 italic">
                "{client.review}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;