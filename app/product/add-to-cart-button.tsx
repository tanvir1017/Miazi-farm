"use client";
import { Button } from "@/components/shadcn/ui/button";
import { CartProps, ProductsResponse } from "@/types/product/product.types";
import useCartItem from "@/zustand-store/cart-store";
import { CiShoppingBasket } from "react-icons/ci";

const AddToCartButton = ({ product }: { product: ProductsResponse }) => {
  const { addProduct } = useCartItem((state) => ({
    addProduct: state.addProductToCart,
  }));
  const quantity = 1;
  const addToCartFuncArg: CartProps = {
    _id: product.data._id,
    title: product.data.title,
    image: product.data.image,
    price: product.data.price,
    quantity,
    totalP_Price: product.data.price,
  };
  return (
    <Button
      onClick={() => addProduct(addToCartFuncArg)}
      className="bg-gray-900 text-white px-8 py-3 mr-2 w-full text-sm font-semibold hover:bg-gray-700"
    >
      <CiShoppingBasket strokeWidth={1.25} className="mr-1 h-4 w-4" />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
