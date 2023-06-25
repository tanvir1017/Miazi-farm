"use client";
import Product from "@/components/homepage/products/product";
import { ButtonOutline } from "@/components/shadecncomponents/button";
import { SortBySelect } from "@/components/shadecncomponents/sortbyselect";
import { Slider } from "@/components/ui/slider";
import { productCateGories } from "@/data/categories";
import { products } from "@/data/product";
import { cn } from "@/lib/utils";
import { LayoutDashboard, LayoutList } from "lucide-react";
import { useState } from "react";
import useSWR from 'swr';


const fetcher = (url:string) => fetch(url).then(res => res.json())

const Shop = () => {
  const [viewCol, setViewCol] = useState<"grid" | "list">("grid");
  const { data, error, isLoading } = useSWR('/api/products', fetcher)

  let content = null;
  
  if (!error && !data && isLoading) {
    content = <p>Loading..</p>
  }
  if (!isLoading && !data  && error) {
    content = <p>Error found</p>
  }
  if (!isLoading && !error && data) {
    content = <div
            className={`grid grid-cols-${viewCol !== "grid" ? "1" : "4"} gap-3`}
          >
            {products.map((item, i) => (
              <Product key={i} item={item} />
            ))}
          </div>
    }
  return (
    <main className="App container ">
      <div className="grid grid-cols-12 gap-4 place-items-start mt-4 ">
        {/* <div className="flex items-start gap-4 mt-4"> */}
        <section
          id="PRODUCT-CATEGORIES-FILTER"
          className="col-span-2 w-full px-1 pt-2 pb-4 border-r  sticky top-[8.2rem] overflow-auto"
          style={{ height: "100dvh" }}
        >
          <div>
            <h1 className="text-lg font-HIND_SILIGURI_MEDIUM mb-5">
              Available Categories
            </h1>
            <>
              {productCateGories.map((item, i) => (
                <div key={i} className="">
                  <div className="relative my-2 cursor-pointer">
                    <p className="text-base font-HIND_SILIGURI_LIGHT hover:text-primaryalternative">
                      {item.title}
                    </p>
                    <button className="bg-secondary absolute px-5 py-0.5 rounded-full top-0 right-0 text-xs font-HIND_SILIGURI_LIGHT ">
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
            <h1 className="text-lg font-HIND_SILIGURI_MEDIUM mb-5">
              Price range
            </h1>

            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className={cn("w-[100%]")}
            />
          </div>
        </section>
        <section className="col-span-10 w-full py-5">
          <div className="flex items-center justify-between pb-5">
            <div className="flex items-center gap-1">
              <button>Sort by</button>
              <span className="ml-3">
                <SortBySelect />
              </span>
            </div>
            <div className="flex items-center gap-1">
              <p className="mr-5">View as</p>
              <span onClick={() => setViewCol("list")}>
                <ButtonOutline>
                  <LayoutList
                    className={` ${
                      viewCol !== "grid"
                        ? "text-primaryalternative"
                        : "text-slate-800/25"
                    }`}
                    strokeWidth={1.25}
                  />
                </ButtonOutline>
              </span>
              <span onClick={() => setViewCol("grid")}>
                <ButtonOutline>
                  <LayoutDashboard
                    className={`${
                      viewCol !== "list"
                        ? "text-primaryalternative"
                        : "text-slate-800/25"
                    }`}
                    strokeWidth={1}
                  />{" "}
                </ButtonOutline>
              </span>
            </div>
          </div>
        {content}
        </section>
      </div>
    </main>
  );
};

export default Shop;
