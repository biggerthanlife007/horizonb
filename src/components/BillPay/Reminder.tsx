import React from "react";
import BillPayCard from "./BillpayCard";

const Reminder = () => {
  return (
    <div>
      <div className="border b">
        <div className="bg-[#2a9b6c] w-[20rem] h-[2rem] text-white">
          Priority
        </div>

        <BillPayCard
          color={"blue"}
          title={"Phone"}
          amount={"$23.44"}
          dueText={"Due 4 march"}
        />
      </div>
    </div>
  );
};

export default Reminder;
