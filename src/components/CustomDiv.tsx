import React from 'react';

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'center' | 'top' | 'right';
}

const variantClasses: Record<string, string> = {
  center:
    'flex flex-col justify-center items-center p-4 text-white bg-gray-900',
  top: 'flex flex-col w-full text-white bg-gray-900 justify-center items-center p-4',
  right: 'flex justify-end items-end',
};

const Div: React.FC<DivProps> = ({
  children,
  variant = 'center',
  className = '',
  ...props
}) => {
  return (
    <div className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Div;
