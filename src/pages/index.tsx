import Footer from "@/components/Footer/Footer";
import FirstSection from "@/components/LandingPage/FirstSection";
import SecondSection from "@/components/LandingPage/SecondSection";
import ThirdSection from "@/components/LandingPage/ThirdSection";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Meta from "@/components/Shared/meta/Meta";
import Main from "@/layouts/main";
import { FC, PropsWithChildren } from "react";
import React from "react";

const index = () => {
  return (
    // <Layout>
    <div>
      <Main
        meta={
          <Meta
            title="Home | Horizon Bank"
            description="The Home page for Horizon Bank"
          />
        }
      >
        {/* <Navbar /> */}
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        {/* <Footer /> */}
      </Main>
    </div>
    // </Layout>
  );
};

export default index;
