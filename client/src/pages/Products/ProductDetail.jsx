const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row p-6 -mt-5 lg:p-20 gap-10">
      {/* Left: Product Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/placeholder.svg?height=500&width=500"
          alt="Organic Carrots"
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Right: Product Info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">Farm Fresh Carrots (1kg)</h1>
        <p className="text-gray-700 text-lg mb-4">
          Grown naturally with zero pesticides, these farm-fresh carrots come directly from
          <span className="font-medium text-green-700"> Green Valley Organics</span> in Pune. Packed with nutrients and
          full of flavor — perfect for salads, soups, and juices.
        </p>

        <div className="flex flex-col gap-3 mb-6">
          <div className="text-lg text-gray-800">
            <strong>Price:</strong> ₹60/kg
          </div>
          <div className="text-lg text-gray-800">
            <strong>Farmer:</strong> Rajesh Sharma
          </div>
          <div className="text-lg text-gray-800">
            <strong>Location:</strong> Pune, Maharashtra
          </div>
          <div className="text-lg text-gray-800">
            <strong>Certifications:</strong> Organic India, FSSAI Verified ✅
          </div>
          <div className="text-lg text-gray-800">
            <strong>Harvest Date:</strong> 2 days ago
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <label className="text-gray-700 font-medium">Quantity:</label>
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-20 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <span className="text-gray-600">kg</span>
          <button className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700 transition-all font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
