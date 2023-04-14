"use client";

import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Menu, ArrowDown } from "react-feather";
import { Player } from "@lottiefiles/react-lottie-player";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Image from "next/image";
import Logo from "@/public/BusinessTeam.json";
import emcpic from "@/public/image/emc.jpg";
import logotfc from "@/public/image/logotfc.png";
import puydufou from "@/public/image/puydufou.jpg";
import SliderHome from "components/slider-home";

import styles from "./home.module.css";

// PixiJS

const loopArr = ["CREATE", "INVENT", "DEVELOP", "THINK"];

export default function Example() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    //const intervalDelayMilliseconds = loopArr[index].length * 500;
    const intervalDelayMilliseconds = 2000;
    const interval = setInterval(() => {
      setIndex((index + 1) % loopArr.length);
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });

  return (
    <>
      <Transition
        show={!open}
        enter="transition-opacity duration-75"
        enterFrom="opacity-50"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-50"
      >
        <ParallaxProvider>
          <div className="bg-white_background_bobby">
            <Parallax>
              <div className="relative">
                <div className="absolute top-0 right-0 rounded-bl-full bg-brown_bobby w-20 h-20" />
                <div className="absolute top-0 right-0 pr-4 pt-4">
                  <div className="flex items-start justify-end">
                    <button
                      type="button"
                      className="text-gray-300 hover:text-white"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Open panel</span>
                      <Menu className="h-8 w-8" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-screen items-center">
                <h1 className="text-9xl font-Playfair font-extrabold text-black_bobby pt-8">
                  IDEA
                </h1>
                <div className="flex flex-row pt-6 gap-2">
                  <div>A company to help you to</div>
                  <div className={styles.lineUp}>{loopArr[index]}</div>
                </div>
                <div>
                  <Player
                    autoplay
                    loop
                    src={Logo}
                    style={{ height: "50%", width: "50%" }}
                  />
                </div>
                <div>EXPLORE</div>
                <ArrowDown className="h-8 w-8" aria-hidden="true" />
              </div>
            </Parallax>
            <div className={styles.images}>
              <Parallax speed={4}>
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                  <Image
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    src={emcpic}
                    title="Woman holding a mug"
                  />
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        Can coffee make you a better developer?
                      </div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="text-gray-900 leading-none">
                          Jonathan Reinink
                        </p>
                        <p className="text-gray-600">Aug 18</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Parallax>
              <Parallax speed={8}>
                <Image
                  className={styles.parallaxImage2}
                  src={emcpic}
                  alt="Picture of bobbyHR"
                />
              </Parallax>
              <Parallax speed={3}>
                <Image
                  className={styles.parallaxImage}
                  src={puydufou}
                  alt="Picture of bobbyHR"
                />
              </Parallax>
            </div>
          </div>
        </ParallaxProvider>
      </Transition>

      <SliderHome open={open} setOpen={setOpen} />
    </>
  );
}
