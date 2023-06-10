const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return <div>{slug} product</div>;
};

export default ProductDetails;
