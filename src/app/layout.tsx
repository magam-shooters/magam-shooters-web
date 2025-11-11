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
  title: "Magam Shooters - Professional Photography & Video Services",
  description: "Professional photography and video production services",
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
