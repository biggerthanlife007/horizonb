export default interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "pressed" | "neutral" | "tertiary";
  outline?: boolean;
  isLoading?: boolean;
}
