import React from "react";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import ContactSection from "../ContactSection/ContactSection";
import FooterSection from "../Footer/FooterSection";
import Header from "../Header/Header"
import HeroSection from "../HeroSection/HeroSection";
import RecentWorksSection from "../RecentWorksSection/RecentWorksSection";

function App(){
            
  return  <>
    <Header/>
  <div className="container">
            <HeroSection/>
            <AboutMeSection/>
            <RecentWorksSection/>
            <ContactSection/>
            <FooterSection/>
          </div>
  </>
}

export default App;
