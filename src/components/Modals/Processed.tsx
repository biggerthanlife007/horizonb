import React, { useState } from "react";
import { H6 } from "../Shared/headings/Headings";
import Button from "../Shared/button/Button";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useRouter } from "next/router";

interface ProcessingProps {}

const Processing: React.FC<ProcessingProps> = ({}) => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/account");
  };
  // Generate a random 6-character number
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return randomNumber.toString();
  };

  // Get the present date
  const getPresentDate = () => {
    const date = new Date();
    return date.toDateString();
  };

  // State for the random number
  const [randomNumber, setRandomNumber] = useState(
    "#HZB" + generateRandomNumber()
  );

  return (
    <div className="w-[340px] h-[350px]">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-[#02BF6F] text-[40px] mt-4">
          <IoCheckmarkCircle />
        </div>
        <H6 className="w-2/3 text-center">Your Request is being scheduled</H6>

        {/* Display random number */}
        <H6>Reference Number: {randomNumber}</H6>

        {/* Display present date */}
        <H6>Date: {getPresentDate()}</H6>

        <Button color="secondary" onClick={handleHome} className="w-1/2">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default Processing;
