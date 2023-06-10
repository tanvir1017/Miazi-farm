import { products } from "@/data/product";
import Product from "./product";

const Products = () => {
  return (
    <section className="container  mt-24 mb-24">
      <div className="section-title">
        <p className="text-2xl font-HIND_SILIGURI_SEMI_BOLD mb-16">
          Popular Products :
        </p>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {products.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
