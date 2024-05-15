'use client'
import "./globals.css";
import MComp from "../components/MainComponent/MComp";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Digimon Tree</title>
        <meta  name="description" content="Search for your favorite digimon here!"/>
      </head>
      <body>
        <MComp>{children}</MComp>
      </body>
    </html>
  );
}
