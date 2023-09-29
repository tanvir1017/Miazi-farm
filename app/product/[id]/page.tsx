import { urlForProductionAndLocalhost } from "@/app/shop/page";
import BlurImageWithBlurHash from "@/components/blurredimage";
import { Button } from "@/components/shadcn/ui/button";

import { StarIcon } from "lucide-react";
import Link from "next/link";
import { CiShoppingBasket } from "react-icons/ci";

const ProductDetails = async ({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const { id } = params;
  const response: Response = await fetch(
    `${urlForProductionAndLocalhost}/api/product/${id}`
  );
  const product = await response.json();

  return (
    <main className="App">
      <div className="container">
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[396px].w-[662px] border ">
              <div className="flex items-center justify-center">
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
            </div>
            <div>
              <h2 className="md:text-4xl text-2xl font-extrabold mb-4">
                {product.data.title}
              </h2>
              <h4 className="md:text-2xl text-lg font-extrabold">
                &#2547; {product.data.price}
              </h4>
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
              <p>Brand: Miazi Farm</p>

              <div className="mt-5 flex items-center ">
                <Button className="bg-gray-900 text-white px-8 py-3 mr-2">
                  <CiShoppingBasket
                    strokeWidth={1.25}
                    className="mr-1 h-4 w-4"
                  />
                  Add to cart
                </Button>

                <Link
                  href={`/checkout/${id}`}
                  className="bg-primaryalternative hover:bg-green-600 px-8 py-3 text-white rounded-md text-sm"
                >
                  Buy now
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-10" />
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-5">
              About Product
            </h2>
            <p className="text-base">{product.data.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
