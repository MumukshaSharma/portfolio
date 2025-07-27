import React, { useEffect, useRef } from 'react';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SocialSection from './SocialSection';
import ContactSection from './ContactSection';
import { ArrowLeft } from 'lucide-react';

interface PortfolioMainProps {
  characterType: string;
  onBack: () => void;
}

const PortfolioMain: React.FC<PortfolioMainProps> = ({ characterType, onBack }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll behavior based on character type
    const handleCharacterNavigation = () => {
      switch (characterType) {
        case 'recruiter':
          // Direct to projects and contact
          setTimeout(() => {
            projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
          }, 500);
          break;
        case 'wanderer':
          // Slow scroll through everything
          setTimeout(() => {
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
          }, 1000);
          break;
        case 'collaborator':
          // Show GitHub and collaboration
          setTimeout(() => {
            socialRef.current?.scrollIntoView({ behavior: 'smooth' });
          }, 500);
          break;
        case 'client':
          // Show skills and contact
          setTimeout(() => {
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
          }, 500);
          break;
      }
    };

    handleCharacterNavigation();
  }, [characterType]);

  const getWelcomeMessage = () => {
    switch (characterType) {
      case 'recruiter':
        return 'Welcome, Recruiter! Here are my projects and ways to connect.';
      case 'wanderer':
        return 'Welcome, Fellow Wanderer! Let\'s explore this digital journey together.';
      case 'collaborator':
        return 'Welcome, Collaborator! Ready to build something amazing?';
      case 'client':
        return 'Welcome, Client! Let me show you how I can help your business.';
      default:
        return 'Welcome to my pixel world!';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#social" className="text-sm hover:text-primary transition-colors">Social</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Welcome */}
      <div className="min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="hero-title mb-6">
              Welcome
              <span className="block gradient-text">
                {characterType === 'recruiter' && 'Recruiter'}
                {characterType === 'client' && 'Client'}
                {characterType === 'collaborator' && 'Collaborator'}
                {characterType === 'wanderer' && 'Explorer'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              {getWelcomeMessage()}
            </p>
            
            {/* Quick actions based on character */}
            <div className="flex flex-wrap justify-center gap-4">
              {characterType === 'recruiter' && (
                <>
                  <a href="#projects" className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors font-medium">
                    View Projects
                  </a>
                  <a href="#contact" className="border border-border px-8 py-4 rounded-full hover:border-primary transition-colors font-medium">
                    Contact Me
                  </a>
                </>
              )}
              {characterType === 'collaborator' && (
                <>
                  <a href="#social" className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors font-medium">
                    GitHub
                  </a>
                  <a href="#contact" className="border border-border px-8 py-4 rounded-full hover:border-primary transition-colors font-medium">
                    Let's Collaborate
                  </a>
                </>
              )}
              {characterType === 'client' && (
                <>
                  <a href="#about" className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors font-medium">
                    My Skills
                  </a>
                  <a href="#contact" className="border border-border px-8 py-4 rounded-full hover:border-primary transition-colors font-medium">
                    Hire Me
                  </a>
                </>
              )}
              {characterType === 'wanderer' && (
                <a href="#about" className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors font-medium">
                  Begin Journey
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={socialRef}>
        <SocialSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Mumuksha Sharma. Crafted with care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioMain;