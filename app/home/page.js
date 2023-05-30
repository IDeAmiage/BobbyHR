"use client";

import Hero from "@/components/home/hero";
import SectionTitle from "@/components/home/sectionTitle";

import { benefitOne, benefitTwo } from "@/components/home/benefitsData";
import Benefits from "@/components/home/benefits";
import Footer from "@/components/footer";
import Testimonials from "@/components/home/testimonials";
import Faq from "@/components/home/faq";
import {Menu} from "react-feather";
import SliderHome from "@/components/slider-home";
import {useState} from "react";
import Navbar from "@/components/home/navbar";

export default function CV() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white_background_bobby px-6">
      <Navbar />
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
      <Hero />
      <SectionTitle
        id="skills"
        pretitle="Why IDeA?"
        title="Why should you contact us">
        We are a team of student who learned how to code and we want to help you to create your project.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        id="projects"
        pretitle="Projects"
        title="Here's some of our projects">
        We have already worked on some projects, here are some of them.
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        id="faq"
        pretitle="FAQ"
        title="Frequently Asked Questions">
        If you still have questions look here
      </SectionTitle>
      <Faq />
      <Footer />
      <SliderHome open={open} setOpen={setOpen}/>
    </div>
  );
}
