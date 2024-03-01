import { FC, PropsWithChildren } from "react";
import MainProps from "./main.props";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Main: FC<PropsWithChildren<MainProps>> = ({ children, meta }) => {
  return (
    <>
      {meta}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
