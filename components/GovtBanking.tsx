"use client";

import Image from "next/image";
import Btn from "./Btn";
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
    header: "Focus on What Matters",
    text: "We take care of your payments so you don’t have to worry freeing up time for the things you love. ",
  },
  {
    src: "/images/govt-1.png",
    header: "Plan Ahead with Ease",
    text: "Schedule your payments in advance and never miss a due date again. Reliable, simple, and stress-free.",
  },
  {
    src: "/images/bank-1.png",
    header: "Pay Your Way",
    text: "Send money effortlessly using payment links or your unique 9jaPay username perfect for friends, family, or bills.",
  },
  {
    src: "/images/govt-1.png",
    header: "Clear and Honest",
    text: "No hidden fees, no surprises. We keep everything transparent, so you always know exactly what’s happening.",
  },
];

export default function GovtBanking() {
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

  const handleClick = (index: number) => {
    setActiveIndex(index);
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
        <div className="flex flex-col md:flex-row  mb-15 md:mb-20 ">
          {/* Header Text */}
          <div className="flex flex-col gap-8 md:gap-30  md:mt-20  w-fit justify-center mr-auto">
            <div className=" flex flex-col gap-2 md:gap-4">
              <h3 className="md:text-[18px] text-[#2B74BD] leading-5.75 ">
                GOVERNMENT BANKING
              </h3>

              <div className="flex flex-col gap-4 md:gap-8">
                <h3 className="text-[30px] md:text-[50px] md:leading-15.75 text-black">
                  Digital Infrastructure for Government Payments
                </h3>
                <Btn
                  text=" Learn More"
                  link="https://portal.routepay.com/register?source=MerchantPortal"
                  color={true}
                />
              </div>
            </div>
            <div
              className="md:mt-110  h-[400] md:h-full md:w-full md:hidden flex 2xl:justify-center"
              onTouchStart={(e) => {
                touchStartX.current = e.changedTouches[0].clientX;
              }}
              onTouchEnd={(e) => {
                touchEndX.current = e.changedTouches[0].clientX;
                handleSwipe();
              }}
            >
              <Image
                width={500}
                height={500}
                src={animate[activeIndex].src}
                alt="government banking"
                className="transition-all w-full h-full duration-500"
              />
            </div>

            {/* Carousel Texts */}
            <div className="flex flex-col md:flex-row md:w-100  gap-4 md:gap-7">
              <div className="flex md:hidden flex-row justify-center items-center gap-2 mt-4">
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
              <div className="w-0.5  bg-[#D9D9D9] relative ">
                {/* RED PROGRESS */}
                <div
                  className=" md:absolute left-0 w-0.5 h-[25%]  bg-[#F05A24] transition-all duration-500"
                  style={{
                    top: `${(activeIndex / animate.length) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex  flex-col  md:w-100 gap-14 cursor-pointer">
                {animate.map((item, index) => {
                  return (
                    <div
                      className={`flex flex-col gap-8 transition-all duration-500 ${
                        index === activeIndex
                          ? "opacity-100 translate-x-0"
                          : "opacity-100 translate-x-2 hidden md:flex"
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
          <div className="md:mt-110  w-full hidden md:flex 2xl:justify-center">
            <Image
              width={500}
              height={500}
              src={animate[activeIndex].src}
              alt="government banking"
              className="transition-all w-full h-full duration-500"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
