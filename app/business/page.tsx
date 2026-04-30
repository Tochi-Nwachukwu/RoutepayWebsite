"use client";

import Container from "../../components/Container";
import FAQ from "../../components/FAQ";
import HowItWorks from "../../components/HowItWorks";
import WebApp from "../../components/WebApp";
import BusinessFeat from "../../components/BusinessFeat";

import animationData1 from "../../assets/fast.json";
import animationData2 from "../../assets/secure.json";
import animationData3 from "../../assets/cart.json";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    header: "How do I start collecting payments for my business?",
    text: "Getting started is seamless. Simply register on our Merchant Portal with your business details and CAC documents. Once verified, you can immediately begin generating payment links or integrating our API to accept payments from customers worldwide.",
  },
  {
    header: "What business tools does RoutePay offer?",
    text: "We provide a full suite of commerce tools, including secure Payment Links for social media sales, a robust API for custom web integrations, POS terminals for physical stores, and a Business Intelligence (BI) portal for real-time analytics and reporting.",
  },
  {
    header: "When will I receive my funds (Settlement)?",
    text: "We understand that cash flow is the lifeblood of your business. RoutePay typically operates on a T+1 settlement cycle, meaning your previous day’s transactions are processed and credited to your settled account by the next business day.",
  },
  {
    header: "What documents are required to open a Business Account?",
    text: "To comply with CBN regulations, you’ll need your Corporate Affairs Commission (CAC) registration documents, your Business Tax Identification Number (TIN), a valid government-issued ID for all directors, and proof of your business address.",
  },
  {
    header: "Can I manage multiple team members on my dashboard?",
    text: "Yes. Our Merchant Portal includes granular user access controls. You can assign specific roles to your team—such as 'Auditor' or 'Manager'—allowing them to view reports or handle refunds without giving them access to sensitive financial settings.",
  },
  {
    header: "How secure are large-volume business transactions?",
    text: "RoutePay is built on bank-grade security infrastructure. We use AES encryption and are fully compliant with the Nigeria Data Protection Act (NDPA). Our PSSP and VAS licenses from the CBN and NCC ensure that your business and customer data are always protected.",
  },
  {
    header: "Are there any hidden merchant fees or monthly charges?",
    text: "We believe in transparent pricing. There are no setup fees or monthly maintenance charges. You only pay a small, industry-standard percentage per successful transaction, so you only pay when you actually get paid.",
  },
  {
    header: "Does RoutePay support bulk payouts and payroll?",
    text: "Absolutely. Beyond collecting money, our dashboard allows you to make bulk transfers to vendors, partners, or employees instantly. You can upload a single file and handle hundreds of payouts with a single click.",
  },
];

const animate = [
  {
    vid: animationData1,
    header: "Create Your Merchant Profile",
    text: "Sign up on our secure dashboard and provide your CAC registration details and business credentials.",
  },
  {
    vid: animationData2,
    header: "Secure Compliance Verification",
    text: "Our team performs a swift review of your documents to ensure your account meets all regulatory standards.",
  },
  {
    vid: animationData3,
    header: "Activate Your Payment Channels",
    text: "Once verified, you can go live immediately by generating payment links or integrating our robust APIs.",
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
                Payment Collections
                <br className="" />
                Simplified
              </h1>
            </div>
            {/* Header button */}
            <div className=" flex flex-col gap-4 md:gap-8 justify-center  lg:w-[50%]  ">
              <h3 className="md:text-[20px] leading-6.25 text-black">
                Get paid faster with secure, scalable collection tools designed
                for the modern Nigerian business.
              </h3>
              <div className="md:flex grid gap-2 ">
                <Link
                  href="https://portal.routepay.com/register?source=MerchantPortal"
                  className="rounded-[30px] w-56 md:w-62.5 font-normal md:font-medium text-white bg-[#000000] flex flex-row justify-center items-center px-0 py-2 md:py-3 text-[16px] gap-3"
                >
                  {" "}
                  <p>Sign up your business</p>{" "}
                  <Image
                    width={15}
                    height={15}
                    src="/images/button-right.svg"
                    alt=""
                  />{" "}
                </Link>
                <Link
                  href="https://developer.routepay.com"
                  target="_blank"
                  className="rounded-[30px] w-56 md:w-62.5 font-normal md:font-medium text-white bg-[#a39b9b] flex flex-row justify-center items-center px-0 py-2 md:py-3 text-[16px] gap-3"
                >
                  {" "}
                  <p>View API Documentation</p>{" "}
                  <Image
                    width={15}
                    height={15}
                    src="/images/button-right.svg"
                    alt=""
                  />{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:mb-20">
            <Image
              width={900}
              height={900}
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
              Unify your operations so everything{" "}
              <br className="hidden lg:block" /> works smoothly, efficiently,
              and in sync.
            </>
          }
        />
        <HowItWorks
          animate={animate}
          title={"HOW IT WORKS"}
          header={
            <>
              Set up in minutes.
              <br className="hidden lg:block" /> Start selling immediately.
            </>
          }
        />
        <FAQ cards={cards} />
        <WebApp
          header="TRY ROUTEPAY FOR YOUR BUSINESS"
          text="Ready for a business engine that just... works?"
          cta="Get Started"
        />
      </div>
    </div>
  );
}
