"use client";
import Error from "@/components/error";
import Loading from "@/components/loading";
import { Button } from "@/components/shadcn/ui/button";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/ui/radio-group";
import { fetcher } from "@/lib/fetcher";
import { ProductsResponse } from "@/types/product/product.types";
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
    content = (
      <div className="App">
        <div className="container my-10">
          <div className="grid grid-cols-2 gap-4">
            {/* Form section start*/}
            <div className="border rounded-md p-3">
              <form onSubmit={handleSubmit}>
                <h2 className="md:text-3xl text-xl font-extrabold mb-4">
                  Contact Info
                </h2>
                <Input
                  required
                  type="email"
                  className="w-full mb-2 focus:ring-2 ring-green-200 focus:outline-none focus:border-green-500"
                  placeholder="Email"
                />
                <div className="flex items-center justify-between gap-3">
                  <Input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full mb-2 focus:ring-2 ring-green-200 focus:outline-none focus:border-green-500"
                  />
                  <Input
                    required
                    type="text"
                    placeholder="Phone Number"
                    className="w-full mb-2 focus:ring-2 ring-green-200 focus:outline-none focus:border-green-500"
                  />
                </div>

                <h2 className="md:text-3xl text-xl font-extrabold my-4">
                  Shipping Info
                </h2>
                <Input
                  required
                  type="text"
                  placeholder="Detailed Address"
                  className="w-full mb-2 focus:ring-2 ring-green-200 focus:outline-none focus:border-green-500"
                />
                <Input
                  required
                  type="text"
                  placeholder="Select area"
                  className="w-full mb-2 focus:ring-2 ring-green-200 focus:outline-none focus:border-green-500"
                />
                <Input
                  type="text"
                  required
                  placeholder="Alternative Phone"
                  className="w-full mb-2 focus:ring-2 ring-green-200 focus:outline-none focus:border-green-500"
                />

                {/* Payment option section start here */}
                <div>
                  <h2 className="md:text-3xl text-xl font-extrabold my-4">
                    Payment Option
                  </h2>
                  {/* payment method option start */}
                  <div className="flex items-center">
                    <RadioGroup
                      defaultValue="cod payment"
                      className="flex items-center "
                    >
                      <div className="flex items-center space-x-2 border p-5 hover:border-slate-300 hover:shadow-md shadow">
                        <RadioGroupItem value="cod payment" id="cod-payment" />
                        <Label htmlFor="cod-payment" className="cursor-pointer">
                          <Image
                            src="/assets/payment/cod-pay.png"
                            alt="cod payment"
                            width={120}
                            height={100}
                          />
                        </Label>
                      </div>{" "}
                      <div className="flex items-center space-x-2 border p-5 hover:border-slate-300 hover:shadow-md shadow ">
                        <RadioGroupItem value="online banking" id="card-pay" />
                        <Label htmlFor="card-pay" className="cursor-pointer">
                          <Image
                            src="/assets/payment/card-pay.png"
                            alt="cards payment"
                            width={120}
                            height={100}
                          />
                        </Label>
                      </div>{" "}
                      <div className="flex items-center space-x-2 border p-5 hover:border-slate-300 hover:shadow-md shadow">
                        <RadioGroupItem value="bkash" id="bkash" />
                        <Label htmlFor="bkash" className="cursor-pointer">
                          <Image
                            src="/assets/payment/bkash.jpg"
                            alt="bkash logo"
                            width={120}
                            height={100}
                          />
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {/* payment method option end*/}
                  <div className="flex items-center space-x-2 mt-5 ml-2">
                    <Checkbox id="terms" className="rounded-sm bg-slate-100" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to{" "}
                      <Link
                        href={`/checkout/${id}`}
                        className="italic text-blue-400 font-bold underline underline-offset-1"
                      >
                        Terms
                      </Link>{" "}
                      &{" "}
                      <Link
                        href={`/checkout/${id}`}
                        className="italic text-blue-400 font-bold underline underline-offset-1"
                      >
                        Conditions
                      </Link>{" "}
                      ,
                      <Link
                        href={`/checkout/${id}`}
                        className="italic text-blue-400 font-bold underline underline-offset-1"
                      >
                        Refund
                      </Link>{" "}
                      Policy and Privacy Policy of Miazi Farm.
                    </label>
                  </div>
                </div>
                {/* Payment option section end here */}

                <Button className="w-full bg-slate-100 hover:bg-slate-200 mt-5 text-black">
                  Confirm Order
                </Button>
              </form>
            </div>
            {/* Form section end*/}
            {/* Cart overview section start */}
            <div>
              <div className="flex items-center justify-between p-3">
                <h3 className="md:text-3xl text-lg font-extrabold">
                  Cart Overview
                </h3>
                <Link href="/shop">Modify Order</Link>
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
                    <Button
                      className="bg-green-100 text-green-500 hover:bg-green-200 text-xl font-extrabold"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </Button>
                    <Input
                      disabled
                      type="number"
                      value={quantity}
                      className="w-10"
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setQuantity(parseInt(event.target.value))
                      }
                    />
                    <Button
                      onClick={handleDecreaseProductQuantity}
                      className="bg-red-100 text-red-500 hover:bg-red-200 text-xl font-extrabold"
                    >
                      -
                    </Button>
                    <div className="ml-5">
                      {quantity} X{" "}
                      {Number(product.data.price * quantity).toPrecision(3)}{" "}
                      &#2547;
                    </div>
                  </div>
                </div>
                {/* Product Overview section end*/}

                {/* Total section start */}

                <div className="mt-8">
                  <div className="md:text-2xl text-base flex items-center justify-between">
                    Total:{" "}
                    <span>
                      {Number(product.data.price * quantity).toPrecision(3)}{" "}
                      &#2547;
                    </span>
                  </div>
                  <hr className="mb-5" />

                  <div className="md:text-2xl text-base flex items-center justify-between">
                    <span>
                      Shipping (
                      <span className="text-primaryalternative font-extrabold">
                        +
                      </span>
                      ):
                    </span>
                    <span>60 &#2547;</span>
                  </div>
                  <hr className="mb-5" />
                  <div className="md:text-2xl text-base flex items-center justify-between font-extrabold">
                    <span>Payable:</span>
                    <span>
                      {60 + Number(product.data.price * quantity)} &#2547;
                    </span>
                  </div>
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
