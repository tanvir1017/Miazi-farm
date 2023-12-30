"use client";
import { Input } from "@/components/shadcn/ui/input";
import { CartProps } from "@/types/product/product.types";
import useCartItem, { CartState } from "@/zustand-store/cart-store";
import { ExternalLink, Minus, Plus, Trash, Undo2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartOverview = () => {
  const {
    cartProducts,
    decreaseProductQuantity,
    incrementProductQuantity,
    removeProductFromCart,
  } = useCartItem((state: CartState) => ({
    cartProducts: state.cartProducts,
    incrementProductQuantity: state.incrementProductQuantity,
    decreaseProductQuantity: state.decreaseProductQuantity,
    removeProductFromCart: state.removeProductFromCart,
  }));
  return (
    <div className="sticky top-36 w-full">
      <div className="flex items-center justify-between ">
        <h3 className="md:text-3xl text-lg font-extrabold">Cart Overview</h3>
        <div className="flex items-center hover:text-blue-500">
          <Link href="/shop">Add More</Link>
          <Undo2 className="ms-2" size={20} />
        </div>
      </div>

      {/* Product Overview section start*/}
      <div className="mt-5 overflow-auto py-4" id="SCROLLER">
        {cartProducts.length !== 0 ? (
          cartProducts.map((product: CartProps) => (
            <div key={product._id} className="py-1 px-3">
              <div className="flex items-center justify-between border px-2 rounded-md relative overflow-hidden">
                <button
                  onClick={() => removeProductFromCart(product._id)}
                  className="absolute top-0 right-0 bg-red-100 p-3 rounded-bl-lg shadow text-red-500 hover:bg-red-200 "
                >
                  <Trash className="w-4 h-4" />
                </button>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={120}
                  height={100}
                />

                <div className="flex items-center justify-center w-28 h-9 border rounded-full">
                  <button
                    className="bg-green-100 text-green-500 hover:bg-green-200 rounded-full w-7 h-7"
                    onClick={() => incrementProductQuantity(product._id)}
                  >
                    <Plus className="w-4 h-4 mx-auto" />
                  </button>
                  <div>
                    <Input
                      value={product.quantity}
                      disabled
                      type="number"
                      className="w-10 border-none text-center"
                    />
                  </div>
                  <button
                    onClick={() => decreaseProductQuantity(product._id)}
                    className="bg-red-100 text-red-500 hover:bg-red-200 w-7 h-7 rounded-full"
                  >
                    <Minus className="w-4 h-4 mx-auto" />
                  </button>
                </div>
                <div className="flex items-center ">
                  {product.quantity}{" "}
                  <span className="font-extrabold">
                    <X className="w-4 h-4" />
                  </span>
                  <span>
                    {Number(product.price * product.quantity).toFixed(2)}
                  </span>
                  <span className="font-extrabold text-xl ml-1">&#2547;</span>
                </div>
              </div>

              {/* Product Overview section end*/}
            </div>
          ))
        ) : (
          <div className="flex h-[50%]">
            <div className="m-auto">
              <Image
                src="/assets/payment/empty-cart.png"
                alt="an empty cart"
                width={300}
                height={100}
              />
              <p className="text-red-500">
                You have not added any product to cart yet
              </p>
              <div className="text-center bg-green-50 text-green-500 p-2 rounded-md mt-5">
                <Link href="/shop" className="flex items-center justify-center">
                  Add some products to cart
                  <ExternalLink className="h-4 w-4 ms-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartOverview;
