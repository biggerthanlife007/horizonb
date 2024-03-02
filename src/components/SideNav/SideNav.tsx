import React, { useState } from "react";
import "./SideNav.module.scss";
import styles from "./SideNav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import SideNavProps from "./SideNav.props";
import { P, P2 } from "../Shared/headings/Headings";
import Grid from "@/assets/icons/grid";
import Wallet from "@/assets/icons/wallet";
import Card from "@/assets/icons/card";
import Money from "@/assets/icons/money";
import Support from "@/assets/icons/support";
import Question from "@/assets/icons/question";
import Logout from "@/assets/icons/logout";
import Transaction from "@/assets/icons/transaction";
import Modal from "../Shared/Modal/Modal";
import Maintenance from "../Modals/Maintenace";
import { BiTransfer } from "react-icons/bi";
import { IoMdCamera } from "react-icons/io";
import { MdOutlineAccountBalance } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { PiDotsThreeOutline } from "react-icons/pi";

const SideNav: React.FC<SideNavProps> = ({ cart }) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };
  const router = useRouter();
  return (
    <div>
      <div className={styles.sideNavContainer}>
        <div></div>

        <div>
          <div className={styles.sideNavLinksContainer}>
            <Link href="/">
              <div
                className={
                  router.pathname === "/"
                    ? styles.sideNavLinksActive
                    : styles.sideNavLinks
                }
              >
                <Grid />
                <P2
                  className={
                    router.pathname === "/"
                      ? styles.sideNavOptionsActive
                      : styles.sideNavOptions
                  }
                >
                  Account
                </P2>
              </div>
            </Link>

            <Link href="/">
              <div
                className={
                  router.pathname === "/transfer"
                    ? styles.sideNavLinksActive
                    : styles.sideNavLinks
                }
              >
                <Card />
                <P2
                  className={
                    router.pathname === "/transfer"
                      ? styles.sideNavOptionsActive
                      : styles.sideNavOptions
                  }
                >
                  Transfers
                </P2>
              </div>
            </Link>

            <Link href="/">
              <div
                className={
                  router.pathname === "/Bill"
                    ? styles.sideNavLinksActive
                    : styles.sideNavLinks
                }
              >
                <Transaction />
                <P2
                  className={`${
                    router.pathname === "/Bill"
                      ? styles.sideNavOptionsActive
                      : styles.sideNavOptions
                  } whitespace-nowrap`}
                >
                  Bill
                </P2>
              </div>
            </Link>

            <Link href="/">
              <div
                className={
                  router.pathname === "/"
                    ? styles.sideNavLinksActive
                    : styles.sideNavLinks
                }
              >
                <Wallet />
                <P2
                  className={
                    router.pathname === "/"
                      ? styles.sideNavOptionsActive
                      : styles.sideNavOptions
                  }
                >
                  {" "}
                  Deposits
                </P2>
              </div>
            </Link>

            <Link href="/">
              <div
                className={
                  router.pathname === "/"
                    ? styles.sideNavLinksActive
                    : styles.sideNavLinks
                }
              >
                <Money />
                <P2
                  className={
                    router.pathname === "/"
                      ? styles.sideNavOptionsActive
                      : styles.sideNavOptions
                  }
                >
                  Loan
                </P2>
              </div>
            </Link>
          </div>

          <hr className="w-full h-[1px] border border-[#E4E4E4] my-10" />

          <div className="flex flex-col lg:items-center min-[1440px]:items-start gap-5">
            {/* <Link href="/">
              <div
                className={
                  router.pathname === "/"
                    ? styles.sideNavLinksActive
                    : styles.sideNavLinks
                }
              >
                <Support />
                <P2
                  className={
                    router.pathname === "/"
                      ? styles.sideNavOptionsActive
                      : styles.sideNavOptions
                  }
                >
                  Support
                </P2>
              </div>
            </Link> */}

            {/* <Link href="/">
              <div
                className={
                  router.pathname === "/"
                    ? styles.sideNavLinksActive
                    : styles.sideNavLinks
                }
              >
                <Question />
                <P2
                  className={
                    router.pathname === "/"
                      ? styles.sideNavOptionsActive
                      : styles.sideNavOptions
                  }
                >
                  FAQS
                </P2>
              </div>
            </Link>
            <Link href="/">
              <div
                className={
                  router.pathname === "/"
                    ? styles.sideNavLinksActive
                    : styles.sideNavLinks
                }
              >
                <Logout />
                <P2
                  className={
                    router.pathname === "/"
                      ? styles.sideNavOptionsActive
                      : styles.sideNavOptions
                  }
                >
                  Log Out
                </P2>
              </div>
            </Link> */}
          </div>
        </div>

        <hr className="w-full h-[1px] border border-[#E4E4E4] min-[1440px]:hidden" />

        <Link href="/account">
          <div className=" flex justify-center items-center gap-3">
            {/* <Image src={Profile} alt="profile" className="w-10 h-10" /> */}

            <div className="hidden min-[1440px]:block">
              <P2 className="text-[#101928] font-semibold mb-1">Alison Eyo</P2>
              <P className="text-[#475367]">alison.e@rayna.ui</P>
            </div>
          </div>
        </Link>
      </div>

      <div className={cart ? styles.navCartMobile : styles.sideNavMobile}>
        <div className={styles.sideNavLinksContainer}>
          <Link href="/account">
            <div
              className={
                router.pathname === "/account"
                  ? styles.sideNavLinksActive
                  : styles.sideNavLinks
              }
            >
              {/* <Grid /> */}
              <MdOutlineAccountBalance />
              <P2
                className={
                  router.pathname === "/account"
                    ? styles.sideNavOptionsActive
                    : styles.sideNavOptions
                }
              >
                Account
              </P2>
            </div>
          </Link>

          <Link href="/transfer">
            <div
              className={
                router.pathname === "/transfer"
                  ? styles.sideNavLinksActive
                  : styles.sideNavLinks
              }
            >
              {/* <Card /> */}
              <BiTransfer />
              <P2
                className={
                  router.pathname === "/transfer"
                    ? styles.sideNavOptionsActive
                    : styles.sideNavOptions
                }
              >
                Transfers
              </P2>
            </div>
          </Link>

          <Link href="/deposit">
            <div
              className={
                router.pathname === "/deposit"
                  ? styles.sideNavLinksActive
                  : styles.sideNavLinks
              }
            >
              {/* <Wallet /> */}
              <IoMdCamera />
              <P2
                className={
                  router.pathname === "/deposit"
                    ? styles.sideNavOptionsActive
                    : styles.sideNavOptions
                }
              >
                Deposits
              </P2>
            </div>
          </Link>

          <Link href="/more">
            <div
              className={
                router.pathname === "/more"
                  ? styles.sideNavLinksActive
                  : styles.sideNavLinks
              }
            >
              {/* <Wallet /> */}
              <PiDotsThreeOutline />
              <P2
                className={
                  router.pathname === "/more"
                    ? styles.sideNavOptionsActive
                    : styles.sideNavOptions
                }
              >
                More
              </P2>
            </div>
          </Link>
          {/* <Link href="/account">
            <div
              className={
                router.pathname === "/"
                  ? styles.sideNavLinksActive
                  : styles.sideNavLinks
              }
            >
             
              <FaMoneyCheckAlt />
              <P2
                className={`${
                  router.pathname === "/"
                    ? styles.sideNavOptionsActive
                    : styles.sideNavOptions
                } whitespace-nowrap`}
                onClick={handleOpen}
              >
                Bill Pay
              </P2>
            </div>
          </Link> */}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          openModal={isModalOpen}
          setOpenModal={handleOpen}
          variant="filled"
          className=""
        >
          <Maintenance closeModal={handleClose} />
        </Modal>
      )}
    </div>
  );
};

export default SideNav;
