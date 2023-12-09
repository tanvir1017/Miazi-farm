import HotlineAndSocialLinkTop from "@/components/hotlineandsociallinktop";
import Footer from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { UserSession } from "@/types/global";
import { getServerSession } from "next-auth";
import { Hind_Siliguri } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import { authOptions } from "./api/auth/[...nextauth]/auth-option";
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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session: UserSession | null = await getServerSession(authOptions);

  return (
    <html lang="en" className={hindSiliguri.className}>
      <body className="relative">
        <HotlineAndSocialLinkTop />
        <Navbar session={session} />
        <NextTopLoader color="#515354" />

        {children}
        <Footer />
      </body>
    </html>
  );
}
