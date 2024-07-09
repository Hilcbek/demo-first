import React from 'react';
const Card = React.lazy(() => import('../components/Card.jsx'));
import { IoSettingsOutline } from 'react-icons/io5';
import { MdFamilyRestroom } from 'react-icons/md';
import { GiOfficeChair } from 'react-icons/gi';
const cards = [
  {
    img: <IoSettingsOutline size={40} />,
    title: 'Financial planning',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repudiandae, molestiae quis asperiores eum reprehenderit officia modi laboriosam similique tenetur.',
  },
  {
    img: <MdFamilyRestroom size={40} />,
    title: 'Management planning',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repudiandae, molestiae quis asperiores eum reprehenderit officia modi laboriosam similique tenetur.',
  },
  {
    img: <GiOfficeChair size={40} />,
    title: 'Social planning',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repudiandae, molestiae quis asperiores eum reprehenderit officia modi laboriosam similique tenetur.',
  },
];

const Cards = () => {
  return (
    <div className="w-full flex my-5 px-5 items-center justify-start gap-4 flex-col">
      <h1 style={{ userSelect : 'none'}} className="text-4xl mb-5 font-normal tracking-widest">Programs</h1>
      <div className="flex justify-start gap-5 items-center flex-wrap">
        {cards.map((card) => {
          return <Card card={card} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
