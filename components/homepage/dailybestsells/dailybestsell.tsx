import BlurImageWithBlurHash from "@/components/blurredimage";
import {
  ButtonOutline,
  ButtonSecondary,
} from "@/shadcn/shadecncomponents/button";
import { Button } from "@/shadcn/ui/button";
import { Products } from "@/types/product/product.types";

import { DollarSign, Plus, ShoppingCart, StarIcon } from "lucide-react";
import Link from "next/link";

const DailySell = ({ item }: { item: Products }): any => {
  const {
    brand,
    description,
    features,
    slug,
    image,
    title,
    price,
    rating,
    reviews,
    blurhash,
  } = item;
  return (
    <div className="border hover:border-primaryalternative md:p-5 p-2 rounded-lg cursor-pointer overflow-hidden">
      <Link href={`/shop`} className="overflow-hidden md:block hidden">
        <BlurImageWithBlurHash
          src={image}
          alt={title}
          width={350}
          height={100}
          placeholder="blur"
          blurDataURL={blurhash}
        />
      </Link>
      <Link href={`/product`} className="overflow-hidden md:hidden block">
        <BlurImageWithBlurHash
          src={image}
          alt={title}
          width={150}
          height={100}
          placeholder="blur"
          blurDataURL={blurhash}
        />
      </Link>
      <Link href={`/product`}>
        <strong className="text-sm md:text-base text-gray-500">{title}</strong>
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

      <div className="mt-5 md:flex justify-between items-center hidden">
        <ButtonSecondary>
          <ShoppingCart strokeWidth={1.25} className="mr-1 h-4 w-4" />
          <span className="font-thin text-xs ">Buy Now</span>
        </ButtonSecondary>
        <ButtonOutline>
          <Plus strokeWidth={1.25} className="mr-1 h-4 w-4" />
          <span className="font-thin text-xs">Add to cart</span>
        </ButtonOutline>
      </div>
      <div className="mt-5 md:hidden justify-between items-center flex">
        <span>
          <DollarSign strokeWidth={1.25} className="mr-1 h-3 w-3 inline-flex" />
          <span className="font-thin text-sm">{price} </span>
        </span>

        <Button className="bg-primaryalternative p-3.5 h-0">
          <Plus strokeWidth={1.25} className="h-3 w-3" />
          <span className="font-thin text-xs">Add</span>
        </Button>
      </div>
    </div>
  );
};

export default DailySell;
