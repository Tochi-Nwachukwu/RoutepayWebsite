import Link from "next/link";
import Container from "./Container";

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
  { text: "hello@RoutePay.com" },
  { text: "fraud@RoutePay.com" },
  {
    text: "CashCraft Building, 270 Murtala Muhammed Way, Alagomeji - Yaba, Lagos, Nigeria.",
  },
];

const company: LinkItem[] = [
  { text: "About us", href: "/about" },
  { text: "Our Culture", href: "/" },
  { text: "Insight Blog", href: "/" },
  { text: "FAQ", href: "/" },
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
        <div className="bg-white text-black font-light py-10 flex flex-col gap-[82px] mt-20">
          <section className="grid  md:flex  gap-16 md:gap-20 xl:gap-40">
            <div className="flex gap-10">
              {/* Peronal */}
              <div className="flex flex-col gap-4 w-full">
                <p className="font-normal text-[18px]">Personal</p>
                <div className="text-[14px] leading-7.5">
                  RoutePay seamlessly integrates your lifestyle and finances
                  into one place, to simplify and enhance your financial
                  journey.
                </div>
              </div>
              {/* Business */}
              <div className="flex flex-col gap-4 w-full">
                <p className="font-normal text-[18px]">Business</p>
                <div className="text-[14px] leading-7.5">
                  RoutePay connects all sides of your business, offering you a
                  smooth and straightforward experience, giving you more time to
                  focus on your business while we handle the rest.
                </div>
              </div>
              {/* Links */}
              <div className="flex flex-col gap-4 w-full">
                <p className="font-normal text-[18px]">Company</p>
                {company.map((item, index) => {
                  return (
                    <Link
                      href={item.href}
                      key={index}
                      className="hover:text-[#F05A24] text-[14px] leading-7.5 hover:transition-all duration-300 hover:text-opacity-70 cursor-pointer"
                    >
                      {item.text}
                    </Link>
                  );
                })}
              </div>
              {/* Contact */}

              <div className="flex flex-col gap-4 w-full">
                <h3 className="font-normal text-[18px]">Contact</h3>

                {contact.map((item, index) => {
                  return (
                    <Link
                      href="/contact-us"
                      className="text-[14px] leading-7.5 cursor-pointer"
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

            <div className="flex flex-col gap-19">
              <div className=" flex flex-row justify-between mt-15">
                <div className="">
                  <img src="/images/logo.svg" alt="" />
                  <div className="flex justify-end">
                    <p className="font-normal text-[#555151] leading-7 text-[18px]">
                      Making More Possible.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-6">
                  {iconLinks.map((item, index) => {
                    return (
                      <Link href={item.href} key={index}>
                        <img src={item.link} alt="Socials" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-8">
              

              <div className="flex flex-row gap-14 text-[16px] font-normal">
                {extraLinks.map((item, index) => {
                  return (
                    <Link
                      href={item.href}
                      key={index}
                      className="hover:text-[#F05A24] text-[14px] leading-7.5 hover:transition-all duration-300 hover:text-opacity-70 cursor-pointer"
                    >
                      {item.text}
                    </Link>
                  );
                })}
              </div>
               <div>
                <p className=" leading-6.25 text-[14px]">
                  Banking services on this platform are provided by Routelink
                  Microfinance Bank Limited (RC 787934), located at 270 Murtala
                  Muhammed Way, Alagomeji – Yaba, Lagos. RoutePay Limited is
                  licensed by the Central Bank of Nigeria. <br /> <br />
                  Other services offered here are provided by their respective
                  providers, all of whom are duly licensed or legally permitted
                  to operate in partnership with Routelink. <br /> <br />
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
