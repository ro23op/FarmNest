import React from 'react'
import FarmCard from './FarmCard';

const FarmMain = () => {
    const farms = [
        {
            id: 1,
            name: "Sarthak Farms",
            location: "Pune, Maharashtra",
            description: "Organic farm specializing in fresh vegetables and fruits.",
            image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            name: "Green Valley Farms",
            location: "Bangalore, Karnataka",
            description: "Sustainable farming practices with a focus on organic produce.",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 3,
            name: "Fresh Fields",
            location: "Delhi NCR",
            description: "Farm-fresh vegetables delivered directly to your doorstep.",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 4,
            name: "Organic Harvest",
            location: "Hyderabad, Telangana",
            description: "Certified organic farm with a wide range of seasonal produce.",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 5,
            name: "Nature's Bounty",
            location: "Chennai, Tamil Nadu",
            description: "Locally sourced organic fruits and vegetables.",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 6,
            name: "Farm Fresh",
            location: "Kolkata, West Bengal",
            description: "Freshly harvested vegetables and fruits delivered daily.",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 7,
            name: "Eco Farms",
            location: "Ahmedabad, Gujarat",
            description: "Eco-friendly farm producing organic vegetables and fruits.",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 8,
            name: "Sunny Acres",
            location: "Jaipur, Rajasthan",
            description: "Sunny farm with a variety of seasonal produce.",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            id: 9,
            name: "Heritage Farms",
            location: "Lucknow, Uttar Pradesh",
            description: "Traditional farming methods with a focus on quality.",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
    ];
  return (
    <div className="w-full min-h-screen  bg-gray-100">
        <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-5xl font-heading text-center pt-7 flex-col">Farms
                <div className='w-25 ml-1 h-1 bg-orange-600'></div>
            </h1>
            
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-6 xl:px-25">
            {farms.map(farm => (
            <FarmCard key={farm.id} farm={farm} />
        ))}
        </div>
    </div>
  )
}

export default FarmMain