import type { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import type ButtonProps from "./Button.props";
import match from "../../../utils/match";

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size = "",
  color = "primary",
  outline,
  children,
  className,
  isLoading,
  ...rest
}) => {
  const buttonSize = match(size, {
    sm: styles.size__small,
    md: styles.size__md,
    lg: styles.size__lg,
    default: "",
  });

  const variant = match(color, {
    primary: styles.variants__primary,
    secondary: styles.variants__secondary,
    pressed: styles.variants__pressed,
    neutral: styles.variants__neutral,
    tertiary: styles.variants__tertiary,
    default: "",
  });

  return (
    <button
      aria-label={rest.title}
      className={`
      ${styles.base}
      ${buttonSize}
      ${variant} ${outline ? styles.variants__outline : ""} ${className} 
    
    `}
      {...rest}
    >
      <>{isLoading ? "loading" : children}</>
    </button>
  );
};

export default Button;
