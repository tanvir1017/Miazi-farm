"use client";

import { useEffect, useState } from "react";

import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";

import { Heart, Search, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { DropdownMenuModified } from "../shadecncomponents/dropdownmenu";
import { ShadeCnNavbar } from "../shadecncomponents/navbar";
import BrandLogo from "./brandlogo/brandlogo";

export function Navbar() {
  const pathname = usePathname();

  const [searchProduct, setSearchProduct] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ignoreRoute = ["/auth/sign-up", "/auth/login"];
  return (
    <header className={`${ignoreRoute.includes(pathname) && "hidden"}`}>
      <nav className="mb-3">
        {/*  First row of header*/}
        <div className="bg-slate-100 py-1">
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

        {/*  Second row of header*/}
        <div className="container py-2">
          <div className="grid grid-cols-5 gap-5 ">
            <BrandLogo />

            {/* <div className="col-span-3 mt-2"> */}
            <div className="col-span-3 ">
              <div className="relative">
                <span className="absolute inset-y-0 px-1.5 pt-[0.7rem]">
                  <Search strokeWidth={0.5} />
                </span>
                <input className="py-2.5 pl-8 border-2  focus:outline-none rounded-md w-full" />
                <button
                  className="absolute -right-[0.25rem] bg-primaryalternative text-white inset-y-0 rounded-r-lg px-5 border border-gray-500"
                  type="submit"
                >
                  search
                </button>
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-self-end space-x-10 text-xl">
              <span
                title="Wish List"
                className="bg-slate-200 p-2 rounded-full cursor-pointer relative"
              >
                <button className="w-5 h-5 p-0.5 bg-brand rounded-full text-white text-xs absolute right-0 -top-2 overflow-hidden">
                  0
                </button>
                <Heart
                  strokeWidth={1}
                  className="hover:text-primaryalternative"
                />
              </span>
              <span
                title="Profile information"
                className="bg-slate-200 p-2 rounded-full cursor-pointer"
              >
                <DropdownMenuModified />
              </span>
              <span
                title="Shopping cart"
                className="bg-slate-200 p-2 rounded-full cursor-pointer relative"
              >
                <button className="w-5 h-5 p-0.5 bg-primaryalternative rounded-full text-white text-xs absolute right-0 -top-2 overflow-hidden">
                  0
                </button>
                <ShoppingCart
                  strokeWidth={1}
                  className="hover:text-primaryalternative"
                />
              </span>
            </div>
          </div>
        </div>

        {/*ShadCn navigation menus*/}
        <div className="">{mounted && <ShadeCnNavbar />}</div>
      </nav>
      <hr className="border border-slate-100 " />
    </header>
  );
}
