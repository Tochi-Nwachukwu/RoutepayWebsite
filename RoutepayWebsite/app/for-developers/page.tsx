"use client";

import Card from "../../components/Card";
import Btn from "../../components/Btn";

const cards = [
  {
    icon: "/images/web-plugins-icon.svg",
    title: "Web Plugins",
    description:
      "Integrate RoutePay into your e-commerce platforms with our ready-made plugins.",
  },
  {
    icon: "/images/links-icon.svg",
    title: "Payment Links",
    description:
      "Looking for a no-code option? Payment Links is the right option.",
  },
  {
    icon: "/images/api-endpoints.svg",
    title: "Api Endpoints",
    description:
      "We support you during this special time with flexible work options.",
  },
];

export default function ForDevelopersPage() {
  return (
    <div className="bg-[#F5EDED] pb-10 font-light">
      <div className="bg-[#EDE6E6] px-5">
        <div className="max-w-[1231px] mx-auto px-4 pt-[31px] pb-[78px] flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="">
            <p className="w-fit bg-[#F05A24] text-white text-center mb-4 px-4 py-1 rounded-2xl">
              For Developers
            </p>
            <h1 className="text-5xl leading-12 text-black font-semibold">Build on our Infrastructure</h1>
            <p className="my-4 text-[#4D4A4A]">
              We provide API integrations that allow you to customize your
              e-commerce app, enabling users to make payments via web
            </p>
            <div className="flex gap-3">
              <Btn
                text=" View Documentation"
                link="https://documenter.getpostman.com/view/2198647/2s847ETFBW"
              />
              <Btn text="  Contact Sales" link="/contact-us" color={true} />
            </div>
          </div>
          <img src="/images/for-devs-hero-image.png" alt="For Developers Hero" className="w-full" />
        </div>
      </div>
      <div className="max-w-[1231px] mx-auto mt-10 px-4">
        <h2 className="text-4xl max-w-[659px] mx-auto mb-10 text-center text-black">
          Choose from multiple integration options to build your solution.
        </h2>
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
