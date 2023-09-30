"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { CartProps } from "@/types/product/product.types";
import useCartItem from "@/zustand-store/cart-store";
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function AddToCartSideBar() {
  const [mount, setMount] = useState(false);
  const {
    cartProducts,
    removeProductFromCart,
    incrementProductQuantity,
    decreaseProductQuantity,
  } = useCartItem((state) => ({
    cartProducts: state.cartProducts,
    removeProductFromCart: state.removeProductFromCart,
    incrementProductQuantity: state.incrementProductQuantity,
    decreaseProductQuantity: state.decreaseProductQuantity,
  }));

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          title="Shopping cart"
          className="bg-slate-200 hover:bg-slate-300  p-2 rounded-full cursor-pointer relative"
        >
          <>
            <span className="bg-red-500 absolute -top-3 -right-1 text-white w-6 h-6 rounded-full leading-6 text-xs font-thin">
              {mount && cartProducts.length}
            </span>

            <ShoppingCart
              strokeWidth={1}
              className="hover:text-primaryalternative text-black"
            />
          </>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="sticky top-0 z-50">
          <div className="flex items-center border  ">
            <Link
              href="/checkout"
              className="w-[50%] bg-primaryalternative px-4 py-3 text-white"
            >
              Check out
            </Link>
            <button className="w-[50%] bg-slate-100 px-4 py-3">
              Cart total{" "}
            </button>
          </div>
        </SheetHeader>
        <div className=" grid gap-2 p-6 ">
          {cartProducts.length !== 0 ? (
            cartProducts.map((item: CartProps) => (
              <div className="border rounded-md relative" key={item._id}>
                <Button
                  onClick={() => removeProductFromCart(item._id)}
                  className="absolute -top-4 -right-2 bg-red-100 p-3 rounded-full text-red-500 hover:bg-red-200 "
                >
                  <Trash className="w-4 h-4" />
                </Button>
                <div className="flex items-start justify-between p-2">
                  <div>
                    {item.title}
                    <div className="flex items-center gap-2 mt-3">
                      <Button
                        onClick={() => incrementProductQuantity(item._id)}
                        className="bg-green-100 text-green-500 hover:bg-green-200 text-xl font-extrabold py-1 px-2"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Input
                        disabled
                        value={item.quantity}
                        type="number"
                        className="w-10"
                      />
                      <Button
                        onClick={() => decreaseProductQuantity(item._id)}
                        className="bg-red-100 text-red-500 hover:bg-red-200 text-xl font-extrabold py-1 px-2"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                </div>
                <hr />
                <div className="flex items-center justify-between px-2 py-3">
                  <p className="text-base font-bold text-gray-700">Price:</p>
                  <p className="text-base font-bold text-gray-700">
                    {item.price} &#2547;
                  </p>
                </div>
                <hr />
                <div className="flex items-center justify-between px-2 py-3">
                  <p className="text-base font-bold text-gray-700">Quantity:</p>
                  <p className="text-base font-bold text-gray-700">
                    {item.quantity}
                  </p>
                </div>
                <hr />
                <div className="flex items-center justify-between px-2 py-3">
                  <p className="text-base font-bold text-gray-700">Subtotal:</p>
                  <p className="text-base font-bold text-gray-700">
                    {Number(item.price * item.quantity).toPrecision(3)} &#2547;
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              <Image
                src="/assets/payment/empty-cart.png"
                alt="an empty cart"
                width={300}
                height={100}
              />
              <p className="text-red-500">
                You have not added any product to cart yet
              </p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
