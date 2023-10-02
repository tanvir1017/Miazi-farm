"use client";

import { useRouter } from "next/navigation";

const ShopCategories = ({ categories }: { categories: string[] }) => {
  const router = useRouter();
  return categories.map((item: string) => (
    <div key={item} className="">
      <div
        className="relative my-2 cursor-pointer"
        onClick={() => router.push(`/shop?category=${item}`)}
      >
        <p className="text-base  hover:text-primaryalternative">{item}</p>
      </div>
      <hr />
    </div>
  ));
};

export default ShopCategories;
