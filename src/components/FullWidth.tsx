import React from "react";
import { BlogPostCard } from "./Blog";
import Button from "./Button";

function FullWidthCallOut(props) {
  return (
    <>
      <div className="pt-6 pb-12 lg:pt-12 lg:pb-20 px-6">
        <div className="text-center text-5xl font-bold">{props.title}</div>
        <div className="text-center text-2xl text-gray-500">{props.children}</div>
      </div>
    </>
  );
}

function FullWidthFeaturesWithIcons(props) {
  return (
    <>
      <div className="bg-gradient-to-r from-kodibg-lighter to-kodibg-darker">
        <div className="max-w-4xl mx-auto px-4 pt-12 pb-12 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-18 lg:pb-18 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {props.title}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-200">{props.description}</p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {props.items.map((item, index) => (
              <div>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    {item.icon}
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-base text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function FullWidthTwoPaneIconsRight(props) {
  return (
    <>
      <div className="relative pt-6 pb-12 md:pt-12 lg:pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
        ></div>
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
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {props.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">{props.children}</p>
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

function FullWidthTwoPaneImageLeft(props) {
  return (
    <>
      <div className="relative pt-6 pb-12 md:pt-12 lg:pt-16 lg:pb-16 overflow-hidden bg-gray-100">
        <div>
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-6 max-w-xl mx-auto lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <span className="hidden md:flex h-12 w-12 rounded-md items-center justify-center bg-gradient-to-r from-kodi-darker to-kodi-lighter">
                  {props.icon}
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {props.title}
                </h2>
                <p className="mt-4 text-lg text-gray-500">{props.children}</p>
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

function FullWidthSponsorList(props: { title: string; sponsors: Sponsor[] }) {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 lg:py-16 px-4 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            {props.title}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
            {props.sponsors.map((sponsor, index) => (
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <a href={sponsor.slug} target="_blank" rel="noopener">
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

function FullWidthCTAImageLeft(props) {
  return (
    <>
      <div className="relative bg-gray-800">
        <div className="h-56 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={props.image.src}
            title={props.image.title}
            alt={props.image.alt}
          />
          <div
            className="absolute inset-0 bg-kodibg-lighter"
            style={{ mixBlendMode: "multiply" }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              {props.title}
            </h2>
            <p className="mt-3 text-lg text-gray-300">{props.children}</p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Button href={props.url} variant="secondary">
                  {props.buttontext}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FullWidthNews(props) {
  return (
    <>
      <div className="relative bg-gray-100 pt-6 pb-12 lg:pt-12 lg:pb-20 px-4 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-gray-100 h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              {props.title}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {props.subtitle}
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {props.edges.map((edge, index) => (
              <BlogPostCard post={edge.node} />
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
  FullWidthCTAImageLeft,
  FullWidthNews,
};
