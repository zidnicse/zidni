import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../utils/icons';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl bg-cardBg border border-subtleBorder overflow-hidden transition-all duration-300 hover:border-primaryAccent/40 hover:shadow-glow-card hover:bg-elevatedCard/80"
    >
      {/* Project Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondaryBg border-b border-subtleBorder">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cardBg via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* GitHub Quick Badge */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 p-2 rounded-xl bg-primaryBg/80 backdrop-blur-md border border-subtleBorder text-mainText hover:text-primaryAccent hover:border-primaryAccent/50 transition-all duration-200 shadow-md"
          title="Open repository on GitHub"
          aria-label={`Open ${project.name} on GitHub`}
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-2">
          <span className="text-[11px] font-mono text-secondaryAccent font-semibold tracking-wider uppercase">
            Project {String(project.id).padStart(2, '0')}
          </span>
          <h3 className="text-xl font-bold text-mainText group-hover:text-primaryAccent transition-colors mt-1">
            {project.name}
          </h3>
        </div>

        <p className="text-sm text-secondaryText leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Verified Tech Tags */}
        <div className="mb-6">
          <div className="text-[11px] font-mono text-text-muted text-[#71717A] uppercase tracking-wider mb-2">
            Verified Stack:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#101015] text-[#D4D4D8] border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-subtleBorder flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-mainText group-hover:text-secondaryAccent transition-colors"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <span className="text-xs font-mono text-[#71717A]">
            zidnicse/{project.githubUrl.split('/').pop()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
