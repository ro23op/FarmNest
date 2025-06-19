import React from 'react';
import HomeBG from './HomeBG';
import HomeText from './HomeText';
import HomePic from './HomePic';

const Home = () => {
  return (
    <div className="relative z-10  min-h-screen px-4 py-10">
      <HomeBG />
      <div className="flex flex-col lg:flex-row justify-between">
        <HomeText />
        <HomePic />
        
      </div>
    </div>
  );
};

export default Home;
