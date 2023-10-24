"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex flex-col xl:flex-row gap-5 relative z-0 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex-1 pt-36 px-6 sm:px-16">
        <h1 className="font-extrabold text-[50px]  2xl:text-[72px] sm:text-[64px] ">
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="flex justify-end items-end w-full xl:h-screen xl:flex-[1.5] ">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="absolute xl:-top-18 xl:-right-[48%] -right-1/4 bg-blue-600 bg-repeat-round -z-10 w-full xl:h-screen h-[420px] rotate-45" />
      </div>
    </div>
  );
};

export default Hero;
