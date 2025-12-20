import React from 'react';

interface SectionBackgroundAccentsProps {
  variant?: 'default' | 'light' | 'dark' | 'blueprint';
  showGrid?: boolean;
  density?: 'sparse' | 'medium' | 'dense';
  circlePositions?: ('top-left' | 'top-right' | 'bottom-left' | 'bottom-right')[];
}

export const SectionBackgroundAccents: React.FC<SectionBackgroundAccentsProps> = ({
  variant = 'default',
  showGrid = true,
  density = 'medium',
  circlePositions = ['top-right', 'bottom-left']
}) => {
  // Calculate grid size based on density
  const gridSize = density === 'sparse' ? '32px' : density === 'medium' ? '24px' : '16px';
  
  // Define grid opacity based on variant
  const gridOpacity = variant === 'dark' ? '0.04' : '0.03';
  
  // Define circle colors and opacities based on variant
  let primaryCircleColor = 'rgba(243, 112, 33, 0.1)'; // Orange
  let secondaryCircleColor = 'rgba(0, 43, 91, 0.08)'; // Blue
  
  if (variant === 'dark') {
    primaryCircleColor = 'rgba(243, 112, 33, 0.14)';
    secondaryCircleColor = 'rgba(0, 43, 91, 0.12)';
  } else if (variant === 'light') {
    primaryCircleColor = 'rgba(243, 112, 33, 0.06)';
    secondaryCircleColor = 'rgba(0, 43, 91, 0.04)';
  }

  // Create positioning classes for circles
  const getCirclePositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 -translate-x-1/4 -translate-y-1/4';
      case 'top-right':
        return 'top-0 right-0 translate-x-1/4 -translate-y-1/4';
      case 'bottom-left':
        return 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4';
      case 'bottom-right':
        return 'bottom-0 right-0 translate-x-1/4 translate-y-1/4';
      default:
        return 'top-0 right-0 translate-x-1/4 -translate-y-1/4';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blurred circles */}
      {circlePositions.map((position, index) => (
        <div 
          key={position}
          className={`absolute w-96 h-96 rounded-full blur-3xl ${getCirclePositionClasses(position)}`}
          style={{ 
            backgroundColor: index % 2 === 0 ? primaryCircleColor : secondaryCircleColor,
            opacity: variant === 'blueprint' ? 0.05 : undefined
          }}
        />
      ))}
      
      {/* Blueprint grid overlay */}
      {showGrid && (
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(220, 230, 240, ${gridOpacity}) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(220, 230, 240, ${gridOpacity}) 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize} ${gridSize}`
          }}
        />
      )}
    </div>
  );
};

export const BlueprintGridOverlay: React.FC<{ opacity?: number, size?: string }> = ({ 
  opacity = 0.03, 
  size = '24px' 
}) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none" 
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(220, 230, 240, ${opacity}) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(220, 230, 240, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${size} ${size}`
      }}
    />
  );
};

export default SectionBackgroundAccents;
