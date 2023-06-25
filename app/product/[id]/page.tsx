"use client";
import Error from "@/components/error";
import { ButtonAlternative } from "@/components/shadecncomponents/button";
import { fetcher } from "@/lib/fetcher";
import { ViewProductDataType } from "@/types/common";
import useSWR from "swr";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const {
    data: product,
    error,
    isLoading,
  }: ViewProductDataType = useSWR(`/api/product/${id}`, fetcher);
  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (error) content = <Error />;
  if (product) {
    content = (
      <>
        <div className="grid grid-cols-2 place-items-center">
          <div>
            {/* <BlurImageWithBlurHash
              src={`${product.image}`}
              alt={product.title}
              width={500}
              height={100}
              placeholder="blur"
              blurDataURL={product.blurhash}
            /> */}
          </div>
          <div>
            <h2>{product.data.title}</h2>
            <p>{product.data.price}</p>
            <p>{product.data.rating}</p>
            <ButtonAlternative>Buy Now</ButtonAlternative>
          </div>
        </div>
        <hr />
        <div>
          <h2>About Product</h2>
          <p>{product.data.description}</p>
        </div>
      </>
    );
  }
  return (
    <main className="container App">
      <section>{content}</section>
    </main>
  );
};

export default ProductDetails;