import React, { useState } from "react";
import DepositHistory from "./DepositHistory";
import { P2 } from "../Shared/headings/Headings";
import Button from "../Shared/button/Button";
import Modal from "../Shared/Modal/Modal";
import Maintenance from "../Modals/Maintenace";

const DepositActivity = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };
  return (
    <div>
      <P2>Deposits in the last one month</P2>
      <div className="flex flex-col gap-6 mt-6">
        <DepositHistory
          date="February 28, 2024"
          status="Approved"
          amount="$12,000.00"
        />
        <DepositHistory
          date="February 20, 2024"
          status="Approved"
          amount="$355.92"
        />
        <DepositHistory
          date="February 15, 2024"
          status="Approved"
          amount="$5235.60"
        />
        <DepositHistory
          date="February 10, 2024"
          status="Approved"
          amount="$90.48"
        />
        <DepositHistory
          date="February 7, 2024"
          status="Approved"
          amount="$1,300.00"
        />
        <DepositHistory
          date="February 2, 2024"
          status="Approved"
          amount="$8245.89"
        />

        <Button className="mt-12" color="secondary" onClick={handleOpen}>
          See all deposits
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

export default DepositActivity;
