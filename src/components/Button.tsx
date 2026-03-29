import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  href?: string;
  disabled?: boolean;
  target?: "_blank";
  variant?: "primary" | "secondary";
  rel?: string;
  buttonType?: "internal" | "external" | "button";
  onClick?: any;
  children: React.ReactNode;
}

const baseClasses =
  "flex items-center justify-center px-8 py-3 mr-2 text-base font-medium font-display rounded-xl shadow-xs transition-all duration-500 ease-out select-none hover:-translate-y-0.5";

const variantClasses = {
  primary: cn(
    baseClasses,
    "border border-transparent text-gray-50 bg-kodi-darker hover:bg-kodi hover:shadow-glow focus:outline-hidden focus:ring-2 focus:ring-kodi/30 focus:ring-offset-2",
  ),
  secondary: cn(
    baseClasses,
    "border border-white/20 text-kodi-darker bg-white hover:bg-gray-50 hover:shadow-lg",
  ),
};

function Button({
  href,
  disabled,
  target,
  variant = "primary",
  rel,
  buttonType,
  onClick,
  children,
}: Props) {
  const classes = variantClasses[variant];

  if (buttonType === "button") {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        type="button"
        className={classes}
      >
        <span>{children}</span>
      </button>
    );
  }

  return (
    <a href={href} target={target} rel={rel} className={classes}>
      <span>{children}</span>
    </a>
  );
}

export default Button;
