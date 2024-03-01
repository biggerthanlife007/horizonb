import React from "react";
import { H4 } from "../Shared/headings/Headings";
import Image from "next/image";
import Horizon from "@/assets/images/logo.jpg";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image priority src={Horizon} alt={""} className="w-5 h-5" />
      <H4 className="text-[#3bb53d] whitespace-nowrap">Horizon Bank</H4>
    </div>
  );
};

export default Logo;
