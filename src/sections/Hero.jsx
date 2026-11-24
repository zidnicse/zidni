import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, ArrowUpRight, Server, Plug, Bot, Mail } from 'lucide-react';
import { GithubIcon } from '../utils/icons';
import { personalData, floatingInterestCards } from '../data/portfolioData';
import { SocialLinks } from '../components/SocialLinks';

export const Hero = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getFloatingIcon = (name) => {
    switch (name) {
      case 'Server':
        return <Server className="w-4 h-4 text-primaryAccent" />;
      case 'Plug':
        return <Plug className="w-4 h-4 text-secondaryAccent" />;
      case 'Bot':
        return <Bot className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-primaryAccent" />;
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primaryAccent/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-secondaryAccent/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cardBg border border-subtleBorder text-secondaryAccent shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondaryAccent animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase">
                {personalData.introLabel}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-mainText tracking-tight leading-tight">
              {personalData.fullName}
            </h1>

            {/* Professional Title & Supporting Headline */}
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-bold accent-gradient-text">
                {personalData.professionalIdentity}
              </p>
              <p className="text-base sm:text-lg font-medium text-mainText/90">
                {personalData.supportingHeadline}
              </p>
            </div>

            {/* Professional Description */}
            <p className="text-sm sm:text-base text-secondaryText leading-relaxed max-w-2xl">
              {personalData.professionalDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primaryAccent to-purple-600 hover:from-purple-600 hover:to-primaryAccent text-white text-sm font-semibold shadow-glow-purple flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="px-6 py-3.5 rounded-xl bg-cardBg border border-subtleBorder hover:border-primaryAccent/50 text-mainText text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-elevatedCard active:scale-95 group"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-secondaryAccent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Social Links & Tag */}
            <div className="pt-4 border-t border-subtleBorder flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-secondaryText">
              <div className="flex items-center gap-3">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-cardBg border border-subtleBorder text-secondaryText hover:text-primaryAccent hover:border-primaryAccent/40 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2 rounded-lg bg-cardBg border border-subtleBorder text-secondaryText hover:text-secondaryAccent hover:border-secondaryAccent/40 transition-colors"
                  aria-label="Direct Email"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 font-mono text-secondaryText/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{personalData.tagline}</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT: Premium Profile Container & Floating Tech Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Ambient Profile Glow */}
            <div className="absolute inset-4 bg-gradient-to-tr from-primaryAccent/25 via-secondaryAccent/15 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Main Profile Frame */}
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-white/15 via-primaryAccent/30 to-secondaryAccent/20 shadow-2xl">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-secondaryBg relative group">
                <img
                  src={personalData.profileImage}
                  alt={personalData.fullName}
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-primaryBg via-transparent to-transparent opacity-60" />

                {/* Floating Bottom Status Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-cardBg/90 backdrop-blur-md border border-subtleBorder flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-mainText">Open for Collaboration</span>
                  </div>
                  <span className="text-[10px] font-mono text-secondaryAccent uppercase tracking-wider">
                    CSE Student
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Mini-Card 1: Backend Development */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl bg-cardBg/95 backdrop-blur-md border border-subtleBorder shadow-glow-card flex items-center gap-2.5 z-20"
            >
              <div className="p-1.5 rounded-lg bg-primaryAccent/15 border border-primaryAccent/30">
                {getFloatingIcon('Server')}
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-mainText">Backend Development</span>
                <span className="block text-[10px] text-secondaryText">Focus Area</span>
              </div>
            </motion.div>

            {/* Floating Mini-Card 2: API Integration */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -right-2 sm:-right-6 px-4 py-2.5 rounded-2xl bg-cardBg/95 backdrop-blur-md border border-subtleBorder shadow-glow-card flex items-center gap-2.5 z-20"
            >
              <div className="p-1.5 rounded-lg bg-secondaryAccent/15 border border-secondaryAccent/30">
                {getFloatingIcon('Plug')}
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-mainText">API Integration</span>
                <span className="block text-[10px] text-secondaryText">Core Focus</span>
              </div>
            </motion.div>

            {/* Floating Mini-Card 3: AI Automation */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="hidden sm:flex absolute top-1/2 -right-8 px-3.5 py-2 rounded-2xl bg-cardBg/95 backdrop-blur-md border border-subtleBorder shadow-glow-card items-center gap-2 z-20"
            >
              <div className="p-1 rounded-lg bg-purple-500/15 border border-purple-500/30">
                {getFloatingIcon('Bot')}
              </div>
              <span className="text-xs font-bold text-mainText">AI Automation</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
