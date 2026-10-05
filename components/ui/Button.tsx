import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-primary text-[#050508] hover:shadow-[0_0_20px_rgba(28,216,210,0.4)] border border-transparent",
    outline: "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(28,216,210,0.15)]",
    ghost: "bg-transparent text-muted hover:text-foreground hover:bg-card-hover",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
