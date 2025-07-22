import React from "react";
import Image from "next/image";
import New from "@/New";

function Main() {
  return (
    <div>
      <div className="flex flex-col md:flex-row px-4 md:px-20 py-5 border-b border-gray-500 max-w-[90%] mx-auto gap-8">
        <div className="w-full md:w-1/2">
          <div className="mb-5 w-[280px] mx-auto flex items-center justify-center">
            <Image
              src="/b.webp"
              alt="main-img"
              width={280}
              height={250}
              className="rounded-md object-contain"
            />
          </div>

          <div className="flex items-center gap-3 justify-center flex-wrap">
            <Image
              src="/55.jpeg"
              alt="img-1"
              width={60}
              height={60}
              className="rounded object-contain"
            />
            <Image
              src="/4.webp"
              alt="img-2"
              width={50}
              height={50}
              className="rounded object-contain"
            />
            <Image
              src="/55.jpeg"
              alt="img-3"
              width={60}
              height={60}
              className="rounded object-contain"
            />
            <Image
              src="/11.jpeg"
              alt="img-4"
              width={60}
              height={60}
              className="rounded object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-[#078176] text-sm font-extrabold mb-4 text-start">
            Offer available now for a limited time!
          </p>

          <p className="font-extrabold text-2xl -mt-3">
            Light Gray Top for Women
          </p>

          <p className="text-red-500 font-bold mt-2 text-sm">
            <span className="text-gray-600"> Lorem </span>Ipsum
          </p>

          <p className="font-bold text-xl">$ 40</p>

          <p className="text-gray-500 text-sm mb-4">
            Lorem ipsum dolor sit amet.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="text-gray-500 font-semibold">ipsum dolor</div>
            <div className="text-[#078176] font-semibold">ipsum dolor</div>
          </div>

          <div className="flex gap-3 items-center mt-3 font-bold flex-wrap">
            <span className="bg-[#078176] w-7 h-7 rounded-full flex items-center justify-center text-white">
              L
            </span>
            <span>M</span>
            <span>s</span>
            <span>Xl</span>
            <span>XXl</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 text-white mt-7">
            <button className="bg-neutral-400 w-full sm:w-32 h-10 cursor-pointer">
              Lorem ipsum
            </button>
            <button className="bg-[#078176] w-full sm:w-32 h-10 cursor-pointer">
              dolor sit amet
            </button>
          </div>

          <div className="text-gray-500 mt-5 font-bold">
            consectetur adipiscing elit
            <p className="text-black font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <p className="text-gray-500 mt-5 font-bold mb-3">dolor sit amet</p>
            <p className="text-black">adipiscing elit</p>
            <p className="text-black">consectetur adipiscing</p>
          </div>

          <div>
            <p className="text-[#078176] font-bold mt-2 mb-2">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-gray-500 font-bold">
              adipiscing elit adipiscing
            </p>
            <p className="text-gray-500 font-bold">adipiscing elit</p>
            <p className="text-gray-500 font-bold">consectetur adipiscing</p>
          </div>
        </div>
      </div>

      <New />
    </div>
  );
}

export default Main;
