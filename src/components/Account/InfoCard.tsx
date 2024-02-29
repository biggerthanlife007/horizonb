import React from "react";
import { P, P2 } from "../Shared/headings/Headings";

interface InfoCardProps {
  color: string;
  number: string | number;
  title: string;
  amount: string;
  availableText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  color,
  title,
  number,
  amount,
  availableText,
}) => {
  return (
    <div className={`w-full`}>
      {/* <div className={`bg-${color} rounded-full h-3 w-3`}></div> */}
      <div className="flex flex-row">
        <div className="flex flex-col">
          <P className="font-bold text-[green]">
            {title}
            {number}
          </P>
          <p className="font-medium text-base ">{availableText}</p>
        </div>
        <P2 className="ml-auto text-gray-700"> {amount}</P2>
      </div>
      <div className="border border-gray-600"> </div>
    </div>
  );
};

export default InfoCard;
