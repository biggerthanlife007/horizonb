import { useState } from "react";
import { P } from "../Shared/headings/Headings";
import { BiSearchAlt2 } from "react-icons/bi";
import { CiCircleQuestion, CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="relative flex flex-row items-center max-w-[1200px] mt-4 lg:mx-20">
        <div className="flex flex-row items-center">
          {/* Hamburger Icon for Mobile */}
          <div className=" lg:hidden">
            <button className="text-[30px] ml-3" onClick={toggleMenu}>
              {isMenuOpen ? <ImCancelCircle /> : <GiHamburgerMenu />}
            </button>
          </div>

          <div className="ml-10">
            {" "}
            <Logo />
          </div>
        </div>

        <div className="">
          {/* Navigation Links on Larger Screens */}
          <div
            className={`flex flex-col gap-8 pt-3 lg:pt-0 lg:flex-row lg:gap-2 lg:ml-20  ${
              isMenuOpen
                ? "block w-full h-[400px] absolute top-0 left-0 mt-14 bg-white z-20"
                : "hidden  lg:flex "
            }`}
          >
            <P>Credit Cards</P>
            <P>Checking & Saving</P>
            <P>Auto</P>
            <P>Business</P>
            <P>Commercial</P>
          </div>
        </div>
        <div className="hidden lg:flex flex-row gap-4 items-center mt-4 ml-auto">
          <BiSearchAlt2 className="hidden lg:block" />
          <CiCircleQuestion className="hidden  lg:block" />
          <CiLocationOn className="hidden  lg:block" />
          <Link href="/login" className=" flex flex-row gap-1 items-center ">
            <IoPersonOutline /> <P className="whitespace-nowrap">Sign In</P>
          </Link>
        </div>
        <Link
          href="/login"
          className="flex flex-col items-center ml-auto mt-1 lg:hidden"
        >
          <IoPersonOutline /> <P className="whitespace-nowrap">Sign In</P>
        </Link>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default Navbar;
