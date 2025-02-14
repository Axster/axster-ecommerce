import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PopularLinks } from "@/components/popular-links"
import type React from "react" // Added import for React

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <main>{children}</main>
        <PopularLinks />
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
