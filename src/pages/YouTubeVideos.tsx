import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';

export default function YouTubeVideos() {
  const videos = [
    {
      title: "Carry The Glass With My Brother Full Chaos",
      channel: "NineAsh",
      tag: "Gameplay",
      img: "https://img.youtube.com/vi/cAdjtQYsNHY/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=cAdjtQYsNHY&t=14s"
    },
    {
      title: "Bullied @ABHI9AV So Hard... He Uninstalled the Game 😂🔥 | ft. @ParagGaurr @HarshitPlaysofficial",
      channel: "NineAsh",
      tag: "Funny Moments",
      img: "https://img.youtube.com/vi/QrX5L68ulLc/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=QrX5L68ulLc&t=17s"
    },
    {
      title: "Valorant Montage - Big Dawgs 🔥",
      channel: "NineAsh",
      tag: "Montage",
      img: "https://img.youtube.com/vi/Q9BXw1pUkPw/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=Q9BXw1pUkPw"
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-red-500 uppercase border border-red-500/30 bg-red-500/10 rounded-full">
          Long-Form Content
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
          YouTube <span className="text-red-600">Videos</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Professional, highly-retentive edits perfect for YouTube channels seeking to increase watch time and viewer satisfaction.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, i) => (
          <motion.a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            key={i}
            className="group cursor-pointer block bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-red-600/40 transition-colors"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-black">
              <img
                src={video.img}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Dark overlay + play button on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform shadow-xl shadow-red-600/30">
                  <Play fill="white" size={24} className="ml-1" />
                </div>
              </div>
              {/* Tag badge */}
              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-400 border border-red-600/30">
                {video.tag}
              </div>
            </div>

            {/* Info row — mimics YouTube card */}
            <div className="p-4 flex gap-3">
              <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5">
                <Youtube size={16} className="text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-red-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 font-medium">{video.channel} • NineAsh7</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
