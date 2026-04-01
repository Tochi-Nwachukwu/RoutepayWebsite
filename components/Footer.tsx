import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

interface LinkItem {
  text: string;
  href: string;
}

interface SocialLink {
  link: string;
  href: string;
}

const contact = [
  { text: "Start a Chat" },
  { text: "+234 913 444 6536" },
  { text: "sales@routepay.com" },
  {
    text: "Ground Floor, Africa Re House, Plot 1679 Karimu Kotun St, Victoria Island, Lagos",
  },
];

const company: LinkItem[] = [
  { text: "About us", href: "/about" },
  { text: "Contact Us", href: "/contact-us" },

  { text: "Personal", href: "/perosnal" },
  { text: "Business", href: "/business" },
  { text: "Goverment", href: "/governmnet" },
];

const iconLinks: SocialLink[] = [
  { link: "/images/linkedin.svg", href: "/" },
  { link: "/images/instagram.svg", href: "/" },
  { link: "/images/facebook.svg", href: "/" },
  { link: "/images/twitter.svg", href: "/" },
];

const extraLinks: LinkItem[] = [
  { text: "Privacy", href: "/terms-and-conditions" },
  { text: "Terms of Use", href: "/terms" },
  { text: "Cookies Policy", href: "/cookies-policy" },
  { text: "Data Protection", href: "/data-protection" },
];

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="bg-white text-black font-light py-10 flex flex-col gap-20.5 mt-20">
          <section className="grid  md:flex  gap-16 md:gap-20 xl:gap-40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {/* Peronal */}
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <p className="font-normal md:text-[18px]">Personal</p>
                <div className="text-[14px] leading-6.5 md:leading-7.5">
                  Elevate your financial journey without the friction. RoutePay
                  integrates everything—spending, saving, and paying—into one
                  intuitive experience designed around your day.
                </div>
              </div>
              {/* Business */}
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <p className="font-normal md:text-[18px]">Business</p>
                <div className="text-[14px] leading-6.5 md:leading-7.5">
                  A 360-degree payment engine for your brand. We handle the
                  technical complexities of collections and payouts, giving you
                  the freedom to focus entirely on your customers.
                </div>
              </div>
              {/* Links */}
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <p className="font-normal md:text-[18px]">Company</p>
                {company.map((item, index) => {
                  return (
                    <Link
                      href={item.href}
                      key={index}
                      className="hover:text-[#F05A24] text-[14px] leading-6.5 md:leading-7.5 hover:transition-all duration-300 hover:text-opacity-70 cursor-pointer"
                    >
                      {item.text}
                    </Link>
                  );
                })}
              </div>
              {/* Contact */}

              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <h3 className="font-normal md:text-[18px]">Contact</h3>

                {contact.map((item, index) => {
                  return (
                    <Link
                      href="/contact-us"
                      className="text-[14px] leading-6.5 md:leading-7.5 cursor-pointer"
                      key={index}
                    >
                      {item.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <section>
            <div className="w-full h-0.5 bg-[#D9D9D9]"></div>

            <div className="flex flex-col gap-14  md:gap-19">
              <div className=" flex gap-13 md:gap-0  flex-col md:flex-row justify-between mt-15">
                <div className="">
                  <Image
                    width={500}
                    height={500}
                    src="/images/logo.svg"
                    alt=""
                    className="w-[250] md:w-fit"
                  />
                  <div className="flex justify-center md:justify-end">
                    <p className="font-normal text-[#555151] leading-7 md:text-[18px]">
                      Payment Beyond Barriers
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-6">
                  {iconLinks.map((item, index) => {
                    return (
                      <Link href={item.href} key={index}>
                        <Image
                          width={500}
                          height={500}
                          src={item.link}
                          alt="Socials"
                          className="w-[50] md:w-fit"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-14 text-[16px] font-normal">
                  {extraLinks.map((item, index) => {
                    return (
                      <Link
                        href={item.href}
                        key={index}
                        className="hover:text-[#F05A24] text-[14px] leading-6.5 md:leading-7.5 hover:transition-all duration-300 hover:text-opacity-70 cursor-pointer"
                      >
                        {item.text}
                      </Link>
                    );
                  })}
                </div>
                <div>
                  <p className=" leading-6.25 text-[14px]">
                    Banking services on this platform are provided by Routelink
                    Microfinance Bank Limited (RC 8836108), located at 71a,
                    Lagos Ikorodu road, Ikorodu Lagos state. Routelink
                    Microfinance Bank Limited is duly licensed by the Central
                    Bank of Nigeria. <br /> <br />
                    RoutePay Fintech Limited (RC 1872221) is licensed by the
                    Central Bank of Nigeria (CBN) as a Payment Solution Service
                    Provider (PSSP) and is further certified by the Nigerian
                    Communications Commission (NCC) for Value-Added Services
                    (VAS).
                    <br></br>
                    Other services offered on this platform are provided by
                    their respective providers, all of whom are duly licensed or
                    legally permitted to operate in partnership with Routelink.
                    <br /> <br />
                    Registered Office: 4th Floor, Africa Re House, Plot 1679
                    Karimu Kotun St, Victoria Island, Lagos. <br /> <br />© 2026
                    RoutePay. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
