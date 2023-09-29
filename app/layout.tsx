import Provider from "@/components/authprovider/provider";
import HotlineAndSocialLinkTop from "@/components/hotlineandsociallinktop";
import Footer from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Hind_Siliguri } from "@next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Miazi Farm",
  description: "Grocery will sent door to door",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={hindSiliguri.className}>
      <body className="relative">
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
