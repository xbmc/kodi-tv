import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "heroicons-react";

function HeaderDropdownMenu(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <div onMouseLeave={() => setIsDropdownOpen(false)} className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          type="button"
          className="inline-flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-expanded="false"
        >
          <span>{props.menu.title}</span>
          {isDropdownOpen ? (
            <ChevronUp className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
          ) : (
            <ChevronDown className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
          )}
        </button>
        <Transition show={isDropdownOpen}>
          <div className="absolute z-50 left-1/2 transform -translate-x-1/2 -translate-y-3 mt-3 px-2 w-screen max-w-md sm:px-0">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {props.menu.dropdown.map((item, index) => (
                  <a
                    href={item.url}
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    {item.svg}
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
                {props.menu.footer === null ? (
                  ""
                ) : (
                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div className="flow-root">{props.menu.footer}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}

export default HeaderDropdownMenu;
