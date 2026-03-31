import Image from "next/image";
import Btn from "./Btn";
import Container from "./Container";

export default function WebApp() {
  return (
    <div className="bg-[#31160D] ">
      <Container>
        <div className="flex flex-col gap-20 mt-5 md:mt-20 mb-20 text-white ">
          <div className="flex flex-col gap-14 md:gap-0  md:flex-row  justify-center items-center     ">
            {/* Header Text */}
            <div className="w-full flex flex-col gap-24.75">
              <div className=" flex flex-col gap-2 md:gap-6  md:w-[70%] ">
                <h3 className="md:text-[18px]  leading-5.75 ">
                  TRY ROUTEPAY FOR YOUR BUSINESS
                </h3>
                <h2 className="text-[30px] md:text-[50px] md:leading-15.75 text-white">
                  Ready for a business engine that just... works?
                </h2>
                <a href="https://portal.routepay.com/register?source=MerchantPortal" target="_blank" rel="noopener noreferrer">
                  <button className="rounded-[30px] w-35 md:w-50 font-normal md:font-medium text-white bg-[#F05A24] flex flex-row justify-center items-center px-0 py-2 md:py-3 md:text-[16px] gap-3">
                    {" "}
                    <p>Get Started</p>{" "}
                  </button>
                </a>

              </div>

              {/* Links */}
            </div>
            {/* Header button */}
            <div className=" flex flex-col gap-8 justify-end  w-full h-full">
              <Image width={500} height={500} src="/images/web-hero.png" alt="Web Hero" className="w-full h-full" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
