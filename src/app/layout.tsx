import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PopularLinks } from "@/components/popular-links";
import type React from "react"; // Added import for React
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zalando",
  description: "Created for exam",
  generator: "with passion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body
        className={helveticaRegular.className}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Navbar />
          <main>{children}</main>
          <PopularLinks />
        </div>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import { helveticaRegular } from "./font";
