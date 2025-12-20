import React from 'react';

interface SectorCardProps {
  name: string;
}

export const SectorCard: React.FC<SectorCardProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-center h-16 border border-gray-200 rounded-md hover:border-gray-300 transition-colors">
      <span className="text-sm text-gray-700 font-medium">{name}</span>
    </div>
  );
};

export default SectorCard;
