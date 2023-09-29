export interface Products {
  title: string;
  slug: string;
  brand: string;
  price: number;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  image: string;
  blurhash: string;
}

export interface ProductsArray {
  success: boolean;
  message: string;
  data: {
    _id: string;
    title: string;
    slug: string;
    brand: string;
    price: number;
    description: string;
    features: string[];
    rating: number;
    reviews: number;
    image: string;
    blurhash: string;
  }[];
  error: any;
  isLoading: boolean;
}

export type ProductType = {
  _id: string;
  title: string;
  slug: string;
  brand: string;
  price: number;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  image: string;
  blurhash: string;
};

export interface ViewProductsArrayType {
  data: {
    success: boolean;
    message: string;
    data: {
      _id: string;
      title: string;
      slug: string;
      brand: string;
      price: number;
      description: string;
      features: string[];
      rating: number;
      reviews: number;
      image: string;
      blurhash: string;
    };
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
