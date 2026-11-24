import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MessageSquare } from 'lucide-react';
import { languages } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const Languages = () => {
  return (
    <section id="languages" className="py-20 relative bg-secondaryBg/20 border-t border-subtleBorder">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="COMMUNICATION"
          title="Languages"
          subtitle="Linguistic proficiency for technical collaboration and professional communication"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-cardBg border border-subtleBorder p-6 sm:p-7 backdrop-blur-sm hover:border-primaryAccent/40 hover:bg-elevatedCard transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primaryAccent/10 border border-primaryAccent/20 text-primaryAccent">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mainText">{lang.name}</h3>
                    <span className="text-xs font-mono text-secondaryAccent uppercase tracking-wider">
                      {lang.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-secondaryBg border border-subtleBorder flex items-center gap-2.5 text-xs sm:text-sm text-secondaryText">
                <MessageSquare className="w-4 h-4 text-primaryAccent shrink-0" />
                <span>Scope: <strong className="text-mainText font-medium">{lang.scope}</strong></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
