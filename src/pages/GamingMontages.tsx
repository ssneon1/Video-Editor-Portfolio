import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function GamingMontages() {
  const montages = [
    { title: "ECHO - Valorant Edit", game: "Valorant", views: "80K Views", duration: "02:15", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" },
    { title: "NIGHTMARE | CS:GO Edit", game: "CS:GO", views: "150K Views", duration: "03:20", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800" },
    { title: "RAGE - Call of Duty Montage", game: "Call of Duty", views: "200K Views", duration: "02:45", img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=800" },
    { title: "SYNCHRONIZE - Apex Legends", game: "Apex Legends", views: "120K Views", duration: "01:50", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-[#00ff88] uppercase border border-[#00ff88]/30 bg-[#00ff88]/10 rounded-full">
          Cinematic Edits
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
          Gaming <span className="text-[#00ff88] drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">Montages</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Syncing epic gameplay with heavy beats. Advanced velocity, color grading, and heavy VFX.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {montages.map((montage, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="group cursor-pointer"
          >
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-6 bg-zinc-900 border border-white/5">
              <img src={montage.img} alt={montage.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-x-0 bottom-0 top-0 bg-[#00ff88]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-110 transition-transform shadow-2xl shadow-[#00ff88]/20 border border-white/10 group-hover:border-[#00ff88]/50">
                  <Play fill="white" size={32} />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 text-sm font-bold rounded text-white tracking-widest backdrop-blur-md border border-white/10">
                {montage.duration}
              </div>
              <div className="absolute top-4 left-4 border border-[#00ff88]/50 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-black uppercase rounded text-[#00ff88] tracking-widest">
                {montage.game}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-[#00ff88] font-bold italic text-xl border border-white/5">
                {i + 1}
              </div>
              <div>
                <h3 className="text-2xl font-black text-white group-hover:text-[#00ff88] transition-colors">{montage.title}</h3>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider font-bold">{montage.views} • VELOCITY • VFX • SFX</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
