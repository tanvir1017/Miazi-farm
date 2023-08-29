import Categories from "@/components/homepage/categories/categories";
import DailyBestSells from "@/components/homepage/dailybestsells/dailybestsells";
import Features from "@/components/homepage/features/features";
import HeadingSection from "@/components/homepage/headingsection/headingsection";
import Products from "@/components/homepage/products/products";
import SectionBanner from "@/components/homepage/sectionbanner/sectionbanner";

export default async function Home() {
  // const response = await fetch(`http://localhost:3000/api/product`, {
  //   cache: "no-store",
  // });
  const response = await fetch(`https://miazi-farm.vercel.app/api/product`, {
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
