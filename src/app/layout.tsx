"use client";
import "./globals.css";
import MComp from "../components/MainComponent/MComp";
import StyledComponentsRegistry from "../libs/Registy";

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
      <body>
        <StyledComponentsRegistry>
          <MComp>{children}</MComp>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
