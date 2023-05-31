// Packages
import { FC } from "react";

// Interfaces
import { ButtonProps } from "./button.interfaces";

const Button: FC<ButtonProps> = ({
  text,
  disabled,
  type,
  widthFull,
  className,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`button ${widthFull ? "full" : ""} ${className ?? ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
