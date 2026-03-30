"use client";

import Container from "./Container";
import { useState } from "react";

interface FAQCard {
  header: string;
  text: string;
}

interface FAQProps {
  cards: FAQCard[];
}

export default function FAQ({ cards }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white ">
      <Container>
        <div className="flex flex-col  gap-20 lg:mt-20 text-black ">
          <div className="flex flex-col  justify-between     ">
            {/* Header Text */}
            <div className="w-full flex flex-col gap-10 md:gap-24.75">
              <div className=" flex flex-col gap-4  md:w-[70%] ">
                <h3 className="md:text-[18px] text-[#2B74BD] leading-5.75 ">
                  FREQUENTLY ASKED QUESTIONS
                </h3>
                <h3 className="text-[30px] md:text-[50px] md:leading-15.75 text-black">
                  The Information you <br className="hidden md:block" /> might find useful
                </h3>
              </div>

              {/* FAQ */}
              <div className="w-full">
                {/* Rows */}

                {/* Row-1 */}
                <div className="grid md:grid-cols-2 gap-y-3 gap-x-3 md:gap-y-5 md:gap-x-5">
                  {/* Cols */}
                  {cards.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div className="flex flex-col  w-full gap-2 md:gap-5" key={index}>
                        <div className="w-full h-0.5 bg-[#D9D9D9]"> </div>
                        <div className="px-2  flex flex-col ">
                          <div
                            className="flex cursor-pointer flex-row justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                          >
                            <h3 className="text-[18px] md:text-[20px] leading-6.25 text-black">
                              {item.header}
                            </h3>
                            <div className="text-[30px] md:text-[40px] text-[#F05A24]">
                              {isOpen ? "−" : "+"}
                            </div>
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-500 ${
                              isOpen
                                ? "max-h-40 opacity-100 mt-3"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <p className="leading-6.5 md:text-[18px] text-zinc-600">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
