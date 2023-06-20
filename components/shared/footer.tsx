// "use client";
import {
  about,
  becomeAShopper,
  categories,
  consumers,
  programs,
} from "@/data/footer";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // const pathname = usePathname();
  // const ignoreRoute = ["/shop"];
  return (
    // <footer
    //   className={`${
    //     ignoreRoute.includes(pathname) && "hidden"
    //   }  bg-secondary py-20`}
    // >
    <footer className={`bg-secondary py-20`}>
      <div className="container">
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-2">
            <strong>Categories</strong>
            <div className="grid grid-cols-2 mt-5">
              {categories.map((item, i) => (
                <div key={i} className="my-1">
                  <Link
                    className="hover:text-primaryalternative transition-transform hover:translate-x-2 duration-300 inline-block"
                    href="/shop"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <strong className="mb-5 inline-block">Know about us</strong>
            {about.map((item, i) => (
              <div key={i}>
                <Link
                  className="hover:text-primaryalternative transition-transform hover:translate-x-2 duration-300 inline-block"
                  href="/shop"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <strong className="mb-5 inline-block">Consumers</strong>
            {consumers.map((item, i) => (
              <div key={i}>
                <Link
                  className="hover:text-primaryalternative transition-transform hover:translate-x-2 duration-300 inline-block"
                  href="/shop"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <strong className="mb-5 inline-block">Become a shop holder</strong>
            {becomeAShopper.map((item, i) => (
              <div key={i}>
                <Link
                  className="hover:text-primaryalternative transition-transform hover:translate-x-2 duration-300 inline-block"
                  href="/shop"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <strong className="mb-5 inline-block">Miazi Farm programs</strong>
            {programs.map((item, i) => (
              <div key={i}>
                <Link
                  className="hover:text-primaryalternative transition-transform hover:translate-x-2 duration-300 inline-block"
                  href="/shop"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-10 border-[#c5bcbc]" />
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <strong className="mr-5">Payment Partners</strong>
            <Image
              className="border-l-1 border"
              alt="payment options"
              src="/assets/logos/payment.png"
              height={60}
              width={150}
            />
          </div>{" "}
          <div className="flex items-center justify-end">
            <strong className="mr-5">Get deliveries with Miazi Farms</strong>
            <div className="flex items-center lg:space-x-2">
              <Image
                className="border-l-1 border"
                alt="payment options"
                src="/assets/icons/appstore-btn.svg"
                height={60}
                width={150}
              />
              <Image
                className="border-l-1 border"
                alt="payment options"
                src="/assets/icons/googleplay-btn.svg"
                height={60}
                width={150}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 border-[#c5bcbc]" />

      <div className="container flex items-center justify-between">
        <p>
          ©All terms & condition are reserved by{" "}
          <strong className="text-brand">মিয়াজী</strong>{" "}
          <strong className="text-brand-foreground">ফার্ম</strong>. Copyright
          2023
        </p>
        <div className="flex items-center">
          <p className="mr-5">Follow us on</p>
          <ul className="flex items-center space-x-3">
            <li className="border-[#c5bcbc] hover:border-primaryalternative transition-all duration-200 border rounded-lg p-1 cursor-pointer">
              <Facebook
                strokeWidth={1}
                className="hover:text-primaryalternative text-[#636363]"
              />
            </li>
            <li className="border-[#c5bcbc] hover:border-primaryalternative transition-all duration-200 border rounded-lg p-1 cursor-pointer">
              <Instagram
                strokeWidth={1}
                className="hover:text-primaryalternative text-[#636363]"
              />
            </li>
            <li className="border-[#c5bcbc] hover:border-primaryalternative transition-all duration-200 border rounded-lg p-1 cursor-pointer">
              <Twitter
                strokeWidth={1}
                className="hover:text-primaryalternative text-[#636363]"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
