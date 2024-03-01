// import React from "react";
// import { IoCheckmarkDoneCircle } from "react-icons/io5";
// import { H6, P, P2 } from "../Shared/headings/Headings";

// const DepositHistory = () => {
//   return (
//     <div className="w-full">
//       <div className="w-full flex flex-row items-center gap-5">
//         <div className="flex flex-row items-center">
//           <div className="text-[green] text-5xl">
//             <IoCheckmarkDoneCircle />
//           </div>
//           <div>
//             <H6>February 28, 2024</H6>
//             <P className="text-[gray]">Approved</P>
//           </div>
//         </div>
//         <div className="ml-auto">
//           <P2>$12,000.00</P2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DepositHistory;
import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { H6, P, P2 } from "../Shared/headings/Headings";

interface DepositHistoryProps {
  date: string;
  status: string;
  amount: string;
}

const DepositHistory: React.FC<DepositHistoryProps> = ({
  date,
  status,
  amount,
}) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-row items-center gap-5">
        <div className="flex flex-row items-center">
          <div className="text-[green] text-5xl">
            <IoCheckmarkDoneCircle />
          </div>
          <div>
            <H6>{date}</H6>
            <P className="text-[gray]">{status}</P>
          </div>
        </div>
        <div className="ml-auto">
          <P2>{amount}</P2>
        </div>
      </div>
    </div>
  );
};

export default DepositHistory;
