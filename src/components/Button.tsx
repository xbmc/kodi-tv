import { Link } from "gatsby";
import React from "react";

interface Props {
  href: string;
  target?: "_blank";
  variant?: "primary" | "secondary";
  rel?: string;
  linkType?: "internal" | "external";
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
            text-kodi
            bg-white
            transition
            duration-500
            ease
            select-none
            hover:bg-indigo-50
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

    if (this.props.linkType === "internal") {
      return (
        <Link to={this.props.href} target={this.props.target} rel={this.props.rel}>
          <button type="button" className={buttonStyle}>
            <span>{this.props.children}</span>
          </button>
        </Link>
      );
    } else {
      return (
        <a href={this.props.href} target={this.props.target} rel={this.props.rel}>
          <button type="button" className={buttonStyle}>
            <span>{this.props.children}</span>
          </button>
        </a>
      );
    }
  }
}

export default Button;
