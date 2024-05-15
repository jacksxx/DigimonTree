import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MComp from "@/components/MainComponent/MComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digimon Tree",
  description: "Search for your favorite digimon here!",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">      
      <body className={inter.className}>
        <MComp>{children}</MComp>
      </body>
    </html>
  );
}
