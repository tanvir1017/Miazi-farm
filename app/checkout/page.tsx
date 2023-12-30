import CartOverview from "@/components/checkout/cart-overview";
import ContactInfo from "@/components/checkout/contact-info/contact-info";

import { UserSession } from "@/types/global";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/auth-option";

const CheckOut = async () => {
  const session: UserSession | null = await getServerSession(authOptions);
  return (
    <main className="App">
      <div className="container">
        <div className="my-10">
          <div className="grid grid-cols-2 place-items-start gap-4">
            {/* Form section start*/}
            <ContactInfo session={session} />
            {/* Form section end*/}
            {/* Cart overview section Start */}
            <CartOverview />
            {/* Cart overview section end */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
