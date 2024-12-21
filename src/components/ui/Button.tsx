import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  bgColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = "white",
  bgColor,
  disabled,
  onClick,
}) => {
  return (
    <button
      style={{
        color: disabled ? "#fff" : color,
        backgroundColor: disabled ? "#ABABAB" : bgColor,
      }}
      disabled={disabled}
      className={`px-8 py-2 rounded-[4px] text-sm font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
