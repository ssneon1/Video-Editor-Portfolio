import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function YouTubeVideos() {
  const videos = [
    { title: "The Ultimate Guide to Editing", views: "1.2M Views", duration: "10:24", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" },
    { title: "Insane Setup Tour 2026", views: "850K Views", duration: "14:15", img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=800" },
    { title: "React vs Vue: The Truth", views: "500K Views", duration: "08:42", img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800" },
    { title: "Day in the Life of a Video Editor", views: "2.1M Views", duration: "18:30", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" },
    { title: "Top 5 Cinematic Effects", views: "340K Views", duration: "05:55", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" },
    { title: "How to Grow Fast on YouTube", views: "4.5M Views", duration: "12:00", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800" },
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-zinc-900 border border-white/5">
              <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-x-0 bottom-0 top-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform">
                  <Play fill="white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs font-bold rounded text-white">
                {video.duration}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors line-clamp-2">{video.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{video.views} • Edited accurately to match the brand.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
