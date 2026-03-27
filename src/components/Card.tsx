import React from "react";
import ReactMarkdown from "react-markdown";
interface Props {
  title?: string;
  icon?: React.ReactFragment;
  iconClass?: string;
  imgtitle?: string;
  imgsrc?: string;
  imgalt?: string;
  url?: string;
  children?: React.ReactNode;
}

function Card({ children }: Props) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-auto mb-8">
      <div className="py-4 px-8 mt-3">
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
}

function FeaturedCardInnerRender({ iconClass, icon, title, children }: Props) {
  return (
    <>
      <div className="flex-shrink-0 pl-6">
        <span className={iconClass}>{icon}</span>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <ReactMarkdown className="text-xl font-semibold text-gray-900">
          {title}
        </ReactMarkdown>
        <ReactMarkdown className="prose prose-blue flex-1 mt-3 text-sm text-gray-600">
          {children}
        </ReactMarkdown>
      </div>
    </>
  );
}

function FeaturedCard({ iconClass, icon, title, url, children }: Props) {
  const className = "mt-12 flex flex-col rounded-lg shadow-lg bg-gray-100";
  const resolvedIconClass =
    iconClass ??
    "-mt-6 flex items-center justify-center h-12 w-12 rounded-md bg-kodi";

  const inner = (
    <FeaturedCardInnerRender iconClass={resolvedIconClass} icon={icon} title={title}>
      {children}
    </FeaturedCardInnerRender>
  );

  if (url == undefined) {
    return <div className={className}>{inner}</div>;
  }
  return (
    <a className={className} href={url}>
      {inner}
    </a>
  );
}

function RoundedCardWithImage({ imgtitle, imgsrc, imgalt, title, children }: Props) {
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            title={imgtitle}
            src={imgsrc}
            alt={imgalt}
          />
        </div>
        <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{children}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card, FeaturedCard, RoundedCardWithImage };
