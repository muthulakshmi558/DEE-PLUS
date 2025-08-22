import React from 'react';
import Navbar from '../components/Navbar';
import AboutBanner from '../components/AboutBanner';
import AboutDetails from "../components/AboutDetails"
import TeachersSection from "../components/TeachersSection"
import Footer from "../components/Footer"


const About = () => {
  return (
    <>
      <Navbar />
    <AboutBanner />
    <AboutDetails />
    <TeachersSection />
      <Footer />


    </>
  );
};

export default About;
