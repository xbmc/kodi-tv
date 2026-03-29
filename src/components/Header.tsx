import React, { useState } from "react";
import HeaderDropdownMenu from "./HeaderDropdownMenu";
import HeaderDropdownMenuMobile from "./HeaderDropdownMenuMobile";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import {
  InformationCircleIcon,
  CloudArrowDownIcon,
  BanknotesIcon,
  CpuChipIcon,
  InboxArrowDownIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import type { MenuEntry } from "./types";

let regularButton =
  "text-gray-200 hover:text-gray-50 hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out";
let primaryButton =
  "text-gray-50 bg-kodi-darker hover:bg-kodi hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out shadow-xs hover:shadow-glow";
let callToActionButton =
  "text-gray-50 bg-kodi-castellina hover:bg-amber-600 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out";

const mainMenu: MenuEntry[] = [
  {
    id: "home",
    title: "News",
    url: { url: "/blog", type: "internal" },
    buttonType: regularButton,
    dropdown: null,
    footer: null,
  },
  {
    id: "addons",
    title: "Add-ons",
    url: { url: "#", type: "internal" },
    buttonType: regularButton,
    footer: null,
    dropdown: [
      {
        id: "addons-about",
        title: "About Add-ons",
        url: { url: "/addons", type: "internal" },
        icon: InformationCircleIcon,
        description: "Find out how add-ons expand and enhance the Kodi experience.",
      },
      {
        id: "addons-omega",
        title: "Omega Add-ons",
        url: { url: "/addons/omega", type: "internal" },
        icon: CloudArrowDownIcon,
        description: "Add-ons for Kodi 21, the latest and greatest version of Kodi.",
      },
    ],
  },
  {
    id: "contribute",
    title: "Contribute",
    buttonType: regularButton,
    url: { url: "/contribute", type: "internal" },
    dropdown: null,
    footer: null,
  },
  {
    id: "about",
    title: "About",
    url: { url: "#", type: "internal" },
    buttonType: regularButton,
    footer: null,
    dropdown: [
      {
        id: "about-kodi",
        title: "About Kodi",
        url: { url: "/about", type: "internal" },
        icon: InformationCircleIcon,
        description: "Find out everything Kodi can do for you.",
      },
      {
        id: "about-sponsors",
        title: "Sponsors",
        url: { url: "/about/sponsors", type: "internal" },
        icon: BanknotesIcon,
        description: "A list of companies supporting the work we do.",
      },
      {
        id: "about-software",
        title: "Software",
        url: { url: "/about/software", type: "internal" },
        icon: CpuChipIcon,
        description: "Information about the suite of software we offer.",
      },
      {
        id: "about-contact",
        title: "Contact",
        url: { url: "/about/contact", type: "internal" },
        icon: InboxArrowDownIcon,
        description:
          "Contact the Kodi team about support, corporate enquiries, or sponsorships.",
      },
    ],
  },
  {
    id: "store",
    title: "Store",
    buttonType: regularButton,
    url: { url: "/store", type: "internal" },
    dropdown: null,
    footer: null,
  },
  {
    id: "help",
    title: "Help",
    url: { url: "#", type: "internal" },
    buttonType: regularButton,
    footer: null,
    dropdown: [
      {
        id: "help-wiki",
        title: "Wiki",
        url: { url: "https://kodi.wiki", type: "external" },
        icon: DocumentTextIcon,
        description: "Our user documentation and how-to guides.",
      },
      {
        id: "help-developer",
        title: "Kodi Developer Resources",
        url: { url: "https://docs.kodi.tv", type: "external" },
        icon: CodeBracketIcon,
        description: "Documentation, including information for Kodi itself.",
      },
      {
        id: "help-addon",
        title: "Add-on Developer Resources",
        url: { url: "https://dev-kit.kodi.tv", type: "external" },
        icon: CodeBracketIcon,
        description:
          "Documentation, including information for skin development and interfaces for Python and C++ .",
      },
      {
        id: "help-forum",
        title: "Forum",
        url: { url: "https://forum.kodi.tv", type: "external" },
        icon: ChatBubbleLeftRightIcon,
        description: "Our user forum for asking questions and finding answers.",
      },
      {
        id: "help-irc",
        title: "IRC",
        url: { url: "https://web.libera.chat/#kodi", type: "external" },
        icon: ChatBubbleLeftEllipsisIcon,
        description:
          "Join us on Libera.Chat or use this menu link to join the channel via the web.",
      },
      {
        id: "help-matrix",
        title: "Matrix",
        url: { url: "https://matrix.to/#/#kodi-space:matrix.org", type: "external" },
        icon: ChatBubbleLeftEllipsisIcon,
        description: "Get help from team members hanging out in Matrix.",
      },
    ],
  },
  {
    id: "github",
    title: "GitHub",
    buttonType: regularButton,
    url: { url: "https://github.com/xbmc", type: "external" },
    dropdown: null,
    footer: null,
  },
  {
    id: "download",
    title: "Download",
    url: { url: "/download", type: "internal" },
    buttonType: primaryButton,
    dropdown: null,
    footer: null,
  },
  {
    id: "donate",
    title: "Donate",
    buttonType: callToActionButton,
    url: { url: "/donate", type: "internal" },
    dropdown: null,
    footer: null,
  },
];

function Header(props: any) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  let mainclassname = "bg-kodibg pb-32";
  let showtitle = true;
  if (props.compact) {
    mainclassname = "bg-kodibg";
    showtitle = false;
  }
  return (
    <>
      <div className={mainclassname}>
        <nav className="glass-dark sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-2 lg:px-6">
            <div>
              <div className="flex items-center justify-between h-16 px-4">
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
                    <div className="ml-5 lg:ml-10 flex items-baseline space-x-2">
                      {mainMenu.map(item =>
                        item.dropdown == null && item.url ? (
                          <a
                            key={item.id}
                            href={item.url.url}
                            className={item.buttonType}
                          >
                            {item.title}
                          </a>
                        ) : (
                          <HeaderDropdownMenu key={item.id} menu={item} />
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex lg:hidden">
                  <button
                    onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                    type="button"
                    className="bg-transparent inline-flex items-center justify-center p-2 rounded-lg text-gray-200 hover:text-gray-50 hover:bg-white/10 focus:outline-hidden focus:ring-2 focus:ring-kodi/30 transition-all duration-300"
                    aria-controls="mobile-menu"
                    aria-expanded={isHamburgerOpen}
                  >
                    <span className="sr-only">Open main menu</span>
                    {isHamburgerOpen ? (
                      <XMarkIcon className="block h-6 w-6" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`lg:hidden overflow-hidden transition-all duration-200 ease-out ${
                isHamburgerOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
              }`}
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {mainMenu.map(item =>
                  item.dropdown == null && item.url ? (
                    <a
                      key={item.id}
                      href={item.url.url}
                      className="text-gray-300 hover:bg-white/10 hover:text-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <HeaderDropdownMenuMobile key={item.id} menu={item} />
                  ),
                )}
              </div>
            </div>
          </div>
        </nav>
        <header style={{ display: showtitle ? "block" : "none" }} className="py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-50 font-display tracking-tight">
              {props.frontmatter.title}
            </h1>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
