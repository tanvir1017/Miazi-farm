"use client";
import SectionTitle from "@/components/shared/sectiontitle/sectiontitle";
import { fetcher } from "@/lib/fetcher";

import Error from "@/components/error";
import { ProductData, ProductPropertiesType } from "@/types/common";
import useSWR from "swr";
import Product from "./product";

const Products = () => {
  const {
    data: products,
    error,
    isLoading,
  }: ProductData = useSWR("/api/product", fetcher);

  let content = null;
  if (isLoading) content = <p>Loading..</p>;
  if (error) content = <Error />;
  if (products) {
    content = (
      <div className="grid grid-cols-5 gap-3">
        {products.data.map((item: ProductPropertiesType, i: number) => (
          <Product key={i} item={item} />
        ))}
      </div>
    );
  }

  return (
    <section className="container mt-24 mb-24">
      <SectionTitle
        link_text="View all"
        tagline="Here are some of the popular products that people love to get from "
        title="Popular products"
        url="/shop"
      />
      {content}
    </section>
  );
};

export default Products;
