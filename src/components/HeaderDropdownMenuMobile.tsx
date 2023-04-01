import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { MenuEntry } from "./Header";
import { Link } from "gatsby";

function HeaderDropdownMenuMobile(props: { menu: MenuEntry }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <a
          href="#"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-gray-200 hover:bg-kodibg-lighter hover:text-gray-50 block px-3 py-2 rounded-md text-base font-medium"
        >
          <div className="flex">
            <div className="flex-grow">{props.menu.title}</div>
            <div className="flex-none">
              {isDropdownOpen ? (
                <ChevronUpIcon className="text-gray-300 ml-1 h-5 w-5 group-hover:text-gray-50" />
              ) : (
                <ChevronDownIcon className="text-gray-300 ml-1 h-5 w-5 group-hover:text-gray-50" />
              )}
            </div>
          </div>
        </a>
        <Transition
          show={isDropdownOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {props.menu.dropdown?.map((item, index) =>
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
            )}
          </div>
        </Transition>
      </div>
    </>
  );
}

export default HeaderDropdownMenuMobile;
