"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div className="relative z-0 px-[6%] py-[15%] md:py-[6%] bg-gradient-to-b from-white to-[#f9fafb] overflow-hidden">
      {/* العنوان الرئيسي */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[#051d34] font-black text-4xl md:text-5xl mb-6 text-center"
      >
        WHO WE ARE
      </motion.p>

      {/* الفقرة التعريفية */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#051d34]/80 text-center max-w-3xl mx-auto leading-relaxed text-[16px] md:text-[17px]"
      >
        Easily we make it simple! Wajal for software development and computer
        services. We focus on innovation in websites engineering solutions,
        optimization and fully configured in line with advanced technology as we
        develop projects according to new technology and market demand...
      </motion.p>

      {/* البلوك الرئيسي */}
      <div className="mt-20 flex flex-col-reverse md:flex-row items-center gap-12 bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl px-8 py-12">
        {/* النص */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-[#051d34]"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#051d34] ">Our Team</h2>
          <p className="leading-loose text-[15.5px] mb-8 text-[#051d34]/80">
            Our team is highly qualified, has the ability, motivation,
            enthusiasm and interest to continue training without fear of changes
            in the job market or innovation...
          </p>

          <h2 className="text-3xl font-bold mb-4 text-[#051d34] ">
            Our Vision
          </h2>
          <p className="leading-loose text-[15.5px] text-[#051d34]/80">
            To be a leading reference company in the market through our services
            quality, solutions provided to our customers, our innovative
            personality...
          </p>
        </motion.div>

        {/* الصور */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center items-center relative"
        >
          <div className="relative w-[170px] h-[220px]">
            <Image
              src="/311.webp"
              fill
              alt="Team 1"
              className="rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="absolute bottom-[-20px] right-[-20px] w-[140px] h-[190px] z-[-1]">
            <Image
              src="/332.webp"
              fill
              alt="Team 2"
              className="rounded-2xl object-cover shadow-xl opacity-90 hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
