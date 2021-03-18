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

class RoundedCardWithImage extends React.Component<Props> {
  render() {
    return (
      <>
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              title={this.props.imgtitle}
              src={this.props.imgsrc}
              alt={this.props.imgalt}
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <div className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">{this.props.title}</p>
                <p className="mt-3 text-base text-gray-500">{this.props.children}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { Card, RoundedCardWithImage };
