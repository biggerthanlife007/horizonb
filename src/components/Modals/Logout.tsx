import React from "react";
import Button from "../Shared/button/Button";
import { useRouter } from "next/router";
import { H4, H6 } from "../Shared/headings/Headings";

interface Task {
  onClose: () => void;
}

const LogoutPopUp: React.FC<Task> = ({ onClose }) => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className="w-[250px] h-[150px] text-center">
      <H6 className="mt-8">Are you sure you want to log out?</H6>

      <div className="flex flex-row justify-center gap-4 w-full mt-2">
        <Button size="lg" onClick={onClose}>
          No
        </Button>
        <Button size="lg" color="secondary" onClick={handleHome}>
          Yes
        </Button>
      </div>
    </div>
  );
};

export default LogoutPopUp;
