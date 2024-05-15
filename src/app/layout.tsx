import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MComp from "@/components/MainComponent/MComp";
import { QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import { queryClient } from "@/libs/queryClient";

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
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <div className="px-10 mb-10 pb-10 pt-2">{children}</div>
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
