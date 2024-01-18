import React from "react";
import Image from "next/image";
import { Frontend } from "@/constants";

const Skill = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 ">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        Skill
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
          <p className="mb-8">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </div>
        <div>
          <div className="flex-1 flex-col border-2 rounded w-[220px] h-[220px]">
            <ul>
              {Frontend.map((data) => {
                return (
                  <OurSkills
                    key={data.title}
                    name={data.name}
                    image={data.image}
                  />
                );
              })}
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

function OurSkills({image,name }) {
  return (
    
    <li>
      {/* {image} */}
      {name}

    </li>
  );
}

export default Skill;
