import BlurImageWithBlurHash from "@/components/blurredimage";
import { productCateGories } from "@/data/categories";
import Link from "next/link";
import BannerCategories from "./bannercategories";

const Categories = () => {
  return (
    <section className="md:container px-3 md:my-24 my-12 ">
      <div className="section-heading mb-10 md:flex justify-between items-end">
        <div>
          <h2 className="text-xl md:text-2xl font-HIND_SILIGURI_SEMI_BOLD">
            Available product categories are :
          </h2>
          <p>Available categories with updated stock</p>
        </div>
        <Link href="/shop" className="text-primaryalternative">
          View all
        </Link>
      </div>
      <div className="md:grid md:grid-cols-6 grid-cols-2 gap-3 hidden ">
        {productCateGories.map((item, i) => (
          <div
            key={i}
            className="border hover:border-brand-foreground cursor-pointer border-gray-300 px-3 py-5 text-center hover:shadow-md transition-colors duration-300 rounded-lg "
          >
            <div className="mx-auto inline-block">
              <BlurImageWithBlurHash
                alt={item.title}
                src={item.picture}
                width={80}
                height={100}
                placeholder="blur"
                blurDataURL={
                  item.blurHashdata ?? "LvPG87.TxtIT-;RQRjoexuRjaeoe"
                }
              />
            </div>
            <p className="text-sm md:text-base">{item.title}</p>
          </div>
        ))}
      </div>

      <BannerCategories />
    </section>
  );
};

export default Categories;
