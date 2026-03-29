import Btn from "./Btn";
import Container from "./Container";

export default function BankingBusiness() {
  return (
    <div className="bg-[#31160D] ">
      <Container>
        <div className="flex flex-col gap-20 mt-20 text-white  ">
          <div className="flex flex-row  justify-between  items-center mt-20  ">
            {/* Header Text */}
            <div className=" flex flex-col gap-4  w-130 ">
              <h3 className="text-[18px] text-[#2B74BD] leading-5.75 ">
                BUSINESS BANKING
              </h3>
              <h3 className="text-[50px] leading-15.75 ">
                A Complete Business Ecosystem
              </h3>
            </div>
            {/* Header button */}
            <div className=" flex flex-col gap-8 justify-end  w-76.75 ">
              <h3 className="text-[20px] leading-7 ">
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
          <img src="/images/business-hero.png" className="w-full h-full" alt="" />
        </div>
        </div>
      </Container>
    </div>
  );
}
