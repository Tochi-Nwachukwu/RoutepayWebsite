"use client";

import Container from "../../components/Container";
import FAQ from "../../components/FAQ";
import HowItWorks from "../../components/HowItWorks";
import WebApp from "../../components/WebApp";
import BusinessFeat from "../../components/BusinessFeat";

import animationData1 from "../../assets/car-animate.json";
import animationData2 from "../../assets/verify.json";
import animationData3 from "../../assets/contact-us.json";

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
        <div className="flex flex-col text-black gap-20 mt-20  ">
          <div className="flex flex-row  justify-between   ">
            {/* Header Text */}
            <div className=" flex flex-col gap-4  w-full ">
              <h1 className="text-[70px] leading-22 text-black font-semibold">
                From Startups to <br />
                Big Players
              </h1>
            </div>
            {/* Header button */}
            <div className=" flex flex-col gap-8 justify-center  w-[50%]  ">
              <h3 className="text-[20px] leading-6.25 text-black">
                From small ideas to big operations, everything is designed to
                scale with you as your business levels up.
              </h3>
              <button className="rounded-[30px] w-62.5 font-medium text-white bg-[#000000] flex flex-row justify-center items-center px-0 py-3 text-[16px] gap-3">
                {" "}
                <p>Sign up your business</p>{" "}
                <img src="/images/button-right.svg" alt="" />{" "}
              </button>
            </div>
          </div>

          <div className="w-full h-full mb-20">
            <img
              src="/images/business-hero1.png"
              className="w-full h-full"
              alt="Business Hero"
            />
          </div>
        </div>
      </Container>

      {/* Sections */}
      <div className="mt-35 flex flex-col gap-40 bg-white">
        <BusinessFeat
          cards={cardsFeat}
          title={"STREAMLINE & INTEGRATE"}
          header={
            <>
              Unify your operations so everything <br /> works smoothly,
              efficiently, and in sync.
            </>
          }
        />
        <HowItWorks
          animate={animate}
          title={"HOW IT WORKS"}
          header={
            <>
              Get started in just 3 simple steps <br /> and step straight into
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
