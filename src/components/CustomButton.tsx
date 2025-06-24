import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<string, string> = {
  primary:
    "px-4 py-2 bg-gray-700 rounded-lg shadow-sm transition-colors duration-300 hover:bg-gray-600 text-white p-4",
  secondary: "bg-gray-500 hover:bg-gray-700 text-white",
  danger: "bg-red-500 hover:bg-red-700 text-white",
};

const sizeClasses = {
  sm: "text-xs py-1 px-2",
  md: "text-sm py-2 px-4",
  lg: "text-lg py-3 px-6",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
