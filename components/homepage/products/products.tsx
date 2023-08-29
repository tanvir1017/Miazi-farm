import SectionTitle from "@/components/shared/sectiontitle/sectiontitle";
import Product from "./product";

const Products = ({ products }: any) => {
  return (
    <section className="md:container md:my-24 my-12 px-3">
      <SectionTitle
        link_text="View all"
        tagline="Here are some of the popular products that people love to get from "
        title="Popular products"
        url="/shop"
      />
      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-3 gap-2">
        {products.data.map((item: any, i: number) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
