import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="mt-[-150px] w-full bg-white px-4 py-16">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2 ">
        <div className="p-6 md:px-10 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshot of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={630}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-blue-500 ">
            TRADING ANALYTICS DASHBOARD
          </p>
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Manage Trading Analytics Centrally
          </h1>
          <p>
            Welcome to our feedback community! I amm your dedicated host
            passionate about empowering voices and driving positive change.
            Together we will explore new horizons and improve our services. Your
            input fuels our growth, and we are committed to making your
            experience extraordinary. Join us on this journey and let shape a
            brighter future one feedback at a time
          </p>
          <button className="mx-auto my-6 w-[200px] rounded-md border border-black bg-black py-3 font-semibold text-blue-500 transition-all hover:border-black hover:bg-white hover:text-black md:mx-0">
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
