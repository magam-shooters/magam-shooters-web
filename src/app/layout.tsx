import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutWrapper from "./components/LayoutWrapper";
// @ts-ignore: no type declarations for CSS side-effect import
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} font-sans flex flex-col min-h-screen bg-white`} suppressHydrationWarning>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
