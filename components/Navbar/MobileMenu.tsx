"use client";

import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import Accordion from "../Accordion";
import Btn from "../Btn";
import {
  resources,
  company,
  businessSolutions,
  personalSolutions,
} from "./NavData";
import Image from "next/image";
import { useState } from "react";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleNav: () => void;
}

const MobileMenu = ({ open, setOpen, toggleNav }: MobileMenuProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="relative px-5 h-18 flex justify-between items-center  xl:hidden">
      <div className="">
        <Link href="/">
          <div className="h-6 w-27.25">
            <img
              src="/images/logo.svg"
              alt="routepay logo"
              className="h-full w-full"
            />
          </div>
        </Link>
      </div>

      {/* toggle button */}
      <button
        type="button"
        onClick={toggleNav}
        className="block xl:hidden"
        aria-label="Toggle navigation"
      >
        <HiOutlineBars3 size={33} color="#F05A24" />
      </button>

      {/* Side Drawer Overlay */}
      <div
        className={`fixed overflow-y-auto top-0 pt-4.5 left-0 w-screen h-screen bg-white text-black transition-transform duration-500 z-1000 ${
          open ? "transform translate-x-0" : "transform -translate-x-full "
        }`}
      >
        <div className="px-5 py-4 flex items-center justify-between">
          <Image width={20} height={20}
            src="/images/logo.svg"
            alt="routepay logo"
            className="h-6 w-27.25"
          />
          <button
            type="button"
            className="pr-2"
            onClick={toggleNav}
            aria-label="Close navigation"
          >
            <AiOutlineClose size={25} />
          </button>
        </div>

        <ul className="px-7 bg flex flex-col gap-2.5">
          <li className="border-b border-solid border-[#F1E7E7] pt-9.5">
            <Link
              href={"/personal"}
              className="flex gap-[10px] cursor-pointer mb-6"
              onClick={() => {
                setOpen(false);
              }}
            >
              <h3 className="">Personal</h3>
            </Link>
          </li>
          <li className="border-b border-solid border-[#F1E7E7] pt-9.5">
            <Link
              href={"/business"}
              className="flex gap-[10px] cursor-pointer mb-6"
              onClick={() => {
                setOpen(false);
              }}
            >
              <h3 className="">Business</h3>
            </Link>
          </li>
          <li className="border-b border-solid border-[#F1E7E7] pt-9.5">
            <Link
              href={"/government"}
              className="flex gap-[10px] cursor-pointer mb-6"
              onClick={() => {
                setOpen(false);
              }}
            >
              <h3 className="">Government</h3>
            </Link>
          </li>
          <li className="border-b border-solid border-[#F1E7E7] mb-9 pt-9.5">
            <Accordion
              items={company}
              header="Our Company"
              headerText="We are a game-changing Fintech company driven by the desire to ensure that digital payment is made possible and available without hassles."
              setOpen={setOpen}
            />
          </li>

          <div className="flex flex-col gap-5 pb-20">
            <Btn text="Login" link="https://auth.routepay.com/Account/Login" color={false} />
            <Btn
              text="Create account"
              
              link="https://portal.routepay.com/register?source=MerchantPortal"
              color={true}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
