import React from "react";
import ReactMarkdown from "react-markdown";
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

class FeaturedCardInnerRender extends React.Component<Props> {
  render() {
    return (
      <>
        <div className="flex-shrink-0 pl-6">
          <span className={this.props.iconClass}>{this.props.icon}</span>
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <ReactMarkdown className="text-xl font-semibold text-gray-900">
            {this.props.title}
          </ReactMarkdown>
          <ReactMarkdown className="prose prose-blue flex-1 mt-3 text-sm text-gray-600">
            {this.props.children}
          </ReactMarkdown>
        </div>
      </>
    );
  }
}

class FeaturedCard extends React.Component<Props> {
  render() {
    let className = "mt-12 flex flex-col rounded-lg shadow-lg bg-gray-100";
    let iconClass =
      "-mt-6 flex items-center justify-center h-12 w-12 rounded-md bg-kodi";
    if (this.props.iconClass != undefined) {
      iconClass = this.props.iconClass;
    }

    if (this.props.url == undefined) {
      return (
        <div className={className}>
          <FeaturedCardInnerRender
            iconClass={iconClass}
            icon={this.props.icon}
            title={this.props.title}
          >
            {this.props.children}
          </FeaturedCardInnerRender>
        </div>
      );
    } else {
      return (
        <a className={className} href={this.props.url}>
          <FeaturedCardInnerRender
            iconClass={iconClass}
            icon={this.props.icon}
            title={this.props.title}
          >
            {this.props.children}
          </FeaturedCardInnerRender>
        </a>
      );
    }
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
                <p className="text-xl font-semibold text-gray-900">
                  {this.props.title}
                </p>
                <p className="mt-3 text-base text-gray-500">{this.props.children}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { Card, FeaturedCard, RoundedCardWithImage };
