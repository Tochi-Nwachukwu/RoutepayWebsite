"use client";

import Container from "./Container";
import Lottie from "lottie-react";
import { ReactNode } from "react";

interface AnimateItem {
  vid: any;
  header: string;
  text: string;
}

interface HowItWorksProps {
  animate: AnimateItem[];
  header: ReactNode;
  title: string;
}

export default function HowItWorks({ animate, header, title }: HowItWorksProps) {
  return (
    <div className="container mx-auto font-light md:mt-12  flex flex-col lg:flex-row gap-4">
      <Container>
        <div className="flex flex-col gap-10 md:gap-30">
          {/* Header Text */}
          <div className=" flex flex-col gap-2 md:gap-4">
            <h3 className="md: text-[18px] text-[#2B74BD] leading-5.75 ">
              {title}
            </h3>
            <div className="text-[30px] md:text-[50px] md:leading-15.75 text-black">
              {header}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-17.75">
            {animate.map((item, index) => {
              return (
                <div className="flex flex-col gap-8" key={index}>
                  <div className="flex flex-col gap-4">
                    <div className=" w-full h-50">
                      <Lottie
                        animationData={item.vid}
                        loop={true}
                        autoplay={true}
                        style={{ height: 200 }}
                      />
                    </div>
                    <h3 className="font-normal text-[20px] md:text-[24px] text-black">{item.header}</h3>
                    <p className="leading-7 font-light md:text-[18px] text-[#3B3737]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
