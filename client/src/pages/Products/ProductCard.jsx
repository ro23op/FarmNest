import React from 'react'

const ProductCard = ({key,product}) => {
  return (
    <div key={key} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">Farm: {product.farm}</p>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-800 transition-colors duration-300">
            View Details
        </button>
    </div>
  )
}

export default ProductCard