import { Navbar } from "@/components/shared/navbar";

import "./globals.css";

export const metadata = {
  title: "Miyazi Farm",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
