import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { P2 } from "../Shared/headings/Headings";
import Modal from "../Shared/Modal/Modal";
import LogoutPopUp from "../Modals/Logout";

const Logout = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };
  return (
    <div>
      <div className="flex flex-col items-center pt-2">
        <IoPersonOutline />
        <P2 onClick={handleOpen}>Log out</P2>
      </div>
      {isModalOpen && (
        <Modal
          openModal={isModalOpen}
          setOpenModal={handleOpen}
          variant="filled"
          className=""
        >
          <LogoutPopUp onClose={handleClose} />
        </Modal>
      )}
    </div>
  );
};

export default Logout;
