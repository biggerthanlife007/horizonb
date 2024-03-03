import React, { useState } from "react";
import { H6, P, P2 } from "../Shared/headings/Headings";
import Button from "../Shared/button/Button";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface ProcessingProps {}

const Processing: React.FC<ProcessingProps> = ({}) => {
  const router = useRouter();
  const externalUserData = useSelector(
    (state: RootState) => state.externalUser?.externalUser
  );

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
    <div className="h-full">
      {" "}
      <div className=" w-[370px] h-[480px]">
        <div className="flex flex-col items-center justify-center gap-6 -pt-12">
          <div className="text-[#02BF6F] text-[40px] pt-2">
            <IoCheckmarkCircle />
          </div>
          <H6 className="w-2/3 text-center">Your Request is being scheduled</H6>
          <div className="flex flex-col justify-center gap-1 mx-4">
            <div className="flex flex-row items-center">
              <H6>From : </H6>{" "}
              <P2 className="pt-1">Primary Checkings - 1669</P2>
            </div>
            <div className="flex flex-row items-center">
              <H6>To : </H6>{" "}
              <P2 className="pt-1">{externalUserData?.BankName}</P2>
            </div>
            <div className="flex flex-row items-center">
              <H6>Name : </H6>{" "}
              <P2 className="pt-1">{externalUserData?.FullName}</P2>
            </div>
            <div className="flex flex-row items-center">
              <H6>Name : </H6>{" "}
              <P2 className="pt-1">{externalUserData?.Email}</P2>
            </div>
            <div className="flex flex-row items-center">
              <H6>Amount : </H6>{" "}
              <P2 className="pt-1">${externalUserData?.Amount} </P2>
            </div>
            <div className="flex flex-row items-center">
              <H6>Reference Number: </H6>{" "}
              <P2 className="pt-1">{randomNumber}</P2>
            </div>
            <div className="flex flex-row items-center">
              <H6>Date: </H6> <P2 className="pt-1">{getPresentDate()}</P2>
            </div>
            <P className="text-[gray]">
              Apologies your deposit will take 3-5 business days to complete due
              to bank maintenance
            </P>
            <Button color="secondary" onClick={handleHome} className="w-full">
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;
