import type { Metadata } from "next";
import LayoutWrapper from "./components/LayoutWrapper";
// @ts-ignore: no type declarations for CSS side-effect import
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="roboto-font flex flex-col min-h-screen bg-white" suppressHydrationWarning>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
