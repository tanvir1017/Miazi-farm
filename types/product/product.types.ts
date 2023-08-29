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

export type CaptureResponseType_Generics = {
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

export type ProductData = {
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
    }[];
  };
  error: any;
  isLoading: boolean;
};

export type ProductPropertiesType = {
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

export interface ViewProductDataType {
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
