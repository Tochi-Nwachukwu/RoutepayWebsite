"use client";

import Container from "../../components/Container";
import FAQ from "../../components/FAQ";
import HowItWorks from "../../components/HowItWorks";
import WebApp from "../../components/WebApp";
import PersonalFeat from "../../components/PersonalFeat";

import animationData1 from "../../assets/speed.json";
import animationData2 from "../../assets/scale.json";
import animationData3 from "../../assets/support.json";
import Image from "next/image";

const cards = [
  {
    header: "Is RoutePay a licensed and regulated provider for government services?",
    text: "Yes. RoutePay Fintech Limited is fully licensed and regulated by the Central Bank of Nigeria (CBN) as a Payment Solution Service Provider (PSSP). We are also certified by the Nigerian Communications Commission (NCC) for Value-Added Services (VAS), ensuring we meet the highest standards of public sector compliance.",
  },
  {
    header: "Can our institution integrate RoutePay with existing portals?",
    text: "Absolutely. Whether it’s a University portal for student fees or an agency dashboard for license renewals, our robust APIs are designed for seamless integration with your existing infrastructure, allowing you to centralize all collections without replacing your current systems.",
  },
  {
    header: "How does RoutePay ensure transparency and prevent revenue leakage?",
    text: "Our platform provides real-time transaction monitoring and automated reconciliation. By digitizing every touchpoint—from USSD to POS—we eliminate manual handling of funds, providing a clear, immutable audit trail for every kobo collected.",
  },
  {
    header: "What payment channels are available for citizens and students?",
    text: "We offer an omnichannel experience to ensure inclusivity. Users can pay via Debit/Credit cards, Bank Transfers, QR Codes, and USSD. We also provide POS terminals for physical collection points within government offices or university campuses.",
  },
  {
    header: "Does the platform support multi-level administrative access?",
    text: "Yes. Our dashboard includes granular, role-based access controls. A University, for example, can give different access levels to the Bursary, individual Faculties, and the Audit department, ensuring that each team only sees the data relevant to their function.",
  },
  {
    header: "How is citizen and student data protected?",
    text: "Security is our foundation. RoutePay is fully compliant with the Nigeria Data Protection Act (NDPA) and employs bank-grade AES encryption. We ensure that all sensitive personal and financial data is handled with the highest level of confidentiality and security.",
  },
  {
    header: "What is the settlement cycle for public funds?",
    text: "We provide flexible settlement options tailored to institutional requirements. Typically, we operate on a T+1 cycle, but we can configure settlements to align with specific treasury or government account structures (such as TSA) as required by your mandate.",
  },
  {
    header: "Is there dedicated support for public institutions?",
    text: "Yes. Every public sector partner is assigned a dedicated Account Manager. In addition, our technical support team is available 24/7 to ensure that your collection services remain online and any disputes or issues are resolved with zero downtime.",
  }
];

const animate = [
  {
    vid: animationData1,
    header: "Compliance-First Consultation",
    text: "Consult with us to set up a payment collection system that adheres to the highest standards of financial security and public sector transparency.",
  },
  {
    vid: animationData2,
    header: "Centralized Revenue Management",
    text: "Integrate a system capable of managing high-volume transactions across diverse public touchpoints with automated reconciliation and zero downtime.",
  },
  {
    vid: animationData3,
    header: "Full-Spectrum Technical Support",
    text: "Activate your portal with the assurance of a dedicated account manager and support channels designed to keep your public services running 24/7.",
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
        <div className="flex flex-col text-black gap-12 md:gap-18 md:mt-18  ">
          <div className="flex flex-row  justify-center items-center md:text-center   ">
            {/* Header Text */}
            <div className=" flex flex-col gap-2 md:gap-4  w-full ">
              <h1 className="text-[40px] md:text-[70px] md:leading-22 text-black ">
                Institutional Payment Management
              </h1>
              <p className="md:text-[20px] text-[#3B3939] leading-6.25">
                A unified platform for schools, healthcare agencies, and public
                institutions. Securely manage fees and disbursements with
                comprehensive transaction histories and instant reporting.
              </p>
            </div>
            {/* Header button */}
          </div>

          <div className="w-full h-full mb-20">
            <Image
              width={500}
              height={500}
              src="/images/govt-hero2.jpg"
              className="w-full h-full hidden md:block rounded-2xl"
              alt="Government Hero"
            />
            <Image
              width={500}
              height={500}
              src="/images/govt-hero2-m.png"
              className="w-full h-full block md:hidden rounded-2xl"
              alt="Government Hero"
            />
          </div>
        </div>
      </Container>

      {/* Sections */}
      <div className="md:mt-20 flex flex-col gap-20 md:gap-40 bg-white">
        <HowItWorks
          animate={animate}
          title={"HOW IT WORKS"}
          header={
            <>
              3 simple steps and <br className="hidden md:block" /> you’re in
              business
              Get Started <br className="hidden md:block" /> With Ease
            </>
          }
        />
        <PersonalFeat
          cards={cardFeat}
          header={
            <>
              Digital Infrastructure for Government{" "}
              <br className="hidden md:block" /> Payments
            </>
          }
        />

        <FAQ cards={cards} />
        <WebApp
          header="BUILT FOR MODERN GOVERNANCE"
          text="Empower ministries and agencies"
          cta="Contact Sales"
        />
      </div>
    </div>
  );
}
