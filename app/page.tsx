"use client";

import Hello from "../components/Hello";
import HowItWorks from "../components/HowItWorks";
import Container from "../components/Container";
import PersonalBanking from "../components/PersonalBanking";
import GovtBanking from "../components/GovtBanking";
import BankingBusiness from "../components/BankingBusiness";
import DownloadApp from "../components/DownloadApp";
import FAQ from "../components/FAQ";

import animationData1 from "../assets/car-animate.json";
import animationData2 from "../assets/verify.json";
import animationData3 from "../assets/contact-us.json";
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

const animate = [
  {
    vid: animationData1,
    header: "Fast, Seamless Payments",
    text: "Send or receive money in seconds. We ensure your payments are processed immediately.",
  },
  {
    vid: animationData2,
    header: "Enterprise Grade Security",
    text: "Your transactions and data are fully protected. With top-tier security protocols.",
  },
  {
    vid: animationData3,
    header: "Designed for You",
    text: "From personal payments to business and government collections, RoutePay adapts to your needs.",
  },
];

export default function Home() {
  return (
    <div className="bg-white font-light ">
      <Container>
        <div className="flex flex-col justify-between items-center lg:flex-row gap-12 md:gap-20 lg:gap-6">
          <div className="w-full flex flex-col  md:gap-4.5 ">
            <h1 className="text-[40px] md:text-[60px] xl:text-[70px] md:leading-22 text-black ">
              Powering Modern Finances
            </h1>
            <div className="flex flex-col gap-8 md:gap-12">
              <p className="text-[#3B3939] md:text-[20px] leading-6.25">
                From paying bills and sending money to collecting payments and
                managing transactions all in one platform.
              </p>
              <div className="flex gap-14 ">
                <Image width={100} height={100} src="/images/app-store.svg" alt="App store" className="w-[110] md:w-fit" />
                <Image width={100} height={100} src="/images/play-store.svg" alt="Play store" className="w-[110] md:w-fit"/>
              </div>
            </div>
          </div>
          <div className=" w-full h-full xl:px-8 ">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/images/vid-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>

      {/* Sections */}
      <div className="mt-10 lg:mt-35 flex flex-col gap-20 lg:gap-40">
        <Hello />
        <HowItWorks
          animate={animate}
          header={
            <>
              All your payments. <br /> One platform.
            </>
          }
          title="HOW IT WORKS"
        />
        <div className="flex flex-col gap-0">
          <PersonalBanking />
          <BankingBusiness />
          <GovtBanking />
        </div>
        <FAQ cards={cards} />
        <DownloadApp />
      </div>
    </div>
  );
}
