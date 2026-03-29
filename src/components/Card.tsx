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
    <div className="shadow-glass rounded-2xl overflow-hidden mx-auto mb-8 border border-gray-100/80 bg-white">
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
        <p className="text-xl font-semibold text-gray-900 font-display">{title}</p>
        <ReactMarkdown className="prose prose-blue flex-1 mt-3 text-sm text-gray-600">
          {children}
        </ReactMarkdown>
      </div>
    </>
  );
}

function FeaturedCard({ iconClass, icon, title, url, children }: Props) {
  const className =
    "mt-12 flex flex-col rounded-2xl shadow-glass bg-white border border-gray-100/80 card-lift";
  const resolvedIconClass =
    iconClass ??
    "-mt-6 flex items-center justify-center h-12 w-12 rounded-xl bg-kodi-gradient shadow-glow";

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
      <div className="flex flex-col rounded-2xl shadow-glass overflow-hidden card-lift border border-gray-100/80">
        <div className="flex-shrink-0 overflow-hidden">
          <img
            className="h-48 w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            title={imgtitle}
            src={imgsrc}
            alt={imgalt}
            loading="lazy"
            decoding="async"
            width={480}
            height={192}
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="block mt-2">
              <p className="text-xl font-semibold text-gray-900 font-display">
                {title}
              </p>
              <p className="mt-3 text-base text-gray-500 leading-relaxed">
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card, FeaturedCard, RoundedCardWithImage };
