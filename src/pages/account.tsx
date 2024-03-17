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
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Home = () => {
  const externalUserData = useSelector(
    (state: RootState) => state.externalUser?.externalUser
  );
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };

  // Get the present date
  const getPresentDate = () => {
    const date = new Date();
    return date.toDateString();
  };

  const totalBalance = externalUserData
    ? 72190.4 - parseFloat(externalUserData.Amount || "0")
    : 72190.4;

  const pendingBalance = externalUserData
    ? 10201.21 + parseFloat(externalUserData.Amount || "0")
    : 10201.21;

  const checkingBalance = externalUserData
    ? 14022.57 - parseFloat(externalUserData.Amount || "0")
    : 14022.57;

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
          <div className="w-[90%] mx-5 z-50 my-3">
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
                <div className="flex flex-col w-full items-center justify-center gap-3 my-10 mx-2">
                  <H4>Account</H4>

                  <InfoCard
                    color="red"
                    title="Primary Checkings -"
                    number="1669"
                    amount={`$${checkingBalance.toFixed(2)}`}
                    availableText="Available Balance"
                  />
                  {/* <InfoCard
                    color="red"
                    title="Primary Checkings -"
                    number="1669"
                    amount="$15,322.45"
                    availableText="Available Balance"
                  /> */}
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
                    amount="$50,716.92"
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
                    <H5>Total Balance - ${totalBalance.toFixed(2)}</H5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center bg-[white] w-full mt-10 my-40 rounded shadow-lg">
                <div className="flex flex-col w-full items-center justify-center gap-3 my-10">
                  <H4>Recent Activities</H4>

                  <div className="flex flex-col gap-4 ">
                    <div className="flex flex-row justify-between">
                      <H6>Pending</H6>
                      <H6>${pendingBalance.toFixed(2)}</H6>
                    </div>
                    <div className="mt-2 flex flex-col gap-3">
                      {externalUserData?.BankName && (
                        <TransactionItem
                          date={getPresentDate()}
                          company={externalUserData.BankName}
                          description="Direct Deposit"
                          amount={externalUserData.Amount || ""}
                          transactionType="pending"
                        />
                      )}
                      <TransactionItem
                        date="March 17, 2024"
                        company="Citizen Bank"
                        description="Direct Deposit"
                        amount={"200.00"}
                        transactionType="pending"
                      />
                      <TransactionItem
                        date="March 15, 2024"
                        company="Texas Tech CU"
                        description="Processing"
                        amount={"3662.22"}
                        transactionType="pending"
                      />
                      <TransactionItem
                        date="March 14, 2024"
                        company="Walmart"
                        description=""
                        amount={"500.23"}
                        transactionType="pending"
                      />
                      <TransactionItem
                        date="March 13, 2024"
                        company="Savings - 7596"
                        description="Internal Transfer"
                        amount={"6200.00"}
                        transactionType="pending"
                      />

                      <TransactionItem
                        date="March 12, 2024"
                        company="Suncoast credit Union"
                        description="Pending"
                        amount={"150.00"}
                        transactionType="pending"
                      />

                      {/* <TransactionItem
                        date="March 12, 2024"
                        company="Florida Credit Union"
                        description="Ongoing Verification"
                        amount={"200.00"}
                        transactionType="pending"
                      /> */}

                      <TransactionItem
                        date="March 11, 2024"
                        company="Bank of the west"
                        description="Mobile Deposit"
                        amount={3500.98}
                        transactionType="pending"
                      />

                      {/* <TransactionItem
                        date="March 6, 2024"
                        company="Cashapp"
                        description="Failed"
                        amount={"200.00"}
                        transactionType="debit"
                      /> */}
                    </div>

                    <hr />
                    <H6>Posted</H6>
                    <TransactionItem
                      date="March 14, 2024"
                      company="Inter-Continental Jewelers"
                      description="Jewelry Store"
                      amount={"2500.00"}
                      transactionType="debit"
                    />
                    <TransactionItem
                      date="March 13, 2024"
                      company="Legacy Community Health"
                      description="Mobile Deposit"
                      amount={8490.89}
                      transactionType="credit"
                    />

                    <TransactionItem
                      date="March 11, 2024"
                      company="Truist Bank"
                      description="Direct Deposit"
                      amount={895.23}
                      transactionType="debit"
                    />
                    {/* <TransactionItem
                      date="March , 2024"
                      company="Citizens Bank"
                      description="Failed"
                      amount={"3648.46"}
                      transactionType="debit"
                    /> */}
                    <TransactionItem
                      date="March 11, 2024"
                      company="Walmart"
                      description=""
                      amount={"948.60"}
                      transactionType="debit"
                    />
                    <TransactionItem
                      date="March 10, 2024"
                      company="Bitcoin"
                      description="Crypto"
                      amount={"6,700.12"}
                      transactionType="credit"
                    />
                    <TransactionItem
                      date="March 10, 2024"
                      company="Gas"
                      description=""
                      amount={95.69}
                      transactionType="debit"
                    />

                    <TransactionItem
                      date="March 9, 2024"
                      company="Walmart"
                      description=""
                      amount={350.96}
                      transactionType="debit"
                    />

                    <TransactionItem
                      date="March 8, 2024"
                      company="Feeding America"
                      description="Donation"
                      amount={"3,500.00"}
                      transactionType="debit"
                    />

                    <TransactionItem
                      date="March 6, 2024"
                      company="Walmart"
                      description=""
                      amount={"256.91"}
                      transactionType="debit"
                    />
                    <TransactionItem
                      date="March 5, 2024"
                      company="TSLA"
                      description="Stock"
                      amount={"12,625.50"}
                      transactionType="credit"
                    />

                    {/* <TransactionItem
                      date="February 27, 2024"
                      company="Hillside Vetinary Clinic"
                      description="Professional service"
                      amount={200.23}
                      transactionType="debit"
                    /> */}
                    <TransactionItem
                      date="March 2, 2024"
                      company="Savings - 7596"
                      description="Internal Transfer"
                      amount={500.54}
                      transactionType="credit"
                    />

                    <TransactionItem
                      date="March 1, 2024"
                      company="Legacy Community Health"
                      description="Wages"
                      amount={"10,254.23"}
                      transactionType="credit"
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
