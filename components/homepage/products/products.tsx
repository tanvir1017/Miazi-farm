import SectionTitle from "@/components/shared/sectiontitle/sectiontitle";
import { products } from "@/data/product";
import Product from "./product";

const Products = () => {
  return (
    <section className="container  mt-24 mb-24">
      <SectionTitle
        link_text="View all"
        tagline="Here are some of the popular products that people love to get from "
        title="Popular products"
        url="/shop"
      />

      <div className="grid grid-cols-5 gap-3">
        {products.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
