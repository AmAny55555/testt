"use client"; // مهم جدًا لو في مجلد /app

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div
      className="relative z-0 px-[6%] py-[18
    %] md:py-[6%] bg-gradient-to-b from-white to-[#f9fafb] overflow-hidden"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[#30777d] font-black text-4xl mb-6 text-center"
      >
        WHO WE ARE
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#4b5563] text-center max-w-4xl mx-auto leading-relaxed text-[15.5px]"
      >
        Easily we make it simple! Wajal for software development and computer
        services. We focus on innovation in websites engineering solutions,
        optimization and fully configured in line with advanced technology as we
        develop projects according to new technology and market demand...
      </motion.p>

      <div className="mt-16 flex flex-col-reverse md:flex-row items-center gap-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg px-8 py-10">
        {/* Text section */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-[#1e3a8a]"
        >
          <h2 className="text-2xl font-bold mb-5">Our Team</h2>
          <p className="leading-relaxed text-[15px] mb-6">
            Our team is highly qualified, has the ability, motivation,
            enthusiasm and interest to continue training without fear of changes
            in the job market or innovation...
          </p>

          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="leading-relaxed text-[15px]">
            To be a leading reference company in the market through our services
            quality, solutions provided to our customers, our innovative
            personality...
          </p>
        </motion.div>

        {/* Image section */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center gap-4"
        >
          <div className="relative">
            <Image
              src="/311.webp"
              width={160}
              height={210}
              alt="Team 1"
              className="rounded-xl shadow-xl transform hover:scale-105 transition duration-300"
            />
            <div className="absolute -bottom-5 -right-5 z-[-1]">
              <Image
                src="/332.webp"
                width={160}
                height={210}
                alt="Team 2"
                className="rounded-xl shadow-xl opacity-80 hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
