import Image from "next/image";
import Btn from "./Btn";
import Container from "./Container";

export default function BankingBusiness() {
  return (
    <div className="bg-[#31160D] ">
      <Container>
        <div className="flex flex-col gap-10 md:gap-20 md:mt-20 text-white  ">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between  items-center lg:mt-20  ">
            {/* Header Text */}
            <div className=" flex flex-col gap-2 md:gap-4  lg:w-130 ">
              <h3 className="md:text-[18px] text-[#2B74BD] md:leading-5.75 ">
                BUSINESS BANKING
              </h3>
              <h3 className="text-[30px] md:text-[50px] md:leading-15.75 ">
                A Complete Business Ecosystem
              </h3>
            </div>
            {/* Header button */}
            <div className=" flex flex-col gap-8 md:justify-end  lg:w-76.75 ">
              <h3 className="text-[18px] md:text-[20px] leading-7 ">
                Simplify your processes, save time, and focus on growth while we
                handle the heavy lifting.
              </h3>
              <Btn
                text=" Take a closer look "
                link="https://portal.routepay.com/register?source=MerchantPortal"
                color={true}
              />
            </div>
          </div>
        

        <div className="w-full h-full  mb-20">
          <Image width={500} height={500} src="/images/business-hero.png" className="w-full h-full lg:block hidden" alt="" />
           <Image width={500} height={500} src="/images/business-hero-m.png" className="w-full h-full block lg:hidden" alt="" />
        </div>
        </div>
      </Container>
    </div>
  );
}
