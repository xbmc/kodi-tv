import React from "react";
import { BlogPostCard } from "./Blog";
import { RoundedCardWithImage } from "./Card";
import Button from "./Button";
import { Sponsor } from "../hooks/Sponsors";
import { News } from "../hooks/LatestNews";

function FullWidthCallOut(props: {
  backgroundColor?: string;
  titleTextColor?: string;
  subtextColor?: string;
  title: string;
  children?: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
}) {
  let backgroundColor = "bg-gray-50";
  let titleTextColor = "text-gray-900";
  let subtextColor = "text-gray-500";
  if (props.backgroundColor != undefined) {
    backgroundColor = props.backgroundColor;
  }
  if (props.titleTextColor != undefined) {
    titleTextColor = props.titleTextColor;
  }
  if (props.subtextColor != undefined) {
    subtextColor = props.subtextColor;
  }
  return (
    <>
      <div className={"pt-6 pb-12 lg:pt-12 lg:pb-20 px-6 " + backgroundColor}>
        <div className={"text-center text-5xl font-bold " + titleTextColor}>
          {props.title}
        </div>
        <div className={"mt-1 text-center text-2xl " + subtextColor}>
          {props.children}
        </div>
      </div>
    </>
  );
}

function FullWidthFeaturesWithIcons(props: {
  backgroundColor: string | undefined;
  foregroundTextColor: string | undefined;
  foregroundOpacityColor: string | undefined;
  subtextColor: string | undefined;
  title: string;
  description: string;
  items: any[];
}) {
  let backgroundColor = "bg-gradient-to-r from-kodi to-kodi-darker";
  let foregroundTextColor = "text-gray-50";
  let foregroundOpacityColor = "bg-gray-50 bg-opacity-10";
  let subtextColor = "text-gray-200";
  if (props.backgroundColor != undefined) {
    backgroundColor = props.backgroundColor;
  }
  if (props.foregroundTextColor != undefined) {
    foregroundTextColor = props.foregroundTextColor;
  }
  if (props.foregroundOpacityColor != undefined) {
    foregroundOpacityColor = props.foregroundOpacityColor;
  }
  if (props.subtextColor != undefined) {
    subtextColor = props.subtextColor;
  }

  return (
    <>
      <div className={backgroundColor}>
        <div className="max-w-4xl mx-auto px-4 pt-12 pb-12 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-18 lg:pb-18 lg:px-8">
          <h2
            className={
              "text-3xl font-extrabold tracking-tight " + foregroundTextColor
            }
          >
            {props.title}
          </h2>
          <p className={"mt-4 max-w-3xl text-lg " + subtextColor}>
            {props.description}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {props.items.map((item, index) => (
              <div>
                <div>
                  <span
                    className={
                      "flex items-center justify-center h-12 w-12 rounded-md " +
                      foregroundOpacityColor
                    }
                  >
                    {item.icon}
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className={"text-lg font-medium " + foregroundTextColor}>
                    {item.title}
                  </h3>
                  <p className={"mt-2 text-base " + subtextColor}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function FullWidthTwoPaneIconsRight(props: {
  backgroundColor: string | undefined;
  titleTextColor?: string;
  subtextColor?: string;
  icon:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  title: string;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  url: string;
  buttontext: string;
  iconlist:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  let backgroundColor = "bg-gray-50";
  let titleTextColor = "text-gray-900";
  let subtextColor = "text-gray-500";
  if (props.backgroundColor != undefined) {
    backgroundColor = props.backgroundColor;
  }
  if (props.titleTextColor != undefined) {
    titleTextColor = props.titleTextColor;
  }
  if (props.subtextColor != undefined) {
    subtextColor = props.subtextColor;
  }
  return (
    <>
      <div
        className={
          "relative pt-6 pb-12 md:pt-12 lg:pb-16 overflow-hidden " + backgroundColor
        }
      >
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-6 max-w-xl mx-auto lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="hidden md:flex h-12 w-12 rounded-md items-center justify-center bg-gradient-to-r from-kodi-darker to-kodi-lighter">
                    {props.icon}
                  </span>
                </div>
                <div className="mt-6">
                  <h2
                    className={
                      "text-3xl font-extrabold tracking-tight " + titleTextColor
                    }
                  >
                    {props.title}
                  </h2>
                  <div className={"mt-4 text-lg " + subtextColor}>
                    {props.children}
                  </div>
                  <div className="mt-6">
                    <Button href={props.url}>{props.buttontext}</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                {props.iconlist}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FullWidthTwoPaneImageLeft(props: {
  backgroundColor?: string;
  titleTextColor?: string;
  bodyTextColor?: string;
  icon:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  title:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  url: string;
  buttontext:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  image: {
    src: string | undefined;
    title: string | undefined;
    alt: string | undefined;
  };
}) {
  let backgroundColor = "bg-gray-50";
  let titleTextColor = "text-gray-900";
  let bodyTextColor = "text-gray-500";
  if (props.backgroundColor != undefined) {
    backgroundColor = props.backgroundColor;
  }
  if (props.titleTextColor != undefined) {
    titleTextColor = props.titleTextColor;
  }
  if (props.bodyTextColor != undefined) {
    bodyTextColor = props.bodyTextColor;
  }
  return (
    <>
      <div
        className={
          "relative pt-6 pb-12 md:pt-12 lg:pt-16 lg:pb-16 overflow-hidden " +
          backgroundColor
        }
      >
        <div>
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-6 max-w-xl mx-auto lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <span className="hidden md:flex h-12 w-12 rounded-md items-center justify-center bg-gradient-to-r from-kodi-darker to-kodi-lighter">
                  {props.icon}
                </span>
              </div>
              <div className="mt-6">
                <h2
                  className={
                    "text-3xl font-extrabold tracking-tight " + titleTextColor
                  }
                >
                  {props.title}
                </h2>
                <p className={"mt-4 text-lg " + bodyTextColor}>{props.children}</p>
                <div className="mt-6">
                  <Button href={props.url}>{props.buttontext}</Button>
                </div>
              </div>
            </div>
            <div className="hidden lg:block mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={props.image.src}
                  title={props.image.title}
                  alt={props.image.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FullWidthSponsorList(props: {
  title: string;
  sponsors: Sponsor[];
  backgroundColor?: string;
}) {
  let backgroundColor = "bg-gray-50";
  if (props.backgroundColor != undefined) {
    backgroundColor = props.backgroundColor;
  }
  return (
    <>
      <div className={backgroundColor}>
        <div className="max-w-7xl mx-auto py-12 lg:py-16 px-4 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            {props.title}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
            {props.sponsors.map(sponsor => (
              <div
                key={sponsor.slug}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 filter grayscale transition duration-500 ease-in-out hover:filter-none"
              >
                <a href={sponsor.slug} target="_blank" rel="noreferrer">
                  <img
                    className="h-12"
                    src={sponsor.image.src}
                    title={sponsor.image.title}
                    alt={sponsor.image.alt}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function FullWidthNews(props: {
  backgroundColor: string | undefined;
  titleTextColor?: string;
  subtitleTextColor?: string;
  title: string;
  subtitle: string;
  news: News[];
}) {
  let backgroundColor = "bg-gray-50";
  let titleTextColor = "text-gray-900";
  let subtitleTextColor = "text-gray-500";
  if (props.backgroundColor != undefined) {
    backgroundColor = props.backgroundColor;
  }
  if (props.titleTextColor != undefined) {
    titleTextColor = props.titleTextColor;
  }
  if (props.subtitleTextColor != undefined) {
    subtitleTextColor = props.subtitleTextColor;
  }
  return (
    <>
      <div
        className={
          "relative pt-6 pb-12 lg:pt-12 lg:pb-20 px-4 lg:px-8 " + backgroundColor
        }
      >
        <div className="absolute inset-0">
          <div className={"h-1/3 sm:h-2/3 " + backgroundColor}></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2
              className={
                "text-3xl tracking-tight font-extrabold sm:text-4xl " +
                titleTextColor
              }
            >
              {props.title}
            </h2>
            <p
              className={
                "mt-3 max-w-2xl mx-auto text-xl sm:mt-4 " + subtitleTextColor
              }
            >
              {props.subtitle}
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
            {props.news.map(news => (
              <BlogPostCard key={news.fields.slug} post={news} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function FullWidthStats(props: {
  backgroundColor: string | undefined;
  titleTextColor: string | undefined;
  subtitleTextColor: string | undefined;
  title: string;
  subtitle: string;
  stats: {
    key: string;
    title: string;
    value: number | string;
  }[];
}) {
  let backgroundColor = "bg-gray-50";
  let titleTextColor = "text-gray-900";
  let subtitleTextColor = "text-gray-500";
  if (props.backgroundColor != undefined) {
    backgroundColor = props.backgroundColor;
  }
  if (props.titleTextColor != undefined) {
    titleTextColor = props.titleTextColor;
  }
  if (props.subtitleTextColor != undefined) {
    subtitleTextColor = props.subtitleTextColor;
  }
  return (
    <div className={backgroundColor}>
      <div className="max-w-7xl mx-auto py-6 lg:py-12 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={"text-5xl font-extrabold " + titleTextColor}>
            {props.title}
          </h2>
          <p className={"mt-1 text-2xl " + subtitleTextColor}>{props.subtitle}</p>
        </div>
        <dl className="mt-10 text-center max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {props.stats.map((stat, index) => (
            <div key={stat.key} className="flex flex-col">
              <dt
                className={
                  "order-2 mt-2 text-lg leading-6 font-medium " + subtitleTextColor
                }
              >
                {stat.title}
              </dt>
              <dd className={"order-1 text-4xl font-extrabold " + titleTextColor}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function FullWidthRoundedCardList(props: {
  backgroundColor: string | undefined;
  titleTextColor?: string;
  subtitleTextColor?: string;
  title:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  subtitle:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  items: {
    imgsrc: string;
    title: string;
    description: React.ReactNode;
  }[];
}) {
  let backgroundColor = "bg-gray-50";
  let titleTextColor = "text-gray-900";
  let subtitleTextColor = "text-gray-500";
  if (props.backgroundColor != undefined) {
    backgroundColor = props.backgroundColor;
  }
  if (props.titleTextColor != undefined) {
    titleTextColor = props.titleTextColor;
  }
  if (props.subtitleTextColor != undefined) {
    subtitleTextColor = props.subtitleTextColor;
  }
  return (
    <>
      <div
        className={
          "relative pt-6 pb-12 lg:pt-12 lg:pb-20 px-4 lg:px-8 " + backgroundColor
        }
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2
              className={
                "max-w-5xl mx-auto tracking-tight text-4xl font-extrabold " +
                titleTextColor
              }
            >
              {props.title}
            </h2>
            <p className={"mt-4 max-w-3xl mx-auto text-xl " + subtitleTextColor}>
              {props.subtitle}
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
            {props.items.map(item => (
              <RoundedCardWithImage
                title={item.title}
                imgsrc={item.imgsrc}
                key={item.title}
              >
                {item.description}
              </RoundedCardWithImage>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export {
  FullWidthCallOut,
  FullWidthFeaturesWithIcons,
  FullWidthTwoPaneIconsRight,
  FullWidthTwoPaneImageLeft,
  FullWidthSponsorList,
  FullWidthNews,
  FullWidthStats,
  FullWidthRoundedCardList,
};
