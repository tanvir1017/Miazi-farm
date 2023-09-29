import { CartProps } from "@/types/product/product.types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const cartItem = (set: any) => ({
  // Defining state
  cartProducts: [],
  // Add product to local storage cart
  addProductToCart: (product: CartProps) => {
    set((state: any) => ({
      cartProducts: [product, ...state.cartProducts],
    }));
  },

  // Increment cart product quantity to local storage cart
  incrementProductQuantity: (productId: string) => {
    set((state: any) => ({
      cartProducts: state.cartProducts.filter((cP: CartProps) =>
        cP._id === productId ? { ...cP, quantity: cP.quantity++ } : cP
      ),
    }));
  },

  // Decrement cart product quantity to local storage cart
  decreaseProductQuantity: (productId: string) => {
    set((state: any) => ({
      cartProducts: state.cartProducts.filter((cP: CartProps) =>
        cP._id === productId && cP.quantity !== 1
          ? { ...cP, quantity: cP.quantity-- }
          : cP
      ),
    }));
  },

  // Remove product from local storage
  removeProductFromCart: (productId: string) => {
    set((state: any) => ({
      cartProducts: state.cartProducts.filter(
        (p: CartProps) => p._id !== productId
      ),
    }));
  },
});

// Finally making hooks for whole component by wrapping full functionality with create function
const useCartItem = create(
  devtools(
    persist(cartItem, {
      name: "cart",
    })
  )
);

export default useCartItem;
