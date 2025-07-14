import React from 'react'

const HomeText = () => {
  return (
    <div className='py-40 flex flex-col items-center justify-center lg:items-start lg:py-20 lg:pl-10 xl:pl-30 '>
        <h1 className='text-3xl md:text-4xl font-mono font-medium leading-10'>Bringing the <span className='text-[#0B7779] '>Farm</span><br />to Your Doorstep</h1>
        <h2 className='text-4xl sm:text-5xl mt-3 font-sans font-bold text-black'>
            <span className='text-[#F4943E]'>Fresh</span>. 
            <span className='text-[#DA6801]'>Local</span>. 
            <span className='text-[#A44F04]'>Honest</span>.
        </h2>
        <p className='mt-4 text-center lg:text-start'>At <span className='text-[#0B7779] italic'>FarmNest</span>, we connect you directly with
        <br /> trusted local farmers to bring you the <br /> freshest fruits, vegetables, dairy, and more <br />— all grown with care and delivered right to your doorstep.</p>
    </div>
  )
}

export default HomeText