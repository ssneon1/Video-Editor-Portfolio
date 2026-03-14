import { motion } from 'framer-motion';
import { Play, Youtube, Instagram } from 'lucide-react';

type Short = {
  title: string;
  videoId: string;
  link: string;
  platform: 'youtube' | 'instagram';
  tag: string;
};

export default function ShortFormContent() {
  const shorts: Short[] = [
    {
      title: "Zombie Apocallipasse",
      videoId: "e68HGEcfeWg",
      link: "https://www.youtube.com/shorts/e68HGEcfeWg",
      platform: "youtube",
      tag: "Short",
    },
    {
      title: "Par Hum Acche Bache Hai Sahi Mai",
      videoId: "1EP6sJ3D4Eo",
      link: "https://www.youtube.com/shorts/1EP6sJ3D4Eo",
      platform: "youtube",
      tag: "Short",
    },
    {
      title: "This Game Is Unfair || #csgo",
      videoId: "ZYZVC-uIdlI",
      link: "https://www.youtube.com/shorts/ZYZVC-uIdlI",
      platform: "youtube",
      tag: "CS:GO",
    },
    {
      title: "Epic Clutch Bolte @iamvanshajsingh || #gta5",
      videoId: "dJAwTPuWhA8",
      link: "https://www.youtube.com/shorts/dJAwTPuWhA8",
      platform: "youtube",
      tag: "GTA 5",
    },
    {
      title: "@triggeredinsaan bhai thoda sa brain lag hogeya tha mera 😅",
      videoId: "baqQ0qL6tiQ",
      link: "https://www.youtube.com/shorts/baqQ0qL6tiQ",
      platform: "youtube",
      tag: "Short",
    },
    {
      title: "Aura Farmer Hi Khade 😎",
      videoId: "W03aniRvn8c",
      link: "https://www.youtube.com/shorts/W03aniRvn8c",
      platform: "youtube",
      tag: "Short",
    },
    {
      title: "Instagram Reel — NineAsh",
      videoId: "CYXlkhQA4-W",
      link: "https://www.instagram.com/tv/CYXlkhQA4-W/",
      platform: "instagram",
      tag: "Reel",
    },
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {shorts.map((short, i) => {
          const thumbUrl = short.platform === 'youtube'
            ? `https://img.youtube.com/vi/${short.videoId}/maxresdefault.jpg`
            : `https://img.youtube.com/vi/${short.videoId}/maxresdefault.jpg`;

          const PlatformIcon = short.platform === 'instagram' ? Instagram : Youtube;
          const iconBg = short.platform === 'instagram'
            ? 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400'
            : 'bg-red-600';

          return (
            <motion.a
              href={short.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              key={i}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Portrait card */}
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden mb-3 bg-zinc-900 border border-white/5 shadow-xl hover:border-[#00f2fe]/30 transition-colors">
                <img
                  src={thumbUrl}
                  alt={short.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 origin-center"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Play button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                  <div className="w-14 h-14 bg-[#00f2fe] rounded-full flex items-center justify-center text-black transform scale-90 group-hover:scale-100 transition-transform shadow-lg shadow-[#00f2fe]/40">
                    <Play fill="black" size={22} className="ml-1" />
                  </div>
                </div>

                {/* Tag badge */}
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold rounded-full text-[#00f2fe] border border-[#00f2fe]/30">
                  {short.tag}
                </div>

                {/* Platform icon badge */}
                <div className={`absolute top-2 right-2 w-6 h-6 rounded-full ${iconBg} flex items-center justify-center`}>
                  <PlatformIcon size={12} className="text-white" />
                </div>

                {/* Title overlay at bottom */}
                <div className="absolute bottom-3 left-0 w-full px-3">
                  <p className="text-white font-black text-xs drop-shadow-md line-clamp-2 leading-tight">
                    {short.title}
                  </p>
                  <div className="w-6 h-0.5 bg-[#00f2fe] mt-1.5 rounded-full" />
                </div>
              </div>

              {/* Channel label below */}
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">NineAsh • {short.platform === 'instagram' ? 'Reel' : 'Short'}</p>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
