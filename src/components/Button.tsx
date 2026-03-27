import { Link } from "gatsby";
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
          border-transparent
          text-base
          font-medium
          rounded-md
          shadow-sm
          text-kodi-darker
          bg-gray-50
          transition
          duration-500
          ease
          select-none
          hover:bg-gray-200
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
          rounded-md
          shadow-sm
          text-gray-50
          bg-kodi-darker
          transition
          duration-500
          ease
          select-none
          hover:bg-kodi
          focus:outline-none
          focus:shadow-outline`;

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
      <Link to={href} target={target} rel={rel}>
        <button disabled={disabled} type="button" className={buttonStyle}>
          <span>{children}</span>
        </button>
      </Link>
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
