import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; // Tailwind CSS already imported

import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact";
import TherapyPage from "./pages/Therapy";
import FamilyTherapy from "./pages/FamilyTherapy"
import Form from "./pages/Form"
import PaymentPage from "./pages/PaymentPage"
import MeditationPage from "./pages/MeditationPage";
import FreeTrial from "./pages/FreeTrial"

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
         <Route path="/therapy" element={<TherapyPage />} /> 
          <Route path="/familytherapy" element={<FamilyTherapy />} /> 
          <Route path="/approachform" element={<Form />} /> 
          <Route path="/payment" element={<PaymentPage />} /> 
          <Route path="/meditation" element={<MeditationPage />} />  
           <Route path="/freetrial" element={<FreeTrial />} />  







      </Routes>
    </Router>
  );
}

export default App;
