import React from "react";
import Image from "next/image";

const products = [
  {
    img: "/g.webp",
    title: "Offer available time!",
    desc: "Lorem ipsum dolor sit amet.",
    price: "$30",
  },
  {
    img: "/gg.jpg",
    title: "Special Deal for You!",
    desc: "Consectetur adipiscing elit.",
    price: "$45",
  },
  {
    img: "/ggg.webp",
    title: "Limited Time Discount!",
    desc: "Sed do eiusmod tempor incididunt.",
    price: "$25",
  },
  {
    img: "/gggg.webp",
    title: "Flash Sale Offer!",
    desc: "Ut labore et dolore magna aliqua.",
    price: "$60",
  },
];

function New() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20">
      <p className="font-bold text-xl mb-5 mt-10">New Products</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-sm p-3 rounded-xl transition hover:shadow-md"
          >
            <Image
              src={item.img}
              alt={`img${index}`}
              width={500}
              height={300}
              className="w-full h-52 object-cover rounded-md"
            />

            <div className="mt-4 flex justify-between items-start gap-4">
              <div className="flex-1">
                <h1 className="font-bold text-sm mb-1">{item.title}</h1>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
              <p className="text-[#078176] font-bold text-sm">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default New;
