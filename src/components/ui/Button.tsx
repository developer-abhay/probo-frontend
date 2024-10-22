import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  bgColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = "white",
  bgColor,
  onClick,
}) => {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bgColor,
      }}
      className={`px-8 rounded-[4px] h-10 text-sm font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
