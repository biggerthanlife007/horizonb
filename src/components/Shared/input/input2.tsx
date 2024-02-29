import React, { useState } from "react";
import InputProps from "./Input.props";
import EyeOpenIcon from "@/assets/icons/eyeOpen";
import EyeCloseIcon from "@/assets/icons/eyeClose";
import styles from "./Input.module.scss";
import { useField } from "formik";
import { P } from "../headings/Headings";

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  className,
  type = "text", // Provide a default value for type
  ...rest
}) => {
  const [isPassswordVisible, setIsPasswoordVisible] = useState(false);

  const [field, meta] = useField({ name });

  return (
    <div>
      <P className="mb-2">{label}</P>

      <div
        className={`${
          meta.touched && meta.error
            ? "border border-[#02BF6F]"
            : "border border-[#D0D5DD]"
        } ${styles.container} ${className}`}
      >
        <input
          {...field}
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
      <div className="h-5 text-[10px] text-[#02BF6F]  border-[#02BF6F]">
        {meta.touched && name && meta.error && meta.error}
      </div>
    </div>
  );
};

export default Input;
