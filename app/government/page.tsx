"use client";

import Container from "../../components/Container";
import FAQ from "../../components/FAQ";
import HowItWorks from "../../components/HowItWorks";
import WebApp from "../../components/WebApp";
import PersonalFeat from "../../components/PersonalFeat";

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
    header: "Rapid Onboarding",
    text: "Digitise your entire workflow in just a few hours through our seamless, guided onboarding process built for government systems.",
  },
  {
    vid: animationData2,
    header: "Scalable Operations",
    text: "Whether managing a single agency or multiple departments, the platform is designed to handle operations smoothly across all levels.",
  },
  {
    vid: animationData3,
    header: "Dedicated Support",
    text: "Our system includes integrated support channels, ensuring your team is always connected to assistance whenever it’s needed.",
  },
];

const cardFeat = [
  {
    img: "/images/personal-1.png",
    header: "Revenue Collection",
    text: "Enable secure and efficient tax collection through trusted digital channels.",
  },
  {
    img: "/images/personal-2.png",
    header: "Permits & Licensing",
    text: "Simplify payments for permits, registrations, and licenses with fast processing, smooth user experience.",
  },
  {
    img: "/images/personal-3.png",
    header: "Regulatory Charges",
    text: "Streamline the collection of regulatory and administrative fees with automated reconciliation.",
  },
  {
    img: "/images/personal-4.png",
    header: "Public Institution Payments",
    text: "Manage payments for schools, agencies, and public institutions with secure transaction history.",
  },
  {
    img: "/images/personal-5.png",
    header: "Government Services",
    text: "Enable seamless payment of public service charges such as fines, applications.",
  },
];

export default function GovernmentPage() {
  return (
    <div className="bg-white font-light ">
      <Container>
        <div className="flex flex-col text-black gap-18 mt-18  ">
          <div className="flex flex-row  justify-center items-center text-center   ">
            {/* Header Text */}
            <div className=" flex flex-col gap-4  w-full ">
              <h1 className="text-[70px] leading-22 text-black font-semibold">
                Join a League of Builders And Visionaries
              </h1>
              <p className="text-[20px] text-[#3B3939] leading-6.25">Team up with bold thinkers, makers, and curious minds who turn ideas into real impact.</p>
            </div>
            {/* Header button */}
          </div>

          <div className="w-full h-full mb-20">
            <img
              src="/images/govt-hero.jpg"
              className="w-full h-full rounded-2xl"
              alt="Government Hero"
            />
          </div>
        </div>
      </Container>

      {/* Sections */}
      <div className="mt-20 flex flex-col gap-40 bg-white">
        <HowItWorks
          animate={animate}
          title={"HOW IT WORKS"}
          header={
            <>
              3 simple steps and <br /> you’re in business
            </>
          }
        />
        <PersonalFeat 
          cards={cardFeat} 
          header={<>Digital Infrastructure for Government <br /> Payments</>}
        />
        
        <FAQ cards={cards} />
        <WebApp />
      </div>
    </div>
  );
}
