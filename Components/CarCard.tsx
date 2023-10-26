"use client";
import { CarProps } from "@/types";
import { calCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, drive, make, model, transmission, year } = car;
  const priceToRentCar = calCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-blue-100 hover:bg-white hover:shadow-md rounded-3xl mb-4">
      {/* title */}
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {model} {make}
        </h2>
      </div>
      {/* price/day */}
      <p className=" flex mt-6">
        <span className="font-bold">$</span>
        <span className="text-2xl font-bold">{priceToRentCar}</span>
        <span className="flex items-end">/day</span>
      </p>
      {/* image car */}
      <div className=" mx-auto items-center flex my-10">
        <Image
          src={generateCarImageUrl(car)}
          className="object-contain"
          width={240}
          height={60}
          alt="car-logo"
        />
      </div>

      {/* technical detail */}
      <div className="relative flex w-full mt-2 group/tech">
        <div className="flex justify-between w-full text-gray-400 group-hover/tech:invisible">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col  justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="text-[14px] leading-[17px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col  justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="text-[14px] leading-[17px]">{city_mpg} MPG</p>
          </div>
        </div>

        {/* btn */}
        <div className="hidden group-hover/tech:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-blue-500"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false) } car={car} />
    </div>
  );
};

export default CarCard;
