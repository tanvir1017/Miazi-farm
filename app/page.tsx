import Categories from "@/components/homepage/categories/categories";
import DailyBestSells from "@/components/homepage/dailybestsells/dailybestsells";
import Features from "@/components/homepage/features/features";
import HeadingSection from "@/components/homepage/headingsection/headingsection";
import Products from "@/components/homepage/products/products";
import SectionBanner from "@/components/homepage/sectionbanner/sectionbanner";
import { ProductsArray } from "@/types/product/product.types";
import { urlForProductionAndLocalhost } from "./shop/page";

export default async function Home() {
  const response: Response = await fetch(
    `${urlForProductionAndLocalhost}/api/product`
  );
  const result: ProductsArray = await response.json();

  return (
    <main className="App">
      <HeadingSection />
      <Categories />
      <Products allProducts={result} />
      <DailyBestSells />
      <SectionBanner />
      <Features />
    </main>
  );
}
