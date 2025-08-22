import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';

import Footer from "../components/Footer"
import ContactBanner from '../components/ContactBanner';
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <>

          <Helmet>
        <title>Contact Us - DEE PLUS</title> {/* Your page title here */}
      </Helmet>
      <Navbar />
        <ContactBanner />
        <ContactForm />
      <Footer />


    </>
  );
};

export default Contact;
