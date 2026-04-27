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
import { useState } from "react";
import Appstore from "@/components/Appstore";

const cards = [

  {
    header: "What is RoutePay?",
    text: "RoutePay is a premier Nigerian fintech company and a licensed Payment Solution Service Provider (PSSP). We provide a seamless ecosystem for digital payments, enabling individuals and businesses to send money, pay bills, and manage financial transactions without barriers.",
  },
  {
    header: "What payment options are available?",
    text: "You can perform transactions using a variety of secure methods, including Debit/Credit cards, Bank Transfers, USSD codes, and QR Code payments. Our platform is designed to ensure that you can pay or get paid however you prefer.",
  },
  {
    header: "Is RoutePay a bank?",
    text: "RoutePay is not a traditional commercial bank; we are a fintech company licensed by the Central Bank of Nigeria (CBN) as a Payment Solution Service Provider. We provide the digital infrastructure that makes financial services more accessible and efficient for everyone.",
  },
  {
    header: "Why do you need my BVN?",
    text: "We require your Bank Verification Number (BVN) to comply with CBN regulations regarding Know Your Customer (KYC) and Anti-Money Laundering (AML) policies. This verification step ensures the security of your account and helps us protect the platform from fraudulent activities.",
  },
  {
    header: "How do I create an account?",
    text: "Setting up is easy. Simply download the RoutePay app from the Google Play Store or Apple App Store, or visit our merchant portal. You’ll need to provide your basic details—name, email, and phone number—and set a secure password to get started.",
  },
  {
    header: "Is RoutePay secure?",
    text: "Absolutely. RoutePay employs bank-grade AES encryption and advanced security protocols to protect your personal data and financial information. We are committed to maintaining a safe environment for every transaction you make.",
  },
  {
    header: "What bills can I pay on RoutePay?",
    text: "You can handle all your essential utility payments in one place, including electricity bills, internet data, cable TV subscriptions (DSTV, GOTV, StarTimes), and mobile airtime for all major Nigerian networks.",
  },
  {
    header: "Can I use RoutePay for my business?",
    text: "Yes! RoutePay offers robust solutions for businesses of all sizes. You can set up a store page, generate payment links for social media sales, and manage your business revenue through our dedicated merchant dashboard.",
  },
  {
    header: "How do I contact customer support?",
    text: "Our support team is ready to help. You can reach us via email at customersupport@routepay.com or through our dedicated WhatsApp helpline at +234-913-444-6536. We are also available for inquiries on our official social media channels.",
  },
  {
    header: "What are the different KYC levels and their limits?",
    text: "To ensure security and comply with CBN regulations, we use a tiered KYC (Know Your Customer) system. Tier 1 accounts (Phone number & Name) have lower transaction limits, while Tier 3 accounts (verified with BVN and Proof of Address) enjoy the highest daily transfer and withdrawal limits available on the platform.",
  },
  {
    header: "How do I upgrade my account to a Business Account?",
    text: "You can upgrade by providing your Corporate Affairs Commission (CAC) registration details, business address, and Tax Identification Number (TIN). Once verified, you will gain access to merchant tools like bulk payouts, payment links, and detailed financial reporting.",
  },
  {
    header: "Does RoutePay provide POS terminals?",
    text: "Yes, as a licensed PSSP, we offer robust POS solutions for businesses and agents. Our terminals are designed for high uptime, 'blazing-fast' transaction processing, and support for all major Nigerian cards and alternative payment methods like Transfer-to-Pay.",
  },
  {
    header: "Can I get a loan through RoutePay?",
    text: "While RoutePay is primarily a payment infrastructure provider, we operate our own licensed microfinance bank, Routelink MFB, which enables us to offer credit facilities directly. Your eligibility is typically based on your transaction history and volume on the RoutePay platform.",
  },
  {
    header: "What happens if a transaction fails but I am debited?",
    text: "Our system is built with auto-reversal protocols that typically resolve failed transactions within 24 hours. If a reversal doesn't occur, you can log a dispute directly through the app or contact our support team with your transaction reference for immediate resolution.",
  },
  {
    header: "Is RoutePay regulated by the government?",
    text: "Yes. RoutePay Fintech Limited is fully licensed and regulated by the Central Bank of Nigeria (CBN) as a Payment Solution Service Provider (PSSP). We are also certified by the Nigerian Communications Commission (NCC) for Value-Added Services (VAS).",
  },
  {
    header: "Can I use RoutePay without a smartphone?",
    text: "Absolutely. We are an omnichannel platform. In addition to our mobile app and web portal, you can perform transactions, check balances, and pay bills using our dedicated USSD code, making financial services accessible even without internet connectivity.",
  },
  {
    header: "How does RoutePay protect me from fraud?",
    text: "We use bank-grade AES encryption, two-factor authentication (2FA), and AI-driven fraud monitoring systems. We also provide instant transaction alerts and the ability to 'freeze' your account or cards immediately from the app if you suspect any unauthorized activity.",
  },
  {
    header: "Are there monthly maintenance fees?",
    text: "No, RoutePay does not charge monthly maintenance fees. We believe in transparency and only charge minimal, industry-standard fees per transaction, ensuring you keep more of your hard-earned money.",
  }
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
    header: "Built for  Everyone",
    text: "Routepay delivers a robust payment ecosystem built for personal use, business growth, and public sector efficiency.",
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="bg-white font-light ">
      <Container>
        <div className="flex flex-col justify-between items-center lg:flex-row gap-12 md:gap-20 lg:gap-6">
          <div className="w-full flex flex-col  md:gap-4.5 ">
            <h1 className="text-[40px] md:text-[60px] lg:text-[55px] xl:text-[70px] md:leading-22 text-black ">
              Simplifying Modern Payments
            </h1>
            <div className="flex flex-col gap-8 md:gap-12">
              <p className="text-[#3B3939] md:text-[20px] leading-6.25">
                We make it easy to send, receive, and make payments in local currencies across growing markets with simple tools and seamless connections.
              </p>
             <Appstore />
              <p className="text-[#3B3939] md:text-[12px] leading-6.25">Powered by <span className="font-medium">Routelink Microfinance Bank</span></p>
            </div>
          </div>
          <div className=" w-full h-full xl:px-8 ">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/hero-vid.png"
              className="w-full h-full object-cover "
              src="/images/vid-hero.mp4"
            />
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
