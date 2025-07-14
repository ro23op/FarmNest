const FeaturedProduct = () => {
    const products = [
      {
        id: 1,
        name: "Organic Cherry Tomatoes",
        price: "120",
        image:
          "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        farm: "Green Valley Organics",
        category: "Vegetables",
        isOrganic: true,
        rating: "4.8",
        originalPrice: "150",
        discount: "20%",
        unit: "kg",
      },
      {
        id: 2,
        name: "Farm Fresh Spinach",
        price: "45",
        image:
          "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        farm: "Sunrise Heritage Farm",
        category: "Leafy Greens",
        isOrganic: true,
        rating: "4.7",
        originalPrice: "55",
        discount: "18%",
        unit: "bunch",
      },
      {
        id: 3,
        name: "Fresh Herb Bundle",
        price: "25",
        image:
          "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        farm: "Mountain Fresh Herbs",
        category: "Herbs",
        isOrganic: true,
        rating: "4.9",
        originalPrice: "35",
        discount: "29%",
        unit: "bundle",
      },
      {
        id: 4,
        name: "Organic Baby Potatoes",
        price: "40",
        image:
          "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        farm: "Earth Harvest Farm",
        category: "Vegetables",
        isOrganic: true,
        rating: "4.6",
        originalPrice: "50",
        discount: "20%",
        unit: "kg",
      },
    ]
  
    return (
      <section className="w-full px-5 xl:px-20 py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-orange-600 h-[26px] w-[6px] inline-block mr-2"></span>
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hand-picked premium products from our trusted farms. Fresh, organic, and delivered with care.
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
  
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                      -{product.discount}
                    </span>
                  </div>
                )}
  
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                    {product.category}
                  </span>
                </div>
  
                {/* Organic Badge */}
                {product.isOrganic && (
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                      🌱 Organic
                    </span>
                  </div>
                )}
              </div>
  
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {product.name}
                </h3>
  
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">From:</span> {product.farm}
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <span className="text-xs">⭐</span>
                    <span className="text-sm ml-1 font-medium">{product.rating}</span>
                  </div>
                </div>
  
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-600">₹{product.price}</span>
                    <span className="text-sm text-gray-500">/{product.unit}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                </div>
  
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all duration-300 font-medium shadow-md">
                    Add to Cart
                  </button>
                  <button className="px-3 py-2 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Special Offers Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🎉 Special Farm Fresh Deals</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Get up to 30% off on bulk orders and enjoy free delivery on orders above ₹500. Fresh from farm to your table!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
              Shop All Products
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-300 font-semibold">
              View Bulk Deals
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturedProduct
  