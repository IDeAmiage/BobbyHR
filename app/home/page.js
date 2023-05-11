"use client";

import {useState, useEffect} from "react";
import {Transition} from "@headlessui/react";
import {Menu, ArrowDown} from "react-feather";
import {Player} from "@lottiefiles/react-lottie-player";
import {Parallax, ParallaxLayer, IParallax} from "@react-spring/parallax";
import {config} from "@react-spring/web";

import Image from "next/image";
import Logo from "@/public/BusinessTeam.json";
import emcpic from "@/public/image/emc.jpg";
import logotfc from "@/public/image/logotfc.png";
import puydufou from "@/public/image/puydufou.jpg";
import SliderHome from "components/slider-home";

import styles from "./home.module.css";
import {Card} from "@/components/card";
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

        <ParallaxLayer
          offset={0.05}
          speed={1}
          className="flex flex-col items-center"
        >
          <h1 className="font-Playfair text-9xl font-extrabold text-black_bobby">
            IDEA
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={1}
          className="flex flex-col items-center"
        >
          <div className="flex flex-row gap-2">
            <div>A company to help you to</div>
            <h1>
              <TextTransition springConfig={config.wobbly}>
                {text[index % text.length]}
              </TextTransition>
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.1}
          speed={1}
        >
          <div>
            <Player
              autoplay
              loop
              src={Logo}
              className="w-1/3"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.8}
          speed={1}
          className="flex flex-col items-center"
        >
          <div>EXPLORE</div>
          <ArrowDown className="h-8 w-8" aria-hidden="true"/>
        </ParallaxLayer>

          <ParallaxLayer
            offset={1.05}
            speed={0.8}
            style={{padding: "0 0 0 20%"}}
          >
            <Card className="w-1/3">{projects[0]}</Card>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.35}
            speed={1.2}
            style={{padding: "0 0 0 60%"}}
          >
            <Card className="w-1/3">{projects[1]}</Card>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.65}
            speed={1}
            style={{padding: "0 0 0 40%"}}
          >
            <Card className="w-1/3">{projects[2]}</Card>
          </ParallaxLayer>

        <ParallaxLayer sticky={{start: 0, end: 3}} className="relative">
          <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-brown_bobby"/>
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <div className="flex items-start justify-end">
              <button
                type="button"
                className="text-gray-300 hover:text-white"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open panel</span>
                <Menu className="h-8 w-8" aria-hidden="true"/>
              </button>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>

      <SliderHome open={open} setOpen={setOpen}/>
    </>
  );
}
