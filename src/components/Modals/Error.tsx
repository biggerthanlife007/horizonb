import React from "react";
import { GiCancel, GiHazardSign } from "react-icons/gi";
import { H4, H6 } from "../Shared/headings/Headings";
import Button from "../Shared/button/Button";

interface ErrorProps {
  closeModal: () => void;
}

const Error: React.FC<ErrorProps> = ({ closeModal }) => {
  return (
    <div className="w-[340px] h-[300px]">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-[#9a3030] text-[40px] mt-4">
          <GiHazardSign />
        </div>
        <H6 className="w-2/3 text-center">Error Generating Information</H6>

        {/* <div onClick={closeModal}>
        <GiCancel />
      </div> */}
        <Button onClick={closeModal} className="w-1/2">
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Error;
