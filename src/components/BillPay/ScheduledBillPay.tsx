import React from "react";
import { H6, P } from "../Shared/headings/Headings";
import BillPayCard from "./BillpayCard";
import Reminder from "./Reminder";
import { IoMdAddCircleOutline } from "react-icons/io";

const ScheduledBillPay = () => {
  return (
    <div>
      <Reminder />
      <div className="flex flex-row items-center gap-4 justify-center text-white bg-[#02BF6F] w-[20rem] h-12 my-8">
        <div className="text-[1.7rem]">
          <IoMdAddCircleOutline />
        </div>
        <H6 className="text-white">Add Bill</H6>{" "}
      </div>
      <div className="flex flex-col gap-3">
        <BillPayCard
          color={""}
          title={"Phone"}
          amount={"$23.44"}
          dueText={"Due 4 march"}
        />
        <BillPayCard
          color={""}
          title={"Phone"}
          amount={"$23.44"}
          dueText={"Due 4 march"}
        />
        <BillPayCard
          color={""}
          title={"Phone"}
          amount={"$23.44"}
          dueText={"Due 4 march"}
        />
        <BillPayCard
          color={""}
          title={"Phone"}
          amount={"$23.44"}
          dueText={"Due 4 march"}
        />
        <BillPayCard
          color={""}
          title={"Phone"}
          amount={"$23.44"}
          dueText={"Due 4 march"}
        />
        <BillPayCard
          color={""}
          title={"Phone"}
          amount={"$23.44"}
          dueText={"Due 4 march"}
        />
      </div>
    </div>
  );
};

export default ScheduledBillPay;
