import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Context
import UserContext from "./Context/UserContext";

// Components
import NavbarMenu from "./components/Header/NavbarMenu";
import Home from "./components/Body/Home/Home";
import Templates from "./components/Body/Templates/Templates";
import Contact from "./components/Body/Contact/Contact";
import About from "./components/Body/About/About";
import CSEsample from "./components/Body/CoverLetter/CSEsample";
import EEEsample from "./components/Body/CoverLetter/EEEsample";
import BBAsample from "./components/Body/CoverLetter/BBAsample";
import ResumeTemplates from "./components/Body/Resume_View/Resume_Templates";
import ResumeSample1 from "./components/Body/Resume_View/ResumeSample1";
import ResumeSample2 from "./components/Body/Resume_View/ResumeSample2";
import Footer from "./components/Footer/Footer";

//form
import PersonalInfo from "./components/Body/Resume_Form/PersonalInfo";
import ExperianceInfo from "./components/Body/Resume_Form/ExperianceInfo";
import EducationInfo from "./components/Body/Resume_Form/EducationInfo";
import Summary from "./components/Body/Resume_Form/Summary";

function App() {
  //form values
  const [resumeFormInfo, setResumeFormInfo] = useState({});

  //resume format
  const [resumeSample, setResumeSample] = useState({
    sample1: false,
    sample2: false,
  });

  //context
  const value = {
    resumeFormInfo,
    setResumeFormInfo,
    resumeSample,
    setResumeSample,
  };
  return (
    <>
      <>
        <Router>
          <UserContext.Provider value={value}>
            <NavbarMenu />
            <div className="app">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="cover_letter/cse_sample" element={<CSEsample />} />
                <Route path="cover_letter/eee_sample" element={<EEEsample />} />
                <Route path="cover_letter/bba_sample" element={<BBAsample />} />
                <Route path="/personal_info" element={<PersonalInfo />} />
                <Route path="/experiance_info" element={<ExperianceInfo />} />
                <Route path="/education_info" element={<EducationInfo />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/resume_templates" element={<ResumeTemplates />} />
                <Route path="/resume_sample1" element={<ResumeSample1 />} />
                <Route path="/resume_sample2" element={<ResumeSample2 />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
          </UserContext.Provider>
        </Router>
      </>
    </>
  );
}

export default App;
