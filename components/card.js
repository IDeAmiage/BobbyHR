import Link from "next/link";
import Image from "next/image";
import cn from "@/lib/utils";

export function Card({ href, className, data, children, disabled, ...props }) {
  return (
    <div
      className={cn(
        "border-slate-200 group relative rounded-lg border bg-brown_bobby p-6 shadow-md transition-shadow hover:shadow-lg",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="[&>p]:text-slate-600 space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0">
          <div className="flex flex-row items-center justify-center gap-4">
            <Image src={children.img} alt="Picture of bobbyHR" />
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-white">{children.title}</h3>
              <p className="text-sm font-medium text-white">{children.year}</p>
              <p className="text-sm font-medium text-white">{children.description}</p>
            </div>
          </div>
        </div>
      </div>
      {href && (
        <Link href={disabled ? "#" : href} className="absolute inset-0">
          <span className="sr-only">View</span>
        </Link>
      )}
    </div>
  );
}
