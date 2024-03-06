import Logo from "@/components/Navbar/Logo";
import SideNav from "@/components/SideNav/SideNav";
import React, { useState } from "react";
import mountain from "@/assets/images/mountain.jpg";
import Image from "next/image";
import { H6 } from "@/components/Shared/headings/Headings"; // Only importing necessary headings
import Button from "@/components/Shared/button/Button";
// import Input from "@/components/Shared/input/Input2";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { securitySchema } from "@/utils/formSchema";
import Input from "@/components/Shared/input/input2";
import Modal from "@/components/Shared/Modal/Modal";
import Invalid from "@/components/Modals/Invalid";
import Footer2 from "@/components/Footer/Footer2";
import { IoArrowBack } from "react-icons/io5";

const Security = () => {
  const initialValues = {
    Mothername: "",
    MeetUpCity: "",
    Mascot: "",
  };
  const router = useRouter();

  const [isModalOpen, setisModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };

  const handleSubmit = async (values: {
    Mothername: string;
    MeetUpCity: string;
    Mascot: string;
  }) => {
    const { Mothername, MeetUpCity, Mascot } = values;
    setIsLoading(true);

    // Simulating an asynchronous operation with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (
      Mothername === "Catherine" &&
      MeetUpCity === "Conway" &&
      Mascot === "Bulldog"
    ) {
      router.push("/account");
    } else {
      handleOpen();
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full">
      <Logo />
      <div className="bg-cover bg-center">{/* <SideNav cart={false} /> */}</div>

      <div className="relative lg:hidden">
        <Image
          src={mountain}
          alt=""
          priority
          className="absolute h-[100vh] w-full object-cover -z-10"
        />
        <div className=" mx-10 z-50 ">
          <div className="flex flex-col gap-10 mt-4">
            <div className="flex flex-col gap-2 items-center bg-[white] h-[80vh]">
              <div className="flex flex-row items-center gap-4">
                <div onClick={() => window.history.back()}>
                  <IoArrowBack />
                </div>
                <div>
                  {" "}
                  <H6 className="mt-8">Security Questions & Answer</H6>
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={securitySchema}
              >
                {({ handleSubmit }) => (
                  <form
                    className="flex flex-col gap-6 w-5/6 pt-10"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <Input
                        label="What is your mother maiden name"
                        placeholder=""
                        name="Mothername"
                        type="password"
                      />
                      <Input
                        label="Which city did yor parents meet"
                        placeholder=""
                        name="MeetUpCity"
                        type="password"
                      />
                      <Input
                        label="Your high school mascot"
                        placeholder=""
                        name="Mascot"
                        type="password"
                      />

                      <Button
                        className="w-full mt-12"
                        size="lg"
                        type="submit"
                        color="secondary"
                      >
                        {isLoading ? "Loading..." : "Submit"}
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          <div className="flex flex-col bg-[#eee] h-auto  text-[gray] items-center justify-center gap-4 mt-4 md:flex-row md:items-end md:justify-around md:mt-28">
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
  );
};

export default Security;
