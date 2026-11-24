import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../utils/icons';
import { personalData } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone.replace(/[\s-]/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-primaryBg border-t border-subtleBorder overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primaryAccent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondaryAccent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Connect"
          subtitle="Have an idea, opportunity, or just want to say hello? I'd love to hear from you."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Contact Information & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl bg-cardBg border border-subtleBorder p-6 sm:p-8 backdrop-blur-sm shadow-glow-card">
              <h3 className="text-xl font-bold text-mainText mb-2">Direct Contact Channels</h3>
              <p className="text-sm text-secondaryText leading-relaxed mb-6">
                Reach out directly via email, mobile, or GitHub. I am always open to discussing backend architectures, API integration ideas, and academic collaborations.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-secondaryBg border border-subtleBorder flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-cardBg text-primaryAccent border border-subtleBorder shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-mono text-secondaryText uppercase tracking-wider">
                        Email
                      </span>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-sm font-semibold text-mainText hover:text-primaryAccent transition-colors truncate block"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="p-2 rounded-lg bg-cardBg hover:bg-elevatedCard border border-subtleBorder text-xs text-secondaryText hover:text-white transition-colors flex items-center gap-1"
                      title="Copy email address"
                      aria-label="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="p-2 rounded-lg bg-primaryAccent/15 hover:bg-primaryAccent/30 border border-primaryAccent/30 text-primaryAccent text-xs font-medium flex items-center gap-1 transition-colors"
                      title="Open in mail app"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-secondaryBg border border-subtleBorder flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-cardBg text-secondaryAccent border border-subtleBorder shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-mono text-secondaryText uppercase tracking-wider">
                        Mobile Phone
                      </span>
                      <a
                        href={`tel:${personalData.phone.replace(/[\s-]/g, '')}`}
                        className="text-sm font-semibold text-mainText hover:text-secondaryAccent transition-colors truncate block"
                      >
                        {personalData.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={handleCopyPhone}
                      type="button"
                      className="p-2 rounded-lg bg-cardBg hover:bg-elevatedCard border border-subtleBorder text-xs text-secondaryText hover:text-white transition-colors flex items-center gap-1"
                      title="Copy phone number"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href={`tel:${personalData.phone.replace(/[\s-]/g, '')}`}
                      className="p-2 rounded-lg bg-secondaryAccent/15 hover:bg-secondaryAccent/30 border border-secondaryAccent/30 text-secondaryAccent text-xs font-medium flex items-center gap-1 transition-colors"
                      title="Call phone"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* GitHub Action */}
                <div className="p-4 rounded-xl bg-secondaryBg border border-subtleBorder flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-cardBg text-purple-400 border border-subtleBorder shrink-0">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-mono text-secondaryText uppercase tracking-wider">
                        GitHub Profile
                      </span>
                      <a
                        href={personalData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-mainText hover:text-primaryAccent transition-colors truncate block"
                      >
                        github.com/zidnicse
                      </a>
                    </div>
                  </div>

                  <a
                    href={personalData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-elevatedCard hover:bg-cardBg border border-subtleBorder text-secondaryText hover:text-white transition-colors"
                    title="Open GitHub profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Addresses */}
                <div className="p-4 rounded-xl bg-secondaryBg border border-subtleBorder space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primaryAccent shrink-0 mt-1" />
                    <div>
                      <span className="block text-[11px] font-mono text-secondaryText uppercase tracking-wider">
                        Present Address
                      </span>
                      <p className="text-xs sm:text-sm text-mainText font-medium">
                        {personalData.presentAddress}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-2 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-secondaryAccent shrink-0 mt-1" />
                    <div>
                      <span className="block text-[11px] font-mono text-secondaryText uppercase tracking-wider">
                        Permanent Address
                      </span>
                      <p className="text-xs sm:text-sm text-mainText font-medium">
                        {personalData.permanentAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Functional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
