import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick,
  className = ''
}) => {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-blue-800 text-white hover:bg-blue-900',
    secondary: 'bg-white text-blue-800 border border-blue-800 hover:bg-blue-50'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
