"use client";

import { useState } from "react";
import Btn from "./Btn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import Accordion from "./Accordion";

interface NavItem {
  icon: string;
  title: string;
  link: string;
  text: string;
  id?: string | number;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setOpen(!open);
  };

  const resources: NavItem[] = [
    {
      icon: "/images/for-devs-icon.svg",
      title: "For Developers",
      link: "/for-developers",
      text: "Check out our API Documentation",
    },
  ];

  const company: NavItem[] = [
    {
      icon: "/images/about-icon.svg",
      title: "About",
      link: "/about",
      text: "Learn what RoutePay is all about.",
    },
    {
      icon: "/images/careers-icon.svg",
      title: "Careers",
      link: "/careers",
      text: "Join the RoutePay team.",
    },
    {
      icon: "/images/compliance-icon.svg",
      title: "Compliance",
      link: "/compliance",
      text: "Explore RoutePay’s industry compliance standards.",
    },
    {
      icon: "/images/contact-icon.svg",
      title: "Contact",
      link: "/contact-us",
      text: "Contact us or visit us.",
    },
    {
      icon: "/images/terms-icon.svg",
      title: "Privacy",
      link: "/terms-and-conditions",
      text: "Privacy",
    },
    {
      icon: "/images/terms-icon.svg",
      title: "Terms",
      link: "/terms",
      text: "Terms",
    },
    {
      icon: "/images/compliance-icon.svg",
      title: "Cookies Policy",
      link: "/cookies-policy",
      text: "Cookies Policy",
    },
    {
      icon: "/images/compliance-icon.svg",
      title: "Data Protection",
      link: "/data-protection",
      text: "Data Protection",
    },
  ];

  const businessSolutions: NavItem[] = [
    {
      icon: "/images/payment-gateway-icon.svg",
      title: "Payment Gateway Collections",
      link: "/pay-ins",
      text: "Send, receive, and manage payments seamlessly.",
    },
    {
      icon: "/images/payout-icon.svg",
      title: "Payouts / Disbursements",
      link: "/pay-outs",
      text: "Disburse funds to multiple recipients at once.",
    },
    {
      icon: "/images/payment-link-icon.svg",
      title: "Payment Links",
      link: "/payment-links",
      text: "Create secure payment links in seconds—no technical expertise required.",
    },
  ];

  const personalSolutions: NavItem[] = [
    {
      icon: "/images/mobile-app-icon.svg",
      title: "Mobile App",
      link: "/for-mobile",
      text: "Transfer funds or make payments with just a few taps",
    },
  ];

  const [showResources, setShowResources] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav
        className={`${open ? "no-doc-scroll" : ""} font-light  backdrop-blur-md bg-white/60 border-b border-white/30 sticky top-0 z-50 w-full `}
      >
        {/* DESKTOP NAV */}
        <div className="hidden xl:block container h-20  mx-auto over ">
          
          <div className="px-10 py-4.5 w-full h-full flex items-center justify-between  mx-auto  text-[#1e1e1e]">
            <div className="flex justify-center items-center ">
              <Link href="/" className="mr-25.25">
                <img src="/images/logo.png" alt="routepay" className="w-42.5" />
              </Link>

               <div className="flex items-center  text-[16px] gap-20">
              <div
                className=""
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
                <div
                  className={`w-screen bg-white fixed left-0  gap-28 px-28 py-20 ${
                    showResources ? "flex" : "hidden"
                  }`}
                >
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
                        <div
                          className="flex gap-2 items-start"
                          onClick={() => setShowResources(false)}
                        >
                          <img
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
              </div>
              <div
                className=""
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
                <div
                  className={`w-screen bg-white fixed left-0  gap-28 px-28 py-20  ${
                    showCompany ? "flex" : "hidden"
                  }`}
                >
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
                        <div
                          className="flex gap-2 items-start"
                          onClick={() => setShowCompany(false)}
                        >
                          <img
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
              </div>
              <div
                className=""
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
                <div
                  className={`w-screen bg-white fixed left-0  gap-28 px-28 py-20 ${
                    showSolutions ? "flex" : "hidden"
                  }`}
                >
                  <div className="max-w-80.5">
                    <h3 className="text-2xl text-[#1e1e1e]">Solutions</h3>
                    <p className="mt-2 text-[#4D4A4A]">
                      We provide payment solutions for both business and
                      personal use.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-9 gap-y-6">
                    <div className="">
                      <h3 className="mb-6 font-semibold">Business Payment Solutions</h3>
                      <div className="flex flex-col gap-4">
                        {businessSolutions.map((item, index) => (
                          <Link href={item.link} key={index}>
                            <div
                              className="flex gap-2 items-start"
                              onClick={() => setShowSolutions(false)}
                            >
                              <img
                                src={item.icon}
                                alt=""
                                className="pt-1"
                                height={24}
                                width={24}
                              />
                              <div className="w-[184px]">
                                <h4 className="text-lg">{item.title}</h4>
                                <p className="text-[#4D4A4A] mt-1.5">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <h3 className="mb-6 font-semibold">Personal Payment Solutions</h3>
                      <div className="flex flex-col gap-4">
                        {personalSolutions.map((item, index) => (
                          <Link
                            href={item.link}
                            className="flex gap-2 items-start"
                            key={index}
                          >
                            <img
                              src={item.icon}
                              alt=""
                              className="pt-1"
                              height={24}
                              width={24}
                            />
                            <div className="w-[184px]">
                              <h4 className="text-lg">{item.title}</h4>
                              <p className="text-[#4D4A4A] mt-1.5">
                                {item.text}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="">
                <Btn
                  text="Contact Us"
                  link="https://portal.routepay.com/register?source=MerchantPortal"
                  color={true}
                />
              </div>
          </div>
        </div>

        {/* MOBILE NAV */}
        <div className="relative px-5 h-20 flex justify-between items-center bg-white xl:hidden ">
          <div className="">
            <Link href="/">
              <div className="h-6 w-27.25">
                <img src="/images/logo.png" alt="routelink" className="h-full w-full" />
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

          <div
            className={`fixed overflow-y-auto top-0 pt-4.5 left-0 w-full h-full bg-white text-black transition-transform duration-500 ${
              open ? "transform translate-x-0" : "transform -translate-x-full"
            }`}
          >
            <div className="px-5 py-4 flex items-center justify-between">
              <img src="/images/logo.png" alt="routelink" className="h-6 w-27.25" />
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
                <Btn
                  text="Login"
                  link="https://auth.routepay.com/Account/Login"
                />
                <Btn
                  text="Create account"
                  link="https://portal.routepay.com/register?source=MerchantPortal"
                  color={true}
                />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
