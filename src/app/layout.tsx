import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// @ts-ignore: no type declarations for CSS side-effect import
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
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
      <body className={`${roboto.variable} font-roboto flex flex-col min-h-screen bg-white`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
