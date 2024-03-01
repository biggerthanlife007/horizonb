import Logo from "@/components/Navbar/Logo";
import SideNav from "@/components/SideNav/SideNav";
import React, { useState } from "react";
import mountain from "@/assets/images/mountain.jpg";
import Image from "next/image";
import { H4, H6, P2 } from "@/components/Shared/headings/Headings";
import MobileDeposit from "@/components/Deposit/MobileDeposit.tsx";
import Button from "@/components/Shared/button/Button";
import SelectDropdown from "@/components/Shared/selectDropdown/SelectDropdown";
import Input from "@/components/Shared/input/Input";
import DepositCheck from "@/components/Deposit/DepositCheck";
import DepositActivity from "@/components/Deposit/DepositActivity";
import { IoArrowBack } from "react-icons/io5";
import Logout from "@/components/Navbar/Logout";

const Deposit = () => {
  // const [isDepositCheck, setIsDepositCheck] = useState(true);

  const [isDeposit, setisDeposit] = useState("deposit");

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
        <div className="w-[90%] mx-5 z-50 mb-40">
          <div className="flex flex-col gap-10 mt-4">
            <div className="flex flex-col gap-2 items-center bg-[white] w-full h-[100vh] ">
              <div className="flex flex-col w-full items-center  gap-3 my-10">
                <div className="flex flex-row items-center gap-4">
                  <div onClick={() => window.history.back()}>
                    <IoArrowBack />
                  </div>

                  <H4>Mobile Deposit</H4>
                </div>

                <div className="flex flex-row gap-2 items-center justify-center w-full">
                  <Button
                    style={{
                      color: isDeposit === "deposit" ? "white" : "black",
                      backgroundColor:
                        isDeposit === "deposit" ? "green" : "unset",
                    }}
                    onClick={() => setisDeposit("deposit")}
                  >
                    Deposit Check
                  </Button>
                  <Button
                    style={{
                      color: isDeposit === "activity" ? "white" : "black",
                      backgroundColor:
                        isDeposit === "activity" ? "green" : "unset",
                    }}
                    onClick={() => setisDeposit("activity")}
                  >
                    Activity
                  </Button>
                </div>

                {isDeposit === "deposit" ? (
                  <DepositCheck />
                ) : (
                  <DepositActivity />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
