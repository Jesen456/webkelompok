import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 tracking-tight">Clean. Moisture. Care.</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore the world of clean, moisturized, and attentive skincare with Glamoure Glow. Our premium collection
            of natural skincare products is crafted with the finest ingredients to nourish your skin and enhance your
            natural beauty. Experience the luxury of clean beauty that cares for your skin and the environment.
          </p>
          <Link href="/shop">
            <Button className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              SHOP NOW
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-gold-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">Carefully selected organic and natural ingredients for your skin</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-gold-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Luxury skincare products that deliver exceptional results</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-gold-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">💚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Friendly</h3>
            <p className="text-gray-600">Sustainable packaging and environmentally conscious practices</p>
          </div>
        </div>
      </section>
    </main>
  )
}
