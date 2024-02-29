import type { FC, PropsWithChildren } from "react";
import { useRef } from "react";
import match from "@/helpers/match";
import { useHandleOutsideClicks } from "@/helpers/useHandleOutsideClick";

interface ModalProps {
  variant?: "filled";
  openModal: boolean;
  className?: string;
  setOpenModal: (state: boolean) => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  variant = "filled",
  openModal,
  setOpenModal,
  className,
  ...rest
}) => {
  const pattern = match(variant, {
    filled: "bg-white rounded-[5px]",
    default: "",
  });

  const overlay = useRef(null);

  const close = () => {
    setOpenModal(false);
  };

  useHandleOutsideClicks(overlay, close);

  return (
    <>
      {openModal && (
        <div
          className="fixed top-0 left-0 z-10 flex h-[100vh] w-[100vw] items-center justify-center bg-[#101318B2] bg-opacity-100"
          {...rest}
        >
          <div
            className="absolute top-0 left-0 h-full w-full blur-3xl"
            ref={overlay}
          />
          <div className={`${className} z-20 rounded-[10px]  ${pattern}`}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
