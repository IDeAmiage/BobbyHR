import React from "react";
import Image from "next/image";

export function Card({href, className, data, children, disabled, ...props}) {
  return (
    <div
      className="my-4 rounded bg-brown_bobby shadow-lg duration-300 hover:-translate-y-1">
      <figure>
        <Image src={children.img} className="h-60 w-full rounded-t object-cover" alt={children.title}/>

        <figcaption className="p-4">
          <p className="mb-4 text-lg font-bold leading-relaxed text-black">
            {children.title}
          </p>

          <small className="leading-5 text-black">
            {children.description}
          </small>
        </figcaption>
      </figure>
    </div>
)

}
