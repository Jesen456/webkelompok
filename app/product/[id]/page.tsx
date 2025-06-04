"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { notFound } from "next/navigation"

const products = {
  "oil-soap": {
    id: "oil-soap",
    name: "Oil Soap",
    price: 5.0,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "Our premium Oil Soap is crafted with natural oils to deeply cleanse and nourish your skin. This luxurious soap creates a rich, creamy lather that removes impurities while maintaining your skin's natural moisture barrier.",
    ingredients:
      "Saponified oils of coconut, palm, olive, and castor. Natural glycerin, essential oils, and botanical extracts.",
    usage:
      "Wet hands and soap. Work into a rich lather and apply to face and body. Rinse thoroughly with warm water. Use daily for best results.",
  },
  "organic-soap": {
    id: "organic-soap",
    name: "Organic Soap",
    price: 5.0,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "Made with certified organic ingredients, this soap provides gentle cleansing for sensitive skin. Free from harsh chemicals and synthetic fragrances.",
    ingredients: "Certified organic coconut oil, organic olive oil, organic shea butter, organic essential oils.",
    usage: "Apply to wet skin, lather gently, and rinse with lukewarm water. Suitable for daily use on face and body.",
  },
  "glycerin-soap": {
    id: "glycerin-soap",
    name: "Glycerin Soap",
    price: 5.0,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "Our transparent glycerin soap is perfect for all skin types. It provides deep cleansing while keeping your skin soft and moisturized.",
    ingredients: "Pure glycerin, coconut oil, palm oil, natural colorants, and essential oils.",
    usage: "Work into a lather with water and apply to skin. Rinse thoroughly. Perfect for daily cleansing routine.",
  },
  "olive-oil-soap": {
    id: "olive-oil-soap",
    name: "Olive Oil Soap",
    price: 5.0,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "Traditional olive oil soap that has been used for centuries. Rich in antioxidants and vitamins, it nourishes and protects your skin.",
    ingredients: "Extra virgin olive oil, coconut oil, palm oil, sodium hydroxide, natural fragrances.",
    usage:
      "Wet skin and soap, create a rich lather, and massage gently. Rinse with warm water. Use morning and evening.",
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products]
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-pink-500 mb-6">${product.price.toFixed(2)}</p>
            </div>

            {/* Product Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">PRODUCT DESCRIPTION</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Ingredients */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">INGREDIENTS</h2>
              <p className="text-gray-600 leading-relaxed">{product.ingredients}</p>
            </div>

            {/* Usage Instructions */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">USAGE INSTRUCTIONS</h2>
              <p className="text-gray-600 leading-relaxed">{product.usage}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button className="flex-1 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                BUY NOW
              </Button>
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="flex-1 border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                ADD TO CART
              </Button>
            </div>

            <Button variant="ghost" className="w-full text-gray-600 hover:text-pink-500 transition-colors">
              <Heart className="w-4 h-4 mr-2" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
