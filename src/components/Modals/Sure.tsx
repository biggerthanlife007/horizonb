import React, { useState } from "react";
import Button from "../Shared/button/Button";
import { H4, H6, P } from "../Shared/headings/Headings";
import Modal from "../Shared/Modal/Modal";
import Processing from "./Processed";

interface Task {
  onClose: () => void;
}

const Sure: React.FC<Task> = ({ onClose }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleOpen = () => {
    setIsLoading(true);
    setTimeout(() => {
      setisModalOpen(!isModalOpen);
      setIsLoading(false);
    }, 2000);
  };
  const handleClose = () => {
    setisModalOpen(false);
  };

  return (
    <div className="w-[250px] h-[150px] text-center">
      <P className="mt-8">
        Are you sure you want to continue
        <br />
        with this transaction?
      </P>

      <div className="flex flex-row justify-center gap-4 w-full mt-2">
        <Button size="lg" onClick={onClose}>
          No
        </Button>
        <Button size="lg" color="secondary" onClick={handleOpen}>
          {isLoading ? "Loading..." : "  Yes"}
        </Button>
      </div>
      {isModalOpen && (
        <Modal
          openModal={isModalOpen}
          setOpenModal={handleOpen}
          variant="filled"
          className=""
        >
          <Processing />
        </Modal>
      )}
    </div>
  );
};

export default Sure;
