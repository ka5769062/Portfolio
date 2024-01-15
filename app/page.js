import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";

const HomePage = () => {
  return (
    <main>
      <>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Testimonial />
      </>
    </main>
  );
};

export default HomePage;
