import React from 'react';

// A simple SVG wrapper component. 
// In a real app, you might use 'lucide-react' or similar.
interface IconProps {
  name: 'heart' | 'cart' | 'close' | 'chevron-right';
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => {
  const paths = {
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    cart: <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-8-2h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-6m-4 0H4" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, // Simplified cart
    close: <line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
    'chevron-right': <polyline points="9 18 15 12 9 6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  };

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={name === 'heart' ? 'none' : 'none'} 
      stroke={color} 
      strokeWidth={name === 'heart' ? 2 : 0}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths[name] || null}
      {/* For heart specifically, if we want fill */}
      {name === 'close' && <line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />}
    </svg>
  );
};
