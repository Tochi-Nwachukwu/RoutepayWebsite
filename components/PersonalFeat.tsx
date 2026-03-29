import Container from "./Container";
import { ReactNode } from "react";

interface PersonalCard {
  img: string;
  header: string;
  text: string;
}

interface PersonalFeatProps {
  cards: PersonalCard[];
  header: ReactNode;
  className?: string;
}

export default function PersonalFeat({ cards, header, className }: PersonalFeatProps) {
  return (
    <div className="bg-white font-light ">
      <Container>
        <div className={`pt-0 flex items-center justify-center ${className || ""} lg:gap-3 xl:gap-6`}>
          <div className="w-full flex flex-col gap-20 justify-center items-center ">
            <h2 className="text-[50px] leading-15.75 text-center text-black">
              {header}
            </h2>

            <div className="grid grid-cols-3 gap-x-16 gap-y-20">
              {cards.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-9.75">
                    <img src={item.img} alt="Card Image" />
                    <div className="flex flex-col gap-4.5 ">
                      <h3 className="text-[28px] text-black">{item.header}</h3>
                      <p className="text-[#3B3939] text-[20px]">{item.text}</p>
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
