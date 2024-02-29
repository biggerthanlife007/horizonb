import React from "react";
import { P } from "../Shared/headings/Headings";
import BillPayCard from "./BillpayCard";
import Reminder from "./Reminder";

const HistoryBillPay = () => {
  return (
    <div>
      <div>
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

export default HistoryBillPay;
