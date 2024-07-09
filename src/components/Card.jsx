import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="p-6 sm:max-w-[450px] cursor-pointer transition-all ease-linear duration-150 hover:bg-transparent shadow-md bg-white flex items-start justify-start flex-col gap-3 rounded-md shadow-gray-300">
      <div className="w-16 h-16 rounded-full bg-gray-200 shadow-md shadow-gray-200 flex items-center justify-center">
        {card?.img}
      </div>
      <h1 className="text-2xl font-semibold">{card?.title}</h1>
      <p className="text-gray-400 text-sm">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{card?.desc}
      </p>
      <button className="bg-rose-500 p-3 rounded-3xl text-sm text-white hover:scale-[.98] transition ease-linear duration-150 cursor-pointer active:scale-[1.02]">
        Read More
      </button>
    </div>
  );
};

export default Card;
