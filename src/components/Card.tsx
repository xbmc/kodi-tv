import React from "react";

interface Props {}

class Card extends React.Component<Props> {
  render() {
    return (
      <div className="shadow-lg rounded-lg overflow-hidden mx-auto mb-8">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Card;
