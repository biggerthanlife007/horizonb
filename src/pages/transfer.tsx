import Logo from "@/components/Navbar/Logo";
import SideNav from "@/components/SideNav/SideNav";
import React, { useState } from "react";
import mountain from "@/assets/images/mountain.jpg";
import Image from "next/image";
import { H4, H6, P2 } from "@/components/Shared/headings/Headings";
import InternalTransfer from "@/components/Transfer/InternalTransfer";
import ExternalTranfer from "@/components/Transfer/ExternalTransfer";
import { IoArrowBack } from "react-icons/io5";
import Button from "@/components/Shared/button/Button";
import Logout from "@/components/Navbar/Logout";
import SuspendedZ from "@/components/Modals/SuspendedZ";
import Modal from "@/components/Shared/Modal/Modal";
import zimg from "@/assets/images/z.png";

const Transfer = () => {
  const [showInternalTransfer, setShowInternalTransfer] =
    useState("InternalTransfer");

  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
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
        <div className="w-[90%] mx-auto z-50 mb-24">
          <div className=" flex flex-col gap-10 mt-4">
            <div className="flex flex-col gap-2 items-center bg-[white] w-full ">
              <div className="flex flex-col w-full items-center  gap-3 my-10">
                <div className="flex flex-row items-center gap-4">
                  <div onClick={() => window.history.back()}>
                    <IoArrowBack />
                  </div>

                  <H4>Account Transfers</H4>
                </div>
                <div
                  className="flex flex-row gap-2 items-center my-4"
                  onClick={handleOpen}
                >
                  <H6>Send money with</H6>
                  <Image
                    src={zimg}
                    alt=""
                    priority
                    className="h-[30px] w-[50px]"
                  />{" "}
                </div>{" "}
                <div>
                  <H6 className="my-2 ml-6">Your transfer details </H6>
                  <P2 className="my-3 ml-6">
                    All fields are required unless we&apos;ve marked them
                    (optional)
                  </P2>
                  <div className="flex justify-center gap-4 my-4">
                    <Button
                      style={{
                        color:
                          showInternalTransfer === "InternalTransfer"
                            ? "white"
                            : "black",
                        backgroundColor:
                          showInternalTransfer === "InternalTransfer"
                            ? "green"
                            : "unset",
                      }}
                      onClick={() =>
                        setShowInternalTransfer("InternalTransfer")
                      }
                    >
                      Internal Transfer
                    </Button>
                    <Button
                      style={{
                        color:
                          showInternalTransfer === "External-transfer"
                            ? "white"
                            : "black",
                        backgroundColor:
                          showInternalTransfer === "External-transfer"
                            ? "green"
                            : "unset",
                      }}
                      onClick={() =>
                        setShowInternalTransfer("External-transfer")
                      }
                    >
                      Direct Deposit
                    </Button>
                  </div>
                </div>
                {showInternalTransfer === "InternalTransfer" ? (
                  <InternalTransfer />
                ) : (
                  <ExternalTranfer />
                )}
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
          <SuspendedZ closeModal={handleClose} />
        </Modal>
      )}
    </div>
  );
};

export default Transfer;
