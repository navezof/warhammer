import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const variantClasses: Record<string, string> = {
  primary:
    'px-4 py-2 bg-gray-700 rounded-lg shadow-sm transition-colors duration-300 hover:bg-gray-600 text-white p-4',
  secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
  danger: 'bg-red-500 hover:bg-red-700 text-white',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
