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
        className="text-[#051d34]/80 text-center max-w-3xl mx-auto leading-relaxed text-[16px] md:text-[17px] mb-10"
      >
        Easily we make it simple! Wajal for software development and computer
        services. We focus on innovation in websites engineering solutions,
        optimization and fully configured in line with advanced technology as we
        develop projects according to new technology and market demand...
      </motion.p>

      {/* البلوك الرئيسي */}
      <div className="relative py-20 px-6 md:px-[10%] bg-gradient-to-br from-white via-[#f9f9fb] to-[#eef3f8] rounded-3xl shadow-2xl overflow-hidden">
        {/* خلفية ديكورية */}
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#cde1f3] rounded-full blur-3xl opacity-30 z-0" />
        <div className="absolute bottom-[-100px] right-[-60px] w-[250px] h-[250px] bg-[#fbd0f7] rounded-full blur-3xl opacity-30 z-0" />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-16">
          {/* النص */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-[#051d34]"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#051d34] to-[#3f617d] text-transparent bg-clip-text">
              Our Team
            </h2>
            <p className="text-[16px] leading-relaxed mb-8 text-[#051d34]/85">
              Our team is highly qualified, has the ability, motivation,
              enthusiasm and interest to continue training without fear of
              changes in the job market or innovation...
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#051d34] to-[#3f617d] text-transparent bg-clip-text">
              Our Vision
            </h2>
            <p className="text-[16px] leading-relaxed text-[#051d34]/85 ">
              To be a leading reference company in the market through our
              services quality, solutions provided to our customers, our
              innovative personality...
            </p>
          </motion.div>

          {/* الصور */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative flex justify-center items-center"
          >
            <div className="relative w-[190px] h-[240px] rotate-[-4deg] hover:rotate-0 transition-all duration-300 ease-in-out z-20">
              <Image
                src="/311.webp"
                fill
                alt="Team 1"
                className="rounded-3xl object-cover shadow-2xl"
              />
            </div>
            <div className="absolute bottom-[-30px] right-[-30px] w-[150px] h-[200px] z-10 rotate-[6deg] hover:rotate-0 transition-all duration-300 ease-in-out">
              <Image
                src="/332.webp"
                fill
                alt="Team 2"
                className="rounded-3xl object-cover shadow-xl opacity-95"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
