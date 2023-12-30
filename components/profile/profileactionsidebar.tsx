"use client";
import {
  ProfileSideBardNavigationType,
  profileSideBardNavigation,
} from "@/data/profilesidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileActionSidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      id="SCROLLER"
      className="col-span-2 w-full px-1 pt-5 pb-4 border-r  sticky top-[8.2rem] overflow-auto"
      style={{ height: "100dvh" }}
    >
      <div>
        <div className="mb-3">
          <Link
            href="/"
            className="px-4 py-2 bg-green-50 text-green-600 text-center flex items-center rounded-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>
        </div>
        <div className="rounded-lg border">
          <div className="px-2 py-2">
            <h1 className="text-lg">Manage My Profile</h1>
          </div>
          <hr />
          <ul className="px-2 py-3">
            {profileSideBardNavigation.map(
              (item: ProfileSideBardNavigationType, i: number) => (
                <li
                  key={i}
                  className={`relative my-2 cursor-pointer  rounded-lg py-1 px-2 w-full hover:bg-gray-100 ${
                    item.url === pathname ? "bg-green-50 text-green-600 " : ""
                  }`}
                >
                  <Link href={item.url} className="block">
                    <span className="text-base font-thin">{item.title}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="rounded-lg border my-2">
        <div className="px-2 py-2" id="#My-Orders">
          <h1 className="text-lg">My Orders</h1>
        </div>
        <hr />
        <ul className="px-2 py-3">
          <li
            className={`relative my-2 cursor-pointer  rounded-lg py-1 px-2 w-full hover:bg-gray-100 `}
          >
            <span className="text-base font-thin">Return products</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ProfileActionSidebar;
