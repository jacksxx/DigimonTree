import "./globals.css";
import * as S from "./styles";
import type { Metadata } from "next";
import Navbar from "../components/layout/NavBar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import { QueryProvider } from "@/hooks/Provider";
import StyledComponentsRegistry from "../libs/Registy";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          <QueryProvider>
            <S.Container>{children}</S.Container>
          </QueryProvider>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}