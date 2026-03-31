"use client";

import Image from "next/image";
import Container from "../../components/Container";
import DownloadApp from "../../components/DownloadApp";
import FAQ from "../../components/FAQ";
import PersonalFeat from "../../components/PersonalFeat";

const cards = [
  {
    header: "What is RoutePay?",
    text: "RoutePay is a premier financial and lifestyle platform designed to make your daily transactions effortless. We provide a seamless ecosystem where you can send money, pay bills, and manage your finances in one place, without barriers.",
  },
  {
    header: "Is RoutePay a bank?",
    text: "We are a fintech company licensed by the Central Bank of Nigeria (CBN) as a Payment Solution Service Provider (PSSP). While we aren't a traditional bank, we provide the secure digital infrastructure that makes managing your money faster and more efficient.",
  },
  {
    header: "What bills can I pay on the platform?",
    text: "You can handle all your essential utility payments with just a few taps. This includes electricity bills, internet data, cable TV subscriptions (DSTV, GOTV, StarTimes), and mobile airtime for all major Nigerian networks.",
  },
  {
    header: "What are the KYC levels and transaction limits?",
    text: "To keep your account secure, we use a tiered KYC system. Starting with just your name and phone number (Tier 1), you can perform basic transactions. Verifying your BVN and address (Tier 3) unlocks the highest daily transfer and withdrawal limits.",
  },
  {
    header: "What if a transaction fails but I am debited?",
    text: "Don't worry—our system uses auto-reversal protocols that typically resolve failed transactions within 24 hours. If it takes longer, simply log a dispute in the app, and our support team will fix it immediately.",
  },
  {
    header: "Are there any monthly maintenance fees?",
    text: "Absolutely not. RoutePay doesn't charge monthly maintenance fees or hidden 'surprises.' We believe in total transparency, charging only minimal, industry-standard fees per transaction so you keep more of your money.",
  },
]

const cardFeat = [
  {
    img: "/images/color-1.png",
    header: "Local Transfers",
    text: "Send money instantly to friends, family, and customers anywhere in Nigeria with ease and reliability.",
  },
  {
    img: "/images/color-2.png",
    header: "Airtime Purchase",
    text: "Top up any mobile network in seconds MTN, Airtel, 9Mobile, and Glo all in one place.",
  },
  {
    img: "/images/color-3.png",
    header: "Cable TV Payments",
    text: "Stay connected by paying your DStv, GOtv, and other cable subscriptions quickly and hassle-free.",
  },
  {
    img: "/images/color-4.png",
    header: "Electricity Bills",
    text: "Effortlessly settle your electricity bills for all supported providers, directly from the platform.",
  },
  {
    img: "/images/color-5.png",
    header: "Online Payments",
    text: "Make everyday purchases and online payments smoother from subscriptions to digital services all in one place.",
  },
  {
    img: "/images/color-6.png",
    header: "Micro Loans",
    text: "Access quick and flexible micro-loans to meet your short-term financial needs, right from the app.",
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
