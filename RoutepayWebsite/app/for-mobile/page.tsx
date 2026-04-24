"use client";

export default function ForMobilePage() {
  return (
    <div className="bg-[#F5EDED] font-light">
      <div className="max-w-[1231px] mx-auto px-4 pt-[31px] pb-[78px] flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="">
          <p className="w-[153px] bg-[#F05A24] text-white text-center mb-4 px-4 py-1 rounded-2xl">
            Mobile App
          </p>
          <h1 className="text-4xl leading-12 mb-6 text-black font-semibold">
            Send, receive, and make payments with easy taps.
          </h1>
          <p className="mt-4 max-w-[489px] text-[#4D4A4A]">
            While you’re sending, receiving, or managing transactions, the app
            provides a seamless, secure, and user-friendly experience for you.
          </p>
          <div className="mt-7 flex gap-3">
            <a href="https://apps.apple.com/ng/app/RoutePay-fintech/id6502836208">
              <img src="/images/app-store-logo.png" alt="App Store" className="rounded-xl" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.routepay&hl=en">
              <img src="/images/play-store-logo.png" alt="Play Store" className="rounded-xl" />
            </a>
          </div>
        </div>
        <img src="/images/mobile-app-hero-image.png" alt="Mobile App Hero" className="" />
      </div>

      <div className="bg-[#EDE6E6] lg:px-5 pt-[50px] pb-[36px]">
        <div className="max-w-[1231px] mx-auto px-4 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[86px]">
          <div className="flex-1">
            <h2 className="text-4xl leading-12 mb-6 text-black font-medium">
              Make fast, easy payments with the RoutePay mobile app.
            </h2>
            <p className="mt-4 max-w-[541px] text-[#4D4A4A]">
              The RoutePay mobile app is the fastest and most convenient way to
              buy airtime, subscribe to cable TV and
              pay bills with ease. Enjoy seamless access to all your mobile
              network and cable TV subscriptions in one place, at affordable
              rates. Whether you’re at home or on the go, RoutePay puts all your
              payment needs right at your fingertips, making transactions quick,
              secure, and hassle-free.
            </p>
          </div>
          <div className="flex-1">
            <ul>
              <li className="mt-[27px] flex items-start gap-2">
                <img src="/images/checkbox.png" alt="Check" className="" />
                <p className="text-black">Make local transfers</p>
              </li>
              <li className="flex items-start gap-2">
                <img src="/images/checkbox.png" alt="Check" className="" />
                <p className="text-black">Purchase airtime (MTN, Airtel, 9Mobile, Glo)</p>
              </li>
             
              <li className="flex items-start gap-2">
                <img src="/images/checkbox.png" alt="Check" className="" />
                <p className="text-black">Pay your cable subscription bills (DSTV, GOTV)</p>
              </li>
              <li className="flex items-start gap-2">
                <img src="/images/checkbox.png" alt="Check" className="" />
                <p className="text-black">Pay for your electricity bills</p>
              </li>
            </ul>
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
