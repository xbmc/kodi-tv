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
}

class Button extends React.Component<Props> {
  render() {
    const buttonStyle =
      this.props.variant === "secondary"
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

    if (this.props.buttonType === "button") {
      return (
        <button
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          type="button"
          className={buttonStyle}
        >
          <span>{this.props.children}</span>
        </button>
      );
    } else if (this.props.buttonType === "internal") {
      return (
        <Link to={this.props.href} target={this.props.target} rel={this.props.rel}>
          <button
            disabled={this.props.disabled}
            type="button"
            className={buttonStyle}
          >
            <span>{this.props.children}</span>
          </button>
        </Link>
      );
    } else {
      return (
        <a href={this.props.href} target={this.props.target} rel={this.props.rel}>
          <button
            disabled={this.props.disabled}
            type="button"
            className={buttonStyle}
          >
            <span>{this.props.children}</span>
          </button>
        </a>
      );
    }
  }
}

export default Button;
