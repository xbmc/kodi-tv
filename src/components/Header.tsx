import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import SEO from "./Seo";
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
import { Link } from "gatsby";

export interface MenuEntry {
  id: string;
  title: string;
  url: { url: string; type: "external" | "internal" } | undefined;
  buttonType: string;
  footer: string | null;
  dropdown: DropDownItem[] | null;
}

export interface DropDownItem {
  title: string;
  url: { url: string; type: "external" | "internal" } | undefined;
  icon: JSX.Element | null;
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
    footer:
      "Add-on availability depends on your version of Kodi, so please select the version you are running.",
    dropdown: [
      {
        id: "addons-about",
        title: "About Add-ons",
        url: { url: "/addons", type: "internal" },
        icon: InformationCircleIcon,
        description: "Find out how add-ons expand and enhance the Kodi experience.",
      },
      {
        id: "addons-nexus",
        title: "Nexus Add-ons",
        url: { url: "/addons/nexus", type: "internal" },
        icon: CloudArrowDownIcon,
        description: "Add-ons for Kodi 20, the latest and greatest version of Kodi.",
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
    buttonType: primaryButton,
    url: { url: "/donate", type: "internal" },
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
                          item.url.type === "internal" ? (
                            <Link
                              key={item.id}
                              to={item.url.url}
                              className={item.buttonType}
                            >
                              {item.title}
                            </Link>
                          ) : (
                            <a
                              key={item.id}
                              href={item.url.url}
                              className={item.buttonType}
                            >
                              {item.title}
                            </a>
                          )
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
                    className="bg-kodibg inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-gray-50 hover:bg-kodibg-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-kodibg focus:ring-gray-50"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
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
            <Transition show={isHamburgerOpen}>
              <div className="lg:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {mainMenu.map((item, index) =>
                    item.dropdown == null && item.url ? (
                      item.url.type === "internal" ? (
                        <Link
                          key={item.url.url}
                          to={item.url.url}
                          className="text-gray-200 hover:bg-kodibg-lighter hover:text-gray-50 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <a
                          key={item.url.url}
                          href={item.url.url}
                          className="text-gray-200 hover:bg-kodibg-lighter hover:text-gray-50 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          {item.title}
                        </a>
                      )
                    ) : (
                      <HeaderDropdownMenuMobile key={item.url.url} menu={item} />
                    ),
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
