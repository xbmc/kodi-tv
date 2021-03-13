import React from 'react'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { ChevronDown, ChevronUp } from "heroicons-react";

function HeaderDropdownMenuMobile (props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <>
      <div class="relative">
        <a href="#"
           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
           class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          <div class="flex">
            <div class="flex-grow">{props.menu.title}</div>
            <div class="flex-none">
              { isDropdownOpen
                ? <ChevronUp class="text-gray-300 ml-2 h-5 w-5 group-hover:text-white" />
                : <ChevronDown class="text-gray-300 ml-2 h-5 w-5 group-hover:text-white" />
              }
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
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {props.menu.dropdown.map((item, index) => (
              <a href={item.url} class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{item.title}</a>
            ))}
          </div>
        </Transition>

      </div>
    </>
  )
}

export default HeaderDropdownMenuMobile
