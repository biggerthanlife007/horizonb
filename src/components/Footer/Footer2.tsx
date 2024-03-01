import React from "react";
import { H6, P2 } from "../Shared/headings/Headings";
import { TfiHome } from "react-icons/tfi";

const Footer2 = () => {
  return (
    <div>
      <div className="flex flex-row gap-6 items-center justify-center my-8">
        <P2 className="">© 2024 Horizon Bank</P2>

        <div className="text-center">
          <H6>MEMBER</H6>
          <H6>FDIC</H6>
        </div>
        <div>
          <TfiHome className="text-5xl" />
          <p className="font-extralight text-xs text-center">
            House of <br /> lender
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
