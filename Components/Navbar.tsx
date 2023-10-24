"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const handleLogin = () => {};
  return (
    <header className="w-full absolute z-10">
      <nav className="flex max-w-[1440px] mx-auto justify-between py-4 items-center  px-6 sm:px-16 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={140}
            height={140}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          handleClick={handleLogin}
          containerStyles="bg-white text-blue-500 font-bold rounded-full my-2 min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
