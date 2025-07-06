import React from 'react'

const FarmCard = ({key,farm}) => {
  return (
    <div key={key} className="max-w-sm mx-auto flex bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="w-[50%] h-full">
        <img className="w-full h-50 object-cover" src={farm.image} alt={farm.name} />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold text-gray-800">{farm.name}</h2>
        <p className="text-gray-600">{farm.location}</p>
        <p className="mt-2 text-gray-700">{farm.description}</p>
      </div>
    </div>
  )
}

export default FarmCard