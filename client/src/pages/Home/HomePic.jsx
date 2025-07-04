import React from 'react';

const HomePic = () => {
  return (
    <div className="hidden -mr-4 lg:block relative w-full lg:w-1/2 lg:h-screen overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-500 hover:scale-110"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/greengrocer-selling-organic-fresh-agricultural-product-farmer-market_53876-58800.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-600/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to FarmNest
        </h1>
        <p className="text-lg lg:text-xl drop-shadow-md max-w-md">
          Fresh produce from your local farmers, delivered with care.
        </p>
      </div>
    </div>
  );
};

export default HomePic;
