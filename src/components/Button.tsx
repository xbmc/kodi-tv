import React from "react";

interface Props {
  href: string;
  target: "_blank" | undefined;
  variant: "primary" | "secondary";
  rel: string;
}

class Button extends React.Component<Props> {
  render() {
    return (
      <a href={this.props.href} target={this.props.target} rel={this.props.rel}>
        <button
          type="button"
          className="border border-kodi bg-kodi text-gray-100 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-kodi-darker focus:outline-none focus:shadow-outline"
        >
          <span>{this.props.children}</span>
        </button>
      </a>
    );
  }
}

export default Button;
