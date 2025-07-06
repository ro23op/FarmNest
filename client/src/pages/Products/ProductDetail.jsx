import React from 'react';

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row p-6 -mt-5 lg:p-20 gap-10">
      
      {/* Left: Product Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80" 
          alt="Organic Carrots" 
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Right: Product Info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">Organic Carrots (1kg)</h1>
        <p className="text-gray-700 text-lg mb-4">
          Grown naturally with zero pesticides, these farm-fresh carrots come directly from 
          <span className="font-medium text-green-700"> Sarthak Farms</span> in Pune. Packed with nutrients and full of flavor — perfect for salads, soups, and juices.
        </p>

        <div className="flex flex-col gap-3 mb-6">
          <div className="text-lg text-gray-800"><strong>Price:</strong> ₹60</div>
          <div className="text-lg text-gray-800"><strong>Farmer:</strong> Sarthak Pawar</div>
          <div className="text-lg text-gray-800"><strong>Location:</strong> Pune, Maharashtra</div>
          <div className="text-lg text-gray-800"><strong>Certifications:</strong> Organic India, FSSAI Verified ✅</div>
        </div>

        <div className="flex gap-4">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-20 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
