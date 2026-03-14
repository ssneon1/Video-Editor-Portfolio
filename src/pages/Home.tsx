import { 
  Play, 
  Video, 
  Youtube, 
  Layers, 
  Zap, 
  Cpu, 
  Mail, 
  MessageSquare,
  ExternalLink,
  Clock,
  Scissors
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
// @ts-ignore
import profileImg from '../utils/IMG_0003_1 (1).JPG';
import { useRef } from 'react';

// ─────────────────────────────────────────────
// Reusable scroll-reveal wrapper
// ─────────────────────────────────────────────
const Reveal = ({ children, delay = 0, className = '' }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// Hero — parallax background
// ─────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Background moves at half the scroll speed → parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 overflow-hidden scale-110">
        <motion.img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2070"
          className="w-full h-full object-cover animate-bg-pan"
          alt="Editing Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
      </motion.div>

      {/* Foreground text — fades & rises slightly on scroll */}
      <motion.div style={{ y: textY, opacity }} className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-red-500 uppercase border border-red-500/30 bg-red-500/10 rounded-full">
            Expert Video Editor
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Professional <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">Video Editor</span> & Content Creator
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Creating cinematic gaming edits, high-energy montages, and engaging social media content that dominates viewer attention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Play className="fill-current" size={20} />
              WATCH MY WORK
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all duration-300">
              GET IN TOUCH
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase text-white/40">Scroll</span>
        <div className="w-px h-12 rounded-full bg-gradient-to-b from-red-600 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
};

// ─────────────────────────────────────────────
// About
// ─────────────────────────────────────────────
const About = () => (
  <section id="about" className="py-28 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-zinc-900 group">
              <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              <img
                src={profileImg}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                alt="NineAsh"
              />
            </div>
            <div className="absolute inset-0 rounded-lg group-hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] pointer-events-none transition-all duration-700" />
            <div className="absolute -bottom-6 -right-6 bg-red-600 p-8 rounded-lg shadow-xl hidden lg:block">
              <p className="text-4xl font-black text-white">400+</p>
              <p className="text-sm font-bold text-white/80 uppercase tracking-tighter">Videos Edited</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">I AM <span className="text-red-600">NINEASH</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>I'm a passionate video editor and content creator specializing in gaming edits, cinematic montages, and engaging YouTube content.</p>
              <p>With experience editing 400+ videos, I focus on creating fast-paced, high-energy content that keeps viewers engaged. My workflow combines professional editing software and AI-powered tools to produce smooth transitions, advanced motion graphics, and cinematic storytelling.</p>
              <p>From gaming montages and stream highlights to short-form social media edits, I aim to transform raw gameplay footage into visually powerful content that captures attention and boosts viewer retention.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-600/10 rounded border border-red-600/30"><Clock className="text-red-600" size={20} /></div>
                <span className="text-white font-medium">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-600/10 rounded border border-red-600/30"><Zap className="text-red-600" size={20} /></div>
                <span className="text-white font-medium">High Engagement</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────
// Skills
// ─────────────────────────────────────────────
const Skills = () => {
  const categories = [
    {
      title: "Video Editing",
      icon: <Video className="text-red-600" />,
      items: ["Professional YouTube Editing", "Gaming Montage Editing", "Stream Highlights", "Short-Form Content Editing"]
    },
    {
      title: "Advanced Techniques",
      icon: <Layers className="text-red-600" />,
      items: ["Cinematic Transitions", "Motion Graphics", "Color Grading", "Sound Design"]
    },
    {
      title: "AI-Powered Editing",
      icon: <Cpu className="text-red-600" />,
      items: ["AI Noise Reduction", "AI Rotoscoping", "AI Video Enhancement", "Automated Subtitles"]
    }
  ];

  return (
    <section id="skills" className="py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">MY <span className="text-red-600">EXPERTISE</span></h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-8 bg-black border border-white/5 rounded-2xl hover:border-red-600/50 transition-colors h-full"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">{cat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-6">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 pt-10 border-t border-white/5">
            <p className="text-center text-zinc-400 uppercase tracking-widest text-xs font-bold mb-10">Software Expertise</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Adobe Premiere Pro", color: "#9999FF", short: "Pr" },
                { name: "Adobe After Effects", color: "#D291FF", short: "Ae" },
                { name: "DaVinci Resolve", color: "#FF6B6B", short: "Da" },
                { name: "CapCut", color: "#00D4FF", short: "CC" }
              ].map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-4 p-5 bg-zinc-900 border border-white/10 rounded-2xl hover:border-white/30 transition-colors group cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-black text-sm shrink-0 shadow-lg"
                    style={{ backgroundColor: tool.color, boxShadow: `0 0 20px ${tool.color}55` }}
                  >
                    {tool.short}
                  </div>
                  <span className="text-white font-bold text-sm leading-tight group-hover:text-white transition-colors">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// Portfolio
// ─────────────────────────────────────────────
const Portfolio = () => {
  const styles = [
    { title: "Gaming Montages", desc: "High-energy edits with cinematic transitions, synced beats, and intense action moments.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800", link: "/gaming-montages" },
    { title: "YouTube Videos", desc: "Professional edits designed to increase viewer retention and engagement.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800", link: "/youtube-videos" },
    { title: "Stream Highlights", desc: "Best moments from live streams edited into entertaining highlight videos.", img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=800", link: "/stream-highlights" },
    { title: "Short-Form Content", desc: "Fast-paced edits optimized for YouTube Shorts, Instagram Reels, and TikTok.", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", link: "/short-form-content" }
  ];

  return (
    <section id="portfolio" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-white mb-4">FEATURED <span className="text-red-600">WORK</span></h2>
            <p className="text-gray-400">Transforming raw footage into digital masterpieces.</p>
          </div>
          <a href="https://www.youtube.com/@NineAsh7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors">
            VIEW ALL ON YOUTUBE <ExternalLink size={18} />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link to={style.link} className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 block hover:border-red-600/50 transition-colors h-full">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={style.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={style.title} />
                  <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-white font-bold px-6 py-3 bg-red-600 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all">
                      View Gallery <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
                <div className="p-6 relative z-10 bg-zinc-900">
                  <h3 className="text-lg font-bold text-white mb-2">{style.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{style.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20">
          <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 block">Case Study</span>
                <h3 className="text-3xl font-black text-white mb-6 leading-tight">Project: GTA RP Heist Highlight</h3>
                <p className="text-gray-400 mb-8 italic">
                  "For this project, I edited a high-intensity roleplay heist sequence using advanced pacing and sound design techniques."
                </p>
                <ul className="space-y-4">
                  {[
                    "Synced multiple gameplay angles",
                    "Added motion-tracked callouts",
                    "Used cinematic sound effects to build tension",
                    "Applied dynamic cuts to maintain viewer engagement"
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-medium">
                      <Scissors className="text-red-600" size={18} />{step}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-green-600/10 border border-green-600/30 rounded-lg">
                  <p className="text-green-500 text-sm font-bold">RESULT: Increased viewer retention and high engagement during key moments.</p>
                </div>
              </div>
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Play fill="white" />
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=1000"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  alt="GTA RP Project"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// AI Workflow — parallax glow orb
// ─────────────────────────────────────────────
const AIWorkflow = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const orbX = useTransform(scrollYProgress, [0, 1], ['-10%', '30%']);

  return (
    <section ref={ref} className="py-28 bg-zinc-950 relative overflow-hidden">
      <motion.div style={{ x: orbX }} className="absolute top-1/2 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <h2 className="text-4xl font-black text-white mb-6 leading-tight">
            AI-ENHANCED <span className="text-red-600">WORKFLOW</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            To improve production speed and quality, I integrate cutting-edge AI tools into my editing workflow, delivering professional results faster than traditional methods.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: "AI Rotoscoping", icon: <Layers size={20} /> },
            { label: "AI Noise Reduction", icon: <Zap size={20} /> },
            { label: "AI Generated B-Roll", icon: <Video size={20} /> },
            { label: "Auto Subtitles", icon: <MessageSquare size={20} /> }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, borderColor: 'rgba(220,38,38,0.5)' }}
                className="p-6 bg-black border border-white/5 rounded-xl flex flex-col items-center gap-4"
              >
                <div className="text-red-600">{item.icon}</div>
                <span className="text-white font-bold text-sm tracking-tight">{item.label}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// Contact
// ─────────────────────────────────────────────
const Contact = () => (
  <section id="contact" className="py-28 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16">
        <Reveal>
          <div>
            <h2 className="text-5xl font-black text-white mb-8">LET'S <span className="text-red-600 italic">TALK</span></h2>
            <p className="text-gray-400 text-lg mb-10">
              Interested in working together on your next project? I'm ready to bring your vision to life with professional editing.
            </p>
            <div className="space-y-6">
              <a href="https://www.youtube.com/@NineAsh7" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform"><Youtube className="text-white" /></div>
                <div>
                  <p className="text-zinc-500 text-xs font-bold uppercase">YouTube</p>
                  <p className="text-white font-bold group-hover:text-red-500 transition-colors">@NineAsh7</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform"><MessageSquare className="text-white" /></div>
                <div>
                  <p className="text-zinc-500 text-xs font-bold uppercase">Discord</p>
                  <p className="text-white font-bold group-hover:text-indigo-400 transition-colors">Join Server</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform"><Mail className="text-black" /></div>
                <div>
                  <p className="text-zinc-500 text-xs font-bold uppercase">Email</p>
                  <p className="text-white font-bold group-hover:text-red-500 transition-colors">contact@nineash.com</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="bg-zinc-900 p-8 rounded-3xl space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase px-2">Name</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase px-2">Email</label>
                <input type="email" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Email Address" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase px-2">Project Type</label>
              <input 
                type="text" 
                className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-600 transition-colors" 
                placeholder="e.g. Gaming Montage, YouTube Script" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase px-2">Message</label>
              <textarea className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-600 transition-colors h-32" placeholder="Tell me about your project..." />
            </div>
            <button className="w-full py-4 bg-red-600 text-white font-black rounded-xl hover:bg-red-700 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-600/20">
              SEND MESSAGE
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <AIWorkflow />
      <Contact />
    </>
  );
}
