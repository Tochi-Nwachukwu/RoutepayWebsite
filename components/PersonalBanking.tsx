"use client";

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
    src: "/images/bank-1.png",
    header: "Clear and Honest",
    text: "No hidden fees, no surprises. We keep everything transparent, so you always know exactly what’s happening.",
  },
];

export default function PersonalBanking() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="bg-[#FFF1EC] ">
      <Container>
        <div className="flex flex-row  mb-20">
          <div className="mt-80  w-[60%] flex 2xl:justify-center">
            <img
              src={animate[activeIndex].src}
              alt="personal banking"
              className="transition-all w-full h-full duration-500"
            />
          </div>

          {/* Header Text */}
          <div className=" flex flex-row md:flex-col gap-30  mt-20  w-fit justify-center ml-auto">
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] text-[#2B74BD] leading-5.75 ">
               PERSONAL BANKING
              </h3>
              <h3 className="text-[50px] leading-15.75 text-black">
               RoutePay For You
              </h3>
            </div>

            {/* Carousel Texts */}
            <div className="hidden md:flex flex-row w-100 gap-7">
              <div className="w-0.5  bg-[#D9D9D9] relative">
                {/* RED PROGRESS */}
                <div
                  className="absolute left-0 w-0.5 h-[25%]  bg-[#F05A24] transition-all duration-500"
                  style={{
                    top: `${(activeIndex / animate.length) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex md:flex-col  w-100 gap-14 cursor-pointer">
                {animate.map((item, index) => {
                  return (
                    <div
                      className={`flex flex-col gap-8 transition-all duration-500 ${
                        index === activeIndex
                          ? "opacity-100 translate-x-0"
                          : "opacity-100 translate-x-2"
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
