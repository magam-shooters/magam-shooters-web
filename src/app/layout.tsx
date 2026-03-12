import type { Metadata } from "next";
import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import LayoutWrapper from "./components/LayoutWrapper";
// @ts-ignore: no type declarations for CSS side-effect import
import "./globals.css";

const montserrat = Montserrat({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "NSSF Sri Lanka - National Shooting Sports Federation",
  description: "The National Shooting Sports Federation of Sri Lanka - Promoting excellence in shooting sports through world-class training, competitions, and athlete development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} ${roboto.variable} font-sans flex flex-col min-h-screen bg-white`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
