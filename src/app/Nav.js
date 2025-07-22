import React from "react";
import { RiStoreLine } from "react-icons/ri";
import { FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";

function Nav() {
  return (
    <div className="bg-gray-100 px-4 py-3 md:px-[3%]">
      <div className="flex flex-col gap-3 md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <RiStoreLine className="text-xl text-[#078176]" />
            <p className="text-[#078176]">ClicknShop</p>
          </div>

          <div className="flex items-center gap-4 text-xl">
            <FiHeart className="text-[#078176]" />
            <FiUser className="text-[#078176]" />
            <FiShoppingCart className="text-[#078176]" />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <input
            type="search"
            className="bg-white outline-0 border border-gray-400 rounded px-4 py-2 w-[90%] max-w-md text-center"
            placeholder="🔍 Search"
          />
        </div>
      </div>

      <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
        <div className="w-1/3">
          <input
            type="search"
            className="bg-white outline-0 border border-gray-400 rounded px-4 py-2 w-full"
            placeholder="🔍 Search"
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-lg font-semibold">
          <RiStoreLine className="text-xl text-[#078176]" />
          <p className="text-[#078176]">ClicknShop</p>
        </div>

        <div className="flex justify-end items-center gap-6 text-xl">
          <FiHeart className="text-[#078176]" />
          <FiUser className="text-[#078176]" />
          <FiShoppingCart className="text-[#078176]" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
