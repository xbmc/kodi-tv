import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { MenuEntry } from "./Header";
import { Link } from "gatsby";

function HeaderDropdownMenu(props: { menu: MenuEntry }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className="inline-flex items-center text-gray-200 hover:bg-kodibg-lighter hover:text-gray-50 pl-3 pr-2 py-2 rounded-md text-sm font-medium focus:outline-none"
            aria-expanded="false"
          >
            <span>{props.menu.title}</span>
            {open ? (
              <ChevronUpIcon className="text-gray-400 h-5 w-5 group-hover:text-gray-500" />
            ) : (
              <ChevronDownIcon className="text-gray-400 h-5 w-5 group-hover:text-gray-500" />
            )}
          </Popover.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 mx-3 px-0 w-screen max-w-md"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-8 bg-gray-50 p-8">
                  {props.menu.dropdown?.map((item, index) =>
                    item.url?.type === "internal" ? (
                      <Link
                        key={item.url?.url}
                        to={item.url?.url!}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-kodi" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <a
                        key={item.url?.url}
                        href={item.url?.url!}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-kodi" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    )
                  )}
                  {props.menu.footer === null ? (
                    ""
                  ) : (
                    <div className="-ml-3 -mr-3 p-5 flex rounded-lg bg-gray-100">
                      <div className="flow-root">{props.menu.footer}</div>
                    </div>
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default HeaderDropdownMenu;
