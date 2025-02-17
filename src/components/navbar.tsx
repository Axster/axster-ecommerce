import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, User, Globe } from "lucide-react";
import zalando from "../../public/images/zalando_logo.png";
import Searchbar from "./searchbar";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto">
        {/* Top navigation */}
        <div className="flex items-center justify-between h-14 px-4">
          <nav className="flex items-center space-x-6">
            <Link
              href="/donna"
              className="text-sm font-extrabold hover:underline"
            >
              Donna
            </Link>
            <Link
              href="/uomo"
              className="text-sm font-extrabold text-white bg-black px-4 py-1"
            >
              Uomo
            </Link>
            <Link
              href="/bambini"
              className="text-sm  font-extrabold hover:underline"
            >
              Bambini
            </Link>
          </nav>
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src={zalando}
              alt="Zalando"
              width={130}
              height={40}
              className="h-7 w-auto"
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
        <div className="flex items-center justify-between h-12 px-4">
          <nav className="flex items-center space-x-6">
            <Link
              href="/new"
              className="text-xs font-semibold"
            >
              NEW IN
            </Link>
            <Link
              href="/abbigliamento"
              className="text-xs font-semibold"
            >
              Abbigliamento
            </Link>
            <Link
              href="/scarpe"
              className="text-xs font-semibold"
            >
              Scarpe
            </Link>
            <Link
              href="/accessori"
              className="text-xs font-semibold"
            >
              Accessori
            </Link>
            <Link
              href="/sport"
              className="text-xs font-semibold"
            >
              Sport
            </Link>
            <Link
              href="/streetwear"
              className="text-xs font-semibold"
            >
              Streetwear
            </Link>
            <Link
              href="/designer"
              className="text-xs font-semibold"
            >
              Designer
            </Link>
            <Link
              href="/brand"
              className="text-xs font-semibold"
            >
              Brand
            </Link>
            <Link
              href="/beauty"
              className="text-xs font-semibold"
            >
              Beauty
            </Link>
            <Link
              href="/promo"
              className="text-xs font-semibold text-red-600"
            >
              PROMO
            </Link>
          </nav>
          <div className="w-50">
            <div className="relative">
              <Searchbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
