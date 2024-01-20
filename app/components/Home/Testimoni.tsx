'use client';

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Stars, ArrowBack, ArrowNext } from '../../../public/assets';
import Image, { StaticImageData } from 'next/image';
import TitleMoni from './TitleMoni';

interface Testimonies {
  name: string;
  image: string | StaticImageData;
  city: string;
  country: string;
  rating: string;
  testimoni: string;
}

interface TestimoniProps {
  listTestimoni: Testimonies[];
}

const Testimoni: React.FC<TestimoniProps> = ({ listTestimoni = [] }) => {
  const settings = {
    dots: true,
    customPaging: function (i: number) {
      return (
        <a className="">
          <span className="mx-2 block h-4 w-4 cursor-pointer rounded-l-full rounded-r-full transition-all "></span>
        </a>
      );
    },
    dotsClass: 'slick-dots w-max absolute mt-20',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider>(null);

  const handleSliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleSliderNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <TitleMoni />
      <Slider
        {...settings}
        arrows={false}
        ref={sliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="flex items-stretch px-3" key={index}>
            <div className="flex flex-col rounded-lg  border-2 border-gray-500 p-8 transition-all hover:border-blue-600">
              <div className="flex w-full flex-col items-stretch xl:flex-row xl:items-center">
                <div className="order-2 flex xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="ml-5 flex flex-col text-left">
                    <p className="text-black-600 text-lg capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-black-500 text-sm capitalize">
                      {listTestimonis.city}, {listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="order-1 ml-auto flex flex-none items-center xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="ml-4 flex">
                    <Image src={Stars} alt="" width={50} height={50} />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="mt-14 flex w-auto flex-none justify-between">
          <div
            className="hover:text-white-500 mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-blue-500 bg-white text-[#64B937] transition-all hover:bg-blue-600"
            onClick={handleSliderPrev}
          >
            <Image
              src={ArrowBack}
              width={50}
              height={50}
              alt="arrow-back"
              className="h-6 w-6 "
            />
          </div>
          <div
            className="hover:text-white-500 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-blue-500 bg-white text-blue-500 transition-all hover:bg-blue-600"
            onClick={handleSliderNext}
          >
            <Image
              src={ArrowNext}
              width={50}
              height={50}
              alt="arrow-back"
              className="h-6 w-6 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
