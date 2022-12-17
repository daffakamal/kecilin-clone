import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

import KecilinLogo from "../../assets/Images/kecilin-logo.svg";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
  const styleTextNav="font-PoppinsRegular lg:text-sm xl:text-sm cursor-pointer text-black hover:text-cyan-600 px-3 py-2"
  
  const linksProduct = [
    { id: "1", href: "#!", title: "Kecilin VPN" },
    { id: "2", href: "#!", title: "Kecilin Kloud" },
    { id: "3", href: "#!", title: "Kecilin CCTV" },
  ];

  const linksLanguage = [
    { id: "1", href: "#!", title: "Indonesia" },
    { id: "2", href: "#!", title: "English" },
  ];
	
	return (
    <div>
      <nav className="w-full bg-white lg:pt-1 lg:pb-1 px-7 sm:px-16 lg:px-28 xl:px-52 2xl:px-80 z-50">
        <div className="w-full xl:container xl:mx-auto">
          <div className="w-full flex items-center h-12 md:h-14 xl:h-20">
            <div className="w-full flex items-center justify-between lg:justify-start gap-x-14">
              <div className="flex justify-center items-center">
                <Link href="/">
                  <Image
                    src={KecilinLogo.src}
                    className="w-7 sm:w-8 md:w-9 lg:w-11"
                    width={45}
                    height={45}
                    priority
                    alt="Kecilin logo"
                  />
                </Link>
              </div>
              <div className="hidden lg:flex justify-start">
                <div className="flex space-x-2 lg:space-x-6 2xl:space-x-11">
                  <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center text-black hover:text-cyan-600">
                      <Menu.Button className={styleTextNav}>
                        Product and Service
                      </Menu.Button>
                      <ChevronDownIcon className="w-4" />
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
                      <Menu.Items className="absolute left-5 mt-2 w-40 font-PoppinsRegular origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                        <div className="px-1 py-3">
                          {linksProduct.map((link) => (
                            <Menu.Item key={link.id}>
                              {({ active }) => (
                                <a
                                  href={link.href}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-black text-sm"
                                      : "text-black text-sm xl:text-sm"
                                  } group flex w-full items-center rounded-md px-4 py-2`}
                                >
                                  {link.title}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <Link href="/About">
                    <p className={styleTextNav}>About Kecilin</p>
                  </Link>
                  <Link href="/Enterprise">
                    <p className={styleTextNav}>Enterprise</p>
                  </Link>
                  <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center text-black hover:text-cyan-600">
                      <Menu.Button className={styleTextNav}>
                        English
                      </Menu.Button>
                      <ChevronDownIcon className="w-4" />
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
                      <Menu.Items className="absolute left-5 mt-2 w-40 font-PoppinsRegular origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                        <div className="px-1 py-3">
                          {linksLanguage.map((link) => (
                            <Menu.Item key={link.id}>
                              {({ active }) => (
                                <a
                                  href={link.href}
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-black text-sm"
                                      : "text-gray-900 text-sm"
                                  } group flex w-full items-center rounded-md px-4 py-2`}
                                >
                                  {link.title}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex min-w-fit justify-center items-center">
              <Link href="/#compress-page">
                <button className="font-PoppinsMedium uppercase px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full text-xs cursor-pointer">
                  Compress now
                </button>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center rounded-md text-black"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-[25px] w-[25px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-[25px] w-[25px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="block md:hidden" id="mobile-menu">
            <div className="w-full grid">
              <div className="grid justify-items-end pt-2 pb-3 space-y-5 font-PoppinsRegular text-right text-sm text-black py-2">
                <a
                  href="#!"
                  className="flex items-center cursor-pointer hover:text-cyan-600"
                >
                  Product and Service
                </a>
                <Link href="/About">
                  <p className="flex self-center items-center cursor-pointer hover:text-cyan-600">
                    About Kecilin
                  </p>
                </Link>
                <Link href="/Enterprise">
                  <p className="flex self-center items-center cursor-pointer hover:text-cyan-600">
                    Enterprise
                  </p>
                </Link>
                <a
                  href="#!"
                  className="flex self-center items-center cursor-pointer hover:text-cyan-600"
                >
                  English
                </a>
              </div>
              <div className="flex justify-end pt-1 pb-3">
                <Link href="/#compress-page">
                  <button className="font-PoppinsMedium uppercase px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full text-[11px] cursor-pointer">
                    Compress now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block lg:hidden" id="mobile-menu">
            <div className="w-full grid content-center">
              <div className="flex items-center self-center gap-x-14 pl-9 pt-2 pb-3 space-y-5 font-PoppinsRegular text-sm text-black py-2">
                <a
                  href="#!"
                  className="flex items-center cursor-pointer hover:text-cyan-600"
                >
                  Product and Service
                </a>
                <Link href="/About">
                  <p className="flex self-center items-center cursor-pointer hover:text-cyan-600">
                    About Kecilin
                  </p>
                </Link>
                <Link href="/Enterprise">
                  <p className="flex self-center items-center cursor-pointer hover:text-cyan-600">
                    Enterprise
                  </p>
                </Link>
                <a
                  href="#!"
                  className="flex self-center items-center cursor-pointer hover:text-cyan-600"
                >
                  English
                </a>
              </div>
              <div className="flex justify-end py-3">
                <Link href="/#compress-page">
                  <button className="font-PoppinsMedium uppercase px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full text-[12px] cursor-pointer">
                    Compress now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
}

export { Navbar };