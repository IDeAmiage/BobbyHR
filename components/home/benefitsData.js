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
      desc: "Analyze your data and extract the information you need.",
      icon: <ArrowTrendingUpIcon />,
    },
    {
      title: "Machine Learning",
      desc: "Create a machine learning model to predict your data.",
      icon: <Square3Stack3DIcon />,
    },
    {
      title: "Data visualization",
      desc: "Create a dashboard to visualize your data.",
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
      desc: "Manage your big data.",
      icon: <CircleStackIcon />,
    },
    {
      title: "Project Management",
      desc: "Manage your project from A to Z.",
      icon: <MagnifyingGlassIcon />,
    },
    {
      title: "Web Development",
      desc: "Create a website for your project.",
      icon: <GlobeAltIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
