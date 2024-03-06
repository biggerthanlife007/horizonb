import Logo from "@/components/Navbar/Logo";
import React, { useState } from "react";
import mountain from "@/assets/images/mountain.jpg";
import Image from "next/image";
import { H6, P2 } from "@/components/Shared/headings/Headings"; // Only importing necessary headings
import Button from "@/components/Shared/button/Button";
// import Input from "@/components/Shared/input/Input2";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import Layout from "@/components/Layout/Layout";

const Chat = () => {
  // const initialValues = {
  //   Mothername: "",
  //   MeetUpCity: "",
  //   Mascot: "",
  // };
  const router = useRouter();

  const handleHome = () => {
    router.push("/account");
  };

  return (
    <Layout>
      <div className="w-full">
        <Logo />
        <div className="bg-cover bg-center">
          {/* <SideNav cart={false} /> */}
        </div>

        <div className="relative lg:hidden">
          <div>
            {" "}
            <Image
              src={mountain}
              alt=""
              priority
              className="absolute h-[100vh] w-full object-cover -z-10"
            />
          </div>

          <div className="absolute top-8 mx-10 w-5/6 z-50 mt-10">
            <div className=" flex flex-col gap-6 items-center justify-center bg-[white] h-[30vh]">
              <div className="flex flex-row items-center gap-4">
                <div onClick={() => window.history.back()}>
                  <IoArrowBack />
                </div>
                <div className="flex flex-col  gap-1">
                  {" "}
                  <H6 className="">Chat With Agent</H6>
                  <P2 className="text-[gray]">Click on the chat icon below</P2>
                </div>
              </div>
              <Button color="secondary" onClick={handleHome} className="w-1/2">
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
