import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./home/container";
import idea from "@/public/image/idea-logo.png";

export default function Footer() {
  const navigation = [
    {key: "Home", link: "#home"},
    {key: "Skills", link: "#skills"},
    {key: "Projects", link: "#projects"},
    {key: "FAQ", link: "#faq"},
  ];
  const legal = [
    {key: "Terms", link: "/terms"},
    {key: "Privacy", link: "/privacy"},
    {key: "Legal", link: "/"},
  ];

  return (
    <div className="relative">
      <Container>
        <div className="dark:border-trueGray-700 mx-auto mt-5 grid max-w-screen-xl grid-cols-1 gap-10 border-t border-gray-100 pt-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <Image
                  src={idea}
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>IDeA</span>
              </Link>
            </div>

            <div className="mt-4 max-w-md text-gray-500 dark:text-gray-400">
              IDeA is a non-profit organization that promotes the development of
              various projects in the field of education, culture, art and
              science.
            </div>
          </div>

          <div>
            <div className="-ml-3 -mt-2 flex w-full flex-wrap lg:ml-0">
              {navigation.map((item) => (
                <a key={item.key} href={item.link} className="dark:focus:bg-trueGray-700 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300">
                  {item.key}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="-ml-3 -mt-2 flex w-full flex-wrap lg:ml-0">
              {legal.map((item) => (
                <Link key={item.key} href={item.link} className="dark:focus:bg-trueGray-700 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300">
                  {item.key}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="mt-5 flex space-x-5 text-gray-400 dark:text-gray-500">
              <Link
                href="https://www.instagram.com/idea_ut1/"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/idea-miage/"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </Link>
              <Link
                href="mailto:ideamiage@gmail.com"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Mail To</span>
                <Mail />
              </Link>
            </div>
          </div>
        </div>

        <div className="my-10 text-center text-sm text-gray-600 dark:text-gray-400">
          Copyright IDeA © {new Date().getFullYear()}.
        </div>
      </Container>
    </div>
  );
}

const Mail = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path fillRule="evenodd"
          d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
          clipRule="evenodd" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);