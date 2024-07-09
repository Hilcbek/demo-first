import React from 'react';
import { FaChevronDown, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const LinkObj = [
  {
    label: 'Home',
    href: '/',
    drop: true,
  },
  {
    label: 'About Us',
    href: '/about',
    drop: false,
  },
  {
    label: 'Services',
    href: '/services',
    drop: true,
  },
  {
    label: 'Pages',
    href: '/pages',
    drop: true,
  },
  {
    label: 'Blog',
    href: '/blog',
    drop: true,
  },
  {
    label: 'Contact',
    href: '/contact',
    drop: false,
  },
];

const Links = ({ open }) => {
  let currentPath = useLocation().pathname.split('')[0];
  return (
    <>
      <div className="hidden lg:flex items-center justify-center gap-10">
        {LinkObj.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className={`${
              currentPath === link.href && 'text-yellow-600'
            } flex font-semibold items-center justify-start gap-1`}
          >
            <h1>{link.label}</h1>
            {link.drop && <FaChevronDown />}
          </Link>
        ))}
      </div>
      <div
        className={`${
          open ? 'left-0' : 'left-[-110%]'
        } absolute z-[999] top-0 w-[85%] transition-all ease-in-out duration-300 bg-white/90 after:absolute after:-right-20 after:top-0 after:content-[''] after:bg-black/20 after:w-[18%] shadow-md shadow-gray-400 after:h-full flex sm:hidden p-20 h-screen items-start justify-start gap-5 flex-col`}
      >
        {LinkObj.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className={`${
              currentPath === link.href &&
              'bg-yellow-500 text-white w-[90%] p-5 rounded-lg'
            } flex font-semibold items-center justify-start gap-1`}
          >
            <h1 className="text-xl">{link.label}</h1>
            {link.drop && <FaChevronDown />}
          </Link>
        ))}
        <button className="p-3 bg-yellow-500 w-full flex items-center justify-center gap-2 text-white font-semibold tracking-wide rounded-md cursor-pointer">
          <FaUser />
          <span>Sign Up</span>
        </button>
      </div>
    </>
  );
};

export default Links;
