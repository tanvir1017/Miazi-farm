"use client";
import ContactInfo from "@/components/checkout/contact-info/contact-info";
import PriceBreakdown from "@/components/checkout/contact-info/price-breakdown";
import Error from "@/components/error";
import Loading from "@/components/loading";
import { Input } from "@/components/shadcn/ui/input";
import { fetcher } from "@/lib/fetcher";
import { ProductsResponse } from "@/types/product/product.types";
import { Minus, Plus, Undo2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import useSWR from "swr";

interface ProductCheckout {
  data: ProductsResponse;
  error: any;
  isLoading: boolean;
}

const BuyNow = ({ params }: { params: { id: string } }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = params;

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
  }

  const handleDecreaseProductQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/product/${id}`, fetcher) as ProductCheckout;
  let content = null;
  if (!error && !product && isLoading) content = <Loading />;
  if (!product && !isLoading && error) content = <Error />;
  if (!error && !isLoading && product) {
    const productPrice = Number((product.data.price * quantity).toFixed(2));
    const shippingCost = 60;
    content = (
      <div className="App">
        <div className="container my-10">
          <div className="grid grid-cols-2 gap-4 place-items-start">
            {/* Form section start*/}
            <ContactInfo />
            {/* Form section end*/}
            {/* Cart overview section start */}
            <div className="w-full sticky top-36">
              <div className="flex items-center justify-between p-3">
                <h3 className="md:text-3xl text-lg font-extrabold">Buy Now</h3>

                <div className="flex items-center hover:text-blue-500">
                  <Link href="/shop">Add More</Link>
                  <Undo2 className="ms-2" size={20} />
                </div>
              </div>

              {/* Product Overview section start*/}
              <div className="my-5 p-3">
                <p className="text-sm">Product: {product.data.title}</p>
                <div className="flex items-center justify-between border px-2 rounded-md mt-2">
                  <Image
                    src={product.data.image}
                    alt={product.data.title}
                    width={120}
                    height={100}
                  />
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-28 h-9 border rounded-full">
                      <button
                        className="bg-green-100 text-green-500 hover:bg-green-200 rounded-full w-7 h-7"
                        onClick={() => setQuantity((prev) => prev + 1)}
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
                      {Number(product.data.price * quantity).toFixed(2)} &#2547;
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
                      {Number(product.data.price * quantity).toFixed(2)} &#2547;
                    </h3>
                    <p className="font-bold text-green-800">Breakdown</p>
                  </div>
                  <PriceBreakdown
                    shippingCost={shippingCost}
                    totalCartItemsPrice={productPrice}
                  />
                  <p className="text-center mt-3">
                    You will get the delivery within{" "}
                    <span className="font-bold text-green-500 italic">
                      {" "}
                      5-7{" "}
                    </span>{" "}
                    Days after confirmation.
                  </p>
                </div>

                {/* Total section end  */}
              </div>
            </div>
            {/* Cart overview section end */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="container App">
      <section>{content}</section>
    </main>
  );
};

export default BuyNow;
