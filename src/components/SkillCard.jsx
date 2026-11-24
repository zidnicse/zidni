import React from 'react';
import { motion } from 'framer-motion';
import { DynamicIcon } from '../utils/icons';

export const SkillCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl bg-cardBg/90 border border-subtleBorder p-6 transition-all duration-300 hover:border-primaryAccent/40 hover:bg-elevatedCard/90 hover:shadow-glow-card backdrop-blur-sm"
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-primaryAccent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primaryAccent/10 border border-primaryAccent/20 flex items-center justify-center text-primaryAccent group-hover:scale-110 group-hover:bg-primaryAccent/20 transition-all duration-300">
            <DynamicIcon name={category.iconName} className="w-5 h-5 text-primaryAccent" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-medium text-secondaryAccent tracking-wider uppercase">
              Category {category.id}
            </span>
            <h3 className="text-base font-bold text-mainText group-hover:text-white transition-colors">
              {category.category}
            </h3>
          </div>
        </div>
      </div>

      {/* Skills Chips */}
      <div className="flex flex-wrap gap-2 pt-2">
        {category.skills.map((skill, sIdx) => (
          <span
            key={sIdx}
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-[#101015]/80 text-[#D4D4D8] border border-white/5 hover:border-primaryAccent/30 hover:text-white transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primaryAccent/60 mr-1.5 group-hover:bg-secondaryAccent transition-colors" />
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
