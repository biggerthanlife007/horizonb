import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { H6, P, P2 } from "../Shared/headings/Headings";

interface BillPayCardProps {
  color?: string;
  title: string;
  amount: string;
  dueText: string;
}

const BillPayCard: React.FC<BillPayCardProps> = ({
  color,
  title,
  amount,
  dueText,
}) => {
  return (
    <div
      className={
        "flex flex-row px-8 gap-4 items-center border rounded-[10px] w-full"
      }
    >
      <div className={`bg-[#2a9b6c] rounded-full h-5 w-5`}></div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <P className="font-bold text-gray">{title}</P>
          <p className="font-medium text-xl">{dueText}</p>
        </div>
      </div>
      <div className="flex  items-center ml-auto">
        <p>{amount}</p>
        <IoMdArrowDropright />
      </div>
    </div>
  );
};

export default BillPayCard;
