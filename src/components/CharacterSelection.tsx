import React from 'react';

interface CharacterSelectionProps {
  onCharacterSelect: (characterId: string) => void;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({ onCharacterSelect }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Photo placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-lg mx-auto aspect-square bg-muted rounded-2xl flex items-center justify-center">
                <img
                  src="../assets/mumuksha_portfolio.jpeg"
                  alt="Mumuksha Sharma"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="fade-in">
              <h1 className="hero-title mb-6">
                Hello, I'm
                <span className="block gradient-text">Mumuksha</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                A passionate web developer and designer crafting meaningful digital experiences.
                Currently pursuing B.Tech in Computer Science (Data Science) at Poornima Institute.
              </p>
            </div>

            <div className="space-y-4 slide-up">
              <h3 className="text-lg font-semibold text-primary mb-4">Choose your path:</h3>

              <button
                onClick={() => onCharacterSelect('recruiter')}
                className="w-full text-left p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">I'm a Recruiter</h4>
                    <p className="text-muted-foreground">View projects and contact information</p>
                  </div>
                  <div className="text-2xl group-hover:scale-110 transition-transform">→</div>
                </div>
              </button>

              <button
                onClick={() => onCharacterSelect('client')}
                className="w-full text-left p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">I'm a Client</h4>
                    <p className="text-muted-foreground">Explore skills and services</p>
                  </div>
                  <div className="text-2xl group-hover:scale-110 transition-transform">→</div>
                </div>
              </button>

              <button
                onClick={() => onCharacterSelect('collaborator')}
                className="w-full text-left p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">I'm a Collaborator</h4>
                    <p className="text-muted-foreground">Connect and build together</p>
                  </div>
                  <div className="text-2xl group-hover:scale-110 transition-transform">→</div>
                </div>
              </button>

              <button
                onClick={() => onCharacterSelect('wanderer')}
                className="w-full text-left p-6 rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">I'm just exploring</h4>
                    <p className="text-muted-foreground">Take the full journey</p>
                  </div>
                  <div className="text-2xl group-hover:scale-110 transition-transform">→</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;