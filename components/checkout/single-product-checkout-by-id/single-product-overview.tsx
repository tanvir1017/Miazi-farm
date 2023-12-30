"use client";
import { Input } from "@/components/shadcn/ui/input";
import { ProductsResponse } from "@/types/product/product.types";
import { Minus, Plus, Undo2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import PriceBreakdown from "../contact-info/price-breakdown";

const SingleProductOverview = ({
  product,
  handleDecreaseProductQuantity,
  setQuantity,
  quantity,
}: {
  setQuantity: Dispatch<SetStateAction<number>>;
  quantity: number;
  product: ProductsResponse;
  handleDecreaseProductQuantity: () => void;
}) => {
  // destructuring all product data from props
  const {
    _id,
    blurhash,
    brand,
    category,
    description,
    features,
    image,
    price,
    rating,
    title,
  } = product.data;

  // shipping const
  const shippingCost = 60;
  return (
    <div className="w-full sticky top-36">
      <div className="flex items-center justify-between p-3">
        <h3 className="md:text-3xl text-lg font-extrabold">Buy Now</h3>

        <div className="flex items-center hover:text-blue-500">
          <Link href="/shop">Add More</Link>
          <Undo2 className="ms-2" size={20} />
        </div>
      </div>
      <div className="my-5 p-3">
        <p className="text-sm">Product: {title}</p>
        <div className="flex items-center justify-between border px-2 rounded-md mt-2">
          <Image src={image} alt={title} width={120} height={100} />
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-28 h-9 border rounded-full">
              <button
                className="bg-green-100 text-green-500 hover:bg-green-200 rounded-full w-7 h-7"
                onClick={() => setQuantity((prev: number) => prev + 1)}
              >
                <Plus className="w-4 h-4 mx-auto" />
              </button>
              <div>
                <Input
                  disabled
                  type="number"
                  value={quantity}
                  className="w-10 border-none"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setQuantity(parseInt(event.target.value))
                  }
                />
              </div>
              <button
                onClick={handleDecreaseProductQuantity}
                className="bg-red-100 text-red-500 hover:bg-red-200 w-7 h-7 rounded-full"
              >
                <Minus className="w-4 h-4 mx-auto" />
              </button>
            </div>
            <div className="ml-5 flex items-center">
              {quantity} <X size={16} />
              {Number(price * quantity).toFixed(2)} &#2547;
            </div>
          </div>
        </div>
        {/* Product Overview section end*/}

        {/* Total section start */}
        <div className={"my-8 bg-green-50 p-5 rounded-md"}>
          <div className="text-center space-y-3">
            <p className="font-semibold text-green-800">
              Your total payable amount is
            </p>
            <h3 className="text-5xl font-bold text-green-600">
              {Number(price * quantity).toFixed(2)} &#2547;
            </h3>
            <p className="font-bold text-green-800">Breakdown</p>
          </div>
          <PriceBreakdown
            shippingCost={shippingCost}
            totalCartItemsPrice={Number((price * quantity).toFixed(2))}
          />
          <p className="text-center mt-3">
            You will get the delivery within{" "}
            <span className="font-bold text-green-500 italic"> 5-7 </span> Days
            after confirmation.
          </p>
        </div>

        {/* Total section end  */}
      </div>
    </div>
  );
};

export default SingleProductOverview;
