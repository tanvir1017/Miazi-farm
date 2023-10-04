"use client";
import { usePathname } from "next/navigation";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";

const HotlineAndSocialLinkTop = () => {
  const pathname = usePathname();
  const ignoreRoute = ["/auth/sign-up", "/auth/sign-in"];
  return (
    <div
      className={`bg-slate-100 py-1 ${
        ignoreRoute.includes(pathname) ? "hidden" : ""
      }`}
    >
      <div className="container flex justify-between items-center">
        <p>Help Line: +98754698</p>

        <span className="flex items-center space-x-4">
          <i className="border hover:border-blue-400 rounded-full p-2 hover:text-blue-400 duration-200 transition-all cursor-pointer">
            <a
              href="https://www.facebook.com/profile.php?id=100093039156234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook />
            </a>
          </i>
          <i className="border hover:border-purple-700 rounded-full p-2 hover:text-purple-400 duration-200 transition-all cursor-pointer">
            <RiInstagramFill />
          </i>
          <i className="border hover:border-blue-400 rounded-full p-2 hover:text-blue-400 duration-200 transition-all cursor-pointer">
            <AiFillTwitterCircle />
          </i>
        </span>
      </div>
    </div>
  );
};

export default HotlineAndSocialLinkTop;
