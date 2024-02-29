import React, { useState } from "react";
import { H4, H5, H6, P, P2 } from "../Shared/headings/Headings";
import { FaPlus, FaMinus, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { TfiHome } from "react-icons/tfi";
import Footer2 from "./Footer2";

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={handleToggle}
        className="flex flex-row items-center cursor-pointer lg:hidden"
      >
        <H6 className="text-[gray]">{title}</H6>

        {isOpen ? (
          <FaMinus className="ml-auto text-gray-500" />
        ) : (
          <FaPlus className="ml-auto" />
        )}
      </div>
      <div className="hidden lg:flex lg:flex-col  lg:cursor-pointer">
        <div>
          <H6 className="text-[gray]">{title}</H6>
        </div>

        <div className="flex flex-col">
          {items.map((item, index) => (
            <P2 key={index}>{item}</P2>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-3 py-2">
          {items.map((item, index) => (
            <P2 key={index}>{item}</P2>
          ))}
        </div>
      )}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="h-full">
      <div className="w-full bg-[#d9d7d7] h-full">
        <div className="flex flex-col gap-4 pt-10 lg:flex-row lg:gap-20 mx-5 lg:py-20 lg:items-center lg:justify-center my-auto">
          <FooterSection
            title="Products"
            items={[
              "Credit Cards",
              "Checking & Savings",
              "Commercials",
              "Business",
              "Auto",
            ]}
          />
          <FooterSection
            title="Get to Know Us"
            items={[
              "About",
              "Newsroom",
              "Technology",
              "Investors",
              "Career & Jobs",
            ]}
          />
          <FooterSection
            title="Support"
            items={[
              "COVID-19",
              "Help Center",
              "Learn & Grow",
              "Security",
              "Contact Us",
            ]}
          />
          <FooterSection
            title="Support"
            items={[
              "COVID-19",
              "Help Center",
              "Learn & Grow",
              "Security",
              "Contact Us",
            ]}
          />
          <div className="py-6 flex flex-row text-3xl gap-6 justify-center pt-16">
            <FaInstagram />
            <RiTwitterXLine />
            <FaFacebook />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className=" bg-[#EEE] my-1">
        <div className="mx-10 text-[gray] py-10 lg:mx-32">
          <H6 className="py-4">Footnotes -</H6>
          <P className="py-3">
            Learn more about{" "}
            <span className="underline">FDIC insurance coverage.</span>{" "}
          </P>
          <P className="py-2">
            Mastercard® is a registered trademark, and the circles design is a
            trademark of Mastercard International Incorporated.{" "}
          </P>
          <P className="py-2">
            The EMVCo Contactless Symbol and Contactless Indicator mark,
            consisting of four graduating arcs, are trademarks owned by and used
            with permission of EMVCo, LLC.
          </P>
          <P className="py-2">
            1 This product finder tool is informational and educational only and
            strictly meant to provide an overview of Horizon product offerings
            based on self-selected user goals. Its results do not constitute
            financial or investment advice.
          </P>
          <P className="py-2">
            2 CreditWise availability will vary depending on ability to obtain
            your credit history from TransUnion®.
          </P>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Footer;
