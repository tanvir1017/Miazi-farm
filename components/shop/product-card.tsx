"use client";
import { ProductType } from "@/types/product/product.types";

import { ButtonOutline } from "@/components/shadcn/shadecncomponents/button";
import { SortBySelect } from "@/components/shadcn/shadecncomponents/sortbyselect";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LayoutList,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import ProductShop from "./product-shop";

interface ProductCardProps {
  totalProductsAvailable: number;
  products: ProductType[];
  hasPrev: boolean;
  hasNext: boolean;
}

const ProductCard = ({
  totalProductsAvailable,
  products,
  hasNext,
  hasPrev,
}: ProductCardProps): React.ReactElement => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  // const perPage = searchParams.get("per_page") ?? "12";

  const [viewCol, setViewCol] = useState<boolean>(true);
  return (
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
          <span onClick={() => setViewCol(false)}>
            <ButtonOutline>
              <LayoutList
                className={cn(``, {
                  ["text-primaryalternative"]: !viewCol,
                  ["text-slate-800/25"]: viewCol,
                })}
                strokeWidth={1.25}
              />
            </ButtonOutline>
          </span>
          <span onClick={() => setViewCol(true)}>
            <ButtonOutline>
              <LayoutDashboard
                className={cn(``, {
                  ["text-primaryalternative"]: viewCol,
                  ["text-slate-800/25"]: !viewCol,
                })}
                strokeWidth={1}
              />{" "}
            </ButtonOutline>
          </span>
        </div>
      </div>
      <div
        className={cn("grid gap-3", {
          ["grid-cols-2"]: !viewCol,
          ["grid-cols-4"]: viewCol,
        })}
      >
        {products.map((item: any, i: number) => (
          <ProductShop view={viewCol} key={i} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center my-7">
        <button
          className="rounded-full p-2 border disabled:bg-gray-200"
          disabled={!hasPrev}
          onClick={() => router.push(`/shop?page=${Number(page) - 1}`)}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="mx-5 px-4 py-2 ">
          {page} / {Math.ceil(Number(totalProductsAvailable) / 10)}
        </div>
        <button
          className="rounded-full p-2 border disabled:bg-gray-200"
          disabled={!hasNext}
          onClick={() => router.push(`/shop?page=${Number(page) + 1}`)}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default ProductCard;
