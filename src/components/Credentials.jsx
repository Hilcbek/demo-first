import React from 'react';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const Credentials = () => {
  return (
    <div className="hidden sm:flex items-center justify-end gap-3">
      <button className="p-3 bg-yellow-500 flex items-center justify-center gap-2 text-white font-semibold tracking-wide rounded-md cursor-pointer">
        <FaUser />
        <span>Sign Up</span>
      </button>
    </div>
  );
};

export default Credentials;
