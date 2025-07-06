import React from 'react';
import HomeBG from './HomeBG';
import HomeText from './HomeText';
import HomePic from './HomePic';

const Home = () => {
  return (
    <div className="relative z-10 -mt-10 min-h-screen">
      <HomeBG />
      <div className="flex flex-col lg:flex-row justify-between">
        <HomeText />
        <HomePic />
      </div>
    </div>
  );
};

export default Home;
