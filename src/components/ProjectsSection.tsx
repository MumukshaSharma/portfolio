import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import PortfolioSection from './PortfolioSection';

interface Project {
  title: string;
  description: string;
  link?: string;
  status: 'live' | 'development';
  tech?: string[];
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Dabite',
      description: 'A tiffin delivery platform uniting homechefs, tiffin centers, and cloud kitchens.',
      link: 'https://dabite.vercel.app',
      status: 'live',
      tech: ['React', 'Vercel', 'API Integration']
    },
    {
      title: 'Pleasing Clone',
      description: 'Inspired by Harry Styles\' official website. A fashion and lifestyle store using HTML, CSS, JS.',
      status: 'live',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Library Management System',
      description: 'Full-stack LMS built with React, Supabase, Lovable.',
      status: 'development',
      tech: ['React', 'Supabase', 'Lovable']
    }
  ];

return (
    <PortfolioSection id="projects" className="py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building digital solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group border border-border rounded-2xl p-8 hover:border-primary transition-all hover:shadow-lg"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  {project.status === 'development' ? (
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      In Development
                    </span>
                  ) : (
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-muted-foreground">Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </PortfolioSection>
  );
};

export default ProjectsSection;