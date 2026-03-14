import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-zinc-900 border border-white/5 p-12 rounded-3xl text-center max-w-xl shadow-2xl relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-red-600/10 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative z-10"
        >
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-600/30">
            <CheckCircle size={40} className="text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            MESSAGE <span className="text-red-600 italic">SENT!</span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Thank you for reaching out! I've received your message and will get back to you as soon as possible. 
            Let's create something incredible together.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft size={20} />
            BACK TO HOME
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
