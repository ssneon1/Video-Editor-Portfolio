import { motion } from 'framer-motion';
import { Play, Twitch } from 'lucide-react';

export default function StreamHighlights() {
  const highlights = [
    {
      title: "FUNNIEST BANK ROBBERY EVER GTA 5 Roleplay - BANK ROBBERS vs COPS",
      videoId: "GT3WxhzBBIE",
      startAt: 254,
      tag: "GTA 5 RP",
      channel: "NineAsh",
    },
    {
      title: "Funniest Valorant Moments That Will Make You Laugh",
      videoId: "k1IiV988LTI",
      startAt: 0,
      tag: "Valorant",
      channel: "NineAsh",
    },
    {
      title: "GTA 5 Epic Funny Moment & Epic Fail || DRP Ash Manjiro Clips",
      videoId: "-OtAKAqHvb8",
      startAt: 0,
      tag: "GTA 5",
      channel: "NineAsh",
    },
    {
      title: "4 Hilarious Idiots Play Buckshot Roulette | Epic Fail & Laughs Guaranteed!",
      videoId: "IPzw3YtXMY4",
      startAt: 0,
      tag: "Buckshot Roulette",
      channel: "NineAsh",
    },
    {
      title: "GTA 5: I Tried to Teach English to My Subscribers… BIG MISTAKE 😭📖",
      videoId: "pDOUA0-5ST8",
      startAt: 111,
      tag: "GTA 5",
      channel: "NineAsh",
    },
    {
      title: "Best Funny Horror Game Ever",
      videoId: "X1WnOw09D44",
      startAt: 0,
      tag: "Horror",
      channel: "NineAsh",
    },
    {
      title: "The Trash Trio With Trash Gameplay || Valorant Funny Moments",
      videoId: "alpvpINGlm8",
      startAt: 80,
      tag: "Valorant",
      channel: "NineAsh",
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-[#9146FF] uppercase border border-[#9146FF]/30 bg-[#9146FF]/10 rounded-full">
          Twitch &amp; Kick
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
          Stream <span className="text-[#9146FF]">Highlights</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Condensing hours of VODs into highly entertaining, engaging, and fast-paced recap videos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight, i) => {
          const thumbUrl = `https://img.youtube.com/vi/${highlight.videoId}/maxresdefault.jpg`;
          const watchUrl = highlight.startAt
            ? `https://www.youtube.com/watch?v=${highlight.videoId}&t=${highlight.startAt}s`
            : `https://www.youtube.com/watch?v=${highlight.videoId}`;

          return (
            <motion.a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              key={i}
              className="group cursor-pointer block bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-[#9146FF]/40 transition-colors"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={thumbUrl}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay + play button on hover */}
                <div className="absolute inset-0 bg-[#9146FF]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#9146FF] rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform shadow-xl shadow-[#9146FF]/50">
                    <Play fill="white" size={24} className="ml-1" />
                  </div>
                </div>
                {/* Tag badge */}
                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#9146FF] border border-[#9146FF]/30">
                  {highlight.tag}
                </div>
              </div>

              {/* Info row — mimics YouTube card */}
              <div className="p-4 flex gap-3">
                <div className="w-9 h-9 rounded-full bg-[#9146FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Twitch size={16} className="text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-[#9146FF] transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 font-medium">{highlight.channel} • Stream Edit</p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
