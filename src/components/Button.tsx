import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset'; // Add type prop
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  type = 'button', // Default to 'button' to prevent accidental form submission
  children,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-blue-800 text-white hover:bg-blue-900',
    secondary: 'bg-white text-blue-800 border border-blue-800 hover:bg-blue-50',
  };

  return (
    <button
      type={type} // Pass the type prop
      onClick={disabled ? undefined : onClick}
      className={`${baseStyles} ${variants[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
