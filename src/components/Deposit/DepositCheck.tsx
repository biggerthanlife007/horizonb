import React from "react";
import SelectDropdown from "../Shared/selectDropdown/SelectDropdown";
import { P2 } from "../Shared/headings/Headings";
import Input from "../Shared/input/Input";
import MobileDeposit from "./MobileDeposit.tsx";
import Button from "../Shared/button/Button";

const DepositCheck = () => {
  const options = [
    {
      value: "Primary Checking-1669 $15,322.45",
      label: "Primary Checking-1669 $15,322.45",
    },
    {
      value: "Simple Checking-3263 $7,450.91",
      label: "Simple Checking-3263 $7,450.91",
    },
    {
      value: "Savings -7596 $42,716.92",
      label: "Savings -7596 $42,716.92",
    },
  ];

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    // Do something with the selected value
  };

  return (
    <div>
      <div className="mt-6">
        <P2>Deposit Account</P2>
        <div className="flex flex-col gap-4 mt-2">
          {" "}
          <SelectDropdown options={options} onSelect={handleSelect} />
          <Input
            label={"Deposit Amount"}
            name={""}
            placeholder={""}
            className=""
          />
        </div>

        <p>Your daily deposit limit is $50,000</p>
      </div>

      <div className="flex flex-row gap-4 my-10">
        <div>
          <P2 className="mb-4">Front of check</P2>
          <MobileDeposit />
        </div>
        <div>
          <P2 className="mb-4">Back of check</P2>
          <MobileDeposit />
        </div>
      </div>

      <div className="mt-16">
        <Button className="w-full" color="secondary">
          Submit deposit
        </Button>
      </div>
    </div>
  );
};

export default DepositCheck;
