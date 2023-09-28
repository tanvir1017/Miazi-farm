"use client";
import { profileSideBardNavigation } from "@/data/profilesidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileActionSidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      id="PRODUCT-CATEGORIES-FILTER"
      className="col-span-2 w-full px-1 pt-5 pb-4 border-r  sticky top-[8.2rem] overflow-auto"
      style={{ height: "100dvh" }}
    >
      <div>
        <h1 className="text-lg  mb-5">Manage My Profile</h1>
        <ul>
          {profileSideBardNavigation.map(
            (item: ProfileSideBardNavigationType, i: number) => (
              <Link href={item.url} key={i}>
                <li
                  className={`relative my-2 cursor-pointer  rounded-lg py-1 px-2 w-full ${
                    item.url === pathname
                      ? "bg-primaryalternative text-white "
                      : ""
                  }`}
                >
                  <span className="text-base font-thin">{item.title}</span>
                </li>
              </Link>
            )
          )}
        </ul>
      </div>

      <hr className="border-t" />
      <div id="#My-Orders" className="mt-5">
        <h1 className="text-lg  mb-5">My Orders</h1>
      </div>
    </aside>
  );
};

export default ProfileActionSidebar;
