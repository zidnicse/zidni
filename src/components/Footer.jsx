import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon } from '../utils/icons';
import { personalData, navLinks } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-secondaryBg border-t border-subtleBorder pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-primaryAccent/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-subtleBorder">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cardBg border border-subtleBorder flex items-center justify-center font-extrabold text-lg text-primaryAccent">
                <span className="accent-gradient-text font-mono font-black">Z</span>
              </div>
              <span className="text-xl font-black text-mainText tracking-tight">
                {personalData.brandName}
              </span>
            </div>

            <div>
              <p className="text-base font-semibold text-mainText">
                {personalData.fullName}
              </p>
              <p className="text-sm text-secondaryAccent font-mono mt-0.5">
                {personalData.professionalIdentity}
              </p>
            </div>

            <p className="text-sm text-secondaryText max-w-md leading-relaxed">
              Focused on scalable server-side systems, RESTful API integrations, and practical AI application pipelines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-mainText">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-secondaryText hover:text-primaryAccent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Actions */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-mainText">
              Connect Directly
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-secondaryText">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-primaryAccent" />
                <span>github.com/zidnicse</span>
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-secondaryAccent" />
                <span>{personalData.email}</span>
              </a>
            </div>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-cardBg border border-subtleBorder text-xs font-medium text-mainText hover:border-primaryAccent/50 transition-colors"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondaryText">
          <p>© 2026 Md. Zihadul Islam Zidni. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-[#71717A]">Designed with modern web standards</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-cardBg border border-subtleBorder text-secondaryText hover:text-white hover:border-primaryAccent/40 transition-all duration-200"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
