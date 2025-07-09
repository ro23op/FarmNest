import React from 'react'

const FeaturedFarms = () => {
    const farms = [
        {            id: 1,
            name: 'Farm 1',
            image: 'https://img.freepik.com/premium-photo/greengrocer-selling-organic-fresh-agricultural-product-farmer-market_53876-58800.jpg',
            description: 'Organic Farm',
            produce: 'Fresh Produce',
        },
        {
            id: 2,
            name: 'Farm 2',
            image: 'https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg',
            description: 'Sustainable Farm',
            produce: 'Vegetables and Fruits',
        },
        {
            id: 3,
            name: 'Farm 3',
            image: 'https://i.herbalreality.com/wp-content/uploads/2024/09/01151754/Ecological-farming-for-medicinal-herbs.jpg',
            description: 'Herb Farm',
            produce: 'Fresh Herbs',
        }
    ];
  return (
    <div className="w-full px-5 xl:px-20 mt-5 mb-10">
        <h2 className='text-3xl font-bold '><span className='bg-yellow-500 h-[22px] w-[5px] inline-block mr-2'></span>Featured Farms</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {farms.map(farm => (
                <div key={farm.id} className="m-2 h-[380px] bg-[#0B7779]/90 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all ease-in-out">
                    <div className="w-full h-[60%]  hover:bg-gray-600 overflow-hidden">
                        <img src={farm.image} alt={farm.name} className="w-full h-full object-cover mb-4 " />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl text-white font-semibold">{farm.name}</h3>
                        <p className="text-sm text-gray-200 mb-2">{farm.description}</p>
                        <p className="text-lg text-white">{farm.produce}</p>
                    </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default FeaturedFarms