import React from 'react';
import { featuredProjects } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-primaryBg border-t border-subtleBorder overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondaryAccent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PORTFOLIO WORK"
          title="Featured Projects"
          subtitle="A selection of personal and academic development projects"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
