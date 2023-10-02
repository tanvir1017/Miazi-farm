import ShopCategories from "@/components/shop/categories-aside/shop-categories";
import ProductCard from "@/components/shop/product-card";
import { ProductCategoryResponse } from "@/types/product/product.interface";
import { ProductsProps } from "@/types/product/product.types";
import type { Metadata } from "next";

export const urlForProductionAndLocalhost =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://miazi-farm.vercel.app";

export const metadata: Metadata = {
  title: "Miazi Farm | Shop",
};

const Shop = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? "1";
  const categorySearch = searchParams["category"] ?? "";

  // const perPage = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * 12;
  const end = start + 12;

  // GET ALL PRODUCT FOR SHOW FROM DB
  const response: Response = await fetch(
    `${urlForProductionAndLocalhost}/api/product`,
    {
      cache: "no-store",
    }
  );
  const products: ProductsProps = await response.json();
  const paginatedProducts =
    categorySearch === ""
      ? products.data.slice(start, end)
      : products.data
          .slice(start, end)
          .filter((product) => product.category === categorySearch); // AFTER PAGINATION DATA BY SLICING

  // GET ALL CATEGORY FROM PRODUCT COLLECTIONS
  const categories: Response = await fetch(
    `${urlForProductionAndLocalhost}/api/category`,
    {
      cache: "no-store",
    }
  );
  const { category }: ProductCategoryResponse = await categories.json();
  return (
    <main className="App container ">
      <div className="grid grid-cols-12 gap-4 place-items-start mt-4 ">
        {/* <div className="flex items-start gap-4 mt-4"> */}
        <aside
          id="SCROLLER"
          className="col-span-2 w-full px-1 pt-2 pb-4 border-r  sticky top-[8.2rem] overflow-auto"
          style={{ height: "100dvh" }}
        >
          <div>
            <h1 className="text-lg  mb-5">Available Categories</h1>

            {category !== null ? (
              <ShopCategories categories={category} />
            ) : (
              <div className="relative my-2 cursor-pointer">
                <p className="text-base text-red-500">Category not available</p>
              </div>
            )}
          </div>
        </aside>

        <ProductCard
          totalProductsAvailable={products?.data.length}
          products={paginatedProducts}
          hasNext={end < products.data.length}
          hasPrev={start > 0}
        />
      </div>
    </main>
  );
};

export default Shop;
