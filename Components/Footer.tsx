import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 ">
      <div className=" flex flex-wrap max-md:flex-col justify-between gap-5 items-center sm:px-16 px-6 py-10">
        <div className="flex  flex-col gap-6 justify-start items-start">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-center  px-6 sm:px-16 py-10 mt-10 border-t-4 border-gray-100">
          {footerLinks.map((item) => (
            <div className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold">{item?.title}</h3>
              <div className="flex flex-col gap-5">
                {item?.links.map((link) => (
                  <Link href={link.url} className="text-gray-500">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center  px-6 sm:px-16 py-10 mt-10">
        <p>@2023 CarHub. All rights reserved</p>
        <div className=" flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
