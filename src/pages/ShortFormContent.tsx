import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ShortFormContent() {
  const shorts = [
    { title: "Best Podcast Clip Hook", views: "10.2M Views", duration: "0:45", img: "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?auto=format&fit=crop&q=80&w=400" },
    { title: "Gaming Clip - The Perfect Edit", views: "3.5M Views", duration: "0:59", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400" },
    { title: "Educational Short - Finance", views: "2.1M Views", duration: "0:30", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400" },
    { title: "Funny Moment - Try Not to Laugh", views: "5.5M Views", duration: "0:25", img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=400" },
    { title: "Vlog Style - Day in a Life", views: "850K Views", duration: "1:00", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400" },
    { title: "Product Review - Tech", views: "1.5M Views", duration: "0:40", img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=400" },
    { title: "Motivational Speech Quote", views: "4.2M Views", duration: "0:50", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=400" },
    { title: "Hidden Detail in Movie", views: "6.0M Views", duration: "0:55", img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-[#00f2fe] uppercase border border-[#00f2fe]/30 bg-[#00f2fe]/10 rounded-full">
          TikTok / Reels / Shorts
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
          Short-Form <span className="text-[#00f2fe]">Content</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Mastering the algorithm with fast-paced, high retention vertical content featuring dynamic subtitles and incredible hooks.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {shorts.map((short, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            key={i} 
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-white/5 shadow-xl">
              <img src={short.img} alt={short.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 origin-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                <div className="w-14 h-14 bg-[#00f2fe] rounded-full flex items-center justify-center text-black transform scale-90 group-hover:scale-100 transition-transform shadow-lg shadow-[#00f2fe]/40">
                  <Play fill="black" size={24} className="ml-1" />
                </div>
              </div>
              
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 text-[10px] font-bold rounded text-white border border-white/10">
                {short.duration}
              </div>

              <div className="absolute bottom-4 left-0 w-full px-4">
                <p className="text-white font-black text-sm drop-shadow-md line-clamp-2 leading-tight">{short.title}</p>
                <div className="w-8 h-1 bg-[#00f2fe] mt-2 rounded-full" />
              </div>
            </div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{short.views}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
