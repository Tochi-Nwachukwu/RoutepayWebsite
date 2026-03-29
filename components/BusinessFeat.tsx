import Container from "./Container";
import { ReactNode } from "react";

interface BusinessCard {
  img: string;
  header: string;
  text: string;
}

interface BusinessFeatProps {
  cards: BusinessCard[];
  title: string;
  header: ReactNode;
}

export default function BusinessFeat({ cards, title, header }: BusinessFeatProps) {
  return (
    <div className="bg-white font-light ">
      <Container>
        <div className="pt-0 flex items-center justify-center mt-29.25 lg:gap-3 xl:gap-6">
          <div className="w-full flex flex-col gap-24">
            <div className=" flex flex-col gap-4">
              <h3 className="text-[18px] text-[#2B74BD] leading-5.75 ">
                {title}
              </h3>
              <div className="text-[50px] leading-15.75 text-black">
                {header}
              </div>
            </div>

            <div className="flex flex-col w-full gap-54">
              {cards.map((item, index) => {
                const isReversed = index === 1;
                return (
                  <div
                    key={index}
                    className={`flex flex-row justify-center items-center gap-30 ${
                      isReversed ? "flex-row-reverse" : ""
                    }`}
                  >
                    <img src={item.img} alt="Card Image" />
                    <div className="flex flex-col gap-4.5 ">
                      <h3 className="text-[40px] leading-12.5 text-black">
                        {item.header}
                      </h3>
                      <p className="text-[#3B3939] leading-7.5 text-[20px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
