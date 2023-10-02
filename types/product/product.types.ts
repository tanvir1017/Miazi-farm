export interface Products {
  title: string;
  brand: string;
  price: number;
  description: string;
  features: string[];
  rating: number;
  category: string;
  image: string;
  blurhash: string;
}

export type ProductType = {
  _id: string;
  title: string;
  brand: string;
  price: number;
  description: string;
  features: string[];
  rating: number;
  category: string;
  image: string;
  blurhash: string;
};

export interface ProductsArray {
  success: boolean;
  message: string;
  data: ProductType[];
  error: any;
  isLoading: boolean;
}

export interface ViewProductsArrayType {
  data: {
    success: boolean;
    message: string;
    data: ProductType;
  };
  error: any;
  isLoading: boolean;
}

export interface ProductsResponse {
  success: boolean;
  message: string;
  data: ProductType;
}

export interface ProductsProps {
  success: boolean;
  message: string;
  data: ProductType[];
}

export type CartProps = {
  _id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

// Category route types start

// Category route types end
