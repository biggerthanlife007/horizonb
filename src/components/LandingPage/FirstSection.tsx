import Image from "next/image";
import Hero from "@/assets/images/main1.jpg";
import Heros from "@/assets/images/main2.jpg";
import { H6, P } from "../Shared/headings/Headings";

const FirstSection = () => {
  return (
    <div>
      <div className="relative">
        {" "}
        <Image
          src={Hero}
          alt={""}
          priority
          className="w-full h-[300px] object-cover md:h-full lg:h-[450px]"
        />
        <div className="flex flex-col items-center justify-center bg-[#3bb53d]  absolute top-[250px] h-[250px] md:w-[320px] md:right-8  md:top-[100px] md:h-[350px] lg:right-44 lg:top-[80px] ">
          <p className="justify-center flex  items-center  text-[#fff] text-[28px] mx-4 mt-16 font-light leading-[36px] ">
            Make life better. Refer a friend. Get a $50 Visa Reward Card when
            they open an account.
          </p>
          <button className="border w-[134px] h-[52px] bg-[#fff] mx-4 text-[#3bb53d] mt-2 rounded-[20px]">
            <P>Learn More</P>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
