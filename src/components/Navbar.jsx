import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, personalData } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primaryBg/85 backdrop-blur-xl border-b border-subtleBorder py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          {/* Logo Icon Mark */}
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cardBg to-elevatedCard border border-subtleBorder flex items-center justify-center font-extrabold text-lg transition-all duration-300 group-hover:border-primaryAccent/50 group-hover:shadow-glow-purple">
            <span className="accent-gradient-text font-mono font-black">Z</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-secondaryAccent shadow-glow-cyan" />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-mainText group-hover:text-white transition-colors">
              {personalData.brandName}
            </span>
            <span className="text-[10px] font-mono text-secondaryText tracking-widest uppercase">
              Portfolio
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-cardBg/70 border border-subtleBorder backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-secondaryText hover:text-mainText hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primaryAccent/25 to-secondaryAccent/20 border border-primaryAccent/30 -z-10 animate-fade-in" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-primaryAccent to-purple-600 hover:from-purple-600 hover:to-primaryAccent text-white transition-all duration-300 shadow-glow-purple hover:scale-105 active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-cardBg border border-subtleBorder text-secondaryText hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primaryBg/95 backdrop-blur-2xl border-b border-subtleBorder px-4 pt-3 pb-6 space-y-1.5 transition-all animate-fade-in">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primaryAccent/15 text-primaryAccent border border-primaryAccent/30'
                    : 'text-secondaryText hover:text-white hover:bg-cardBg'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primaryAccent to-purple-600 text-white font-semibold text-sm shadow-glow-purple"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
