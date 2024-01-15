"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col 
    flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row"
    >
      <span
        className="max-container absolute top-64 left-44 h-[144px] 
        w-[777px] bg-blue-400 rounded-full shadow-lg blur-[7rem] -z-10 "
      ></span>
      <div className="relative z-20 flex flex-1 flex-col pt-16 ">
        <h4 className="bold-20">Hello</h4>
        <h1 className="bold-48 lg:bold-64 relative">I'm Kamran Ali </h1>
        <h2 className="bold-28 lg:bold-32 text-[1.8rem] text-blue-600 capitalize">
          A{" "}
          <span>
            <Typewriter
              words={["FrontEnd Developer", "Programmer", "Coder"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="regular-16 max-w-[555px] my-4">
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          .lit esse cillum dolore
        </p>
        <div className="my-5 flex flex-wrap gap-5 "> 
          <div className="flex items-center gap-2 ">
        {
           Array(5).fill(1).map((index)=>(
            <img
            src="/star.svg"
            width={24}
            height={24}
            />
           ))
           }
          </div>
          <p className="bold-18 lg:bold-20">1100+<span className="regular-16 lg:regular-20">Excellent Reviews</span></p>
        </div>
        <div className="flexStart gap-1 pt-6 ">
          <Button 
          type="button"
          title="Download CV "
          icon="/download.svg"
          variant="btn_dark_rounded"
          />
          <Button 
          type="button"
          title="Contact me"
          icon="/arrow-right.svg"
          variant="btn_white_rounded"
          />
        </div>
      </div>
    
    {/* {RIGHT side} */}
    
     <div className="flex flex-1 xl:flexEnd">
      <Image src='/u1.png' alt='bg' width='488' height='488' className='w-auto'/>
     </div>

    
    </section>
  );
};

export default Hero;
