import React from 'react';
import ImageSliders from '../components/ImageSliders';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div className='w-full  bg-gray-50 pb-10'>
      <ImageSliders />
      <Cards />
    </div>
  );
};

export default Home;
