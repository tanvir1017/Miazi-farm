import {
  ButtonOutline,
  ButtonSecondary,
} from "@/components/shadecncomponents/button";
import { Products } from "@/data/product";
import { Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
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
  } = item;
  return (
    <div className="border  hover:border-primaryalternative p-5 rounded-lg cursor-pointer">
      <Link href={`/product/${slug}`}>
        <Image src={image} alt={title} width={350} height={100} />
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

export default DailySell;
