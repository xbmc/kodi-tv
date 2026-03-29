import React from "react";

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

function Button({
  href,
  disabled,
  target,
  variant,
  rel,
  buttonType,
  onClick,
  children,
}: Props) {
  const buttonStyle =
    variant === "secondary"
      ? `
          flex
          items-center
          justify-center
          px-8
          py-3
          mr-2
          border
          border-white/20
          text-base
          font-medium
          font-display
          rounded-xl
          shadow-sm
          text-kodi-darker
          bg-white
          transition-all
          duration-500
          ease-out
          select-none
          hover:bg-gray-50
          hover:shadow-lg
          hover:-translate-y-0.5
          `
      : `
          flex
          items-center
          justify-center
          px-8
          py-3
          mr-2
          border
          border-transparent
          text-base
          font-medium
          font-display
          rounded-xl
          shadow-sm
          text-gray-50
          bg-kodi-darker
          transition-all
          duration-500
          ease-out
          select-none
          hover:bg-kodi
          hover:shadow-glow
          hover:-translate-y-0.5
          focus:outline-none
          focus:ring-2
          focus:ring-kodi/30
          focus:ring-offset-2`;

  if (buttonType === "button") {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        type="button"
        className={buttonStyle}
      >
        <span>{children}</span>
      </button>
    );
  } else if (buttonType === "internal") {
    return (
      <a href={href} target={target} rel={rel}>
        <button disabled={disabled} type="button" className={buttonStyle}>
          <span>{children}</span>
        </button>
      </a>
    );
  } else {
    return (
      <a href={href} target={target} rel={rel}>
        <button disabled={disabled} type="button" className={buttonStyle}>
          <span>{children}</span>
        </button>
      </a>
    );
  }
}

export default Button;
