"use client";

import { useState } from "react";
import Link from "next/link";
import Btn from "../Btn";
import { NavItem, resources, company, businessSolutions, personalSolutions } from "./NavData";

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
            <img src="/images/logo.png" alt="routepay" className="w-42.5" />
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
                  isActive("/personal") ? "font-bold" : ""
                }`}
              >
                Personal
              </Link>
              {showResources && (
                <div className="w-screen bg-white fixed left-0 top-20 gap-28 px-28 py-20 flex border-t border-gray-100 shadow-md">
                  <div className="max-w-80.5">
                    <h3 className="text-2xl text-[#1e1e1e]">Resources</h3>
                    <p className="mt-2 text-[#4D4A4A]">
                      At RoutePay, we prioritize a developer-friendly experience
                      with quick, easy integrations. Set up in minutes and start
                      accepting payments from emerging markets effortlessly.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-9 gap-y-6">
                    {resources.map((item, index) => (
                      <Link href={item.link} key={index}>
                        <div className="flex gap-2 items-start" onClick={() => setShowResources(false)}>
                          <img src={item.icon} alt="" className="pt-1" height={24} width={24} />
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

            {/* Company Dropdown */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setShowCompany(true)}
              onMouseLeave={() => setShowCompany(false)}
            >
              <Link
                href="/business"
                className={`hover:font-bold transition-all duration-300 ${
                  isActive("/business") ? "font-bold" : ""
                }`}
              >
                Business
              </Link>
              {showCompany && (
                <div className="w-screen bg-white fixed left-0 top-20 gap-28 px-28 py-20 flex border-t border-gray-100 shadow-md">
                  <div className="max-w-80.5">
                    <h3 className="text-2xl text-[#1e1e1e]">Company</h3>
                    <p className="mt-2 text-[#4D4A4A]">
                      We are a game-changing Fintech company driven by the
                      desire to ensure that digital payment is made possible and
                      available without hassles.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-x-9 gap-y-6 grid-rows-3">
                    {company.map((item, index) => (
                      <Link href={item.link} key={index} className="">
                        <div className="flex gap-2 items-start" onClick={() => setShowCompany(false)}>
                          <img src={item.icon} alt="" className="pt-1" height={24} width={24} />
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

            {/* Solutions Dropdown */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <Link
                href="/government"
                className={`hover:font-bold transition-all duration-300 ${
                  isActive("/government") ? "font-bold" : ""
                }`}
              >
                Government
              </Link>
              {showSolutions && (
                <div className="w-screen bg-white fixed left-0 top-20 gap-28 px-28 py-20 flex border-t border-gray-100 shadow-md">
                  <div className="max-w-80.5">
                    <h3 className="text-2xl text-[#1e1e1e]">Solutions</h3>
                    <p className="mt-2 text-[#4D4A4A]">
                      We provide payment solutions for both business and
                      personal use.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-9 gap-y-6">
                    <div>
                      <h3 className="mb-6 font-semibold">Business Payment Solutions</h3>
                      <div className="flex flex-col gap-4">
                        {businessSolutions.map((item, index) => (
                          <Link href={item.link} key={index}>
                            <div className="flex gap-2 items-start" onClick={() => setShowSolutions(false)}>
                              <img src={item.icon} alt="" className="pt-1" height={24} width={24} />
                              <div className="w-[184px]">
                                <h4 className="text-lg">{item.title}</h4>
                                <p className="text-[#4D4A4A] mt-1.5">{item.text}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-6 font-semibold">Personal Payment Solutions</h3>
                      <div className="flex flex-col gap-4">
                        {personalSolutions.map((item, index) => (
                          <Link href={item.link} className="flex gap-2 items-start" key={index}>
                            <img src={item.icon} alt="" className="pt-1" height={24} width={24} />
                            <div className="w-[184px]">
                              <h4 className="text-lg">{item.title}</h4>
                              <p className="text-[#4D4A4A] mt-1.5">{item.text}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="">
          <Btn text="Contact Us" link="https://portal.routepay.com/register?source=MerchantPortal" color={true} />
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
