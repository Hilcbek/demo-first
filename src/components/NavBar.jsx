import React, { useState } from 'react';
import Links from './Links';
const Credentials = React.lazy(() => import('../components/Credentials.jsx'));
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavBar = () => {
  let [open, setOpen] = useState(false);
  return (
    <nav className="px-8 py-4 flex items-center justify-between w-full">
      <ul className="flex items-center justify-center">
        <Link to={'/'} className="bg-gradient-to-tr from-blue-800 to-rose-700 bg-clip-text text-transparent text-2xl font-extrabold">
          Company Logo
        </Link>
      </ul>
      <Links open={open} />
      <Credentials />
      <div
        onClick={() => setOpen((open) => !open)}
        className="w-10 h-10 z-[9999] flex sm:hidden items-center justify-center shadow-md bg-gray-100 cursor-pointer rounded-full"
      >
        {open ? <MdClose /> : <HiOutlineMenuAlt1 />}
      </div>
    </nav>
  );
};

export default NavBar;
