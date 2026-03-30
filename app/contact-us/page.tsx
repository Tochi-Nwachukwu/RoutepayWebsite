"use client";

import ContactCards from "../../components/ContactCards";
import Container from "../../components/Container";
import DownloadApp from "../../components/DownloadApp";

export default function ContactUsPage() {
  return (
    <div className="bg-[#FFF1EC] font-light ">
      <Container>
        <div className="flex flex-col text-black gap-18 md:mt-18 mb-20  md:mb-40 ">
          <div className="flex flex-row  justify-center items-center md:text-center   ">
            {/* Header Text */}
            <div className=" flex flex-col gap-4  w-full ">
              <h1 className="text-[40px] md:text-[60px] xl:text-[70px] md:leading-22 text-black ">Let’s Talk Payments</h1>
              <p className="md:text-[20px] text-[#3B3939] leading-6.25">
                Have questions? We have answers. If you can’t find what you{" "}
                <br className="hidden md:block"/>
                are looking for, please get in touch.
              </p>
            </div>
            {/* Header button */}
          </div>
        </div>
      </Container>

      {/* Sections */}
      <div className="xl:mt-20 flex flex-col gap-20 lg:gap-40 bg-white">
        <ContactCards />
        <DownloadApp />
      </div>
    </div>
  );
}
