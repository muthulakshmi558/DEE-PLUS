import React from 'react';
import Navbar from '../components/Navbar';
import MeditationSection from '../components/MeditationSection';
import DailyThemes from "../components/DailyThemes"
import Footer from "../components/Footer"


const MeditationPage = () => {
  return (
    <>
      <Navbar />
    <MeditationSection />
    <DailyThemes />
      <Footer />


    </>
  );
};

export default MeditationPage;
