import Logo from "@/components/Navbar/Logo";
import SideNav from "@/components/SideNav/SideNav";
import React, { useState } from "react";
import mountain from "@/assets/images/mountain.jpg";
import Image from "next/image";
import { H4, H6, P2 } from "@/components/Shared/headings/Headings";
import Button from "@/components/Shared/button/Button";
import ScheduledBillPay from "@/components/BillPay/ScheduledBillPay";
import HistoryBillPay from "@/components/BillPay/HistoryBillPay";
import { IoArrowBack } from "react-icons/io5";
import Logout from "@/components/Navbar/Logout";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const BillPay = () => {
  const [isDepositCheck, setIsDepositCheck] = useState(true);

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    // Do something with the selected value
  };
  const handleDepositActivity = () => {
    setIsDepositCheck(false);
  };

  const handleDepositCheck = () => {
    setIsDepositCheck(true);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between">
        <Logo />
        <Logout />
      </div>
      <div className="bg-cover bg-center">
        <SideNav cart={false} />
      </div>

      <div className="relative   lg:hidden">
        <Image
          src={mountain}
          alt=""
          priority
          className="absolute h-[100%] w-full object-cover -z-10"
        />
        <div className="w-5/6 mx-10 z-50 mb-40">
          <div className="flex flex-col gap-10 mt-4">
            <div className="flex flex-col gap-2 items-center bg-[white] w-full h-[100vh] ">
              <div className="flex flex-col w-full items-center  gap-3 my-10">
                <div className="flex flex-row items-center gap-4">
                  <div onClick={() => window.history.back()}>
                    <IoArrowBack />
                  </div>

                  <H4>Bill Pay</H4>
                </div>

                <div>
                  <Button onClick={handleDepositCheck} color="secondary">
                    {" "}
                    Scheduled
                  </Button>
                  <Button onClick={handleDepositActivity} color="primary">
                    History
                  </Button>
                </div>

                {isDepositCheck ? <ScheduledBillPay /> : <HistoryBillPay />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillPay;
