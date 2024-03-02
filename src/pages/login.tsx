import Image from "next/image";
import mountain from "@/assets/images/mountain.jpg";
// import Logo from "@/assets/images/logo.jpg";
import Logo from "@/components/Navbar/Logo";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { H4, P, P2 } from "@/components/Shared/headings/Headings";
import Button from "@/components/Shared/button/Button";
import Footer2 from "@/components/Footer/Footer2";
import Input from "@/components/Shared/input/input2";
import { Formik } from "formik";
import { loginSchema } from "@/utils/formSchema";
import Modal from "@/components/Shared/Modal/Modal";
import Invalid from "@/components/Modals/Invalid";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

const Login: React.FC = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };
  const initialValues = {
    UserName: "",
    Password: "",
  };

  const router = useRouter();

  const handleSubmit = (values: { UserName: string; Password: string }) => {
    const { UserName, Password } = values;
    setIsLoading(true);
    // Check if username is "Jamesdelehh" and password is "#Panthers123"
    setTimeout(() => {
      if (UserName === "Jamesdeleh" && Password === "#Panthers123") {
        // Redirect to the account page
        router.push("/security");
      } else {
        handleOpen();
      }
      setIsLoading(false);
    }, 3000);
  };

  return (
    // <Layout>
    <div className="w-full h-[80vh]">
      <Logo />
      <div className="bg-cover bg-center">{/* <SideNav cart={false} /> */}</div>
      <div className="relative lg:hidden">
        <Image
          src={mountain}
          alt=""
          priority
          className="absolute h-[100vh] w-full object-cover -z-10"
        />

        <div className="flex flex-col items-center justify-center z-50">
          <div className="bg-white w-5/6 border border-[gray] rounded-[10px] px-10 md:w-2/3 lg:w-1/3 py-8 mt-20">
            <div className="flex flex-row items-center justify-center">
              <Logo />
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={loginSchema}
            >
              {({ handleSubmit }) => (
                <form
                  className="flex flex-col gap-6 mt-4"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <Input
                      label={"Username"}
                      name="UserName"
                      placeholder={""}
                    />
                    <Input
                      label={"Password"}
                      name="Password"
                      placeholder={""}
                      type={"password"}
                    />
                    <div className="flex flex-row gap-2 items-center mt-2">
                      <input
                        type="checkbox"
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-md checked:bg-green-500"
                      />
                      <P>Remember Me</P>
                    </div>
                    <Button
                      type="submit"
                      className="w-full my-4"
                      color="secondary"
                    >
                      {isLoading ? "Loading..." : " Sign In"}
                    </Button>
                    <P2 className="text-[#3bb53d] mt-3">
                      Forgot Username or Password?
                    </P2>
                    <P2 className="text-[#3bb53d] mt-6">Create Account</P2>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className="flex flex-col bg-[#eee] h-auto w-5/6 text-[gray] items-center justify-center gap-4 mt-4 md:flex-row md:items-end md:justify-around md:mt-28">
            {/* <Link href="">Contact us</Link>
            <Link href="">Terms & Conditions</Link>
            <Link href="">Privacy Pledge</Link>
            <Link href="">Security</Link>
            <Link href="">Accessible Banking</Link>
            <Link href="">Leave Feedback</Link> */}
            <div>
              <Footer2 />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {isModalOpen && (
        <Modal
          openModal={isModalOpen}
          setOpenModal={handleOpen}
          variant="filled"
          className=""
        >
          <Invalid closeModal={handleClose} />
        </Modal>
      )}
    </div>
    // </Layout>
  );
};

export default Login;
