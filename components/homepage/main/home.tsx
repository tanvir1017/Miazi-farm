import DailyBestSells from "@/components/homepage/dailybestsells/dailybestsells";
import Footer from "@/components/shared/footer";
import Categories from "../categories/categories";
import Features from "../features/features";
import HeadingSection from "../headingsection/headingsection";
import Products from "../products/products";
import SectionBanner from "../sectionbanner/sectionbanner";

const HomePages = () => {
  return (
    <>
      <HeadingSection />
      <Categories />
      <Products />
      <DailyBestSells />
      <SectionBanner />
      <Features />
      <Footer />
    </>
  );
};

export default HomePages;
