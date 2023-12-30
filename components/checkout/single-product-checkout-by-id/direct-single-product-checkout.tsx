"use client";
import ContactInfo from "@/components/checkout/contact-info/contact-info";
import { UserSession } from "@/types/global";
import { ProductsResponse } from "@/types/product/product.types";
import { useState } from "react";
import SingleProductOverview from "./single-product-overview";

const DirectSingleProductCheckout = ({
  sessionUser,
  product,
}: {
  sessionUser: UserSession | null;
  product: ProductsResponse;
}) => {
  // setting product quantity by using useState
  const [quantity, setQuantity] = useState<number>(1);

  // a function which is conditionally increasing and decreasing product quantity
  const handleDecreaseProductQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  // a function which will take information about user contact & shipping info, then post to db
  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
  }

  return (
    <section>
      <div className="App">
        <div className="container my-10">
          <div className="grid lg:grid-cols-2 gap-4 place-items-start">
            {/* Form section start*/}
            <ContactInfo quantity={quantity} session={sessionUser} />
            {/* Form section end*/}

            {/* Product Overview section start*/}
            <SingleProductOverview
              setQuantity={setQuantity}
              quantity={quantity}
              handleDecreaseProductQuantity={handleDecreaseProductQuantity}
              product={product}
            />
            {/* Product Overview section end*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectSingleProductCheckout;
