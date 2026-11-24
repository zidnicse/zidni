import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { educationList } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-secondaryBg/20 border-t border-subtleBorder overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="My academic journey and qualifications"
          align="center"
        />

        {/* Vertical Timeline */}
        <div className="relative mt-12 pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12 ml-4 sm:ml-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-primaryBg border-2 border-primaryAccent flex items-center justify-center text-primaryAccent group-hover:scale-125 group-hover:bg-primaryAccent group-hover:text-white transition-all duration-300 shadow-glow-purple">
                <span className="w-2 h-2 rounded-full bg-primaryAccent group-hover:bg-white" />
              </div>

              {/* Education Card */}
              <div className="rounded-2xl bg-cardBg border border-subtleBorder p-6 sm:p-7 backdrop-blur-sm group-hover:border-primaryAccent/40 group-hover:bg-elevatedCard/90 transition-all duration-300 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-mainText group-hover:text-primaryAccent transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primaryAccent/10 text-primaryAccent border border-primaryAccent/20 self-start sm:self-auto">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.result}</span>
                  </div>
                </div>

                <p className="text-base font-semibold text-secondaryAccent mb-3">
                  {edu.institute}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-secondaryText">
                  {edu.status && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-secondaryAccent" />
                      Status: <strong className="text-mainText">{edu.status}</strong>
                    </span>
                  )}
                  {edu.passingYear && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-secondaryAccent" />
                      Year: <strong className="text-mainText">{edu.passingYear}</strong>
                    </span>
                  )}
                  {edu.group && (
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-primaryAccent" />
                      Group: <strong className="text-mainText">{edu.group}</strong>
                    </span>
                  )}
                  {edu.board && (
                    <span className="px-2 py-0.5 rounded bg-secondaryBg border border-white/5 text-[#A1A1AA]">
                      Board: {edu.board}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
