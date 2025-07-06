import React from 'react'

const FeaturedProduct = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '20',
            image: 'https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/the_health_benefits_of_tomatoes_slideshow/650x350_the_health_benefits_of_tomatoes_slideshow.jpg',
            farm: 'Farm 1',
        },
        {
            id: 2,
            name: 'Product 2',
            price: '30',
            image: 'https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg',
            farm: 'Farm 2',
        },
        {
            id: 3,
            name: 'Product 3',
            price: '40',
            image: 'https://gourmetgarden.in/cdn/shop/files/Untitleddesign_e050706b-4d76-41c6-bd4a-1aa106166820.png?v=1751022825',
            farm: 'Farm 3',
        },
        {
            id: 4,
            name: 'Product 4',
            price: '50',
            image: 'https://www.mealpro.net/wp-content/uploads/2024/09/broccoli-thumbnail.jpg',
            farm: 'Farm 4',
        }
    ];
  return (
    <div className="w-full px-5 xl:px-20 mt-5">
        <h2 className='text-3xl font-bold'><span className='h-[22px] w-[5px] mr-2 bg-amber-700 inline-block'></span>Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
            {products.map(product => (
                <div key={product.id} className="m-2 h-[380px] bg-amber-50 rounded-2xl shadow-xl overflow-hidden">
                    <div className="w-full h-[60%] overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover mb-4 hover:scale-105 transition-all ease-in-out" />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{product.farm}</p>
                        <p className="text-lg text-gray-700">Rs. {product.price}/Kg</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProduct