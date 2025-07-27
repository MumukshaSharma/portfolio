import React, { useState } from 'react';
import CharacterSelection from '@/components/CharacterSelection';
import PortfolioMain from '@/components/PortfolioMain';

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const handleCharacterSelect = (characterId: string) => {
    setSelectedCharacter(characterId);
  };

  const handleBackToSelection = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {!selectedCharacter ? (
        <CharacterSelection onCharacterSelect={handleCharacterSelect} />
      ) : (
        <PortfolioMain 
          characterType={selectedCharacter} 
          onBack={handleBackToSelection}
        />
      )}
    </div>
  );
};

export default Index;
