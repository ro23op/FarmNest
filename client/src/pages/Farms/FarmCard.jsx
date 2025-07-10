const FarmCard = ({ farm }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="relative h-56 overflow-hidden">
        <img
          src={farm.image || "/placeholder.svg"}
          alt={farm.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">{farm.farmType}</span>
        </div>
        {farm.isCertified && (
          <div className="absolute top-4 left-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">✓ Certified</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="text-white">
            <div className="flex items-center text-sm">
              <span className="mr-2">📍</span>
              {farm.location}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
          {farm.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{farm.description}</p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <span className="font-medium">Established:</span> {farm.established}
            </div>
            <div className="flex items-center text-yellow-500">
              <span className="text-sm">⭐</span>
              <span className="text-sm ml-1">{farm.rating}</span>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">Specializes in:</span> {farm.specialties}
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">Farm Size:</span> {farm.size}
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium">
            Visit Farm
          </button>
          <button className="px-4 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
            📞
          </button>
        </div>
      </div>
    </div>
  )
}

export default FarmCard
