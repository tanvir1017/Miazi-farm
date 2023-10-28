
import DailyBestSells from "@/components/homepage/dailybestsells/dailybestsells";
import Categories from "../categories/categories";
import Features from "../features/features";
import HeadingSection from "../headingsection/headingsection";
import Products from "../products/products";
import SectionBanner from "../sectionbanner/sectionbanner";

const HomePages = () => {
  return (
    <main className="App">
      <HeadingSection />
      <Categories />
      <Products />
      <DailyBestSells />
      <SectionBanner />
      <Features />
    </main>
  );
};

export default HomePages;
