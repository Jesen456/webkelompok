"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-pink-500 transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-2xl font-bold text-pink-500 mb-4">${product.price.toFixed(2)}</p>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          ADD TO CART
        </Button>
      </div>
    </div>
  )
}
