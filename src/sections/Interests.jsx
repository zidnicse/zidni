import React from 'react';
import { motion } from 'framer-motion';
import { Server, Network, BrainCircuit, Mic, Globe } from 'lucide-react';
import { areasOfInterest } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

const iconMap = {
  Server,
  Network,
  BrainCircuit,
  Mic,
  Globe
};

export const Interests = () => {
  return (
    <section id="interests" className="py-20 relative bg-secondaryBg/30 border-t border-subtleBorder overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="EXPLORATION"
          title="Areas of Interest"
          subtitle="Technical domains and engineering concepts I am passionate about exploring"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {areasOfInterest.map((item, index) => {
            const Icon = iconMap[item.iconName] || Server;
            const isPurple = item.accent === 'purple';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-cardBg border border-subtleBorder p-6 transition-all duration-300 hover:border-primaryAccent/40 hover:bg-elevatedCard hover:shadow-glow-card flex flex-col justify-between"
              >
                {/* Glow pill */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                    isPurple
                      ? 'bg-primaryAccent/10 border border-primaryAccent/20 text-primaryAccent group-hover:bg-primaryAccent/20'
                      : 'bg-secondaryAccent/10 border border-secondaryAccent/20 text-secondaryAccent group-hover:bg-secondaryAccent/20'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-mainText group-hover:text-white transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondaryText leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isPurple ? 'bg-primaryAccent' : 'bg-secondaryAccent'
                    }`}
                  />
                  <span className="text-[10px] font-mono text-secondaryText/70 uppercase tracking-wider">
                    Domain Interest
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
