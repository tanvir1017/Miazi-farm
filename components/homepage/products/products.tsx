import SectionTitle from "@/components/shared/sectiontitle/sectiontitle";
import { ProductType } from "@/types/product/product.types";
import Product from "./product";

const Products = ({ allProducts }: any) => {
  const { data } = allProducts;

  return (
    <section className="md:container md:my-24 my-12 px-3">
      <SectionTitle
        link_text="View all"
        tagline="Here are some of the popular products that people love to get from "
        title="Popular products"
        url="/shop"
      />
      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-3 gap-2">
        {data.map((p: ProductType) => (
          <Product key={p._id} item={p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
