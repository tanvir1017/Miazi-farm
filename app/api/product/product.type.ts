export type CaptureResponseType_Generics = {
    success: boolean,
    message: string,
    data: {
        _id:string,
      title:string,
      slug: string,
      brand: string,
      price: number,
      description:string,
      features: string [],
      rating: number,
      reviews: number,
      image: string,
      blurhash: string
    }
}