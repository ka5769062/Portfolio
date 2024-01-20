import React from "react";
import Image from "next/image";
import { Android, Backend, Frontend, Others } from "@/constants";



const Skill = () => {
  return (
    <section id="Skills" className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 ">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        Skills
      </div>
      <div className="gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
          <p className="mb-8">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </div>
     

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
  <div className="border-2 rounded-lg w-full md:w-[450px] h-[400px] shadow-lg">
    <div className="flex justify-center items-center font-semibold text-xl md:text-3xl p-4">
      Frontend
    </div>
    <div className="flex justify-center flex-wrap gap-2 p-4 ">
      {Frontend.map((data) => (
        <OurSkills key={data.name} name={data.name} image={data.image} />
      ))}
    </div>
  </div>

  <div className="border-2 rounded-lg w-full md:w-[450px] h-[400px] shadow-lg mt-8 md:mt-0">
    <div className="flex justify-center items-center font-semibold text-xl md:text-3xl p-4">
      Backend
    </div>
    <div className="flex justify-center flex-wrap gap-2 p-4">
      {Backend.map((data) => (
        <OurSkills key={data.name} name={data.name} image={data.image} />
      ))}
    </div>
  </div>
</div>



 <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:space-x-8">
  <div className="border-2 rounded-lg w-full md:w-[450px] h-[400px] shadow-lg">
    <div className="flex justify-center items-center font-semibold text-xl md:text-3xl p-4">
      Android
    </div>
    <div className="flex justify-center flex-wrap gap-2 p-4">
      {Android.map((data) => (
        <OurSkills key={data.name} name={data.name} image={data.image} />
      ))}
    </div>
  </div>

  <div className="border-2 rounded-lg w-full md:w-[450px] h-[400px] shadow-lg mt-8 md:mt-0">
    <div className="flex justify-center items-center font-semibold text-xl md:text-3xl p-4">
      Others
    </div>
    <div className="flex justify-center flex-wrap gap-2 p-4">
      {Others.map((data) => (
        <OurSkills key={data.name} name={data.name} image={data.image} />
      ))}
    </div>
  </div>
</div> 

      </div>
    </section>
  );
};


function OurSkills({ image, name }) {
  return (
    <li className="flex items-center w-[35%] h-15 border-2 rounded-lg p-2 mb-4 ">
      <img src={image} width={20} height={20} alt={`${name} logo`} className="mb-2" />
      <div className="text-center text-[80%]">{name}</div>
    </li>
  );
}

export default Skill;
