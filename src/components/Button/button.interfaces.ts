export interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  widthFull?: boolean;
  className?: string;
}
