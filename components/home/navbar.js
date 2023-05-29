import Link from "next/link";
import Image from "next/image"
import idea from "@/public/image/idea-logo.png";

const Navbar = () => {

  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src={idea}
                  alt="N"
                  width="45"
                  height="45"
                  className="w-12"
                />
              </span>
              <span>IDeA</span>
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
