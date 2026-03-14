import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';

export default function GamingMontages() {
  const montages = [
    {
      title: "World's Smallest Violin 🎻 || Valorant Montage || Beat Sync",
      videoId: "QkukEYkazu8",
      startAt: 0,
      game: "Valorant",
    },
    {
      title: "Valorant Montage or Valorant Gameplay || Stay 💔",
      videoId: "s4kfoiu5W10",
      startAt: 1,
      game: "Valorant",
    },
    {
      title: "The Motto ❤🔥 || Valorant Montage",
      videoId: "9VAyDQDHxzM",
      startAt: 0,
      game: "Valorant",
    },
    {
      title: "Tere Liye ❤🔥 || Valorant Montage",
      videoId: "ewRobco7lYQ",
      startAt: 0,
      game: "Valorant",
    },
    {
      title: "Step Back 🔙🔥 | Valorant Montage",
      videoId: "nHXW7JQCsI4",
      startAt: 0,
      game: "Valorant",
    },
    {
      title: "Valorant Montage - Big Dawgs 🔥",
      videoId: "Q9BXw1pUkPw",
      startAt: 0,
      game: "Valorant",
    },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {montages.map((montage, i) => {
          const thumbUrl = `https://img.youtube.com/vi/${montage.videoId}/maxresdefault.jpg`;
          const watchUrl = montage.startAt
            ? `https://www.youtube.com/watch?v=${montage.videoId}&t=${montage.startAt}s`
            : `https://www.youtube.com/watch?v=${montage.videoId}`;

          return (
            <motion.a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              key={i}
              className="group cursor-pointer block bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-[#00ff88]/30 transition-colors"
            >
              {/* Cinematic wide thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={thumbUrl}
                  alt={montage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#00ff88]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-[#00ff88]/50 shadow-xl shadow-[#00ff88]/10 transform scale-90 group-hover:scale-100 transition-transform">
                    <Play fill="white" size={24} className="ml-1" />
                  </div>
                </div>
                {/* Game tag */}
                <div className="absolute top-2 left-2 border border-[#00ff88]/50 bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-black uppercase rounded-full text-[#00ff88] tracking-widest">
                  {montage.game}
                </div>
              </div>

              {/* Info row */}
              <div className="p-4 flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Youtube size={16} className="text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-[#00ff88] transition-colors">
                    {montage.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 font-medium uppercase tracking-wider">NineAsh • VELOCITY • VFX • SFX</p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
