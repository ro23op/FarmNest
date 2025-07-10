const FeaturedFarms = () => {
    const farms = [
      {
        id: 1,
        name: "Green Valley Organics",
        image:
          "https://media.istockphoto.com/id/1328004520/photo/healthy-young-soybean-crop-in-field-at-dawn.jpg?s=612x612&w=0&k=20&c=XRw20PArfhkh6LLgFrgvycPLm0Uy9y7lu9U7fLqabVY=",
        description: "Certified Organic Farm",
        produce: "Premium Vegetables & Seasonal Fruits",
        location: "Pune, Maharashtra",
        established: "2008",
        rating: "4.9",
        farmType: "Organic",
        isCertified: true,
      },
      {
        id: 2,
        name: "Sunrise Heritage Farm",
        image: "https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Traditional Farming Excellence",
        produce: "Heirloom Varieties & Ancient Grains",
        location: "Bangalore, Karnataka",
        established: "1995",
        rating: "4.8",
        farmType: "Heritage",
        isCertified: true,
      },
      {
        id: 3,
        name: "Mountain Fresh Herbs",
        image:
          "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "High-Altitude Herb Cultivation",
        produce: "Medicinal & Culinary Herbs",
        location: "Ooty, Tamil Nadu",
        established: "2005",
        rating: "4.8",
        farmType: "Herb Farm",
        isCertified: true,
      },
    ]
  
    return (
      <section className="w-full px-5 xl:px-20 py-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-[4px] w-[6px] inline-block mr-3 rounded-full"></span>
            Featured Farms
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our top-rated farming partners committed to sustainable agriculture and premium quality produce.
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {farms.map((farm) => (
            <div
              key={farm.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={farm.image || "/placeholder.svg"}
                  alt={farm.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
  
                {/* Overlay Badges */}
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {farm.farmType}
                  </span>
                </div>
  
                {farm.isCertified && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      ✓ Certified
                    </span>
                  </div>
                )}
  
                {/* Location Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                  <div className="text-white">
                    <div className="flex items-center text-sm font-medium">
                      <span className="mr-2">📍</span>
                      {farm.location}
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {farm.name}
                  </h3>
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm">⭐</span>
                    <span className="text-sm ml-1 font-medium">{farm.rating}</span>
                  </div>
                </div>
  
                <p className="text-emerald-600 font-semibold text-sm mb-2">{farm.description}</p>
                <p className="text-gray-600 text-sm mb-4">{farm.produce}</p>
  
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Est.</span> {farm.established}
                  </div>
                  <div className="text-sm text-emerald-600 font-medium">Premium Quality ✨</div>
                </div>
  
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-4 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-medium shadow-md">
                    Visit Farm
                  </button>
                  <button className="px-4 py-3 border-2 border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
                    📞
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
            Explore All Partner Farms
          </button>
        </div>
      </section>
    )
  }
  
  export default FeaturedFarms
  