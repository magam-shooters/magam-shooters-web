import type { Metadata } from "next";
import { Play } from "next/font/google";
import LayoutWrapper from "./components/LayoutWrapper";
// @ts-ignore: no type declarations for CSS side-effect import
import "./globals.css";

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-play",
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
      <body className={`${play.variable} font-sans flex flex-col min-h-screen bg-white`} suppressHydrationWarning>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
