"use client";

import { useState } from "react";
import Link from "next/link";
import Btn from "../Btn";
import {
  
  company,
  
} from "./NavData";
import Image from "next/image";

interface DesktopMenuProps {
  pathname: string;
}

const DesktopMenu = ({ pathname }: DesktopMenuProps) => {
  const [showResources, setShowResources] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="hidden xl:block container h-20 mx-auto overflow-visible">
      <div className="px-10 py-4.5 w-full h-full flex items-center justify-between mx-auto text-[#1e1e1e]">
        <div className="flex justify-center items-center">
          <Link href="/" className="mr-25.25">
            <Image width={150} height={150} src="/images/logo.svg" alt="routepay" className="w-42.5" />
          </Link>

          <div className="flex items-center text-[16px] gap-20">
            {/* Resources Dropdown */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <Link
                href="/personal"
                className={`hover:font-bold transition-all duration-300 ${
                  isActive("/personal") ? "font-medium" : ""
                }`}
              >
                Personal
              </Link>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative h-20 flex items-center"
              
            >
              <Link
                href="/business"
                className={`hover:font-bold transition-all duration-300 ${
                  isActive("/business") ? "font-medium" : ""
                }`}
              >
                Business
              </Link>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <Link
                href="/government"
                className={`hover:font-bold transition-all duration-300 ${
                  isActive("/government") ? "font-medium" : ""
                }`}
              >
                Government
              </Link>
            </div>

            {/* Company */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setShowCompany(true)}
              onMouseLeave={() => setShowCompany(false)}
            >
              <div
                
                className={`hover:font-bold transition-all duration-300`}
              >
                Our Company
              </div>
              {showCompany && (
                <div className="w-screen bg-white fixed left-0 top-20 gap-80 px-28 py-20 flex border-t border-gray-100 shadow-md">
                  <div className="max-w-80.5">
                    <h3 className="text-2xl text-[#1e1e1e]">Company</h3>
                    <p className="mt-2 text-[#4D4A4A]">
                      We are a game-changing Fintech company driven by the
                      desire to ensure that digital payment is made possible and
                      available without hassles.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-x-9 gap-y-6">
                    {company.map((item, index) => (
                      <Link href={item.link} key={index} className="">
                        <div
                          className="flex gap-2 items-start"
                          onClick={() => setShowCompany(false)}
                        >
                          <Image 
                            src={item.icon}
                            alt=""
                            className="pt-1"
                            height={24}
                            width={24}
                          />
                          <div className="w-46">
                            <h4 className="text-lg">{item.title}</h4>
                            <p className="text-[#4D4A4A] mt-1.5">{item.text}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="">
          <Btn
            text="Sign Up"
            link="https://portal.routepay.com/register?source=MerchantPortal"
            color={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
