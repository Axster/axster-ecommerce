import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ShoppingBag, User, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto">
        {/* Top navigation */}
        <div className="flex items-center justify-between h-14 px-4">
          <nav className="flex items-center space-x-6">
            <Link href="/donna" className="text-sm hover:underline">
              Donna
            </Link>
            <Link href="/uomo" className="text-sm text-white bg-black px-4 py-1">
              Uomo
            </Link>
            <Link href="/bambini" className="text-sm hover:underline">
              Bambini
            </Link>
          </nav>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MAbWcKyPZwBP7Qv5PCXHGGs1zBfCBY.png"
              alt="Zalando"
              width={130}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span className="text-sm">IT</span>
            </div>
            <Link href="/account">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/wishlist">
              <Heart className="w-5 h-5" />
            </Link>
            <Link href="/cart">
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="flex items-center justify-between h-12 px-4 border-t">
          <nav className="flex items-center space-x-6">
            <Link href="/new" className="text-sm font-medium">
              NEW IN
            </Link>
            <Link href="/abbigliamento" className="text-sm">
              Abbigliamento
            </Link>
            <Link href="/scarpe" className="text-sm">
              Scarpe
            </Link>
            <Link href="/accessori" className="text-sm">
              Accessori
            </Link>
            <Link href="/sport" className="text-sm">
              Sport
            </Link>
            <Link href="/streetwear" className="text-sm">
              Streetwear
            </Link>
            <Link href="/designer" className="text-sm">
              Designer
            </Link>
            <Link href="/brand" className="text-sm">
              Brand
            </Link>
            <Link href="/beauty" className="text-sm">
              Beauty
            </Link>
            <Link href="/promo" className="text-sm text-red-600">
              PROMO
            </Link>
            <Link href="/second-hand" className="text-sm">
              Second hand
            </Link>
          </nav>
          <div className="w-72">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input type="search" placeholder="Ricerca" className="w-full pl-10 h-9 border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

