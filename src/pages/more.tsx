import Logo from "@/components/Navbar/Logo";
import SideNav from "@/components/SideNav/SideNav";
import React, { useState } from "react";
import mountain from "@/assets/images/mountain.jpg";
import score from "@/assets/images/score.jpg";
import Image from "next/image";
import { H2, H4, H6, P2 } from "@/components/Shared/headings/Headings";
import {
  IoArrowBack,
  IoChatbubbleEllipsesOutline,
  IoChevronUpCircle,
} from "react-icons/io5";
import Logout from "@/components/Navbar/Logout";
import Link from "next/link";
import Button from "@/components/Shared/button/Button";
import Modal from "@/components/Shared/Modal/Modal";
import Maintenance from "@/components/Modals/Maintenace";
import { FaCar, FaRegStar } from "react-icons/fa";

const Deposit = () => {
  // const [isDepositCheck, setIsDepositCheck] = useState(true);

  const [isModalOpen, setisModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };

  return (
    <div className="relative w-full">
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
        <div className="w-[90%] mx-5 z-50">
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col  items-center bg-[white] w-full h-[100%] ">
              {/* <div onClick={() => window.history.back()}>
                <IoArrowBack />
              </div> */}
              <div>
                <H2>Rating : Excellent</H2>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <Image
                  src={score}
                  alt=""
                  priority
                  className=" h-[50%] w-full"
                />
                <H4>820</H4>
                <P2 className="text-[gray]">Updated: February 10: 2024</P2>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-full">
                <div className="flex flex-col items-center">
                  <div className="flex flex-row gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row gap-1 items-center">
                        <span className="text-[green]">
                          <IoChevronUpCircle />
                        </span>
                        <H6>8</H6>
                      </div>
                      <P2 className="text-[gray]">Score Change</P2>
                    </div>
                    <div className=" border-r border-[gray]"></div>

                    <div className="flex flex-col items-center">
                      <div className="flex flex-row gap-1 items-center">
                        <span className="text-[black]">
                          <IoChevronUpCircle />
                        </span>
                        <H6>24%</H6>
                      </div>
                      <P2 className="text-[gray]"> Credit Usage</P2>
                    </div>
                  </div>
                  <div>
                    <Button
                      onClick={handleOpen}
                      color="secondary"
                      className="mt-12"
                    >
                      View Full Report
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-center shadow-lg gap-4 w-[85%] border h-[200px] rounded-[8px] border-gray-100 mt-8 mb-52">
                    <div className="flex flex-col gap-2 ">
                      <div className="bg-[#d7d5d5] mx-2">
                        <p className="flex flex-row gap-1 items-center text-[#02BF6F] text-sm ">
                          <FaRegStar /> Recommended for you
                        </p>
                      </div>
                      <H6 className="mx-2">
                        $1500 Interest savings / 36 Months
                      </H6>
                      <P2 className="text-[gray] mx-2">
                        Save on your existing car loans
                      </P2>
                    </div>
                    <div className="text-[85px]">
                      <FaCar />
                    </div>
                  </div>
                  <Link
                    className="fixed bottom-[20%] right-[10%] flex flex-row items-center text-xl gap-1 whitespace-nowrap justify-center w-[50%] text-[white] h-12 mt-2 rounded-[8px] bg-[#AC150F]"
                    href="/chat"
                  >
                    <IoChatbubbleEllipsesOutline />
                    <p>Chat with Agent</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          openModal={isModalOpen}
          setOpenModal={handleOpen}
          variant="filled"
          className=""
        >
          <Maintenance closeModal={handleClose} />
        </Modal>
      )}
    </div>
  );
};

export default Deposit;
