"use client";
import BlurImageWithBlurHash from "@/components/blurredimage";
import { Button } from "@/components/shadcn/ui/button";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product/product.types";
import useCartItem from "@/zustand-store/cart-store";

import { DollarSign, Plus, ShoppingCart, StarIcon } from "lucide-react";
import Link from "next/link";

const Product = ({ item }: { item: ProductType }) => {
  const { image, title, price, rating, blurhash, _id } = item;

  const { addProduct, cartProducts, incrementProductQuantity } = useCartItem(
    (state) => ({
      addProduct: state.addProductToCart,
      incrementProductQuantity: state.incrementProductQuantity,
      cartProducts: state.cartProducts,
    })
  );
  return (
    <div
      className={cn(
        "border hover:border-primaryalternative md:p-5 p-2 rounded-lg cursor-pointer overflow-hidden"
      )}
    >
      <div>
        <Link
          href={`/product/${_id}`}
          className="overflow-hidden md:block hidden"
        >
          <BlurImageWithBlurHash
            src={image}
            alt={title}
            width={350}
            height={100}
            placeholder="blur"
            blurDataURL={blurhash}
            priority
          />
        </Link>
        <Link
          href={`/product/${_id}`}
          className="overflow-hidden md:hidden block"
        >
          <BlurImageWithBlurHash
            src={image}
            alt={title}
            width={150}
            height={100}
            placeholder="blur"
            blurDataURL={blurhash}
          />
        </Link>
      </div>
      <div>
        <Link href={`/product/${_id}`}>
          <strong className="text-sm md:text-xl text-gray-500">{title}</strong>
        </Link>
        <p className="flex items-center text-sm md:text-base text-gray-500">
          {[...Array(5).keys()].map((_, i: number) => (
            <StarIcon
              key={i}
              fill="#fab32f"
              strokeWidth={1.25}
              className="text-[#fab32f] mr-1 h-3 w-3"
            />
          ))}
          4/5(125)
        </p>
        <p className="md:block hidden">
          ${price} <span className="line-through">$7</span>
        </p>

        <div className={cn("mt-5 md:flex justify-between items-center hidden")}>
          <Link
            href={`/checkout/${_id}`}
            className="bg-gray-900 text-white p-3 flex items-center rounded-md"
          >
            <ShoppingCart strokeWidth={1.25} className="mr-1 h-4 w-4" />
            <span className="font-thin text-xs">Buy Now</span>
          </Link>
          <Button
            variant="outline"
            onClick={() =>
              addProduct({
                _id,
                title,
                image,
                price,
                quantity: 1,
                totalP_Price: price,
              })
            }
          >
            <Plus strokeWidth={1.25} className="mr-1 h-4 w-4" />{" "}
            <span className="font-thin text-xs">Add to cart</span>
          </Button>
        </div>
        <div className="mt-5 md:hidden justify-between items-center flex">
          <span>
            <DollarSign
              strokeWidth={1.25}
              className="mr-1 h-3 w-3 inline-flex"
            />
            <span className="font-thin text-sm">{price} </span>
          </span>

          <Button className="bg-primaryalternative p-3.5 h-0">
            <Plus strokeWidth={1.25} className="h-3 w-3" />
            <span className="font-thin text-xs">Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
