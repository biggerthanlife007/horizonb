import React from "react";
import { GiCancel, GiHazardSign } from "react-icons/gi";
import { H4, H6, P2 } from "../Shared/headings/Headings";
import Button from "../Shared/button/Button";
import { IoCheckmarkCircle } from "react-icons/io5";

interface ProcessingProps {
  closeModal: () => void;
}

const Processing: React.FC<ProcessingProps> = ({ closeModal }) => {
  return (
    <div className="w-[340px] h-[350px]">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-[#02BF6F] text-[40px] mt-4">
          <IoCheckmarkCircle />
        </div>
        <H6 className="w-2/3 text-center">Your Request is being scheduled</H6>

        {/* <div onClick={closeModal}>
        <GiCancel />
      </div> */}
        <P2>Date:</P2>
        <P2>Reference Number:</P2>
        <Button color="secondary" onClick={closeModal} className="w-1/2">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default Processing;
