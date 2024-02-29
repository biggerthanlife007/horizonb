import React from "react";
import Section from "./Section";
import Mural from "@/assets/images/mural.jpg";
import Family from "@/assets/images/family.jpg";
import Shopping from "@/assets/images/shopping.jpg";

const ThirdSection = () => {
  return (
    <div className="mx-2 gap-2 grid grid-cols-1 md:grid-cols-3 my-9">
      <Section
        image={Shopping}
        title="Learn to manage your money to empower what you love."
        description="Get inspired with fresh tips on smart ways to manage, spend, and earn."
      />
      <Section
        image={Mural}
        title="Enabling Communities to thrive"
        description="Our approach to ESG strives to address key issues facing society."
      />
      <Section
        image={Family}
        title=" Relax & recharge at a Horizon Café"
        description="Enjoy craft coffee, tasty bites, unlimited free Wi-Fi and working space."
      />
    </div>
  );
};

export default ThirdSection;
