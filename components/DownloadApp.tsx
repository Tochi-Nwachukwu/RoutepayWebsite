import Image from "next/image";
import Container from "./Container";

export default function DownloadApp() {
  return (
    <div className="bg-[#FFEDE6] ">
      <Container>
        <div className="flex flex-col gap-20 md:mt-5  lg:mt-20 text-black ">
          <div className="flex flex-col md:flex-row  gap-15 md:gap-0 justify-between     ">
            {/* Header Text */}
            <div className="w-full flex flex-col gap-10 md:gap-5 lg:gap-10 xl:gap-20">
              <div className=" flex flex-col gap-2 md:gap-4  md:w-full lg:w-[70%] ">
                <h3 className="md:text-[18px] text-[#2B74BD] leading-5.75 ">
                  GET THE APP
                </h3>
                <h3 className="text-[30px] md:text-[40px] xl:text-[50px] md:leading-15.75 text-black">
                  Payment infrastructure, perfected.
                </h3>
                <p className="text-zinc-600">Ready for a platform that just... works? Download the app and explore all the features <br className="hidden lg:block" /> today.</p>
              </div>
              <div className="flex gap-14 md:mb-10">
                <a href="https://apps.apple.com/ng/app/RoutePay-fintech/id6502836208">
                  <Image width={500} height={500} src="/images/app-store.svg" alt="App store" className="w-[110] md:w-fit" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.routepay&hl=en">
                  <Image width={500} height={500} src="/images/play-store.svg" alt="Play store" className="w-[110] md:w-fit" />
                </a>
              </div>

              {/* Links */}
            </div>
            {/* Header button */}
            <div className=" flex flex-col gap-8 md:justify-end  w-full">
              <Image width={500} height={500} src="/images/download-app.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
