"use client";

import Image from "next/image";
import Container from "../../components/Container";
import DownloadApp from "../../components/DownloadApp";
import FAQ from "../../components/FAQ";
import PersonalFeat from "../../components/PersonalFeat";

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

const cardFeat = [
  {
    img: "/images/personal-1.png",
    header: "Local Transfers",
    text: "Send money instantly to friends, family, and customers anywhere in Nigeria with ease and reliability.",
  },
  {
    img: "/images/personal-2.png",
    header: "Airtime Purchase",
    text: "Top up any mobile network in seconds MTN, Airtel, 9Mobile, and Glo all in one place.",
  },
  {
    img: "/images/personal-3.png",
    header: "Cable TV Payments",
    text: "Stay connected by paying your DStv, GOtv, and other cable subscriptions quickly and hassle-free.",
  },
  {
    img: "/images/personal-4.png",
    header: "Electricity Bills",
    text: "Effortlessly settle your electricity bills for all supported providers, directly from the platform.",
  },
  {
    img: "/images/personal-5.png",
    header: "Online Payments",
    text: "Make everyday purchases and online payments smoother from subscriptions to digital services all in one place.",
  },
];

export default function PersonalPage() {
  return (
    <div className="bg-[#FFF1EC] font-light ">
      <Container>
        <div className="pt-0 flex flex-col justify-between md:mt-15  xl:mt-29.25 lg:flex-row gap-20 md:gap-30 lg:gap-6">
          <div className="w-full flex flex-col gap-4.5 ">
            <h1 className="text-[40px] md:text-[60px] xl:text-[70px] md:leading-22 text-black">
              One app. <br className="hidden lg:block" /> All payments.
            </h1>
            <div className="flex flex-col gap-8 md:gap-12 lg:w-118.5">
              <p className="text-[#3B3939] md:text-[20px] leading-6.25">
                Your all-in-one financial app for sending money, paying bills, and managing your finances effortlessly.
              </p>
              <div className="flex gap-14">
                <a href="https://apps.apple.com/ng/app/routepay/id6752760967" target="_blank" rel="noopener noreferrer">
                  <Image width={100} height={100} src="/images/app-store.svg" alt="App store" className="w-[110] md:w-fit" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.routepay.app" target="_blank" rel="noopener noreferrer">
                  <Image width={100} height={100} src="/images/play-store.svg" alt="Play store" className="w-[110] md:w-fit" />
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center px-8">
            <Image width={900} height={900} src="/images/personal-hero.png" alt="Personal Hero" />
          </div>
        </div>
      </Container>

      {/* Sections */}
      <div className="mt-20 md:mt-35 flex flex-col gap-20 lg:gap-40 bg-white">
        <PersonalFeat
          className="mt-15 lg:mt-30"
          cards={cardFeat}
          header={<>Make fast, easy payments with the <br className="hidden lg:block" /> RoutePay mobile app.</>}
        />
        <FAQ cards={cards} />
        <DownloadApp />
      </div>
    </div>
  );
}
