"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { StateFullTextInputLabel } from "./input/statefullinput";

export function Navbar() {
  const [searchProduct, setSearchProduct] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className="">
      <nav className="mb-3">
        {/*  First row of header*/}
        <div className="bg-slate-100 py-1">
          <div className="container flex justify-between items-center">
            <p>Hotline: +98754698</p>
            <p>Follow our facebook page</p>
          </div>
        </div>

        {/*  Second row of header*/}
        <div className="container py-2">
          <div className="grid grid-cols-5 gap-5 ">
            <Link href="/">
              {/* <div className="col-span-1 relative"> */}
              <div className="col-span-1 flex items-center">
                <Image
                  src="/assets/logos/logo1.png"
                  width={70}
                  height={70}
                  alt="Miyazi Farm Logo"
                />
                {/* <h2 className="font-HIND_SILIGURI_BOLD text-2xl text-[#388740] absolute top-7 right-16"> */}
                <h2 className="font-HIND_SILIGURI_BOLD text-2xl text-brand-foreground">
                  <span className="text-brand">মিয়াজী</span> ফার্ম
                </h2>
              </div>
            </Link>

            {/* <div className="col-span-3 mt-2"> */}
            <div className="col-span-3 ">
              <div className="relative ">
                <StateFullTextInputLabel
                  disabled={false}
                  requiredType={false}
                  iconComponent={<BsSearch />}
                  inputValue={searchProduct}
                  handleOnChange={(e) => setSearchProduct(e.target.value)}
                  nameText="Search for product"
                  placeholderText="What do you want? "
                  title="Search to find your product on মিয়াজী ফার্ম"
                  type="text"
                  top={2}
                />
                <button
                  className="absolute -right-[0.25rem] bg-primaryalternative text-white inset-y-0 rounded-r-lg px-5 border border-gray-500"
                  type="submit"
                >
                  search
                </button>
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-self-end space-x-10 text-xl">
              <span className="bg-slate-200 p-2 rounded-full cursor-pointer">
                <GiSelfLove className="hover:text-primaryalternative" />
              </span>
              <span className="bg-slate-200 p-2 rounded-full cursor-pointer">
                <AiOutlineUser className="hover:text-primaryalternative" />
              </span>
              <span className="bg-slate-200 p-2 rounded-full cursor-pointer">
                <HiOutlineShoppingBag className="hover:text-primaryalternative" />
              </span>
            </div>
          </div>
        </div>

        {/*ShadCn navigation menus*/}
        {/* <div className="">{mounted && <ShadeCnNavbar />}</div> */}
      </nav>
      <hr className="border border-slate-100 " />
    </header>
  );
}
