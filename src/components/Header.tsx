import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import SEO from "./Seo";
import Social from "./Social";
import HeaderDropdownMenu from "./HeaderDropdownMenu";
import HeaderDropdownMenuMobile from "./HeaderDropdownMenuMobile";
import * as Icons from "heroicons-react";

export interface MenuEntry {
  title: string;
  url: string | undefined;
  buttonType: string;
  footer: string | null;
  dropdown: DropDownItem[] | null;
}

export interface DropDownItem {
  title: string;
  url: string | undefined;
  svg: JSX.Element | null;
  description: string | null;
}

let regularButton = "text-gray-300 hover:bg-kodibg-lighter hover:text-white px-3 py-2 rounded-md text-sm font-medium"
let specialButton = "text-gray-300 bg-kodi-darker hover:bg-kodi hover:text-white px-3 py-2 rounded-md text-sm font-medium"

const mainMenu: MenuEntry[] = [
  {
    title: "About",
    url: "/about",
    buttonType: regularButton,
    footer: null,
    dropdown: [
      {
        title: "About Kodi",
        url: "/about",
        svg: (
          <Icons.InformationCircleOutline className="flex-shrink-0 h-6 w-6 text-kodi" />
        ),
        description: "Find out everything Kodi can do for you.",
      },
      {
        title: "Contact",
        url: "/about/contact",
        svg: <Icons.InboxInOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description:
          "Contact the Kodi team about support, corporate enquiries, or sponsorships.",
      },
      {
        title: "Sponsors",
        url: "/about/sponsors",
        svg: <Icons.CashOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description: "A list of companies supporting the work we do.",
      },
      {
        title: "Software",
        url: "/about/software",
        svg: <Icons.ChipOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description: "Information about the suite of software we offer.",
      },
      {
        title: "Foundation",
        url: "/about/foundation",
        svg: (
          <Icons.OfficeBuildingOutline className="flex-shrink-0 h-6 w-6 text-kodi" />
        ),
        description:
          "A description of the structure of functions of the Kodi Foundation.",
      },
    ],
  },
  {
    title: "News",
    url: "/blog",
    buttonType: regularButton,
    dropdown: null,
    footer: null,
  },
  {
    title: "Download",
    url: "/download",
    buttonType: regularButton,
    dropdown: null,
    footer: null,
  },
  {
    title: "Add-ons",
    url: "/addons",
    buttonType: regularButton,
    footer:
      "Add-on availability depends on your version of Kodi, so please select the version you are running.",
    dropdown: [
      {
        title: "About Add-ons",
        url: "/addons",
        svg: (
          <Icons.InformationCircleOutline className="flex-shrink-0 h-6 w-6 text-kodi" />
        ),
        description: "Find out how add-ons expand and enhance the Kodi experience.",
      },
      {
        title: "Matrix Add-ons",
        url: "/addons/matrix",
        svg: (
          <Icons.CloudDownloadOutline className="flex-shrink-0 h-6 w-6 text-kodi" />
        ),
        description: "Add-ons for Kodi 19, the latest and greatest version of Kodi.",
      },
      {
        title: "Leia Add-ons",
        url: "/addons/leia",
        svg: (
          <Icons.CloudDownloadOutline className="flex-shrink-0 h-6 w-6 text-kodi" />
        ),
        description:
          "Add-ons for Kodi 18, the most recent previous version of Kodi.",
      },
    ],
  },
  {
    title: "Help",
    url: null,
    buttonType: regularButton,
    footer: null,
    dropdown: [
      {
        title: "Working on Kodi",
        url: "/contribute",
        svg: <Icons.SupportOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description:
          "We are always looking for people to help develop and support Kodi.",
      },
      {
        title: "Forum",
        url: "https://forum.kodi.tv",
        svg: <Icons.ChatAlt2Outline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description: "Our user forum for asking questions and finding answers.",
      },
      {
        title: "Wiki",
        url: "https://kodi.wiki",
        svg: (
          <Icons.DocumentTextOutline className="flex-shrink-0 h-6 w-6 text-kodi" />
        ),
        description: "Our user documentation and how-to guides.",
      },
      {
        title: "Developer Resources",
        url: "https://docs.kodi.tv",
        svg: <Icons.CodeOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description:
          "Documentation, including information for skin development and interfaces for Python and C++ .",
      },
    ],
  },
  {
    title: "Merch",
    buttonType: regularButton,
    url: "/store",
    footer: null,
  },
  {
    title: "Donate",
    buttonType: specialButton,
    url: "/donate",
    footer: null,
  },
];

function Header(props: any) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  let mainclassname = "bg-kodibg pb-32";
  let borderclassname = "border-b border-gray-600";
  let showtitle = true;
  if (props.compact !== undefined) {
    mainclassname = "bg-kodibg";
    borderclassname = "";
    showtitle = false;
  }
  return (
    <>
      <SEO frontmatter={props.frontmatter} />

      <div className={mainclassname}>
        <nav className="bg-kodibg">
          <div className="max-w-7xl mx-auto sm:px-2 lg:px-6">
            <div className={borderclassname}>
              <div className="flex items-center justify-between h-16 px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <img
                        className="h-8 w-24"
                        src="/images/kodi-logo-with-text.svg"
                        title="Home"
                        alt="Kodi Logo"
                      />
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-5 lg:ml-10 flex items-baseline space-x-2">
                      {mainMenu.map((item, index) =>
                        item.dropdown == null ? (
                          <a
                            key={item.url}
                            href={item.url}
                            className={item.buttonType}
                          >
                            {item.title}
                          </a>
                        ) : (
                          <HeaderDropdownMenu menu={item} />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="ml-4 flex items-center lg:ml-6">
                    <Social />
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                    type="button"
                    className="bg-kodibg inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-kodibg-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-kodibg focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {isHamburgerOpen ? (
                      <Icons.X className="block h-6 w-6" />
                    ) : (
                      <Icons.Menu className="block h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <Transition show={isHamburgerOpen}>
              <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {mainMenu.map((item, index) =>
                    item.dropdown == null ? (
                      <a
                        href={item.url}
                        className="text-gray-300 hover:bg-kodibg-lighter hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <HeaderDropdownMenuMobile menu={item} />
                    )
                  )}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <Social />
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </nav>
        <header style={{ display: showtitle ? "block" : "none" }} className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">
              {props.frontmatter.title}
            </h1>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
