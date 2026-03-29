"use client";

import Btn from "../../components/Btn";

export default function PayOutsPage() {
  return (
    <div className="bg-[#F5EDED] font-light">
      <div className="max-w-[1231px] mx-auto px-4 pt-[31px] pb-[78px] flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="">
          <p className="w-[153px] bg-[#F05A24] text-white text-center mb-4 px-4 py-1 rounded-2xl">
            Pay Outs
          </p>
          <h1 className="text-4xl leading-12 mb-6 text-black font-semibold">
            Send your earnings directly to any bank account
          </h1>
          <p className="mt-4 text-[#4D4A4A]">
            Routepay’s Payout service lets merchants instantly transfer funds to
            any Nigerian bank via API or the Merchant Portal.
          </p>
          <div className="mt-7 flex gap-3">
            <Btn
              text="Get started"
              link="https://portal.routepay.com/register?source=MerchantPortal"
              color={true}
            />
            <Btn text=" Contact Sales " link="/contact-us" />
          </div>
        </div>
        <img src="/images/payouts-hero-image.png" alt="Pay Outs Hero" className="" />
      </div>

      <div className="bg-[#EDE6E6] px-5 pt-[50px] pb-[36px]">
        <div className="max-w-[1231px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
          <img src="/images/imstant-sweep.png" alt="Instant Sweep" className="" />
          <div className="">
            <h2 className="text-4xl leading-12 mb-6 text-black font-medium">
              Instant Settlements & Auto-Sweep with Routepay
            </h2>
            <p className="mt-4 text-[#4D4A4A]">
              We ensure quick and efficient fund management by instantly
              settling all payments to your Routepay collection account.
              Additionally, our customizable auto-sweep feature enables same-day
              transfers of these funds directly to your preferred bank account,
              giving you seamless access to your earnings without delays.
            </p>
            <div className="mt-7 flex gap-3">
              <Btn
                text=" View Documentation"
                link="https://documenter.getpostman.com/view/2198647/2s847ETFBW"
                color={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1231px] mx-auto mt-20 pb-20 px-3 lg:px-0 flex flex-col-reverse lg:flex-row gap-3 lg:gap-6 lg:items-center lg:justify-between">
        <div className="h-fit flex-1">
          <img src="/images/security-image.png" alt="Security" className="" />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl text-black">Security & Compliance</h2>
          <p className="my-7 text-[#4D4A4A]">
            RoutePay ensures every transaction is safe and secure. We use the
            highest industry security standards, follow payment
            regulations, and protect your data with advanced encryption. Regular
            audits keep our systems trustworthy and reliable. Rest easy knowing
            your payments are guarded by bank-level security
          </p>
        </div>
      </div>
    </div>
  );
}
