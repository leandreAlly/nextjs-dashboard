'use client';

import Typed from 'react-typed';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="text-black">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <div className="flex items-center justify-center">
          <Typed
            className="py-4 pl-2 text-xl font-bold sm:text-2xl md:pl-4 md:text-3xl"
            strings={['How Do You manage Your trading analytics?']}
            typeSpeed={40}
            backSpeed={20}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Trading at its Finest. Empowering Change, More analytics at a Time.
        </p>
        <Link href="/login">
          <button className="mx-auto my-6 w-[200px] rounded-md bg-blue-500 py-3 font-medium text-white hover:bg-blue-700">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
