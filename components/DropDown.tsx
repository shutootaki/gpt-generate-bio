import { Menu, Transition } from "@headlessui/react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { BsListUl } from "react-icons/bs";
import { Fragment } from "react";
import { FiCheck } from "react-icons/fi";

export type VibeType = "Professional" | "Casual" | "Funny";

let vibes: VibeType[] = ["Professional", "Casual", "Funny"];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const DropDown = () => {
  return (
    <>
      <div className="max-w-xl w-full ">
        <div className="flex mt-8 mb-3 items-center space-x-3 justify-center">
          <BsListUl size={32} className="mb-5 sm:mb-0" />
          <p className="mx-2 font-medium">Select your vibe</p>
        </div>

        <Menu as="div" className="relative block text-left w-full">
          <div>
            <Menu.Button className="inline-flex w-full justify-between items-center rounded-md border border-gray-300 bg-slate-100 px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black">
              tmp
              <IoMdArrowDropdownCircle
                className="-mr-1 ml-2 h-5 w-5 ui-open:hidden"
                aria-hidden="true"
              />
              <IoMdArrowDropdownCircle
                className="-mr-1 ml-2 h-5 w-5 hidden ui-open:block"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-slate-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              key="tmp"
            >
              <div className="">
                {vibes.map((vibeItem) => (
                  <Menu.Item key={vibeItem}>
                    {({ active }) => (
                      <button
                        onClick={() => alert()}
                        className={classNames(
                          active
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-700",
                          vibes[0] === vibeItem ? "bg-gray-200" : "",
                          "px-4 py-2 text-sm w-full text-left flex items-center space-x-2 justify-between rounded-md"
                        )}
                      >
                        <span>{vibeItem}</span>
                        {vibes[0] === vibeItem ? (
                          <FiCheck className="w-4 h-4 text-bold" />
                        ) : null}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};
