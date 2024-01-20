'use client';

import React, { use, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import AcmeLogo from '../../ui/acme-logo';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 text-[#000]">
      <div className="">
        <Image src="/itrade.svg" width={200} height={200} alt="logo" />
      </div>
      <ul className="hidden md:flex">
        <Link href="/">
          <li className="p-4">Home</li>
        </Link>
        <li className="p-4">About</li>
        <li className="p-4">Pricing</li>
        <li className="p-4">Contact</li>
        <Link href="/auth/signin">
          <li className="p-4 text-xl font-bold">Login</li>
        </Link>

        <Link href="/auth/signup">
          <div className="m-auto rounded bg-[#E9C368] p-4 text-xl font-bold transition-all hover:bg-[#FFC300]">
            Signup for free
          </div>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out'
            : 'fixed left-[-100%] duration-500 ease-in-out'
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">
          iTrade.
        </h1>
        <li className="border-b border-gray-600 p-4">Home</li>
        <li className="border-b border-gray-600 p-4">Company</li>
        <li className="border-b border-gray-600 p-4">Resources</li>
        <li className="border-b border-gray-600 p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
