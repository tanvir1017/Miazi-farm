"use client";
import { Products } from "@/types/product/product.types";

import { cn } from "@/lib/utils";
import { LayoutDashboard, LayoutList } from "lucide-react";
import React, { useState } from "react";
import Product from "../homepage/products/product";
import { ButtonOutline } from "../shadecncomponents/button";
import { SortBySelect } from "../shadecncomponents/sortbyselect";

type ProductCardProps = {
  products: {
    success: boolean;
    message: string;
    data: Products[];
  };
};
const ProductCard = ({ products }: ProductCardProps): React.ReactElement => {
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
          ["grid-cols-1"]: !viewCol,
          ["grid-cols-4"]: viewCol,
        })}
      >
        {products.data.map((item: any, i: number) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </section>
  );
};
export default ProductCard;
