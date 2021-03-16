import React from "react";
import { HeroFullWidth } from "src/components/hero";
import IconList from "src/components/IconList"
import * as Icons from "heroicons-react";
import { LandingPage } from "/src/components/layout";

let frontmatter = {title: "", breadcrumbs: "Home"}

class Page extends React.Component {
  render() {
    return (
      <LandingPage frontmatter={frontmatter}>

        <HeroFullWidth />

        <div className=" pt-12 pb-20 px-6">
          <div className="text-center text-5xl font-bold">
            Kodi does it all
          </div>
          <div className="text-center text-2xl text-gray-400">
            Got a smart TV? You ain't seen nothin’ yet! Kodi puts your smart TV to shame.
          </div>
        </div>

        <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"></div>
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-6 max-w-xl mx-auto lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-kodi-darker to-kodi-lighter">
                      <Icons.DownloadOutline className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Kodi runs on just about anything
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Kodi runs on a huge range of devices and operating systems, including:
                      <ul className="pl-10 pt-4">
                        <li>Windows</li>
                        <li>macOS, iOS, and tvOS</li>
                        <li>Android</li>
                        <li>Linux</li>
                        <li>Raspberry Pi</li>
                      </ul>
                    </p>
                    <div className="mt-6">
                      <a href="/download" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-kodi-lighter to-kodi-darker">
                        Download Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <IconList
                    items={
                      [
                        {slug: "", icon: "/images/distributions/windows.png", name: ""},
                        {slug: "", icon: "/images/distributions/macos.png", name: ""},
                        {slug: "", icon: "/images/distributions/android.png", name: ""},
                        {slug: "", icon: "/images/distributions/linux.png", name: ""},
                        {slug: "", icon: "/images/distributions/raspberry-pi.png", name: ""},
                      ]
                    }
                    linkroot="/download"
                    iconwidth="150"
                    className="grid grid-cols-2 lg:pt-6 gap-8"
                  />
                </div>
              </div>
            </div>
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
                    <Icons.MusicNoteOutline className="h-6 w-6 text-white" />
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
                    <Icons.FilmOutline className="h-6 w-6 text-white" />
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
                    <Icons.VideoCameraOutline className="h-6 w-6 text-white" />
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
                    <Icons.PhotographOutline className="h-6 w-6 text-white" />
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
                    <Icons.ClockOutline className="h-6 w-6 text-white" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">PVR</h3>
                  <p className="mt-2 text-base text-gray-200">
                    Kodi allows you to watch and record live TV all from an easy to use interface. It works with a number of popular backends including MediaPortal, MythTV, NextPVR, Tvheadend and many more.
                  </p>
                </div>
              </div>
    
              <div>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <Icons.PuzzleOutline className="h-6 w-6 text-white" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">Games</h3>
                  <p className="mt-2 text-base text-gray-200">
                    Kodi isn"t just for passive entertainment media. You can also play games on Kodi.  Pick from a large number of emulators, or even play a stand-alone game.  There"s even extensive support for game controllers.
                  </p>
                </div>
              </div>
    
            </div>
          </div>
        </div>
    
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"></div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-kodi-darker to-kodi-lighter">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  But wait, there's more!
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  You can get a new skin to change the look of Kodi, or maybe you want to stream your favourite internet radio station and control it all with your web browser or mobile phone? This and so much more is all possible and easy with Kodi.
                </p>
                <div className="mt-6">
                  <a href="/about" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-kodi-lighter to-kodi-darker">
                    Show me all the good bits
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="/images/skin-arctic-horizon-example.png" alt="Artic Horizon skin" />
            </div>
          </div>
        </div>
      </div>
        </div>

<div className="relative bg-gray-800">
  <div className="h-56 md:absolute md:left-0 md:h-full md:w-1/2">
    <img className="w-full h-full object-cover" src="/images/people-working.png" alt="three people working at a computer" />
    <div
      className="absolute inset-0 bg-kodi-darker"
      style={{ mixBlendMode: "multiply" }}
    ></div>

  </div>
  <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <div className="md:ml-auto md:w-1/2 md:pl-10">
      <h2 className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
        We need your help
      </h2>
      <p className="mt-3 text-lg text-gray-300">
        You can help in so many different ways, as you may or may not know, Kodi is maintained completely by volunteers and we need and value any contributions to the project. If you can code, we are always on the lookout for new team members to assist with development. If you are good with your words then you can help others in the forum, with QA or translations. If you are time poor but still want to give back, then you can donate or purchase some great Kodi merch. Visit our contribute page for all the other ways you can help.
      </p>
      <div className="mt-8">
        <div className="inline-flex rounded-md shadow">
          <a href="/contribute" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
            Find Ways to Help
          </a>
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
