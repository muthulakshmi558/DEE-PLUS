import React from 'react';
import Navbar from '../components/Navbar';
import TherapySection from '../components/TherapySection';
import TherapyServices from "../components/TherapyServices"
import Footer from "../components/Footer"


const TherapyPage = () => {
  return (
    <>
      <Navbar />
    <TherapySection />
    <TherapyServices />
      <Footer />


    </>
  );
};

export default TherapyPage;
