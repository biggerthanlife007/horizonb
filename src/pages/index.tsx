import Footer from "@/components/Footer/Footer";
import FirstSection from "@/components/LandingPage/FirstSection";
import SecondSection from "@/components/LandingPage/SecondSection";
import ThirdSection from "@/components/LandingPage/ThirdSection";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const index = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
};

export default index;
