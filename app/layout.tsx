import Provider from "@/components/authprovider/provider";
import HotlineAndSocialLinkTop from "@/components/hotlineandsociallinktop";
import { CardWishlists } from "@/components/shadecncomponents/cartdropdown";
import Footer from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { ReactNode } from "react";
import "./globals.css";
export const metadata = {
  title: "Miazi Farm",
  description: "Grocery will sent door to door",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-HIND_SILIGURI_REGULAR relative">
        <div className="handy-cart fixed bottom-5 right-5">
          <CardWishlists />
        </div>
        <HotlineAndSocialLinkTop />

        <Provider>
          <Navbar />
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
