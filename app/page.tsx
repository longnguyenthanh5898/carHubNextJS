import CarCard from "@/Components/CarCard";
import CustomFile from "@/Components/CustomFile";
import Hero from "@/Components/Hero";
import SearchBar from "@/Components/SearchBar";
import { CarProps } from "@/types";
import { fetchData } from "@/utils";
import Image from "next/image";
import { useEffect } from "react";

export default async function Home() {
  const allCar = await fetchData();
  console.log("🚀 ~ file: page.tsx:11 ~ Home ~ allCar:", allCar);
  const isEmptyCar = !allCar || !Array.isArray(allCar) || allCar.length < 1;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div className="mt-12 max-w-[1440px]  mx-auto  flex flex-wrap justify-between sm:px-16 px-6 py-4">
        <div className="flex flex-col text-black-100 items-start justify-start">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex gap-6">
            <CustomFile />
            <CustomFile />
          </div>
          {!isEmptyCar ? (
            <section>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                {allCar?.map((car:CarProps) => (
                  <CarCard car={car} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              {/* <p>{allCar?.message || `hehehe`}</p> */}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
