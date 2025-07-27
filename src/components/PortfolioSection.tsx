import React from 'react';

interface PortfolioSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`py-20 px-8 relative ${className}`}>
      {children}
    </section>
  );
};

export default PortfolioSection;