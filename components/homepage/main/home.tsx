import Categories from "../categories/categories";
import Features from "../features/features";
import HeadingSection from "../headingsection/headingsection";
import Products from "../products/products";

const HomePages = () => {
  return (
    <>
      <HeadingSection />
      <Categories />
      <Products />
      <Features />
    </>
  );
};

export default HomePages;
