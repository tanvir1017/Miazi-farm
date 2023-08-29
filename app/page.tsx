import Categories from "@/components/homepage/categories/categories";
import DailyBestSells from "@/components/homepage/dailybestsells/dailybestsells";
import Features from "@/components/homepage/features/features";
import HeadingSection from "@/components/homepage/headingsection/headingsection";
import Products from "@/components/homepage/products/products";
import SectionBanner from "@/components/homepage/sectionbanner/sectionbanner";
import { dynamic_url } from "@/lib/dynamic_url";

export default async function Home() {
  const response = await fetch(`${dynamic_url}/api/product`, {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <main className="App">
      <HeadingSection />
      <Categories />
      <Products products={data} />
      <DailyBestSells />
      <SectionBanner />
      <Features />
    </main>
  );
}
