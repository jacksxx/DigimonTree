import type { Metadata } from "next";
import "./globals.css";
import MComp from "../components/MainComponent/MComp";

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
      <MComp>{children}</MComp>
    </html>
  );
}
