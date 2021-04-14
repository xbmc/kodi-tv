import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import SEO from "./Seo";
import HeaderDropdownMenu from "./HeaderDropdownMenu";
import HeaderDropdownMenuMobile from "./HeaderDropdownMenuMobile";
import * as Icons from "heroicons-react";
import { Link } from "gatsby";

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

let regularButton =
  "text-gray-100 hover:bg-kodibg-lighter hover:text-gray-50 px-3 py-2 rounded-md text-sm font-medium";
let primaryButton =
  "text-gray-100 bg-kodi-darker hover:bg-kodi hover:text-gray-50 px-3 py-2 rounded-md text-sm font-medium";
let secondaryButton =
  "text-gray-100 bg-kodibg-lighter hover:bg-kodibg-darker hover:text-gray-50 px-3 py-2 rounded-md text-sm font-medium";

const mainMenu: MenuEntry[] = [
  {
    title: "News",
    url: "/blog",
    buttonType: regularButton,
    dropdown: null,
    footer: null,
  },
  {
    title: "Add-ons",
    url: "#",
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
    title: "Contribute",
    buttonType: regularButton,
    url: "/contribute",
    dropdown: null,
    footer: null,
  },
  {
    title: "About",
    url: "#",
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
        title: "Contact",
        url: "/about/contact",
        svg: <Icons.InboxInOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description:
          "Contact the Kodi team about support, corporate enquiries, or sponsorships.",
      },
    ],
  },
  {
    title: "Store",
    buttonType: regularButton,
    url: "/store",
    dropdown: null,
    footer: null,
  },
  {
    title: "Help",
    url: "#",
    buttonType: regularButton,
    footer: null,
    dropdown: [
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
      {
        title: "Forum",
        url: "https://forum.kodi.tv",
        svg: <Icons.ChatAlt2Outline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description: "Our user forum for asking questions and finding answers.",
      },
      {
        title: "IRC",
        url: "https://webchat.freenode.net/#kodi",
        svg: <Icons.ChatAltOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description:
          "Join us on FreeNode or use this menu link to join the channel via the web. Registration required.",
      },
      {
        title: "Matrix",
        url: "https://matrix.to/#/#kodi:matrix.org",
        svg: <Icons.ChatAltOutline className="flex-shrink-0 h-6 w-6 text-kodi" />,
        description: "Get help from team members hanging out in Matrix.",
      },
    ],
  },
  {
    title: "Github",
    buttonType: regularButton,
    url: "https://github.com/xbmc",
    dropdown: null,
    footer: null,
  },
  {
    title: "Download",
    url: "/download",
    buttonType: primaryButton,
    dropdown: null,
    footer: null,
  },
  {
    title: "Donate",
    buttonType: primaryButton,
    url: "/donate",
    dropdown: null,
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
          <div className="max-w-7xl mx-auto px-2 lg:px-6">
            <div className={borderclassname}>
              <div className="flex items-center justify-between h-16 px-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link to="/">
                      <img
                        className="h-8 w-24"
                        src="/images/kodi-logo-with-text.svg"
                        title="Home"
                        alt="Kodi Logo"
                      />
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <div className="ml-5 lg:ml-10 flex items-baseline space-x-2">
                      {mainMenu.map((item, index) =>
                        item.dropdown == null && item.url ? (
                          <a
                            key={item.url}
                            href={item.url}
                            className={item.buttonType}
                          >
                            {item.title}
                          </a>
                        ) : (
                          <HeaderDropdownMenu key={item.url} menu={item} />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex lg:hidden">
                  <button
                    onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                    type="button"
                    className="bg-kodibg inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-gray-50 hover:bg-kodibg-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-kodibg focus:ring-gray-50"
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
              <div className="lg:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {mainMenu.map((item, index) =>
                    item.dropdown == null && item.url ? (
                      <a
                        href={item.url}
                        key={item.url}
                        className="text-gray-200 hover:bg-kodibg-lighter hover:text-gray-50 block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <HeaderDropdownMenuMobile key={item.url} menu={item} />
                    )
                  )}
                </div>
              </div>
            </Transition>
          </div>
        </nav>
        <header style={{ display: showtitle ? "block" : "none" }} className="py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-50">
              {props.frontmatter.title}
            </h1>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
