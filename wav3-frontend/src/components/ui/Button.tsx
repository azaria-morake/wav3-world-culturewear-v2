import React from 'react';
import clsx from 'clsx';
// We'll use inline styles or utility classes for simplicity here, 
// relying on the tokens defined in tokens.css

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  children, 
  ...props 
}) => {
  const baseStyles = "h-[44px] px-6 rounded-xl font-semibold transition-transform active:scale-95 flex items-center justify-center";
  
  // Mapping variants to raw CSS styles for this setup
  const styleMap = {
    primary: { background: 'var(--accent)', color: '#041222', border: 'none' },
    ghost: { background: 'transparent', color: 'var(--text-core)', border: 'none' },
    outline: { background: 'transparent', border: '1px solid var(--muted)', color: 'var(--text-core)' }
  };

  return (
    <button 
      className={clsx('wav3-btn', className)} 
      style={{
        height: '44px',
        padding: '0 24px',
        borderRadius: '12px',
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '1rem',
        ...styleMap[variant]
      }}
      {...props}
    >
      {children}
    </button>
  );
};
