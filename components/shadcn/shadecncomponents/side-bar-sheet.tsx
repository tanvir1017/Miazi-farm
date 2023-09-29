"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type CartProps = {
  _id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

export function AddToCartSideBar() {
  const [cartItems, setCartItems] = useState<CartProps[] | string>();
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItemsQuantity, setCartItemsQuantity] = useState<number>();
  const getLocalStorageCartItem = localStorage.getItem("cart");
  useEffect(() => {
    if (getLocalStorageCartItem !== null) {
      const parseStorageCartItem = JSON.parse(getLocalStorageCartItem);
      setCartItems(parseStorageCartItem);
    } else {
      setCartItems("There is no cart item");
    }
  }, []);

  const handleIncreaseQuantity = (_id: string) => {
    if (getLocalStorageCartItem !== null) {
      const parseFromStorage = JSON.parse(getLocalStorageCartItem);
      const increaseQuantity = parseFromStorage.map((ci: CartProps) => {
        if (ci._id === _id) {
          setQuantity((prev) => prev + 1);
          return { ...ci, quantity: quantity + 1 };
        }
        return ci;
      });

      console.log(increaseQuantity);

      //   localStorage.setItem("cart", JSON.stringify(parseFromStorage));
    }
  };
  const handleDecreaseQuantity = (_id: string) => {
    if (getLocalStorageCartItem !== null) {
      const parseFromStorage = JSON.parse(getLocalStorageCartItem);
      const filterById = parseFromStorage
        .filter((ci: CartProps) => ci._id === _id)
        .map((ci: CartProps) => ci.quantity--);
      console.log(filterById);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <span
          title="Shopping cart"
          className="bg-slate-200 p-2 rounded-full cursor-pointer relative"
        >
          <button className="w-5 h-5 p-0.5 bg-primaryalternative rounded-full text-white text-xs absolute right-0 -top-2 overflow-hidden">
            3
          </button>
          <ShoppingCart
            strokeWidth={1}
            className="hover:text-primaryalternative"
          />
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="px-6 py-3">
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className=" grid gap-2 p-6">
          {Array.isArray(cartItems) ? (
            cartItems.map((item: CartProps) => (
              <div className="border rounded-md">
                <div className="flex items-start justify-between  p-2">
                  <div>
                    {item.title}
                    <div className="flex items-center gap-2">
                      <Button
                        className="bg-green-100 text-green-500 hover:bg-green-200 text-xl font-extrabold"
                        onClick={() => handleIncreaseQuantity(item._id)}
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
                        onClick={() => handleDecreaseQuantity(item._id)}
                        className="bg-red-100 text-red-500 hover:bg-red-200 text-xl font-extrabold"
                      >
                        -
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
                    {quantity} X {Number(item.price * quantity).toPrecision(3)}{" "}
                    &#2547;
                  </p>
                </div>
                <hr />
                <div className="flex items-center justify-between px-2 py-3">
                  <p className="text-base font-bold text-gray-700">Quantity:</p>
                  <p className="text-base font-bold text-gray-700">
                    {item.quantity}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>{cartItems}</p>
          )}
        </div>
        <div className="flex items-center border absolute bottom-0 w-[100%]">
          <button className="w-[50%] bg-slate-100 px-4 py-3">
            Cart total{" "}
          </button>
          <button className="w-[50%] bg-primaryalternative px-4 py-3 text-white">
            Check out
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
