import Image from "next/image";
import Btn from "./Btn";
import Container from "./Container";
import Link from "next/link";

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
                Launch your store, generate payment links, and manage your finances, all from one powerful dashboard.
              </h3>
              <div className="flex flex-col gap-4">
                 <Btn
                text=" Setup Business Account"
                link="https://portal.routepay.com/register?source=MerchantPortal"
                color={true}
              />
               <Link
                  href="https://developer.routepay.com"
                  target="_blank"
                  className="rounded-[30px] w-60 md:w-62.5 font-normal md:font-medium text-white bg-[#948989] flex flex-row justify-center items-center px-0 py-2.5 text-[16px] gap-3"
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


          <div className="w-full h-full  mb-20">
            <Image width={1000} height={1000} src="/images/business-hero.png" className="w-full h-full lg:block hidden" alt="" />
            <Image width={500} height={500} src="/images/business-hero-m.png" className="w-full h-full block lg:hidden" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}
