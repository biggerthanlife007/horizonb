import React from "react";
import Image, { StaticImageData } from "next/image";
import { H4, H5, H6, P, P2 } from "../Shared/headings/Headings";

interface SectionProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ image, title, description }) => {
  return (
    <div className="w-full mt-7">
      <div className="h-[430px] md:h-[480px]  border border-gray-200 lg:h-[554px] shadow-lg rounded-md overflow-hidden">
        <Image
          src={image}
          alt=""
          className="min-w-[208px] object-cover h-[300px] lg:w-[384px] lg:h-[384px]"
          priority
        />
        <div className="flex flex-col gap-2 mt-2 mx-3">
          <H6 className="font-medium text-[gray]">{title}</H6>
          <P2>{description}</P2>
        </div>
      </div>
    </div>
  );
};

export default Section;
