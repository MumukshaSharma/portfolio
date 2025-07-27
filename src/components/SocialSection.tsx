import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import PortfolioSection from './PortfolioSection';

const SocialSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/MumukshaSharma',
      icon: Github,
      color: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mumuksha-sharma-07737b287',
      icon: Linkedin,
      color: 'hover:text-primary'
    },
    {
      name: 'Email',
      url: 'mailto:mumuksha.contact@gmail.com',
      icon: Mail,
      color: 'hover:text-primary'
    }
  ];

return (
    <PortfolioSection id="social" className="py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-6">Let's Connect</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Ready to build something amazing together?
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center justify-center w-32 h-32 border border-border rounded-2xl group hover:border-primary transition-all hover:shadow-lg"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <IconComponent className="w-8 h-8 mb-2 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </PortfolioSection>
  );
};

export default SocialSection;