import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Mail } from "react-feather";
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

                  <div className="flex h-full flex-row overflow-hidden bg-brown_bobby py-8 shadow-xl ">
                    <div dir="ltr">
                      <div className="py-8 px-8">
                        <Dialog.Title className="text-base font-semibold leading-6 text-[130px] content-center text-gray-100">
                         IDEA
                        </Dialog.Title>
                      </div>  
                    </div>
                    {/* Barre de naviguation */}
                    <div class="flex">
                      <div class="w-1/2 max-h-0">
                      {/* Contenu de la première moitié */}
                      </div>
                      <div class="w-px bg-white"></div>
                      {/* Barre verticale */}
                      <div class="w-1/2 max-h-0">
                      {/* Contenu de la 2ème moitié */}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-1 flex-col px-4 sm:px-6 flex -justify-center text-[50px] text-gray-100">
                      <a href="#home" onClick={() => setOpen(!open)}>Home</a>
                      <a href="#projects" onClick={() => setOpen(!open)}>Projects</a>
                      <a href="#skills" onClick={() => setOpen(!open)}>Skills</a>
                      <Link href="/home">About</Link>
                    </div>
                    <div className="px-4 sm:px-4 absolute bottom-0 left-20 h-16 w-16 flex flex-1 flex-lig flex  justify-between">
                    <a href="https://www.instagram.com/idea_ut1/" target="_blank" className="text-gray-400 hover:text-gray-500 ">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-12 w-12" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"  height="30">
                        <path fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/idea-miage/" target="_blank" className="text-gray-400 hover:text-gray-500 ">
                        <span className="sr-only">Linkdin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" aria-hidden="true" height="30" fill="currentColor" viewBox="0 0 50 50">
                        <path fillRule="evenodd"
                      d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                      clipRule="evenodd"></path>
                    </svg>
                    </a>
                    <a href="mailto:ideamiage@gmail.com" className="text-gray-400 hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" aria-hidden="true" height="30" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" 
                              d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" 
                              clip-rule="evenodd" />
                      </svg>
                    </a>
            
                    </div>
                    <a href="http://localhost:3000/auth" className="text-gray-400 hover:text-gray-500 absolute bottom-0 right-2 text-[30px]">
                      Login
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" aria-hidden="true" height="30" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" 
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" 
                        clip-rule="evenodd" />
                    </svg>
                    </a>
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
