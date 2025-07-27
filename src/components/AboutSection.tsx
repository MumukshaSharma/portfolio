import React from 'react';
import PortfolioSection from './PortfolioSection';
import mumukshaPhoto from '@/assets/mumuksha_portfolio.jpeg';

const AboutSection: React.FC = () => {
  const skills = ['Teamwork', 'Creativity', 'Resilience', 'Problem Solving', 'Adaptability'];
  const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'C++', 'Supabase'];

  return (
    <PortfolioSection id="about" className="py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title mb-6">About Me</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a 3rd-year B.Tech student at Poornima Institute of Engineering & Technology, 
                  specializing in Computer Science (Data Science). I'm passionate about building 
                  meaningful digital experiences and web apps that solve real-world problems.
                </p>
                <p>
                  I thrive in teams, love creative challenges, and approach projects with 
                  resilience and dedication. My goal is to create technology that makes a positive impact.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Core Values</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="lg:order-last">
            <div className="relative">
              <img 
                src={mumukshaPhoto} 
                alt="Mumuksha Sharma"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Technologies section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="p-4 border border-border rounded-xl hover:border-primary transition-colors"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default AboutSection;