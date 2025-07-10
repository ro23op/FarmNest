const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image || "/placeholder.svg?height=300&width=300"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
        {product.isOrganic && (
          <div className="absolute top-3 left-3">
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">🌱 Organic</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-500">
            <span className="font-medium">Farm:</span> {product.farm}
          </div>
          <div className="flex items-center text-yellow-500">
            <span className="text-xs">⭐</span>
            <span className="text-sm ml-1">{product.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-emerald-600">
            ₹{product.price}
            <span className="text-sm text-gray-500 font-normal">/{product.unit}</span>
          </div>
          <div className="text-sm text-gray-500">Stock: {product.stock}</div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium">
            Add to Cart
          </button>
          <button className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
            ❤️
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
