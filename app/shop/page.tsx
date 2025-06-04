import ProductCard from "@/components/product-card"

const products = [
  {
    id: "oil-soap",
    name: "Oil Soap",
    price: 5.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "organic-soap",
    name: "Organic Soap",
    price: 5.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "glycerin-soap",
    name: "Glycerin Soap",
    price: 5.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "olive-oil-soap",
    name: "Olive Oil Soap",
    price: 5.0,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">ONLINE SHOP</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}
