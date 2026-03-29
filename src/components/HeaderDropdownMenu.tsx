import React, { createElement } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import type { MenuEntry } from "./types";

function HeaderDropdownMenu(props: { menu: MenuEntry }) {
  return (
    <Popover>
      <PopoverTrigger className="inline-flex items-center text-gray-200 hover:text-gray-50 hover:bg-white/10 pl-3 pr-2 py-2 rounded-lg text-sm font-medium focus:outline-hidden transition-all duration-300 cursor-pointer">
        <span>{props.menu.title}</span>
        <ChevronDownIcon className="text-gray-400 h-5 w-5 group-hover:text-gray-300 transition-transform duration-300" />
      </PopoverTrigger>
      <PopoverContent
        sideOffset={12}
        className="w-screen max-w-md rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden backdrop-blur-xs p-0 gap-0"
      >
        <div className="relative grid gap-6 bg-white/95 backdrop-blur-xl p-6">
          {props.menu.dropdown?.map(item => (
            <a
              key={item.id}
              href={item.url?.url!}
              className="-m-3 p-3 flex items-start rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              {item.icon && (
                <div className="flex-shrink-0 h-6 w-6 text-kodi">
                  {createElement(item.icon, {})}
                </div>
              )}
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900 font-display">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </a>
          ))}
          {props.menu.footer === null ? (
            ""
          ) : (
            <div className="-ml-3 -mr-3 p-5 flex rounded-lg bg-gray-100">
              <div className="flow-root">{props.menu.footer}</div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default HeaderDropdownMenu;
