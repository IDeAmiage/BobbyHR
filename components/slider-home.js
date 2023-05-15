import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "react-feather";
import Link from "next/link";

function SliderHome({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div>
                      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-white_background_bobby" />
                      <div className="absolute right-0 top-0 pr-4 pt-4">
                        <div className="flex h-full w-full items-start justify-end">
                          <button
                            type="button"
                            className="text-gray-300 hover:text-black"
                            onClick={() => setOpen(!open)}
                          >
                            <span className="sr-only">Close panel</span>
                            <X className="h-8 w-8" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-row overflow-hidden bg-brown_bobby py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        IDEA
                      </Dialog.Title>
                    </div>
                    <div className="mt-6 flex flex-1 flex-col px-4 sm:px-6">
                      <a href="#home" onClick={() => setOpen(!open)}>Home</a>
                      <a href="#projects" onClick={() => setOpen(!open)}>Projects</a>
                      <a href="#skills" onClick={() => setOpen(!open)}>Skills</a>
                      <Link href="/home">About</Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SliderHome;
