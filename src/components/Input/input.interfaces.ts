import { UseFormRegister } from "react-hook-form";

export interface InputProps {
  id: string;
  className?: string;
  type?: string;
  placeholder: string;
  textLabel: string;
  register: UseFormRegister<any>;
  required?: boolean;
  disabled?: boolean;
  variant: "input" | "select";
  options?: Array<{ value: string | number; text: string | number }>;
  autoComplete?: "off" | "on";
  error?: boolean;
  messageError: string;
  onChange?: (data: any) => void;
}
