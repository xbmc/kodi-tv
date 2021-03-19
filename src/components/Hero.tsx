import React from "react";

function HeroRounded(props) {
  return (
    <>
      <div className="relative pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative shadow-xl rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img className="h-full w-full object-cover" src={props.image} alt="" />
              <div
                className="absolute inset-0 bg-gray-700"
                style={{ mixBlendMode: "multiply" }}
              ></div>
            </div>
            <div className="relative px-6 py-14">
              <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
                <span className="block text-white">{props.title}</span>
                <span className="block text-kodi-lighter">{props.subtitle}</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-kodi-lighter">
                {props.description}
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-0 mx-auto grid-cols-1 gap-5">
                  <a
                    href={props.url}
                    className="flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-kodi bg-white hover:bg-indigo-50 px-8"
                  >
                    {props.buttontext}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HeroFullWidth(props) {
  return (
    <>
      <div className="relative pb-6">
        <div className="mx-auto">
          <div className="relative shadow-xl overflow-hidden">
            <div className="absolute inset-0">
              <img className="h-full w-full object-cover" src={props.image} alt="" />
              <div
                className="absolute inset-0 bg-gray-700"
                style={{ mixBlendMode: "multiply" }}
              ></div>
            </div>
            <div className="relative px-6 py-14">
              <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
                <span className="block text-white">{props.title}</span>
                <span className="block text-kodi-lighter">{props.subtitle}</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-kodi-lighter">
                {props.description}
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-0 mx-auto grid-cols-1 gap-5">
                  <a
                    href={props.url}
                    className="flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-kodi bg-white hover:bg-indigo-50 px-8"
                  >
                    {props.buttontext}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HeroRounded, HeroFullWidth };
