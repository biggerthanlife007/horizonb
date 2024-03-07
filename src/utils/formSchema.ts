import * as Yup from "yup";

export const emailValidation = Yup.string()
  .email("Invalid email format")
  .required("Provide your email address")
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format");

export const passwordValidation = Yup.string()
  .min(8)
  .max(15)
  .required("Password is required")
  .matches(
    /^(?=.*[A-Z])(?=.*[@$!%*#\-?&])[A-Za-z\d@$!%*#?&.]/,
    "Password should contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (@$!%*#-?&)"
  );

export const loginSchema = Yup.object({
  UserName: Yup.string().required("User Name is required"),
  Password: passwordValidation,
});

export const securitySchema = Yup.object({
  Mothername: Yup.string().required("Mother Name is required"),
  MeetUpCity: Yup.string().required("City is required"),
  // Mascot: Yup.string().required("Mascot is required"),
  HighSchoolTeacher: Yup.string().required("High School Teacher is required"),
});

export const externalSchema = Yup.object({
  FullName: Yup.string().required("Full Name is required"),
  Email: emailValidation,
  BankName: Yup.string().required("Bank Name is required"),
  BankUsername: Yup.string().required("Bank User Name is required"),
  ConfirmBankUsername: Yup.string()
    .oneOf([Yup.ref("BankUsername")], "Bank User Name must match")
    .required("Bank User Name is required"),
  Password: Yup.string().required("Password is required"),
  PasswordConfirmation: Yup.string()
    .oneOf([Yup.ref("Password")], "Passwords must match")
    .required("Password confirmation is required"),
  Amount: Yup.string().required("Amount is required"),
});
