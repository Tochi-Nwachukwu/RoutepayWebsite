"use client";

import Container from "../../components/Container";
import FAQ from "../../components/FAQ";
import BusinessFeat from "../../components/BusinessFeat";
import DownloadApp from "../../components/DownloadApp";
import Values from "../../components/Values";
import Image from "next/image";

const cards = [
  {
    header: "What is RoutePay?",
    text: "RoutePay is a financial and lifestyle platform that offers our customers a convenient, seamless, and integrated experience. We are the go-to platform for all financial transactions, from sending and receiving money to paying bills and making everyday purchases (movie tickets, gifts, airline tickets, betting, and so on). Customers can easily manage their finances, enjoy exclusive offers and rewards, and improve their lifestyles with 9jaPay.",
  },
  {
    header: "What payment options are available?",
    text: "RoutePay is a financial and lifestyle platform that offers our customers a convenient, seamless, and integrated experience. We are the go-to platform for all financial transactions, from sending and receiving money to paying bills and making everyday purchases (movie tickets, gifts, airline tickets, betting, and so on). Customers can easily manage their finances, enjoy exclusive offers and rewards, and improve their lifestyles with 9jaPay.",
  },
  {
    header: "Is RoutePay a bank?",
    text: "RoutePay is a financial and lifestyle platform that offers our customers a convenient, seamless, and integrated experience. We are the go-to platform for all financial transactions, from sending and receiving money to paying bills and making everyday purchases (movie tickets, gifts, airline tickets, betting, and so on). Customers can easily manage their finances, enjoy exclusive offers and rewards, and improve their lifestyles with 9jaPay.",
  },
  {
    header: "Why do you need my BVN?",
    text: "RoutePay is a financial and lifestyle platform that offers our customers a convenient, seamless, and integrated experience. We are the go-to platform for all financial transactions, from sending and receiving money to paying bills and making everyday purchases (movie tickets, gifts, airline tickets, betting, and so on). Customers can easily manage their finances, enjoy exclusive offers and rewards, and improve their lifestyles with 9jaPay.",
  },
  {
    header: "How do I create an account?",
    text: "RoutePay is a financial and lifestyle platform that offers our customers a convenient, seamless, and integrated experience. We are the go-to platform for all financial transactions, from sending and receiving money to paying bills and making everyday purchases (movie tickets, gifts, airline tickets, betting, and so on). Customers can easily manage their finances, enjoy exclusive offers and rewards, and improve their lifestyles with 9jaPay.",
  },
  {
    header: "How do I contact customer support?",
    text: "RoutePay is a financial and lifestyle platform that offers our customers a convenient, seamless, and integrated experience. We are the go-to platform for all financial transactions, from sending and receiving money to paying bills and making everyday purchases (movie tickets, gifts, airline tickets, betting, and so on). Customers can easily manage their finances, enjoy exclusive offers and rewards, and improve their lifestyles with 9jaPay.",
  },
];

const cardsFeat = [
  {
    img: "/images/about-1.jpg",
    header: "Who we are",
    text: "We are a game-changing Fintech company driven by the desire to ensure that digital payment is made possible and available without hassles. Founded and managed by a team of astute professionals with deep knowledge and understanding of payment systems in Nigeria as well as various enviable standards globally.",
  },
  {
    img: "/images/about-2.jpg",
    header: "Our Mission",
    text: "RoutePay's mission is to deliver payment solutions beyond barriers, enhancing connections and digital transformation in a changing world.",
  },
  {
    img: "/images/about-3.jpg",
    header: "Our Vision",
    text: "RoutePay aims to be the payment solution of choice beyond borders, providing secure digital payment platforms that connect all.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFF1EC] font-light ">
      <Container>
        <div className="flex flex-col text-black gap-9 md:gap-18 md:mt-12 xl:mt-18">
          <div className="flex flex-row">
            {/* Header Text */}
            <div className=" flex flex-col gap-2 md:gap-4">
              <h3 className="md:text-[18px]  leading-5.75 text-[#2B74BD]">
                ABOUT US
              </h3>
              <h1 className="text-[40px] md:text-[60px] xl:text-[70px] md:leading-22 text-black ">
                Money shouldn’t feel <br className="hidden md:block" />{" "}
                complicated.
              </h1>
              <p className="md:text-[20px] leading-6.25 text-[#555151]">
                We understand that technology can sometimes be intimidating,
                which is why we&apos;re designing an app that&apos;s accessible
                to everyone, regardless of their <br /> technical background.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-end h-full mb-20">
            <Image
              width={900}
              height={900}
              src="/images/about-hero-1.png"
              className=""
              alt="About Hero"
            />
          </div>
        </div>

        <div className="flex flex-col text-black gap-9 md:gap-18 md:mt-18">
          <div className="flex flex-row">
            {/* Header Text */}
            <div className=" flex flex-col gap-2 md:gap-4">
              <h3 className="md:text-[18px]  leading-5.75 text-[#2B74BD]">
                MISSION
              </h3>
              <h2 className="text-[30px] md:text-[50px] md:leading-15.75 text-black">
                One app. Endless financial possibilities.
              </h2>
              <p className="md:text-[20px] leading-6.25 text-[#555151]">
                We’re on a mission to reshape how Nigerians move, manage, and
                grow money giving individuals and businesses powerful tools that
                are simple enough for anyone to use, but strong enough to scale
                ambition.
              </p>
            </div>
          </div>

          <div className="w-full  flex justify-start h-full mb-20">
            <Image
              width={900}
              height={900}
              src="/images/about-hero-2.png"
              className=""
              alt="Mission Hero"
            />
          </div>
        </div>
      </Container>

      {/* Sections */}
      <div className="md:mt-20 flex flex-col gap-20 md:gap-40 bg-white">
        <BusinessFeat
          cards={cardsFeat}
          title="WHO WE ARE"
          header="Game-changing Fintech"
        />
        <Values />
        <FAQ cards={cards} />
        <DownloadApp />
      </div>
    </div>
  );
}
