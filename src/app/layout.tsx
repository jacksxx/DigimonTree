'use client';
import "./globals.css";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/queryClient";
import { Inter } from "next/font/google";
import * as S from "./styles";
import StyledComponentsRegistry from "../libs/Registy";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Digimon Tree</title>
        <meta
          name="description"
          content="Search for your favorite digimon here!"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          <QueryClientProvider client={queryClient}>
            <S.Container>{children}</S.Container>
          </QueryClientProvider>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
