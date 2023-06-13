"use client";
import BlurImageWithBlurHash from "@/components/blurredimage";
import { productCateGories } from "@/data/categories";
import Link from "next/link";
import BannerCategories from "./bannercategories";

const Categories = () => {
  return (
    <section className="container mt-24 mb-24">
      <div className="section-heading mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-HIND_SILIGURI_SEMI_BOLD">
            Available product categories are :
          </h2>
          <p>Available categories with updated stock</p>
        </div>
        <Link href="/shop" className="text-primaryalternative">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-3 ">
        {productCateGories.map((item, i) => (
          <div
            key={i}
            className="border hover:border-brand-foreground cursor-pointer border-gray-300 px-3 py-5 text-center hover:shadow-md transition-colors duration-300 rounded-lg"
          >
            <BlurImageWithBlurHash
              alt={item.title}
              src={item.picture}
              width={80}
              height={100}
              className="inline-block  object-cover"
              placeholder="blur"
              blurDataURL={item.blurHashdata ?? "LvPG87.TxtIT-;RQRjoexuRjaeoe"}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <BannerCategories />
    </section>
  );
};

export default Categories;
