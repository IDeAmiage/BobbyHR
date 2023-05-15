import React from "react";
import Image from "next/image";

export function Card({href, className, data, children, disabled, ...props}) {
  return (
    <div className="w-96">
      <Image src={children.img} alt=" random imgee"
           className="w-full rounded-lg object-cover object-center shadow-md" />

      <div className="relative -mt-16 px-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h4 className="mt-1 truncate text-xl font-semibold uppercase leading-tight">{children.title}</h4>
          <div className="mt-1">
            {children.description}
          </div>
          <div className="mt-4">
            <span className="text-teal-600 text-md font-semibold">{children.year}</span>
          </div>
        </div>
      </div>
    </div>
);
}
