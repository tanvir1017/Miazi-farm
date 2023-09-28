import ProductCard from "@/components/shop/product-card";
import { Slider } from "@/components/ui/slider";
import { productCateGories } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const urlForProductionAndLocalhost =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://miazi-farm.vercel.app";

export const metadata: Metadata = {
  title: "Miazi Farm | Shop",
};

const Shop = async () => {
  const response = await fetch(`${urlForProductionAndLocalhost}/api/product`, {
    cache: "no-store",
  });
  const products = await response.json();
  return (
    <main className="App container ">
      <div className="grid grid-cols-12 gap-4 place-items-start mt-4 ">
        {/* <div className="flex items-start gap-4 mt-4"> */}
        <aside
          id="PRODUCT-CATEGORIES-FILTER"
          className="col-span-2 w-full px-1 pt-2 pb-4 border-r  sticky top-[8.2rem] overflow-auto"
          style={{ height: "100dvh" }}
        >
          <div>
            <h1 className="text-lg  mb-5">Available Categories</h1>
            <>
              {productCateGories.map((item, i: number) => (
                <div key={i} className="">
                  <div className="relative my-2 cursor-pointer">
                    <p className="text-base  hover:text-primaryalternative">
                      {item.title}
                    </p>
                    <button className="bg-secondary absolute px-5 py-0.5 rounded-full top-0 right-0 text-xs  ">
                      {i + 1}
                    </button>
                  </div>
                  <hr />
                </div>
              ))}
            </>
          </div>

          <hr className="border-t" />

          <div id="#PRICE-FILTER" className="mt-5">
            <h1 className="text-lg  mb-5">Price range</h1>

            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className={cn("w-[100%]")}
            />
          </div>
        </aside>

        <ProductCard products={products} />
      </div>
    </main>
  );
};

export default Shop;
