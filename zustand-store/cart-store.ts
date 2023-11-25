import { CartProps } from "@/types/product/product.types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type CartState = {
  cartProducts: CartProps[];
  addProductToCart: (product: CartProps) => void;
  incrementProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
};

const cartItem = (set: any) => ({
  // Defining state
  cartProducts: [],

  // Add product to local storage cart
  addProductToCart: (product: CartProps) => {
    set((state: CartState) => {
      const isProductExist = state.cartProducts.find(
        (p) => p._id === product._id
      );
      if (isProductExist) {
        const getProductIndex = state.cartProducts.findIndex(
          (product: CartProps) => product._id === product._id
        );

        const products = [...state.cartProducts];
        products[getProductIndex].quantity += 1;
        products[getProductIndex].totalP_Price +=
          products[getProductIndex].price;

        return { cartProducts: [...products] };
      }
      return {
        cartProducts: [product, ...state.cartProducts],
      };
    });
  },

  // Increment cart product quantity to local storage cart
  incrementProductQuantity: (productId: string) => {
    set((state: any) => ({
      cartProducts: state.cartProducts.filter((cP: CartProps) => {
        return cP._id === productId
          ? {
              ...cP,
              quantity: cP.quantity++,
              totalP_Price: (cP.totalP_Price += cP.price),
            }
          : cP;
      }),
    }));
  },

  // Decrement cart product quantity to local storage cart
  decreaseProductQuantity: (productId: string) => {
    set((state: any) => ({
      cartProducts: state.cartProducts.filter((cP: CartProps) => {
        return cP._id === productId && cP.quantity !== 1
          ? {
              ...cP,
              quantity: cP.quantity--,
              totalP_Price: (cP.totalP_Price -= cP.price),
            }
          : cP;
      }),
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
