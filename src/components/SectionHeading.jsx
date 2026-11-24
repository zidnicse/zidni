import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-cardBg border border-subtleBorder text-primaryAccent shadow-sm ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-primaryAccent animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-mainText">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-secondaryText leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent ${isCenter ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
