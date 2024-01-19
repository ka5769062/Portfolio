import React from "react";
import Button from "./Button";
import Image from "next/image";


const About = () => {
  return (
    <section id="About" className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        About
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
          <p className="mb-8">
            <span className="font font-extrabold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <Button 
          type="button"
          title="Read More"
          icon="/more.svg"
          variant="btn_dark_rounded"
          />
        </div>
        <div className="flex-1 flexCenter">
           <Image src="/about.png" alt="about" width={333} height={333} className="w-auto rounded-full shadow-sm"               /> 
        </div>
      </div>
    </section>
  );
};

export default About;
