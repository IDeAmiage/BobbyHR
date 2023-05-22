"use client";

import {useEffect, useState} from "react";
import {ArrowDown, Menu} from "react-feather";
import {Player} from "@lottiefiles/react-lottie-player";
import {config} from "@react-spring/web";
import Logo from "@/public/BusinessTeam.json";
import SliderHome from "components/slider-home";
import {Card} from "@/components/card";
import TextTransition from "@/components/text-transition";
import styles from "@/app/home/home.module.css";
import Masonry from "@/components/masonry";
import skills from "@/utils/data/skills.data";
import projects from "@/utils/data/projects.data";
import Bubbles from "@/components/bubbles";

const text = ["CREATE", "INVENT", "DEVELOP", "THINK"];

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
    <div className="w-screen bg-white_background_bobby">

      <div className="relative">
        <div className="fixed right-0 top-0 h-20 w-20 rounded-bl-full bg-brown_bobby"/>
        <div className="fixed right-0 top-0 pr-4 pt-4">
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
      </div>

      <div className="flex w-screen flex-col items-center" id="home">
        <h1 className="pt-16 font-Playfair text-9xl font-extrabold text-black_bobby">
          IDEA
        </h1>
        <div className="flex flex-row gap-2 pt-8">
          <h1 className="font-Playfair text-3xl text-black_bobby">A company to help you to</h1>
          <h1 className="font-Playfair text-3xl text-black_bobby">
            <TextTransition springConfig={config.wobbly}>
              {text[index % text.length]}
            </TextTransition>
          </h1>
          <Bubbles className="w-[50%] h-[50%]"></Bubbles>
        </div>
          <Player
            autoplay
            loop
            src={Logo}
            className="w-[40%]"
          />
          <h1 className="font-Playfair text-2xl font-extrabold text-black_bobby">EXPLORE</h1>

        <ArrowDown className="mt-5 h-8 w-8" aria-hidden="true"/>
      </div>

      <div id="projects">
        <div className="pl-16">
          <h1 className="font-Playfair text-6xl font-extrabold text-black_bobby">
            PROJECTS
          </h1>
        </div>

        <div className="text-neutral-600 grid grid-flow-row gap-8 px-36 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {projects.map((project) => (
            <div key={project.title}>
              <Card>{project}</Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-64" id="skills">
        <div className="mt-10 pl-16">
          <h1 className="font-Playfair text-6xl font-extrabold text-black_bobby">
            SKILLS
          </h1>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <Masonry data={skills}/>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Team
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Pricing
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Terms
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true" height="24" fill="currentColor" viewBox="0 0 50 50">
                <path fillRule="evenodd"
                      d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                      clipRule="evenodd"></path>
              </svg>
            </a>

          </div>
          <p className="mt-8 text-center text-base leading-6 text-gray-400">
            © 2021 IDeA, Inc. All rights reserved.
          </p>
        </div>
      </section>
      <SliderHome open={open} setOpen={setOpen}/>
    </div>
  );
}
