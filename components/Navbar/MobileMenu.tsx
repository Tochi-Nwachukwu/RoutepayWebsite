"use client";

import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import Accordion from "../Accordion";
import Btn from "../Btn";
import { resources, company, businessSolutions, personalSolutions } from "./NavData";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleNav: () => void;
}

const MobileMenu = ({ open, setOpen, toggleNav }: MobileMenuProps) => {
  return (
    <div className="relative px-5 h-20 flex justify-between items-center bg-white xl:hidden">
      <div className="">
        <Link href="/">
          <div className="h-6 w-27.25">
            <img src="/images/logo.png" alt="routepay logo" className="h-full w-full" />
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
        className={`fixed overflow-y-auto top-0 pt-4.5 left-0 w-full h-full bg-white text-black transition-transform duration-500 z-50 ${
          open ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="px-5 py-4 flex items-center justify-between">
          <img src="/images/logo.png" alt="routepay logo" className="h-6 w-27.25" />
          <button
            type="button"
            className="pr-2"
            onClick={toggleNav}
            aria-label="Close navigation"
          >
            <AiOutlineClose size={25} />
          </button>
        </div>

        <ul className="px-7 flex flex-col gap-2.5">
          <li className="border-b border-solid border-[#F1E7E7] pt-9.5">
            <Accordion
              items={resources}
              header="Resources"
              headerText="At RoutePay, we prioritize a developer-friendly experience with quick, easy integrations."
              setOpen={setOpen}
            />
          </li>
          <li className="border-b border-solid border-[#F1E7E7] pt-9.5">
            <Accordion
              items={company}
              header="Company"
              headerText="We are a game-changing Fintech company driven by the desire to ensure that digital payment is made possible."
              setOpen={setOpen}
            />
          </li>
          <li className="border-b border-solid border-[#F1E7E7] pt-9.5">
            <Accordion
              items={businessSolutions}
              header="Business Solutions"
              headerText="Payment solutions for both business and personal use."
              setOpen={setOpen}
            />
          </li>
          <li className="border-b border-solid border-[#F1E7E7] mb-9 pt-9.5">
            <Accordion
              items={personalSolutions}
              header="Personal Solutions"
              headerText="Payment solutions for both business and personal use."
              setOpen={setOpen}
            />
          </li>

          <div className="flex flex-col gap-7.5 pb-20">
            <Btn text="Login" link="https://auth.routepay.com/Account/Login" />
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
