"use client";

import Container from "../../components/Container";
import FAQ from "../../components/FAQ";
import HowItWorks from "../../components/HowItWorks";
import WebApp from "../../components/WebApp";
import BusinessFeat from "../../components/BusinessFeat";

import animationData1 from "../../assets/car-animate.json";
import animationData2 from "../../assets/verify.json";
import animationData3 from "../../assets/contact-us.json";
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

const cardsFeat = [
  {
    img: "/images/business-1.jpg",
    header: "Easy Integration with Popular E-Commerce Platforms",
    text: "Integrate the Routepay Payment Gateway effortlessly with popular e-commerce platforms, enabling secure and efficient payment processing for your online store.",
  },
  {
    img: "/images/business-2.jpg",
    header: "Instant Settlements & Auto-Sweep with Routepay",
    text: "We ensure quick and efficient fund management by instantly settling all payments to your Routepay collection account. Additionally, our customizable auto-sweep feature enables same-day transfers of these funds directly to your preferred bank account, giving you seamless access to your earnings without delays.",
  },
  {
    img: "/images/business-3.jpg",
    header: "Sell anywhere in Africa with Payment Links",
    text: "No e-commerce store front? Create and send customized Payment Links via WhatsApp, Facebook or Instagram, and accept payments from your customers nationwide. No website or code required.",
  },
];

export default function BusinessPage() {
  return (
    <div className="bg-[#DBEBE5] font-light ">
      <Container>
        <div className="flex flex-col text-black gap-15 lg:gap-20 md:mt-10 lg:mt-20  ">
          <div className="flex flex-col lg:flex-row gap-2 md:gap-0 justify-between   ">
            {/* Header Text */}
            <div className=" flex flex-col gap-4  w-full ">
              <h1 className="text-[40px] md:text-[60px] xl:text-[70px] md:leading-22 text-black">
                From Startups to <br className="hidden lg:block" />
                Big Players
              </h1>
            </div>
            {/* Header button */}
            <div className=" flex flex-col gap-4 md:gap-8 justify-center  lg:w-[50%]  ">
              <h3 className="md:text-[20px] leading-6.25 text-black">
                From small ideas to big operations, everything is designed to
                scale with you as your business levels up.
              </h3>
              <button className="rounded-[30px] w-56 md:w-62.5 font-normal md:font-medium text-white bg-[#000000] flex flex-row justify-center items-center px-0 py-2 md:py-3 text-[16px] gap-3">
                {" "}
                <p>Sign up your business</p>{" "}
                <Image width={15} height={15} src="/images/button-right.svg" alt="" />{" "}
              </button>
            </div>
          </div>

          <div className="w-full h-full md:mb-20">
            <Image width={900} height={900}
              src="/images/business-hero1.png"
              className="w-full h-full"
              alt="Business Hero"
            />
          </div>
        </div>
      </Container>

      {/* Sections */}
      <div className="mt-15 lg:mt-35 flex flex-col gap-20 lg:gap-40 bg-white">
        <BusinessFeat
          cards={cardsFeat}
          title={"STREAMLINE & INTEGRATE"}
          header={
            <>
              Unify your operations so everything <br className="hidden lg:block"/> works smoothly,
              efficiently, and in sync.
            </>
          }
        />
        <HowItWorks
          animate={animate}
          title={"HOW IT WORKS"}
          header={
            <>
              Get started in just 3 simple steps <br className="hidden lg:block" /> and step straight into
              business.
            </>
          }
        />
        <FAQ cards={cards} />
        <WebApp />
      </div>
    </div>
  );
}
