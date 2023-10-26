import { CarProps } from "@/types";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";
interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* background */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          {/* card detail modal */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full min-h-[400px] max-w-md transform overflow-hidden rounded-2xl p-4 bg-white text-left align-middle shadow-xl transition-all">
                  {/* x button */}
                  <div className="-mt-2 -mr-2  flex justify-end ">
                    <CustomButton
                      title=""
                      containerStyles="z-10 inline-flex justify-center rounded-full border border-transparent bg-blue-100 px-4  text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      handleClick={closeModal}
                      rightIcon={"/close.svg"}
                    />
                  </div>
                  {/* image */}
                  <div className="w-full flex-col -mt-6 h-full">
                    {/* main img */}
                    <div className="w-full justify-center items-center flex">
                      <Image
                        src={generateCarImageUrl(car)}
                        className="object-contain absolute z-10"
                        width={260}
                        height={60}
                        alt="car-logo"
                      />

                      <Image
                        src="/pattern.png"
                        width={410}
                        height={10}
                        alt="car-background"
                        style={{ maxWidth: "100%", height: "180px" }}
                      />
                    </div>
                    {/* three small img */}
                    <div className="w-full  flex z-10 my-2 gap-2 px-1  ">
                      <div className="relative w-full h-24 bg-blue-100 rounded-lg flex-1">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          className="object-contain absolute z-10 "
                          alt="car-logo"
                          fill
                          priority
                        />
                      </div>
                      <div className="relative w-full h-24 bg-blue-100 rounded-lg flex-1">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          className="object-contain absolute z-10 "
                          alt="car-logo"
                          fill
                          priority
                        />
                      </div>
                      <div className="relative w-full h-24 bg-blue-100 rounded-lg flex-1 items-center">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          className="object-contain absolute z-10 "
                          alt="car-logo"
                          fill
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  {/* title */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 capitalize mt-4"
                  >
                    {car.make} {car.model}
                  </Dialog.Title>
                  <div className='mt-3 flex flex-wrap gap-4'>
                    {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key} >
                        <h4 className='text-gray-500 capitalize'>
                          {key.split("_").join(" ")}
                        </h4>
                        <p className='text-black-100 font-semibold'>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* information */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
