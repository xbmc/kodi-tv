import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "heroicons-react";

function HeaderDropdownMenu(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <div onMouseLeave={() => setIsDropdownOpen(false)} class="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          type="button"
          class="inline-flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-expanded="false"
        >
          <span>{props.menu.title}</span>
          {isDropdownOpen ? (
            <ChevronUp class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
          ) : (
            <ChevronDown class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
          )}
        </button>
        <Transition
          show={isDropdownOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-3 mt-3 px-2 w-screen max-w-md sm:px-0">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {props.menu.dropdown.map((item, index) => (
                  <a
                    href={item.url}
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    {item.svg}
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">{item.title}</p>
                      <p class="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </a>
                ))}
                {props.menu.footer === null ? (
                  ""
                ) : (
                  <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div class="flow-root">{props.menu.footer}</div>
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
