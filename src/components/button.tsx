import clsx from "clsx";
import React, { MouseEventHandler } from "react";

type ButtonSize = "small" | "medium";
type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  children: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const buttonSizeClasses: Record<ButtonSize, string> = {
  small: "",
  medium: "text-base px-3 py-2 rounded",
};

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-zinc-900 text-white hover:bg-zinc-800",
  ghost: "bg-transparent hover:bg-zinc-900 text-white",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "primary",
  className,
  onClick,
}) => (
  <button
    className={clsx(
      buttonSizeClasses[size],
      buttonVariantClasses[variant],
      className,
      `active:scale-105 transition-transform`
    )}
    onClick={onClick}>
    {children}
  </button>
);
