import { urlForProductionAndLocalhost } from "@/app/shop/page";
import BlurImageWithBlurHash from "@/components/blurredimage";
import { ProductsResponse } from "@/types/product/product.types";
import { ChevronLeft, ChevronRight, Share, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingBasket } from "react-icons/ci";
import AddToCartButton from "../add-to-cart-button";

const ProductDetails = async ({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const { id } = params;
  const response: Response = await fetch(
    `${urlForProductionAndLocalhost}/api/product/${id}`
  );
  const product: ProductsResponse = await response.json();

  return (
    <main className="App">
      <div className="container">
        <div className="px-2 py-10 lg:px-0">
          <div className="overflow-hidden">
            <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
              <div className="items-start justify-between lg:flex lg:space-x-8">
                <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                  <div className="w-full xl:flex xl:flex-row-reverse">
                    <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                      <div className="relative flex items-center justify-center">
                        <BlurImageWithBlurHash
                          src={`${product.data.image}`}
                          alt={product.data.title}
                          width={400}
                          height={100}
                          placeholder="blur"
                          className="text-center"
                          blurDataURL={product.data.blurhash}
                        />
                      </div>
                      <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                        <ChevronLeft className="text-white" />
                        <ChevronRight className="text-white" />
                      </div>
                    </div>
                    <div className="flex gap-2 mr-2 xl:flex-col">
                      {[
                        product.data.image,
                        product.data.image,
                        product.data.image,
                      ].map((image, index) => (
                        <div
                          key={image}
                          className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 relative"
                        >
                          <Image
                            alt={`Product ${index}`}
                            src={image}
                            decoding="async"
                            width={180}
                            height={180}
                            loading="lazy"
                            className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
                  <div className="pb-5">
                    <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">
                      {product.data.title}
                    </h2>
                    <h3 className="mt-4 text-xl font-semibold">
                      {product.data.price} ৳
                    </h3>
                  </div>
                  <div className="mb-2 pt-0.5">
                    <div className="flex items-center space-x-1">
                      {[...Array(4).keys()].map((_r: number, i: number) => (
                        <StarIcon
                          fill="#F0AD4E"
                          className="text-[#F0AD4E] w-3 h-3"
                          key={i}
                        />
                      ))}
                      <p> | {product.data.rating} rating</p>
                    </div>
                  </div>
                  <div className="pb-2" />
                  <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                    <AddToCartButton product={product} />
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md bg-primaryalternative px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <Link
                          href={`/checkout/${id}`}
                          className="flex items-center justify-center w-full"
                        >
                          {" "}
                          <CiShoppingBasket
                            strokeWidth={1.25}
                            className="mr-1 h-4 w-4"
                          />
                          <span className="block">Buy now</span>
                        </Link>
                      </button>{" "}
                      <div className="relative">
                        <button
                          type="button"
                          className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <Share size={16} className="mr-3" />
                          <span className="block">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 xl:pt-8">
                    <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                      Product Details:
                    </h3>
                    <p className="text-sm">{product.data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
