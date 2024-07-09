import React from 'react';
const ImageSliders = React.lazy(() => import('../components/ImageSliders.jsx'));
const Cards = React.lazy(() => import('../components/Cards.jsx'));

const Home = () => {
  return (
    <div className="w-full  bg-gray-50 pb-10">
      <ImageSliders />
      <Cards />
    </div>
  );
};

export default Home;
