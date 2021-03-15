import React from "react";
import Hero from "src/components/hero";
import { LandingPage } from "/src/components/layout";

class Page extends React.Component {
  render() {
    return (
      <LandingPage>
        <Hero />
        <div className=" pt-6 pb-12">
          <div className="text-center text-7xl font-bold">
            Kodi does it all
          </div>
          <div className="text-center text-2xl text-gray-400">
            Got a smart TV? You ain't seen nothin’ yet! Kodi puts your smart TV to shame.
          </div>
        </div>

    <div className="bg-gradient-to-r from-kodi-lighter to-kodi-darker">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Kodi is the ultimate entertainment center software
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-200">
          It plays almost every kind of media you can find and it looks great while doing it! Here are just a few things Kodi excels at:
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Music</h3>
              <p className="mt-2 text-base text-gray-200">
                Your music collection has never looked this good! Support for almost every format, playlists, party mixes and more.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Movies</h3>
              <p className="mt-2 text-base text-gray-200">
                So much better than a pile of DVDs on a shelf. Kodi brings your movie collection to life with artwork, cast genres and more.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">TV Shows</h3>
              <p className="mt-2 text-base text-gray-200">
                Perfect for binge watching or the occasional catch up on your favourite show. Kodi keeps all your tv organised like nothing else.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Photos</h3>
              <p className="mt-2 text-base text-gray-200">
                Kodi is the best way to share your photos on the biggest screen in the house with a personal slideshow.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">PVR</h3>
              <p className="mt-2 text-base text-gray-200">
                Kodi allows you to watch and record live TV all from easy to use interface. It works with a number of popular backends including MediaPortal, MythTV, NextPVR, Tvheadend and many more.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-white">Games</h3>
              <p className="mt-2 text-base text-gray-200">
                Kodi isn't just for passive entertainment media. You can also play games on Kodi.  Pick from a large number of emulators, or even play a stand-alone game.  There's even extensive support for game controllers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>


        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
              A big thanks to our sponsors. They help to keep Kodi free.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
              </div>
            </div>
          </div>
        </div>

      </LandingPage>
    );
  }
}

export default Page;
