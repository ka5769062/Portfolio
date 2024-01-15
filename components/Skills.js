import React from 'react'
import { SKILLS } from '@/constants'
import Image from 'next/image'


const Skills = () => {
  return (
  <section className='max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
 <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        Skills
      </div>
      <ul className='mt-10 grid gap-20 md:grid-cols-2 lg:gap-12'>
        {
          SKILLS.map((skill)=>{
            return(
              <SkillItem
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              />
            )
          })
        }
      </ul>
  </section>
    )
}

export default Skills


const SkillItem = ({title,icon,description }) =>{
 
  return(
    <li className='relative flex w-full flex-1 flex-col items-center text-center shadow-[0_35px_40px_-15px_rgba(0,0,0,0.2)] rounded-2xl 
    p-10 hover:bg-blue-500 group duration-[1200ms] transition '>
      <div className='rounded-full p-5 bg-blue-500 absolute -top-8 group-hover:bg-black'>
        <Image
        src={icon}
        alt="map"
        width={28}
        height={28}
        />
      </div>
      <h3 className='bold-20 lg:bold-22 mt-6 capitalize group-hover:text-white '>{title}</h3>
      <p className='regular-16 text-gray-30 mt-4 group-hover:text-white '>{description}</p>
    </li>
  )

}