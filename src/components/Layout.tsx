import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white italic">9</div>
          <span className="text-xl font-bold tracking-tighter text-white">NINEASH</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="/#portfolio" className="text-gray-300 hover:text-red-500 transition-colors">Portfolio</a>
          <a href="/#about" className="text-gray-300 hover:text-red-500 transition-colors">About</a>
          <a href="/#skills" className="text-gray-300 hover:text-red-500 transition-colors">Skills</a>
          <a href="/#contact" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">Hire Me</a>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="py-12 bg-black border-t border-white/5 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center font-bold text-white italic text-xs">9</div>
        <span className="text-sm font-bold tracking-tighter text-white">NINEASH</span>
      </div>
      <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} NineAsh. All rights reserved. Designed for excellence.</p>
    </div>
  </footer>
);

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-red-600 selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
