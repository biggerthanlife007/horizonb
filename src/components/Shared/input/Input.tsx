import React, { useState } from "react";
import InputProps from "./Input.props";
import EyeOpenIcon from "@/assets/icons/eyeOpen";
import EyeCloseIcon from "@/assets/icons/eyeClose";
import styles from "./Input.module.scss";
import { P, P2 } from "../headings/Headings";

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  className,
  type = "text", // Provide a default value for type
  ...rest
}) => {
  const [isPassswordVisible, setIsPasswoordVisible] = useState(false);

  return (
    <div>
      <P2 className="mb-2">{label}</P2>

      <div className={` ${styles.container} ${className}`}>
        <input
          name={name}
          type={
            type === "password"
              ? isPassswordVisible
                ? "text"
                : "password"
              : type
          }
          className="w-full outline-none"
          placeholder={placeholder}
          {...rest}
        />
        {type === "password" && (
          <div
            className={styles.passwordContainer}
            onClick={() => setIsPasswoordVisible(!isPassswordVisible)}
          >
            {isPassswordVisible ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
