"use client";

import Card from "../../components/Card";
import Btn from "../../components/Btn";

const cards = [
  {
    icon: "/images/one.svg",
    title: "Create link",
    description: "Create a link in a few clicks on your RoutePay dashboard.",
  },
  {
    icon: "/images/two.svg",
    title: "Share Link",
    description:
      "Share the link through email or social media platforms like WhatsApp, Twitter, Instagram DM, and more.",
  },
  {
    icon: "/images/three.svg",
    title: "Receive Payments",
    description: "Collect payments for your business in your local currency",
  },
];

export default function PaymentLinksPage() {
  return (
    <div className="bg-[#F5EDED] pb-10 font-light">
      <div className="max-w-[1231px] mx-auto px-4 pt-[31px] pb-[78px] flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="">
          <p className="w-fit bg-[#F05A24] text-white text-center mb-4 px-4 py-1 rounded-2xl">
            Payment Links
          </p>
          <h1 className="text-5xl leading-12 mb-6 text-black font-semibold">
            Sell anywhere in Africa with Payment Links
          </h1>
          <p className="mt-4 text-[#4D4A4A]">
            No e-commerce store front? Create and send customized Payment Links
            via WhatsApp, Facebook or Instagram, and accept payments from your
            customers nationwide. No website or code required.
          </p>
          <div className="mt-7 flex gap-3">
            <Btn
              text="Get started"
              link="https://portal.routepay.com/register?source=MerchantPortal"
              color={true}
            />
          </div>
        </div>
        <img src="/images/payment-links-image.png" alt="Payment Links" className="" />
      </div>
      <div className="max-w-[1231px] mx-auto mt-10 px-4">
        <h3 className="text-4xl max-w-[659px] mx-auto mb-10 text-center text-black">
          How it works
        </h3>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              header={card.title}
              paragraph={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
