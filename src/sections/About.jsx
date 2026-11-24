import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, FileText, Check, AlertCircle, Copy, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../utils/icons';
import { personalData } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const About = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const personalInfoItems = [
    { label: 'Full Name', value: personalData.fullName, icon: User },
    { label: 'Profession', value: personalData.shortTitle, icon: FileText },
    {
      label: 'Email',
      value: personalData.email,
      icon: Mail,
      isLink: true,
      href: `mailto:${personalData.email}`
    },
    {
      label: 'Mobile',
      value: personalData.phoneDisplay,
      icon: Phone,
      isLink: true,
      href: `tel:${personalData.phone.replace(/[\s-]/g, '')}`
    },
    { label: 'Present Address', value: personalData.presentAddress, icon: MapPin },
    { label: 'Permanent Address', value: personalData.permanentAddress, icon: MapPin },
    {
      label: 'GitHub',
      value: 'github.com/zidnicse',
      icon: GithubIcon,
      isLink: true,
      href: personalData.githubUrl
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-secondaryBg/40 border-t border-subtleBorder overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ABOUT ME"
          title="About Me"
          subtitle="Get to know me better"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rounded-2xl bg-cardBg border border-subtleBorder p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primaryAccent/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-mainText mb-4 flex items-center gap-2.5">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-primaryAccent to-secondaryAccent" />
                Professional Summary
              </h3>

              <p className="text-secondaryText text-sm sm:text-base leading-relaxed text-justify">
                {personalData.aboutSummary}
              </p>

              {/* Core Attributes Tag Bar */}
              <div className="mt-8 pt-6 border-t border-subtleBorder flex flex-wrap gap-2">
                {[
                  'Node.js & Express',
                  'RESTful API Design',
                  'MongoDB',
                  'JWT & Firebase Auth',
                  'Google Calendar API',
                  'LLM & Speech APIs',
                  'Voice Agents & Automation',
                  'React.js & Tailwind CSS'
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[#101015] text-[#D4D4D8] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Personal Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-cardBg border border-subtleBorder p-6 sm:p-8 backdrop-blur-sm shadow-glow-card relative">
              <h3 className="text-lg font-bold text-mainText mb-6 flex items-center gap-2">
                <span className="text-secondaryAccent font-mono text-sm">01 /</span>
                Personal Information
              </h3>

              <div className="space-y-4">
                {personalInfoItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-b-0">
                      <div className="p-2 rounded-lg bg-secondaryBg border border-subtleBorder text-primaryAccent shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[11px] font-mono text-secondaryText uppercase tracking-wider">
                          {item.label}
                        </span>
                        {item.isLink ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm font-medium text-mainText hover:text-secondaryAccent transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-mainText break-words">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Download CV Action - Clear Transparent Placeholder */}
              <div className="mt-8 pt-6 border-t border-subtleBorder">
                <button
                  type="button"
                  id="download-cv-btn"
                  onClick={() => setCvModalOpen(true)}
                  className="w-full py-3 px-4 rounded-xl bg-elevatedCard hover:bg-cardBg border border-subtleBorder hover:border-primaryAccent/50 text-sm font-semibold text-mainText flex items-center justify-center gap-2 transition-all duration-200 group"
                >
                  <FileText className="w-4 h-4 text-primaryAccent group-hover:scale-110 transition-transform" />
                  <span>Download CV / Resume</span>
                </button>
                <p className="text-[11px] text-center text-secondaryText/70 mt-2">
                  Official verified resume available upon direct request.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CV Request Modal */}
      {cvModalOpen && (
        <div id="cv-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md rounded-2xl bg-cardBg border border-subtleBorder p-6 shadow-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-primaryAccent/15 border border-primaryAccent/30 flex items-center justify-center text-primaryAccent mb-4">
              <FileText className="w-6 h-6" />
            </div>

            <h4 className="text-lg font-bold text-mainText mb-2">Curriculum Vitae</h4>
            <p className="text-sm text-secondaryText leading-relaxed mb-6">
              To ensure recruiters and hiring managers receive the latest, unadulterated version with verified academic transcripts, the official CV is provided directly via email.
            </p>

            <div className="p-3 rounded-xl bg-secondaryBg border border-subtleBorder flex items-center justify-between gap-2 mb-6">
              <span className="text-xs font-mono text-secondaryAccent truncate">
                {personalData.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-cardBg hover:bg-elevatedCard border border-subtleBorder text-xs text-mainText flex items-center gap-1 transition-colors"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                id="close-cv-modal-btn"
                onClick={() => setCvModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-secondaryText hover:text-white"
              >
                Close
              </button>
              <a
                href={`mailto:${personalData.email}?subject=CV%20Request%20-%20Md.%20Zihadul%20Islam%20Zidni`}
                className="px-4 py-2 rounded-xl bg-primaryAccent hover:bg-purple-600 text-white text-xs font-semibold shadow-glow-purple flex items-center gap-1.5"
              >
                <span>Request via Email</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
