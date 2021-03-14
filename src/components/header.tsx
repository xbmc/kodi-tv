import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import SEO from "./seo";
import Social from "./social";
import HeaderDropdownMenu from "./headermenu";
import HeaderDropdownMenuMobile from "./headermenumobile";
import * as Icons from "heroicons-react";

const mainMenu = [
  {
    title: "About",
    url: "/about",
    svg: (
      <Icons.InformationCircleOutline className="flex-shrink-0 h-6 w-6 text-kodi" />
    ),
    collapseto: "more",
    description:
      "More information about Kodi and our other software packages, how to contact us, our sponsors, and the Kodi foundation.",
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
        url: "/about/software",
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
    svg: null,
    collapseto: null,
    description: null,
    dropdown: null,
    footer: null,
  },
  {
    title: "Download",
    url: "/download",
    svg: null,
    collapseto: null,
    description: null,
    dropdown: null,
    footer: null,
  },
  {
    title: "Add-ons",
    url: "/addons",
    svg: null,
    collapseto: null,
    description: null,
    footer:
      "Add-on availability depends on your version of Kodi, so please select the version you are running.",
    dropdown: [
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
    title: "Get Help",
    url: "/gethelp",
    svg: <Icons.ChatAlt2Outline className="flex-shrink-0 h-6 w-6 text-kodi" />,
    collapseto: "more",
    description:
      "Information on our forums, user documentation, and developer resources.",
    footer: null,
    dropdown: [
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
    title: "Contribute",
    url: "/contribute",
    svg: <Icons.SupportOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
    collapseto: "more",
    description:
      "Learn about working on the Kodi project, donating, or even buying merchandise.",
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
        title: "Donate",
        url: "/donate",
        svg: <Icons.GiftOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description:
          "Funds we raise go to improving and extending the goals of the Kodi Foundation.",
      },
      {
        title: "Store",
        url: "/store",
        svg: (
          <Icons.ShoppingCartOutline className="flex-shrink-0 h-6 w-6 text-kodi" />
        ),
        description: "Buy Kodi merchandise.",
      },
    ],
  },
];

function menuCollapse(menuname) {
  let newmenu = {
    title: menuname,
    url: null,
    collapseto: null,
    description: null,
    footer: null,
    dropdown: [],
  };
  for (let i = 0; i < mainMenu.length; i++) {
    if (mainMenu[i].collapseto !== null) {
      if (mainMenu[i].collapseto.toLowerCase() === menuname.toLowerCase()) {
        newmenu.dropdown.push(mainMenu[i]);
      }
    }
  }
  return newmenu;
}

function Header(props) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  let breadcrumbs = "";
  if (props.frontmatter.breadcrumbs !== undefined) {
    breadcrumbs = props.frontmatter.breadcrumbs;
  }
  return (
    <>
      <SEO title={props.frontmatter.title} breadcrumbs={breadcrumbs} />
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  {mainMenu.map((item, index) =>
                    item.dropdown == null ? (
                      <a
                        href={item.url}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <HeaderDropdownMenu menu={item} />
                    )
                  )}
                </div>
              </div>
              <div className="hidden md:block lg:hidden">
                <div className="ml-10 flex items-baseline space-x-4">
                  {mainMenu.map((item, index) =>
                    item.collapseto === null ? (
                      item.dropdown == null ? (
                        <a
                          href={item.url}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <HeaderDropdownMenu menu={item} />
                      )
                    ) : (
                      ""
                    )
                  )}
                  <HeaderDropdownMenu menu={menuCollapse("More")} />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Social />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
      </nav>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {props.frontmatter.title}
          </h1>
        </div>
      </header>
    </>
  );
}

export default Header;
