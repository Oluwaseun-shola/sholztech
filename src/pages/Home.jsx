import React from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import OurCourses from "../components/OurCourses";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <OurCourses />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
