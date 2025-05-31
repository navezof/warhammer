import React from 'react';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary' | 'secondary';
}

const variantClasses: Record<string, string> = {
  primary: 'text-gray-900 bg-gray-50 rounded-lg border border-gray-300',
};

const TextArea: React.FC<TextAreaProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <textarea
      rows={4}
      className={`block p-2.5 w-full ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </textarea>
  );
};

export default TextArea;
