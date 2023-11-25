"use client";
import { Button } from "@/components/shadcn/ui/button";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/ui/radio-group";
import { CartProps } from "@/types/product/product.types";
import useCartItem, { CartState } from "@/zustand-store/cart-store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceBreakdown from "./price-breakdown";

type paymentOptionsDataType = {
  image: string;
  name: string;
  id: number;
};
const ContactInfo = () => {
  const { cartProducts } = useCartItem((state: CartState) => ({
    cartProducts: state.cartProducts,
  }));

  const shippingCost = 60;
  const totalCartItemsPrice = cartProducts.reduce(
    (prev: number, curr: CartProps) => (prev += curr.totalP_Price),
    0
  );

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
  };

  const paymentOptionsData: paymentOptionsDataType[] = [
    {
      id: 1,
      image: "/assets/payment/cod-pay.png",
      name: "COD",
    },
    { id: 2, image: "/assets/payment/card-pay.png", name: "CARD" },
    { id: 2, image: "/assets/payment/bkash.jpg", name: "BKASH" },
  ];

  return (
    <div className=" p-3 w-full overflow-auto " id="SCROLLER">
      <form onSubmit={handleSubmit}>
        <h2 className="md:text-3xl text-xl font-extrabold mb-4">
          Contact Info
        </h2>
        <Input
          required
          type="email"
          className="w-full mb-2"
          placeholder="Email"
        />
        <div className="flex items-center justify-between gap-3">
          <Input
            required
            type="text"
            placeholder="Full Name"
            className="w-full mb-2 "
          />
          <Input
            required
            type="text"
            placeholder="Phone Number"
            className="w-full mb-2 "
          />
        </div>

        <h2 className="md:text-3xl text-xl font-extrabold my-4">
          Shipping Info
        </h2>
        <Input
          required
          type="text"
          placeholder="Detailed Address"
          className="w-full mb-2 "
        />
        <Input
          required
          type="text"
          placeholder="Select area"
          className="w-full mb-2 "
        />
        <Input
          type="text"
          required
          placeholder="Alternative Phone"
          className="w-full mb-2 "
        />

        {/* PRICE BREAKDOWN */}
        <div className="my-8 bg-green-50 p-5 rounded-md">
          <div className="text-center space-y-3">
            <p className="font-semibold text-green-800">
              Your total payable amount is
            </p>
            <h3 className="text-5xl font-bold text-green-600">
              &#2547; {totalCartItemsPrice.toFixed(2)}
            </h3>
            <p className="font-bold text-green-800">Breakdown</p>
          </div>

          <PriceBreakdown
            shippingCost={shippingCost}
            totalCartItemsPrice={totalCartItemsPrice}
          />
          <p className="text-center mt-3">
            You will get the delivery within{" "}
            <span className="font-bold text-green-500 italic"> 5-7 </span> Days
            after confirmation.
          </p>
        </div>
        {/* PRICE BREAKDOWN */}

        {/* Payment option section start here */}
        <div>
          <h2 className="md:text-3xl text-xl font-extrabold my-4">
            Payment Option
          </h2>
          {/* payment method option start */}
          <div className="flex items-center">
            <RadioGroup
              defaultValue={paymentOptionsData[0]?.name as string}
              className="flex justify-center"
            >
              {paymentOptionsData.map(
                (paymentOptions: paymentOptionsDataType) => (
                  <div
                    className="flex items-center space-x-2 border p-5 hover:border-slate-300 hover:shadow-md shadow"
                    key={paymentOptions.id}
                  >
                    <RadioGroupItem
                      value={paymentOptions.name}
                      id={paymentOptions.name}
                    />
                    <Label
                      htmlFor={paymentOptions.name}
                      className="cursor-pointer"
                    >
                      <Image
                        src={paymentOptions.image}
                        alt="cod payment"
                        width={120}
                        height={100}
                      />
                    </Label>
                  </div>
                )
              )}
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
                href={`/checkout`}
                className="italic text-blue-400 font-bold underline underline-offset-1"
              >
                Terms
              </Link>{" "}
              &{" "}
              <Link
                href={`/checkout`}
                className="italic text-blue-400 font-bold underline underline-offset-1"
              >
                Conditions
              </Link>{" "}
              ,
              <Link
                href={`/checkout`}
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
  );
};

export default ContactInfo;
