import React from "react";
import Image from "next/image";

function Main() {
  return (
    <div className="px-[6%] py-[20%]  md:py-[8%] bg-white">
      <p className="text-[#30777d] font-bold text-3xl mb-4">WHO WE ARE</p>
      <p className="text-[#555] leading-relaxed text-[15px]">
        Easily we make it simple! Wajal for software development and computer
        services. We focus on innovation in websites engineering solutions,
        optimization and fully configured in line with advanced technology as we
        develop projects according to new technology and market demand. Also, we
        are constantly devoting our efforts to improve the service quality which
        contributes in growth clients websites, their competitiveness and their
        profitability as we work within a management team that has extensive
        experience in this field, and a group of professionals to serve our
        customers, answer their inquiries and provide consultations with strong
        knowledge and experience in various disciplines of information
        technology.
      </p>

      <div className="mt-8 flex flex-col md:flex-row gap-6 bg-[#f0f4fa] rounded-xl shadow-md px-6 py-6">
        {/* Images column */}
        <div className="flex flex-col items-center gap-6 w-full md:w-1/2">
          <Image
            src="/311.webp"
            width={180}
            height={220}
            alt="Team Member 1"
            className="rounded-lg shadow-sm"
          />
          <Image
            src="/332.webp"
            width={180}
            height={220}
            alt="Team Member 2"
            className="rounded-lg shadow-sm"
          />
        </div>

        <div className="w-full md:w-1/2 text-[#13376b]">
          <p className="text-2xl font-extrabold mb-4">Our Team</p>
          <p className="leading-relaxed mb-6">
            Our team is highly qualified, has the ability, motivation,
            enthusiasm and interest to continue training without fear of changes
            in the job market or innovation. Our team possesses principles based
            on knowledge, commitment to the project, teamwork and maintaining
            excellence where the person is assessed based on his capabilities,
            needs and motivations.
          </p>

          <p className="text-2xl font-extrabold mb-3">Our Vision</p>
          <p className="leading-relaxed">
            To be a leading reference company in the market through our services
            quality, solutions provided to our customers, our innovative
            personality, high qualifications and the continuous motivation of
            our team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
