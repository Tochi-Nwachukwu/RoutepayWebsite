"use client";

import Container from "../../components/Container";
import FAQ from "../../components/FAQ";
import BusinessFeat from "../../components/BusinessFeat";
import DownloadApp from "../../components/DownloadApp";
import Values from "../../components/Values";
import Image from "next/image";

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
    text: "While RoutePay is primarily a payment infrastructure provider, we operate our own microfinance institution, RoutelinkMFB, which enables us to offer credit facilities directly. Your eligibility is determined based on your transaction history and volume on the RoutePay platform.",
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

const cardsFeat = [
  {
    img: "/images/about-1.jpg",
    header: "Who we are",
    text: "We are a game-changing Fintech company driven by the desire to ensure that digital payment is made possible and available without hassles. Founded and managed by a team of astute professionals with deep knowledge and understanding of payment systems in Nigeria as well as various enviable standards globally.",
  },
  {
    img: "/images/about-2.jpg",
    header: "Our Mission",
    text: "RoutePay's mission is to deliver payment solutions beyond barriers, enhancing connections and digital transformation in a changing world.",
  },
  {
    img: "/images/about-3.jpg",
    header: "Our Vision",
    text: "RoutePay aims to be the payment solution of choice beyond barriers, providing secure digital payment platforms that connect all.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFF1EC] font-light ">
      <Container>
        <div className="flex flex-col text-black gap-9 md:gap-18 md:mt-12 xl:mt-18">
          <div className="flex flex-row">
            {/* Header Text */}
            <div className=" flex flex-col gap-2 md:gap-4">
              <h3 className="md:text-[18px]  leading-5.75 text-[#2B74BD]">
                ABOUT US
              </h3>
              <h1 className="text-[40px] md:text-[60px] xl:text-[70px] md:leading-22 text-black ">
                Powering a new generation of <br className="hidden lg:block" />{" "}
                African businesses
              </h1>
              <p className="md:text-[20px] leading-6.25 text-[#555151]">
                We’re on a mission to reshape how Nigerians move, manage, and
                grow money giving individuals and businesses powerful tools that
                are simple enough for anyone to use, but strong enough to scale
                ambition.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-end h-full mb-20">
            <Image
              width={900}
              height={900}
              src="/images/about-hero-1.png"
              className=""
              alt="About Hero"
            />
          </div>
        </div>

        <div className="flex flex-col text-black gap-9 md:gap-18 md:mt-18">
          <div className="flex flex-row">
            {/* Header Text */}
            <div className=" flex flex-col gap-2 md:gap-4">
              <h3 className="md:text-[18px]  leading-5.75 text-[#2B74BD]">
                MISSION
              </h3>
              <h2 className="text-[30px] md:text-[50px] md:leading-15.75 text-black">
                One app. Endless financial possibilities.
              </h2>
              <p className="md:text-[20px] leading-6.25 text-[#555151]">
                We’ve built a reliable solution with a tested infrastructure, certified by PCI DSS and NDPR. Our focus on speed, agility, and security ensures the best experience for our customers.


              </p>
            </div>
          </div>

          <div className="w-full  flex justify-start h-full mb-20">
            <Image
              width={900}
              height={900}
              src="/images/about-hero-2.png"
              className=""
              alt="Mission Hero"
            />
          </div>
        </div>
      </Container>

      {/* Sections */}
      <div className="md:mt-20 flex flex-col gap-20 md:gap-40 bg-white">
        <BusinessFeat
          cards={cardsFeat}
          title="WHO WE ARE"
          header="Game-changing Fintech"
        />
        <Values />
        <FAQ cards={cards} />
        <DownloadApp />
      </div>
    </div>
  );
}
