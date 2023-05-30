import React, {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {X} from "react-feather";
import Link from "next/link";

function SliderHome({open, setOpen}) {
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
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity"/>
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
                    {/* Boutton fermeture */}
                    <div>
                      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-white_background_bobby"/>
                      <div className="absolute right-0 top-0 pr-4 pt-4">
                        <div className="flex h-full w-full items-start justify-end">
                          <button
                            type="button"
                            className="text-gray-300 hover:text-black"
                            onClick={() => setOpen(!open)}
                          >
                            <span className="sr-only">Close panel</span>
                            <X className="h-8 w-8" aria-hidden="true"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Transition.Child>

                  <div className="flex h-full flex-row overflow-hidden bg-brown_bobby py-8 shadow-xl">
                    {/* Barre de navigation */}
                    <div className="flex w-full flex-col md:flex-row">

                      {/* Logo */}
                      <div className="md:w-1/4">
                        <div className="flex h-full flex-col items-center">
                          <div className="flex grow">
                            <h1 className="text-7xl text-white">
                              IDeA
                            </h1>
                          </div>
                          <div className="flex flex-row gap-4 pt-4">
                            <Link href="https://www.instagram.com/idea_ut1/" target="_blank"
                                  className="text-gray-400 hover:text-gray-500 ">
                              <span className="sr-only">Instagram</span>
                              <Instagram />
                            </Link>
                            <Link href="https://www.linkedin.com/company/idea-miage/" target="_blank"
                                  className="text-gray-400 hover:text-gray-500 ">
                              <span className="sr-only">Linkedin</span>
                              <Linkedin />
                            </Link>
                            <Link href="mailto:ideamiage@gmail.com" className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Mail To</span>
                              <Mail />
                            </Link>
                          </div>
                        </div>
                      </div>

                      { /* Barre blanche */ }
                      <div className="w-px bg-white"></div>

                      {/* Menu */}
                      <div className="max-h-0 w-3/4">
                        <div className="mt-6 flex flex-col justify-center gap-4 px-4 text-5xl text-gray-100 sm:px-6">
                          <a href="#home" className="hover:text-gray-500" onClick={() => setOpen(!open)}>Home</a>
                          <a href="#skills" className="hover:text-gray-500" onClick={() => setOpen(!open)}>Skills</a>
                          <a href="#projects" className="hover:text-gray-500" onClick={() => setOpen(!open)}>Projects</a>
                          <a href="#faq" className="hover:text-gray-500" onClick={() => setOpen(!open)}>FAQ</a>
                        </div>
                      </div>
                    </div>

                    {/* Bouton Intranet */}
                    <Link href="/auth" className="absolute bottom-0 right-2 p-4 text-[30px] text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Intranet</span>
                      <div className="flex flex-row items-center align-middle">
                        Intranet
                      </div>
                    </Link>
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

const Mail = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path fillRule="evenodd"
          d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
          clipRule="evenodd" />
  </svg>
);

const Instagram = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

export default SliderHome;
