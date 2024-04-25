import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MComp from "@/components/MComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digimon Tree",
  description: "See the digimon here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MComp>{children}</MComp>
      </body>
    </html>
  );
}
