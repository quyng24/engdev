type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base = "px-4 py-2 rounded-lg font-medium transition";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[#0edbca] text-white hover:opacity-90 hover:shadow-lg hover:scale-[1.1] duration-300",
    secondary: "bg-secondary text-white hover:shadow-lg hover:scale-[1.1] duration-300",
    danger: "bg-red-500 text-white hover:shadow-lg hover:scale-[1.1] duration-300",
    outline: "border border-[#0edbca] text-text hover:shadow-lg hover:scale-[1.1] duration-300",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
