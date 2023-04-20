"use client";

import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Menu, ArrowDown } from "react-feather";
import { Player } from "@lottiefiles/react-lottie-player";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { config } from "@react-spring/web";

import Image from "next/image";
import Logo from "@/public/BusinessTeam.json";
import emcpic from "@/public/image/emc.jpg";
import logotfc from "@/public/image/logotfc.png";
import puydufou from "@/public/image/puydufou.jpg";
import SliderHome from "components/slider-home";

import styles from "./home.module.css";
import { Card } from "@/components/card";
import TextTransition from "@/components/text-transition";

// PixiJS

const text = ["CREATE", "INVENT", "DEVELOP", "THINK"];

const projects = [
  {
    title: "TFC",
    year: "2021",
    description: "TFC is a french football club",
    img: logotfc,
  },
  {
    title: "EMC",
    year: "2021",
    description: "EMC is a french football club",
    img: emcpic,
  },
  {
    title: "Puy du Fou",
    year: "2021",
    description: "Puy du Fou is a french theme park",
    img: puydufou,
  },
];

export default function Example() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Parallax pages={2} className="bg-white_background_bobby">
        <ParallaxLayer sticky={{ start: 0, end: 3 }} className="relative">
          <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-brown_bobby" />
          <div className="absolute right-0 top-0 pr-4 pt-4">
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
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
        >
          <div className="flex h-screen flex-col items-center">
            <h1 className="pt-8 font-Playfair text-9xl font-extrabold text-black_bobby">
              IDEA
            </h1>
            <div className="flex flex-row gap-2 pt-6">
              <div>A company to help you to</div>
              <h1>
                <TextTransition springConfig={config.wobbly}>
                  {text[index % text.length]}
                </TextTransition>
              </h1>
            </div>
            <div>
              <Player
                autoplay
                loop
                src={Logo}
                className="h-96 w-96"
              />
            </div>
            <div>EXPLORE</div>
            <ArrowDown className="h-8 w-8" aria-hidden="true" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
            offset={1}
            speed={1}
          >
            <Card>{projects[0]}</Card>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.4}
            speed={1}
          >
            <Card>{projects[1]}</Card>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.8}
            speed={1}
          >
            <Card>{projects[2]}</Card>
          </ParallaxLayer>
      </Parallax>

      <SliderHome open={open} setOpen={setOpen} />
    </>
  );
}
