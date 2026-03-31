"use client";

import Image from "next/image";
import Container from "./Container";
import { useRef, useEffect, useState } from "react";

interface AnimateItem {
  src: string;
  header: string;
  text: string;
}

const animate: AnimateItem[] = [
  {
    src: "/images/bank-1.png",
    header: "Access Fast Micro-Loans",
    text: "Get flexible loans tailored to your personal needs. Enjoy rapid approvals and easy repayment options.",
  },
  {
    src: "/images/sample-2.png",
    header: "Transfer Money at Blazing Speed",
    text: "Send money effortlessly to any account across every bank in Nigeria.",
  },
  {
    src: "/images/govt-1.png",
    header: "Utility Payments Made Easy",
    text: "Pay for electricity, internet, TV subscriptions, and more in just a few taps.",
  },
  {
    src: "/images/sample-3.png",
    header: "Zero Hidden Charges",
    text: "No hidden fees, no surprises. We maintain total transparency so you always know where your money goes.",
  },
];

export default function PersonalBanking() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % animate.length);
    }, 3000);
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    startAutoPlay();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) < 50) return; // ignore small movements
    if (diff > 0) {
      // swiped left → next
      setActiveIndex((i) => (i + 1) % animate.length);
    } else {
      // swiped right → prev
      setActiveIndex((i) => (i - 1 + animate.length) % animate.length);
    }
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="bg-[#FFF1EC] ">
      <Container>
        <div className="flex flex-col lg:flex-row mb-20 ">
          <div className=" md:mt-20 lg:mt-0 lg:hidden flex flex-col gap-2 md:gap-4">
            <h3 className="md:text-[18px] text-[#2B74BD] leading-5.75 ">
              PERSONAL BANKING
            </h3>
            <h3 className="text-[30px] md:text-[50px] md:leading-15.75 text-black">
              RoutePay For Everyone
            </h3>
          </div>

          <div
            className="mt-5 md:mt-20 lg:mt-55 h-[400]   md:h-[850] lg:h-[750] xl:h-[810] lg:w-[58%] xl:w-[60%] flex 2xl:justify-center"
            onTouchStart={(e) => {
              touchStartX.current = e.changedTouches[0].clientX;
            }}
            onTouchEnd={(e) => {
              touchEndX.current = e.changedTouches[0].clientX;
              handleSwipe();
            }}
          >
            <Image
              width={40000}
              height={40000}
              src={animate[activeIndex].src}
              alt="personal banking"
              className="transition-all w-full h-full duration-500"
            />
          </div>

          {/* Header Text */}
          <div className=" flex flex-row lg:flex-col gap-8 md:gap-30   md:mt-20 w-fit  ml-auto">
            <div className="hidden lg:flex flex-col gap-2 md:gap-4 w-100 ml-auto ">
              <h3 className="md:text-[18px] text-[#2B74BD] leading-5.75 ">
                PERSONAL BANKING
              </h3>
              <h3 className="text-[30px] md:text-[50px] leading-15.75 text-black">
                RoutePay For Everyone
              </h3>
            </div>

            {/* Carousel Texts */}
            <div className="flex flex-col lg:flex-row lg:w-100 gap-4  ml-auto lg:gap-7">
              <div className="flex lg:hidden flex-row justify-center items-center gap-2 mt-8">
                {animate.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === activeIndex
                        ? "w-6 bg-[#F05A24]"
                        : "w-2 bg-[#D9D9D9]"
                    }`}
                  />
                ))}
              </div>
              <div className="w-0.5  bg-[#D9D9D9] relative">
                {/* RED PROGRESS */}
                <div
                  className=" lg:absolute left-0 w-0.5 h-[25%]  bg-[#F05A24] transition-all duration-500"
                  style={{
                    top: `${(activeIndex / animate.length) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex  flex-col  lg:w-100 gap-14 cursor-pointer">
                {animate.map((item, index) => {
                  return (
                    <div
                      className={`flex flex-col gap-8 transition-all duration-500 ${
                        index === activeIndex
                          ? "opacity-100 translate-x-0"
                          : "opacity-100 translate-x-2 hidden lg:flex"
                      }`}
                      onClick={() => handleClick(index)}
                      key={index}
                    >
                      <div className="flex flex-col gap-4">
                        <h3 className="font-normal text-[24px] text-black">
                          {item.header}
                        </h3>
                        <p className="leading-7 font-light text-[18px] text-[#3B3737]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
