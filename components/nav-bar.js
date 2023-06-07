'use client';

import { Fragment } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { X, Menu as MenuIcon, User } from 'react-feather'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation';
import LogoIdea from '@/public/image/idea-logo.png'
import cn from '@/lib/utils'
import useLogout from '@/hooks/useLogout'

export default function NavBar() {
  const logout = useLogout()
  const pathname = usePathname()
  const navigation = [
    { name: 'Home', href: '/internal', current: pathname === '/internal' },
    { name: 'Demande de role', href: '/internal/demande-de-role', current: pathname === '/internal/demande-de-role' },
    { name: 'Demande de personne', href: '/internal/demande-de-personne', current: pathname === '/internal/demande-de-personne' },
  ]
  const edition = pathname.startsWith('/internal/edition-des');

  return (
    <Disclosure as="nav" className="bg-brown_bobby">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src={LogoIdea}
                    alt="IDeA"
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src={LogoIdea}
                    alt="IDeA"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-black/20 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className={cn(edition ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-black/20 hover:text-white',
                          "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium")}>
                          Edition
                          <ChevronDownIcon
                            className="text-violet-200 hover:text-violet-100 -mr-1 ml-2 h-5 w-5"
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
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white_background_bobby shadow-lg ring-1 ring-black/5 focus:outline-none">
                          <div className="p-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/internal/edition-des-projets"
                                  className={cn(
                                    active ? 'bg-black/20 text-white' : 'bg-violet-500 text-black',
                                    "group flex w-full items-center rounded-md p-2 text-sm")}
                                >
                                  Projets
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/internal/edition-des-roles"
                                  className={cn(
                                    active ? 'bg-black/20 text-white' : 'bg-violet-500 text-black',
                                    "group flex w-full items-center rounded-md p-2 text-sm")}
                                >
                                  Roles
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/internal/edition-des-sprints"
                                  className={cn(
                                    active ? 'bg-black/20 text-white' : 'bg-violet-500 text-black',
                                    "group flex w-full items-center rounded-md p-2 text-sm")}
                                  >
                                  Sprints
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full p-1 text-gray-400 hover:text-white focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <User className="h-6 w-6 " aria-hidden="true" />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={cn(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={cn(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            onClick={() => logout()}
                            className={cn(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}