import { Navbar } from "@/components/shared/navbar";

import { CardWishlists } from "@/components/shadecncomponents/cartdropdown";
import Footer from "@/components/shared/footer";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import "./globals.css";

export const metadata = {
  title: "Miazi Farm",
  description: "Grocery will sent door to door",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-HIND_SILIGURI_REGULAR relative">
        <div className="handy-cart fixed bottom-5 right-5">
          <CardWishlists />
        </div>
        <div className="bg-slate-100 py-1">
          <div className="container flex justify-between items-center">
            <p>Help Line: +98754698</p>

            <span className="flex items-center space-x-4">
              <i className="border hover:border-blue-400 rounded-full p-2 hover:text-blue-400 duration-200 transition-all cursor-pointer">
                <a
                  href="https://www.facebook.com/profile.php?id=100093039156234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiFacebook />
                </a>
              </i>
              <i className="border hover:border-purple-700 rounded-full p-2 hover:text-purple-400 duration-200 transition-all cursor-pointer">
                <RiInstagramFill />
              </i>
              <i className="border hover:border-blue-400 rounded-full p-2 hover:text-blue-400 duration-200 transition-all cursor-pointer">
                <AiFillTwitterCircle />
              </i>
            </span>
          </div>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
