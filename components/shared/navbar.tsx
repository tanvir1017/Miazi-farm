"use client";
import { ProfileDropDown } from "@/components/shadcn/shadecncomponents/profiledropdown";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AddToCartSideBar } from "../shadcn/shadecncomponents/side-bar-sheet";
import BrandLogo from "./brandlogo/brandlogo";

export type UserSession = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};
interface SessionProps {
  session: UserSession | null;
}
export function Navbar({ session }: SessionProps) {
  const pathname = usePathname();

  const [searchProduct, setSearchProduct] = useState("");

  return (
    <header
      className={cn("sticky top-0 bg-white z-10 md:block hidden", {
        ["md:hidden hidden"]:
          pathname.startsWith("/profile") || pathname.startsWith("/auth"),
      })}
    >
      <nav className="mb-3">
        {/*  Second row of header*/}
        <div className="sticky top-0">
          <div className="container py-2 ">
            <div className="grid grid-cols-5 gap-5 items-center">
              <BrandLogo />
              <div className="col-span-3 ">
                <div className="relative">
                  <span className="absolute inset-y-0 px-1.5 pt-[0.7rem]">
                    <Search strokeWidth={0.5} className="text-gray-400" />
                  </span>
                  <input
                    className="py-2.5 pl-8 border-2 focus:outline-none rounded-md w-full border-green-200 placeholder:italic"
                    placeholder="search products..."
                  />
                  <button
                    placeholder="search a product"
                    className="absolute -right-[0.25rem] bg-green-100 text-primaryalternative inset-y-0 rounded-r-lg px-5 border-2 border-green-200"
                    type="submit"
                  >
                    search
                  </button>
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-self-end space-x-10 text-xl">
                <AddToCartSideBar />

                <ProfileDropDown session={session} />
              </div>
            </div>
          </div>
          <div className="">
            <ul className="flex items-center justify-center">
              <li>
                <Link
                  href="/"
                  className={cn(
                    "mr-4 hover:bg-slate-200  px-5 py-2 rounded-md",
                    {
                      ["bg-slate-200"]: pathname === "/",
                    }
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className={cn(
                    "mr-4 hover:bg-slate-200  px-5 py-2 rounded-md block",
                    {
                      ["bg-slate-200"]: pathname === "/shop",
                    }
                  )}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="border border-slate-100 " />
    </header>
  );
}
