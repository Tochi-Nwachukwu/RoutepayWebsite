import React from 'react';
import SimpleSlider from './SimpleSlider';

interface CoreValue {
  letter: string;
  word: string;
  meaning: string;
}

const OurValues = () => {
  const coreValues: CoreValue[] = [
    {
      letter: 'R',
      word: 'Result',
      meaning:
        'Focusing on what truly matters drives RESULTS that make a difference.',
    },
    {
      letter: 'A',
      word: 'Agility',
      meaning:
        'In an ever-changing environment, AGILITY helps you respond effectively.',
    },

    {
      letter: 'I',
      word: 'Integrity',
      meaning:
        'Work with absolute INTEGRITY letting Routelink’s values guide every decision.',
    },
    {
      letter: 'I',
      word: 'Innovation',
      meaning:
        'Through INNOVATION we create solutions that keep us ahead of competition.',
    },

    {
      letter: 'S',
      word: 'Synergy',
      meaning: 'Building strong SYNERGY allows us to achieve more together.',
    },

    {
      letter: 'E',
      word: 'Excellence',
      meaning:
        'Pursue consistent EXCELLENCE ensuring quality in every task and decision.',
    },
  ];
  return (
    <>
      <div className="bg-[#F5EDED] bg-opacity-10 px-5 py-16 xl:pl-28">
        {/* <section>
          <h6 className="text-[#a83535] font-bold">Who We Are</h6>

          <h2 className="pt-6 text-[#F05A24] text-3xl md:text-4xl xl:w-[670px]">
            Our Values
          </h2>
        </section> */}

        <section className="my-10">
          <SimpleSlider
            slidesToScroll={1}
            slideToShowLg={2.05}
            slideToShowMd={1.02}
            slideToShowSm={1}
            nextButtonCustom={
              'bg-[#F05A24] px-4 py-3.5 absolute right-0 -bottom-20 rounded-md'
            }
            prevButtonCustom={
              'bg-[#F05A24] px-4 py-3.5 absolute right-16 -bottom-20 rounded-md'
            }>
            {coreValues.map((value, index) => (
              <Cards
                key={index}
                letter={value.letter}
                word={value.word}
                meaning={value.meaning}
              />
            ))}
          </SimpleSlider>
        </section>
      </div>
    </>
  );
};

interface CardsProps {
  letter: string;
  word: string;
  meaning: string;
}

const Cards = ({ letter, word, meaning }: CardsProps) => {
  return (
    <div className="w-full md:w-[600px] xl:w-[529px] h-[140px] md:h-[183px] bg-white rounded-xl overflow-hidden shadow-md">
      <div className="flex w-full h-full items-center">
        <div className="w-[107px] md:w-[177px] h-full bg-[#F05A24] text-6xl md:text-8xl text-white rounded-xl grid place-items-center">
          {letter}
        </div>
        <div className="flex-1 p-2 md:p-5 h-full grid place-items-center">
          <div>
            <p className="text-lg md:text-2xl text-black">{word}</p>
            <p className="text-sm md:text-base text-[#4d4a4a] pt-2">
              {meaning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
