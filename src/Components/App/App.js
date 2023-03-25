import React from "react";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import Header from "../Header/Header"
import HeroSection from "../HeroSection/HeroSection";

function App(){
            
  return  <>
    <Header/>
  <div className="container">
            <HeroSection/>
            <AboutMeSection/>
          </div>
  </>
}

export default App;
