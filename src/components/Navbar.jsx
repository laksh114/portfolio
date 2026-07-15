import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Project List', id: 'project-list' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll detection for active navigation state
  useEffect(() => {
    const handleScroll = () => {
      // Background styling trigger
      setScrolled(window.scrollY > 20);

      // Section tracking
      if (location.pathname !== '/') return;
      
      const scrollPosition = window.scrollY + 120; // offset for nav bar

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      // If we are on detail page, navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Smooth scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Toggle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 glassmorphism border-b border-white/5 bg-[#060913]/75 shadow-lg shadow-emerald-950/5' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="relative text-2xl font-bold font-space tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 hover:opacity-80 transition-opacity select-none group"
        >
          LJ
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-space uppercase tracking-widest py-1 transition-colors select-none ${
                    activeSection === item.id && location.pathname === '/'
                      ? 'text-emerald-400 font-medium'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && location.pathname === '/' && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="flex items-center gap-2 px-4 py-2 border border-emerald-500/30 rounded-full font-space text-xs tracking-widest text-emerald-400 uppercase bg-emerald-500/5 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-400 hover:text-white p-2"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[#060913]/98 backdrop-blur-lg z-40 flex flex-col justify-between p-8 border-t border-white/5 animate-fade-in">
          <ul className="flex flex-col gap-6 mt-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-space uppercase tracking-widest py-2 text-left block w-full transition-colors ${
                    activeSection === item.id && location.pathname === '/'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-bold'
                      : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mb-16">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="flex items-center justify-center gap-2 py-4 border border-emerald-500/30 rounded-full font-space text-sm tracking-widest text-emerald-400 uppercase bg-emerald-500/5 transition-all duration-300"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
