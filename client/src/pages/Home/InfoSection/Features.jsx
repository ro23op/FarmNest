import React from 'react'
import { CiCircleCheck, CiLocationOn, CiDeliveryTruck } from "react-icons/ci";
import { GiFarmTractor } from "react-icons/gi";

const Features = () => {
    return (
        <div className="w-full px-5 xl:px-20">
            <h2 className='text-4xl font-black text-[#0b725e] text-center mt-10'>Why Choose FarmNest ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <div className='flex flex-col items-center justify-center p-6 rounded-lg hover:scale-105 transition-all ease-in-out '>
                    <div className="h-[100px] w-[100px] rounded-full bg-green-100 flex items-center justify-center">
                        <CiCircleCheck className="text-7xl text-green-700" />
                    </div>
                    <h3 className='text-lg mt-2 font-bold text-amber-700'>Farm-Fresh Produce</h3>
                    <p className='text-lg text-center text-gray-600 font-sans mt-2'>No middlemen. Just straight-from-the-soil goodness.</p>
                </div>

                <div className='flex flex-col items-center justify-center p-6 rounded-lg hover:scale-105 transition-all ease-in-out'>
                    <div className="h-[100px] w-[100px] rounded-full bg-green-100 flex items-center justify-center">
                        <CiLocationOn className="text-7xl text-green-700" />
                    </div>
                    <h3 className='text-lg mt-2 font-bold text-amber-700'>Locally Sourced</h3>
                    <p className='text-lg text-center text-gray-600 font-sans mt-2'>Support nearby farms and reduce your food miles.</p>
                </div>

                <div className='flex flex-col items-center justify-center p-6 rounded-lg hover:scale-105 transition-all ease-in-out'>
                    <div className="h-[100px] w-[100px] rounded-full bg-green-100 flex items-center justify-center">
                        <CiDeliveryTruck className="text-7xl text-green-700" />
                    </div>
                    <h3 className='text-lg mt-2 font-bold text-amber-700'>Farm-Fresh Produce</h3>
                    <p className='text-lg text-center text-gray-600 font-sans mt-2'>No middlemen. Just straight-from-the-soil goodness.</p>
                </div>
                <div className='flex flex-col items-center justify-center p-6 rounded-lg hover:scale-105 transition-all ease-in-out'>
                    <div className="h-[100px] w-[100px] rounded-full bg-green-100 flex items-center justify-center">
                        <GiFarmTractor className="text-7xl text-green-700" />
                    </div>
                    <h3 className='text-lg mt-2 font-bold text-amber-700'>Farm-Fresh Produce</h3>
                    <p className='text-lg text-center text-gray-600 font-sans mt-2'>No middlemen. Just straight-from-the-soil goodness.</p>
                </div>
                     
        </div>
        </div>
    )
}

export default Features