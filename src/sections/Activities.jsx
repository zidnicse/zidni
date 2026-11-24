import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, CheckCircle2, BookOpen, Compass } from 'lucide-react';
import { leadershipData, personalStrengths, hobbies } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const Activities = () => {
  return (
    <section id="activities" className="py-20 relative bg-primaryBg border-t border-subtleBorder overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ENGAGEMENT & CHARACTER"
          title="Leadership & Activities"
          subtitle="Community involvement and personal attributes beyond programming"
          align="center"
        />

        {/* Featured Leadership Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 rounded-2xl bg-gradient-to-r from-cardBg via-elevatedCard to-cardBg border border-subtleBorder p-6 sm:p-8 relative overflow-hidden group hover:border-primaryAccent/40 transition-all duration-300 shadow-glow-card"
        >
          {/* Subtle accent border glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primaryAccent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primaryAccent/15 border border-primaryAccent/30 text-primaryAccent flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Users className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-secondaryAccent/15 text-secondaryAccent border border-secondaryAccent/30 uppercase tracking-wider">
                    {leadershipData.position}
                  </span>
                  <span className="text-xs font-mono text-[#71717A]">Student Association Leadership</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-mainText group-hover:text-primaryAccent transition-colors">
                  {leadershipData.organization}
                </h3>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm sm:text-base text-secondaryText leading-relaxed max-w-3xl border-t border-white/5 pt-4">
            {leadershipData.description}
          </p>
        </motion.div>

        {/* Beyond Development: Strengths & Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Strengths Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-cardBg border border-subtleBorder p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primaryAccent/10 border border-primaryAccent/20 text-primaryAccent">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-mainText">Personal Strengths</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {personalStrengths.map((strength, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-secondaryBg border border-subtleBorder flex items-center gap-2 hover:border-primaryAccent/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-mainText">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-secondaryText/70 mt-6 pt-4 border-t border-white/5">
              Core personal principles guiding collaboration, teamwork, and reliability.
            </p>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-cardBg border border-subtleBorder p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-secondaryAccent/10 border border-secondaryAccent/20 text-secondaryAccent">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-mainText">Hobbies &amp; Interests</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => {
                  const Icon = hobby.iconName === 'BookOpen' ? BookOpen : Compass;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-secondaryBg border border-subtleBorder flex items-center gap-3.5 hover:border-secondaryAccent/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-cardBg text-secondaryAccent">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-mainText">{hobby.name}</span>
                        <span className="block text-[11px] text-secondaryText">Recreational</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-xs text-secondaryText/70 mt-6 pt-4 border-t border-white/5">
              Activities that inspire creative thinking, continuous learning, and mental refreshment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
