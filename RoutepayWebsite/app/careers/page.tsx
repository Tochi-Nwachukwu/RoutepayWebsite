"use client";

import Card from "../../components/Card";
import OurValues from "../../components/OurValues";

const cards = [
  {
    title: 'Career Coaching',
    description:
      'Every team member gets a mentor on day one for guidance, ensuring their best performance.',
  },
  {
    title: 'Flexible time',
    description:
      'We trust our team to manage their time and don’t enforce rigid timesheets, allowing flexibility for our distributed team.',
  },
  {
    title: 'Family leave',
    description:
      'We support you during this special time with flexible work options.',
  },
  {
    title: 'Paid Vacation',
    description: 'Take time off to recharge with our paid vacation benefits.',
  },
  {
    title: 'Tenure gifting',
    description:
      'Enjoy luxury gifts, a paid sabbatical, or monetary rewards for your dedication.',
  },
  {
    title: 'Professional Trainings',
    description:
      'Get periodical training on technical and soft skills to grow your career.',
  },
];

const screening = [
  {
    icon: "/images/one.svg",
    title: 'Preliminary Screening',
    description: 'A quick initial review to assess qualifications and fit.',
  },
  {
    icon: "/images/two.svg",
    title: 'Technical Assessment',
    description: 'A hands-on test to evaluate relevant skills and expertise.',
  },
  {
    icon: "/images/three.svg",
    title: 'Panel Interview',
    description:
      'A discussion with key team members to assess experience, problem-solving, and cultural fit.',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-[#F5EDED] font-light">
      {/* Hero */}
      <div className="bg-[#EDE6E6] px-5">
        <div className="max-w-[1231px] mx-auto px-4 pt-[31px] pb-[78px] flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="">
            <p className="w-[109px] bg-[#F05A24] text-white text-center mb-4 px-4 py-1 rounded-2xl">
              Careers
            </p>
            <h1 className="text-4xl leading-12 text-black font-semibold">
              Ready to live your dream? Come join RoutePay
            </h1>
            <p className="mt-4 text-[#4D4A4A]">
              We’re a deeply mission-driven company, and these are the core
              ideas we return to when we make decisions.
            </p>
          </div>
          <img src="/images/careers-hero.png" alt="Careers Hero" className="" />
        </div>
      </div>

      {/* Perks */}
      <div className="max-w-[1231px] mx-auto px-5 pt-[45px]">
        <h3 className="text-3xl text-center text-[#4D4A4A] mb-9">
          Perks of being on the dream team
        </h3>
        <div className="flex flex-col lg:flex-row flex-wrap gap-10 items-center justify-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              header={card.title}
              paragraph={card.description}
            />
          ))}
        </div>
      </div>

      <div className="mt-[45px] px-5">
        <h3 className="text-center text-3xl text-[#4D4A4A] mb-6">Our Values</h3>
        <p className="max-w-[541px] mx-auto text-center text-[#4D4A4A]">
          We’re a deeply mission-driven company, and these are the core ideas we
          return to when we make decisions.
        </p>
      </div>

      <div className="">
        <OurValues />
      </div>

      <div className="px-5 mb-20">
        <h3 className="text-center text-3xl text-[#4D4A4A] mb-6">
          Our Screening Process
        </h3>
        <p className="max-w-[541px] mx-auto text-center mb-11 text-[#4D4A4A]">
          We’re a deeply mission-driven company, and these are the core ideas we
          return to when we make decisions.
        </p>
        <div className="flex flex-col lg:flex-row flex-wrap gap-10 items-center justify-center">
          {screening.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              header={card.title}
              paragraph={card.description}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1231px] mx-auto mt-20 px-4 pb-24 text-[#4D4A4A]">
        <p className="mb-6">Open positions</p>
        <div className="px-4 h-[439px] rounded-xl bg-white flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img src="/images/logo.png" alt="routepay" className="w-[109px]" />
            <p className="text-center max-w-[260px] text-[#4D4A4A]">
              No openings at this time, check back later
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
