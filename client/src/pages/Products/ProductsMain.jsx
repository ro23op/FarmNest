import React from 'react'
import ProductCard from './ProductCard';

const ProductsMain = () => {
    const products = [
        {id: 1, name: 'Organic Apples', image: 'https://via.placeholder.com/150', farm: 'Sunny Orchard'},
        {id: 2, name: 'Fresh Carrots', image: 'https://via.placeholder.com/150', farm: 'Green Fields'},
        {id: 3, name: 'Free-range Eggs', image: 'https://via.placeholder.com/150', farm: 'Happy Hens Farm'},
        {id: 4, name: 'Local Honey', image: 'https://via.placeholder.com/150', farm: 'Bee Haven Farm'},
        {id: 5, name: 'Herbal Tea', image: 'https://via.placeholder.com/150', farm: 'Tea Garden'},
        {id: 6, name: 'Whole Wheat Bread', image: 'https://via.placeholder.com/150', farm: 'Baker’s Delight'},
        {id: 7, name: 'Seasonal Vegetables', image: 'https://via.placeholder.com/150', farm: 'Veggie Patch'},
        {id: 8, name: 'Artisan Cheese', image: 'https://via.placeholder.com/150', farm: 'Cheese Makers Co.'},
        {id: 9, name: 'Grass-fed Beef', image: 'https://via.placeholder.com/150', farm: 'Cattle Ranch'},
        {id: 10, name: 'Fresh Milk', image: 'https://via.placeholder.com/150', farm: 'Dairy Farm'},
        {id: 11, name: 'Organic Potatoes', image: 'https://via.placeholder.com/150', farm: 'Potato Patch'},
        {id: 12, name: 'Farm Fresh Herbs', image: 'https://via.placeholder.com/150', farm: 'Herb Haven'},
    ];
  return (
    <section className="min-h-screen bg-gray-100 px-5 xl:px-20 pb-10">
        <div className="flex flex-col items-center justify-center mb-7">
            <h1 className="text-5xl font-heading text-center pt-7 flex-col">Products
                <div className='w-30 ml-1 h-1 bg-orange-600'></div>
            </h1>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </section>
  )
}

export default ProductsMain