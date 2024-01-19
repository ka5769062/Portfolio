"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";


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
              words={["FrontEnd Dev", "Programmer", "Coder"]}
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
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea .lit
          esse cillum dolore
        </p>
        <div className="my-5 flex flex-wrap gap-5 ">
          <div className="flex items-center gap-2 ">
            {Array(5)
              .fill(1)
              .map((index) => (
                <img src="/star.svg" width={24} height={24} />
              ))}
          </div>
          <p className="bold-18 lg:bold-20">
            1100+
            <span className="regular-16 lg:regular-20">Excellent Reviews</span>
          </p>
        </div>
        <div className="flexStart gap-1 pt-6 ">
          <Link
            href="https://drive.google.com/file/d/1GAtPnHfBesknA1gp640KFYQ-9Te42JRr/view?usp=sharing"
            target="_blank"
          >
            <Button
              type="button"
              title="Download CV "
              icon="/download.svg"
              variant="btn_dark_rounded"
            />
          </Link>
          <Button
            type="button"
            title="Contact me"
            icon="/arrow-right.svg"
            variant="btn_white_rounded"
          />
        </div>
      </div>

      {/* {RIGHT side} */}

      <div className="relative flex flex-1 xl:flexEnd">
       <div className="absolute top-5 left-[85px]">
         <img src="/javascript.png" width={45} height={45}/>
       </div>
       <div className="absolute top-[150px] left-[20px]">
        <img src="/react.png" width={45} height={45}/>
       </div>
       <div className="absolute top-[250px] right-5">
        <img src="/mongo-db.png" width={45} height={45}/>
       </div>
       <div className="absolute top-5 right-10">
        <img src="/nodejs.png" width={45} height={45}/>
       </div>
       <div className="absolute top-[90%] left-20">
        <img src="/github.png" width={45} height={45}/>
       </div>



        <Image
          src="/u1.png"
          alt="bg"
          width="488"
          height="488"
          className="w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
