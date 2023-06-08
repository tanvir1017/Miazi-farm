"use client";
import { MinimalBlurImage } from "@/lib/blurimage";
import { productCateGories } from "@/utils/categories";

const Categories = () => {
  return (
    <section className="container mt-24 mb-24">
      <h2 className="text-2xl font-HIND_SILIGURI_SEMI_BOLD mb-5">
        Product categories are available
      </h2>
      <div className="grid grid-cols-6 gap-3 ">
        {productCateGories.map((item, i) => (
          <div
            key={i}
            className="border hover:border-brand-foreground cursor-pointer border-gray-300 px-3 py-5 text-center hover:shadow-md transition-colors duration-300 rounded-lg"
          >
            <MinimalBlurImage
              alt={item.title}
              imageSrc={item.picture}
              width={80}
              height={100}
              customHeight="4.875rem"
              customStyle="bg-white/60"
              customClass="inline-block"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
