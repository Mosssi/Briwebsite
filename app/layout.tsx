import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import SpotlightCursor from "@/components/SpotlightCursor"

export const metadata: Metadata = {
  title: "Brianna — Portfolio",
  description: "UI/UX designer and front-end developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-gray-200 antialiased">
        <SpotlightCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}