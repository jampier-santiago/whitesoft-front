// Packages
import { FC } from "react";

// Interfaces
import { InputProps } from "./input.interfaces";

const Input: FC<InputProps> = ({
  id,
  placeholder,
  register,
  textLabel,
  variant,
  className,
  disabled,
  required,
  type,
  options,
  autoComplete,
  messageError,
  error,
  onChange,
}) => {
  return (
    <div className={`input-component ${className ?? ""}`}>
      <label htmlFor={id} className="input-component__label">
        {textLabel}
      </label>

      {variant === "input" ? (
        <input
          {...register(id, { required })}
          type={type}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          className={
            error ? "input-component__input--error" : "input-component__input"
          }
          onChange={onChange}
        />
      ) : (
        <select
          {...register(id, { required })}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          className={
            error ? "input-component__input--error" : "input-component__input"
          }
          onChange={onChange}
        >
          <option value="">{placeholder}</option>
          {options &&
            options?.length > 0 &&
            options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
        </select>
      )}

      {error && <span className="input-component__error">{messageError}</span>}
    </div>
  );
};

export default Input;
