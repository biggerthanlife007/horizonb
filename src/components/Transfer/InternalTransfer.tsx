import React, { useState } from "react";
import SelectDropdown from "../Shared/selectDropdown/SelectDropdown";
import { P2 } from "../Shared/headings/Headings";
import Input from "../Shared/input/Input";
import Button from "../Shared/button/Button";
import Modal from "../Shared/Modal/Modal";
import Maintenance from "../Modals/Maintenace";

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

const InternalTransfer = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };
  const handleSelect = (value: string) => {
    // console.log("Selected:", value);
    // Do something with the selected value
  };
  return (
    <div className="w-full h-[80vh]">
      <div className="w-5/6 mx-auto">
        <P2>From</P2>
        <div className="flex flex-col gap-6">
          <SelectDropdown options={options} onSelect={handleSelect} />

          <div>
            {" "}
            <P2>To</P2>
            <SelectDropdown options={options} onSelect={handleSelect} />
          </div>

          <div>
            <Input label={"Amount"} name={""} placeholder={"$0.00"} />
          </div>
        </div>

        <Button
          onClick={handleOpen}
          color="secondary"
          size="lg"
          className="mt-12  w-full"
        >
          Done
        </Button>
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

export default InternalTransfer;
