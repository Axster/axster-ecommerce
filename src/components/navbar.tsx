"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShoppingBag,
  User,
  Globe,
} from "lucide-react";
import logo from "../../public/images/logo.png";
import Searchbar from "./searchbar";
import { GenderParams } from "@/app/[gender]/gender.types";
import { useParams } from "next/navigation";

export function Navbar() {
  const { gender } = useParams<GenderParams>();

  return (
    <header className="border-b">
      <div className="container mx-auto">
        {/* Top navigation */}
        <div className="flex items-center justify-between h-14 px-4">
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/women"
              className={`text-sm font-extrabold ${gender === "women" ? "text-[#FF5722] bg-black px-4 py-1" : "hover:underline"}`}
            >
              Donna
            </Link>
            <Link
              href="/men"
              className={`text-sm font-extrabold ${gender === "men" ? "text-[#FF5722] bg-black px-4 py-1" : "hover:underline"}`}
            >
              Uomo
            </Link>
            <Link
              href="/children"
              className={`text-sm font-extrabold ${gender === "children" ? "text-[#FF5722] bg-black px-4 py-1" : "hover:underline"}`}
            >
              Bambini
            </Link>
          </nav>
          <Link
            href="/"
            className="flex items-start md:items-center space-x-6"
          >
            <Image
              src={logo}
              alt="Steve Jobs Deal"
      
              className="h-12 w-auto"
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
              href={`/${gender}/clothing`}
              className="text-sm font-semibold"
            >
              Abbigliamento
            </Link>
            <Link
              href={`/${gender}/shoes`}
              className="text-sm font-semibold pr-4 md:pr-0"
            >
              Scarpe
            </Link>
            <Link
              href={`/${gender}/accessories`}
              className="text-sm font-semibold hidden md:inline"
            >
              Accessori
            </Link>
            <Link
              href={`/${gender}/sport`}
              className="text-sm font-semibold hidden md:inline"
            >
              Sport
            </Link>
            <Link
              href={`/${gender}/beauty`}
              className="text-sm font-semibold hidden md:inline"
            >
              Beauty
            </Link>
            <Link
              href={`/${gender}/promo`}
              className="text-sm font-semibold text-red-600 hidden md:inline"
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
