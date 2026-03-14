import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function StreamHighlights() {
  const highlights = [
    { title: "Insane Clutch vs Pro Team | Valorant", game: "Valorant", views: "120K Views", duration: "10:15", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" },
    { title: "Funniest Moments of the Year", game: "Just Chatting", views: "450K Views", duration: "14:20", img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=800" },
    { title: "Reaching Predator Rank in ONE STREAM", game: "Apex Legends", views: "300K Views", duration: "12:05", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800" },
    { title: "My First Time Playing Elden Ring", game: "Elden Ring", views: "550K Views", duration: "18:40", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800" },
    { title: "Minecraft Hardcore but it's Chaos", game: "Minecraft", views: "890K Views", duration: "14:50", img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800" },
    { title: "GTA RP Heist Goes Terribly WRONG", game: "GTA V", views: "1.1M Views", duration: "15:20", img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-[#9146FF] uppercase border border-[#9146FF]/30 bg-[#9146FF]/10 rounded-full">
          Twitch & Kick
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
          Stream <span className="text-[#9146FF]">Highlights</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Condensing hours of VODs into highly entertaining, engaging, and fast-paced recap videos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-zinc-900 border border-white/5">
              <img src={highlight.img} alt={highlight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-x-0 bottom-0 top-0 bg-[#9146FF]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 bg-[#9146FF] rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform shadow-xl shadow-[#9146FF]/50">
                  <Play fill="white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs font-bold rounded text-white">
                {highlight.duration}
              </div>
              <div className="absolute top-2 left-2 bg-[#9146FF] px-2 py-1 text-xs font-bold rounded text-white">
                {highlight.game}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#9146FF] transition-colors line-clamp-2">{highlight.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{highlight.views} • Dynamic zooming, subtitles & SFX.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
