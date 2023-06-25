import BlurImageWithBlurHash from "@/components/blurredimage";
import {
  ButtonOutline,
  ButtonSecondary,
} from "@/components/shadecncomponents/button";
import { ProductPropertiesType } from "@/types/common";

import { Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Product = ({ item }: { item: ProductPropertiesType }) => {
  const { slug, image, title, price, rating, blurhash, _id } = item;
  return (
    <div className="border  hover:border-primaryalternative p-5 rounded-lg cursor-pointer overflow-hidden">
      <Link href={`/product/${_id}`} className="overflow-hidden">
        <BlurImageWithBlurHash
          src={image}
          alt={title}
          width={350}
          height={100}
          placeholder="blur"
          blurDataURL={blurhash}
        />
      </Link>
      <Link href={`/product/${slug}`}>
        <strong>{title}</strong>
      </Link>
      <p>{rating}</p>
      <p>
        ${price} <span className="line-through">$7</span>
      </p>

      <div className="mt-5 flex justify-between items-center">
        <ButtonSecondary>
          <ShoppingCart strokeWidth={1.25} className="mr-1 h-4 w-4" />
          <span className="font-thin text-xs ">Buy Now</span>
        </ButtonSecondary>
        <ButtonOutline>
          <Plus strokeWidth={1.25} className="mr-1 h-4 w-4" />
          <span className="font-thin text-xs">Add to cart</span>
        </ButtonOutline>
      </div>
    </div>
  );
};

export default Product;
