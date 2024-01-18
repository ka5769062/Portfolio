import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Skill from "@/components/Skill";

const HomePage = () => {
  return (
    <main>
      <>
        <Hero />
        <About />
        <Skill />
        <Service />
        <Portfolio />
      </>
    </main>
  );
};

export default HomePage;
