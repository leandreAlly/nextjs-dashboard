'use client';

import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-black">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <div className="flex items-center justify-center">
          <Typed
            className="py-4 pl-2 text-xl font-bold sm:text-2xl md:pl-4 md:text-3xl"
            strings={['Do people like attending my events?']}
            typeSpeed={40}
            backSpeed={20}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Feedback at its Finest. Empowering Change, One Response at a Time.
        </p>
        <button className="mx-auto my-6 w-[200px] rounded-md bg-[#64B937] py-3 font-medium text-black hover:bg-[#228B22]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
