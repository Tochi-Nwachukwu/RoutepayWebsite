import Btn from "./Btn";
import Container from "./Container";

export default function WebApp() {
  return (
    <div className="bg-[#31160D] ">
      <Container>
        <div className="flex flex-col gap-20 mt-20 mb-20 text-white ">
          <div className="flex flex-row  justify-center items-center     ">
            {/* Header Text */}
            <div className="w-full flex flex-col gap-24.75">
              <div className=" flex flex-col gap-6  w-[70%] ">
                <h3 className="text-[18px]  leading-5.75 ">
                  EXPLORE
                </h3>
                <h2 className="text-[50px] leading-15.75 text-white">
                  Ready to simplify your business?
                </h2>
                <Btn
                  text="Get Started"
                  link="https://portal.routepay.com/register?source=MerchantPortal"
                  color={true}
                />
              </div>

              {/* Links */}
            </div>
            {/* Header button */}
            <div className=" flex flex-col gap-8 justify-end  w-full h-full">
              <img src="/images/web-hero.png" alt="Web Hero" className="w-full h-full" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
