import Logo from "@/components/Navbar/Logo";
import SideNav from "@/components/SideNav/SideNav";
import React, { useState } from "react";
import mountain from "@/assets/images/mountain.jpg";
import Image from "next/image";
import James from "../assets/images/james.jpg";
import { H4, H5, H6, P2 } from "@/components/Shared/headings/Headings";
import InfoCard from "@/components/Account/InfoCard";
import TransactionItem from "@/components/Account/TransactionItem";
import Button from "@/components/Shared/button/Button";
import Modal from "@/components/Shared/Modal/Modal";
import Maintenance from "@/components/Modals/Maintenace";
import { IoPersonOutline } from "react-icons/io5";
import Logout from "@/components/Navbar/Logout";

const Home = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };

  return (
    <>
      <div className="w-full ">
        <div className="flex flex-row items-center justify-between">
          <Logo />
          <Logout />
        </div>

        <div className="bg-cover bg-center">
          <SideNav cart={false} />
        </div>
        <div className="relative  lg:hidden">
          <Image
            src={mountain}
            alt={""}
            priority
            className="absolute h-[100%] w-full object-cover -z-10"
          />
          <div className="w-5/6 mx-10 z-50 my-3">
            <div className="flex flex-row justify-between pt-4 ">
              <H6>
                Welcome Back <br /> James
              </H6>
              <Image
                src={James}
                alt={""}
                priority
                className=" h-[70px] w-[70px] rounded-full  -z-10"
              />
            </div>
            <div className=" flex-flex-col gap-10 mt-4">
              {" "}
              <div className="flex flex-col gap-2 items-center justify-center bg-[white] w-full h-full">
                <div className="flex flex-col w-full items-center justify-center gap-3 my-10">
                  <H4>Account</H4>

                  <InfoCard
                    color="red"
                    title="Primary Checkings -"
                    number="1669"
                    amount="$15,322.45"
                    availableText="Available Balance"
                  />
                  <InfoCard
                    color="purple"
                    title="Simple Checking -"
                    number="3263"
                    amount="$7,450.91"
                    availableText="Current Balance"
                  />
                  <InfoCard
                    color="purple"
                    title="Savings - "
                    number="7596"
                    amount="$42,716.92"
                    availableText="Available Balance"
                  />
                  <InfoCard
                    color="purple"
                    title="Credit Card - "
                    number="3263"
                    amount="$5,000.00"
                    availableText="Available Balance"
                  />

                  <div>
                    <H5>Total Balance - $65,490.28</H5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center bg-[white] w-full mt-10 my-40 rounded shadow-lg">
                <div className="flex flex-col w-full items-center justify-center gap-3 my-10">
                  <H4>Recent Activities</H4>

                  <div className="flex flex-col gap-4 ">
                    <div className="flex flex-row justify-between">
                      <H6>Pending</H6>
                      <H6>$10,020.68</H6>
                    </div>
                    <div className="mt-2 flex flex-col gap-3">
                      <TransactionItem
                        date="February 29, 2024"
                        company="Bank of America"
                        description="External Transfer"
                        amount={500.23}
                        transactionType="pending"
                      />

                      <TransactionItem
                        date="February 28, 2024"
                        company="Legacy Community Health"
                        description="Mobile Deposit"
                        amount={8490.89}
                        transactionType="pending"
                      />

                      <TransactionItem
                        date="February 28, 2024"
                        company="Starbucks"
                        description=""
                        amount={80.96}
                        transactionType="pending"
                      />
                    </div>

                    <hr />
                    <H6>Posted</H6>
                    <TransactionItem
                      date="February 28, 2024"
                      company="Walmart"
                      description=""
                      amount={"948.60"}
                      transactionType="debit"
                    />
                    <TransactionItem
                      date="February 27, 2024"
                      company="Feeding America"
                      description="Donation"
                      amount={"3,500.00"}
                      transactionType="debit"
                    />

                    <TransactionItem
                      date="February 26, 2024"
                      company="Walmart"
                      description=""
                      amount={"256.91"}
                      transactionType="debit"
                    />
                    <TransactionItem
                      date="February 25, 2024"
                      company="TSLA"
                      description="Stock"
                      amount={"12,625.50"}
                      transactionType="credit"
                    />
                    <TransactionItem
                      date="February 25, 2024"
                      company="Bank of the west"
                      description="External transfer"
                      amount={300.23}
                      transactionType="debit"
                    />
                    {/* <TransactionItem
                      date="February 23, 2024"
                      company="Binance"
                      description="Crypto"
                      amount={"2,100.12"}
                      transactionType="credit"
                    /> */}

                    <TransactionItem
                      date="February 22, 2024"
                      company="Hillside Vetinary Clinic"
                      description="Professional service"
                      amount={200.23}
                      transactionType="debit"
                    />
                    <TransactionItem
                      date="February 20, 2024"
                      company="Savings - 7596"
                      description="Internal Transfer"
                      amount={500.54}
                      transactionType="credit"
                    />
                    <TransactionItem
                      date="February 19, 2024"
                      company="Truist Bank"
                      description="External Transfer"
                      amount={895.23}
                      transactionType="debit"
                    />
                    <TransactionItem
                      date="February 18, 2024"
                      company="Legacy Community Health"
                      description="Wages"
                      amount={"10,254.23"}
                      transactionType="credit"
                    />
                    <TransactionItem
                      date="February 18, 2024"
                      company="Gas"
                      description=""
                      amount={95.69}
                      transactionType="debit"
                    />

                    <Button color="secondary" onClick={handleOpen}>
                      See all transactions
                    </Button>
                  </div>
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
    </>
  );
};

export default Home;
