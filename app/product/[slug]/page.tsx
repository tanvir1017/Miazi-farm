"use client";
import BlurImageWithBlurHash from "@/components/blurredimage";
import { ButtonAlternative } from "@/components/shadecncomponents/button";
import { Products, products } from "@/data/product";
import { useCallback, useMemo } from "react";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const filterData = useCallback(
    (paramSlug: string | number, productItem: Products[]) =>
      productItem.filter((item: Products) => item.slug === paramSlug),
    []
  );

  const productMemoized = useMemo(
    () => filterData(slug, products),
    [slug, filterData]
  );

  const productData = productMemoized.reduce((acc, current: Products) => {
    return current;
  }, {} as Products);

  return (
    <main className="container App">
      <section>
        <div className="grid grid-cols-2 place-items-center">
          <div>
            <BlurImageWithBlurHash
              src={productData.image}
              alt={productData.title}
              width={500}
              height={100}
              placeholder="blur"
              blurDataURL={productData.blurhash}
            />
          </div>
          <div>
            <h2>{productData.title}</h2>
            <p>{productData.price}</p>
            <p>{productData.rating}</p>
            <ButtonAlternative>Buy Now</ButtonAlternative>
          </div>
        </div>
        <hr />
        <div>
          <h2>About Product</h2>
          <p>{productData.description}</p>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
