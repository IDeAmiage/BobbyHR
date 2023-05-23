import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  Square3Stack3DIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  CircleStackIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "@/public/image/benefit-one.png";
import benefitTwoImg from "@/public/image/benefit-two.png";

const benefitOne = {
  title: "Lots of skills",
  desc: "Thanks to our different experiences, we have acquired a lot of skills in different fields.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Data analysis",
      desc: "We are able to analyze your data and extract the information you need.",
      icon: <ArrowTrendingUpIcon />,
    },
    {
      title: "Machine Learning",
      desc: "We are able to create a machine learning model to predict your data.",
      icon: <Square3Stack3DIcon />,
    },
    {
      title: "Data visualization",
      desc: "We are able to create a dashboard to visualize your data.",
      icon: <ChartBarIcon />,
    },
  ],
};

const benefitTwo = {
  title: "And more...",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Big Data",
      desc: "We are able to manage your big data.",
      icon: <CircleStackIcon />,
    },
    {
      title: "Project Management",
      desc: "We are able to manage your project from A to Z.",
      icon: <MagnifyingGlassIcon />,
    },
    {
      title: "Web Development",
      desc: "We are able to create a website for your project.",
      icon: <GlobeAltIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
