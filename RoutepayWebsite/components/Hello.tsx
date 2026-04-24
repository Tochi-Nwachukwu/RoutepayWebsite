"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Container from "./Container";
import Image from "next/image";

interface StripItem {
  img: string;
  text: string;
}

const strip: StripItem[] = [
  { img: "/images/strip-1.png", text: "PCIDSS Compliant" },
  {
    img: "/images/strip-2.png",
    text: "Payment Solutions Service Provider",
  },
  { img: "/images/strip-3.png", text: "Value Added Services" },
];

export default function Hello() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 8,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(el, { x: 0 });
        },
      },
    );
  }, []);

  return (
    <div className="ms:mt-16 flex  relative">
      <Container>
        <div className="flex flex-col relative gap-10 lg:gap-26">
          <div className="h-full lg:w-215.75   gap-2 md:gap-0 flex flex-col rounded-xl items-start justify-start ">
            <div>
              <h3 className="lg:absolute text-[25px] md:text-[40px] lg:text-[60px] xl:text-[60px] lg:leading-19 lg:right-0 xl:right-35 2xl:right-80 top-25 text-black">
                {" "}
                Move Money <br className="hidden lg:block" /> With Satisfaction
              </h3>
            </div>
            <div className="  w-full h-full">
              <Image
                width={500}
                height={500}
                src="/images/hello.png"
                alt="Hello"
                className="w-full h-full hidden md:block"
              />
              <Image
                width={500}
                height={500}
                src="/images/hello-m.png"
                alt="Hello"
                className="w-full h-full md:hidden "
              />
            </div>
          </div>
          <div className=" overflow-hidden w-full">
            <div
              ref={marqueeRef}
              className="h-18.25 flex will-change-transform"
              style={{ width: "max-content" }}
            >
              {/* First copy */}
              <div className="flex flex-row gap-50 pr-50">
                {strip.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-row items-center gap-6.75"
                  >
                    <Image
                      width={500}
                      height={500}
                      src={item.img}
                      alt="Strips"
                      className="w-12.25 h-12.25"
                    />
                    <h3 className="whitespace-nowrap text-black">
                      {item.text}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Second copy — identical, sits right after the first */}
              <div className="flex flex-row gap-50 pr-50">
                {strip.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-row items-center gap-6.75"
                  >
                    <Image
                    width={500}
                    height={500}
                      src={item.img}
                      alt="Strips"
                      className="w-12.25 h-12.25"
                    />
                    <h3 className="whitespace-nowrap text-black">
                      {item.text}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
