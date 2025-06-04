"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SHOP", href: "/shop" },
  { name: "REVIEW", href: "/review" },
]

export default function Header() {
  const pathname = usePathname()
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-gold-500 bg-clip-text text-transparent">
              GLAMOURE GLOW
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href === "/shop" && pathname.startsWith("/product"))

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-pink-500 ${
                    isActive ? "text-pink-500 flex items-center gap-1" : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {isActive && <span className="text-green-500">✓</span>}
                </Link>
              )
            })}
          </nav>

          {/* Cart */}
          <Button variant="ghost" size="sm" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href === "/shop" && pathname.startsWith("/product"))

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-pink-500 ${
                    isActive ? "text-pink-500 flex items-center gap-1" : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {isActive && <span className="text-green-500">✓</span>}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
