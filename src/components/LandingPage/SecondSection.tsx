import React from "react";
import Car from "@/assets/images/car.svg";
import Flower from "@/assets/images/flower.svg";
import Ipad from "@/assets/images/ipad.svg";
import Image from "next/image";
import { H5, H6, P, P2 } from "../Shared/headings/Headings";

const SecondSection = () => {
  return (
    <div className="w-full bg-[#f4f4f4] h-[900px] md:h-[430px]">
      <div className="flex flex-col gap-10 md:flex-row pt-64  mx-5 md:ml-10 lg:ml-64 md:pt-20">
        <div className="flex flex-row md:flex-col gap-6">
          <Image
            src={Car}
            alt={""}
            className="w-[60px] h-[80px] md:w-[136px] md:h-[136px]"
            priority
          />
          <div>
            <H6>Easier car buying</H6>
            <P className="w-3/4 mt-4">
              Pre-qualify to see your real rate and payment before visiting the
              dealer.
            </P>
            <P className="text-[#3bb53d] mt-2">Checkout Navigator {">"} </P>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-6">
          <Image
            src={Ipad}
            alt={""}
            className="w-[60px] h-[80px] md:w-[136px] md:h-[136px]"
            priority
          />
          <div>
            <H6>No impact, no worries</H6>
            <P className="w-3/4 mt-4">
              Check if you&apos;re pre-approved for card offers with no impact
              to your credit score.
            </P>
            <P className="text-[#3bb53d] mt-2">
              See if I&apos;m pre-approved {">"}
            </P>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-6">
          <Image
            src={Flower}
            alt={""}
            className="w-[60px] h-[80px] md:w-[136px] md:h-[136px]"
            priority
          />
          <div>
            <H6>Savings starts here</H6>
            <P className="w-3/4 mt-4">
              Keep your money growing with one of the best savings rates in
              America.
            </P>
            <P className="text-[#3bb53d] mt-2">Compare accounts {">"}</P>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
