import { authOptions } from "@/app/api/auth/[...nextauth]/auth-option";
import DirectSingleProductCheckout from "@/components/checkout/single-product-checkout-by-id/direct-single-product-checkout";
import { getByUniqueId } from "@/lib/fetcher";
import { UserSession } from "@/types/global";
import { getServerSession } from "next-auth";

const BuyNow = async ({ params }: { params: { id: string } }) => {
  // getting id from params
  const { id } = params;

  // fetching single data by unique id
  const productById = await getByUniqueId(id);

  // getting logged user session
  const session: UserSession | null = await getServerSession(authOptions);

  return (
    <main className="container App">
      <DirectSingleProductCheckout
        sessionUser={session}
        product={productById}
      />
    </main>
  );
};

export default BuyNow;
