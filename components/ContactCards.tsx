import Container from "./Container";

interface ContactCard {
  src: string;
  bg: string;
  header: string;
  text: string;
}

const cards: ContactCard[] = [
  {
    src: "/images/contact-1.svg",
    bg: "bg-[#D3EBF0]",
    header: "Office Address:",
    text: "4th Floor, Africa Re House, Plot 1679 Karimu Kotun St, V/Island, Lagos.",
  },
  {
    src: "/images/email.svg",
    header: "Email Address:",
    bg: "bg-[#FADCFF]",
    text: "customersupport@routepay.com",
  },
  {
    src: "/images/phone.svg",
    header: "Phone Number:",
    bg: "bg-[#CEEADF]",
    text: "(+234)-913-444-6536",
  },
  {
    src: "/images/socials.svg",
    header: "Socials:",
    text: "RoutePay",
    bg: "bg-[#FFF1EC]",
  },
];

export default function ContactCards() {
  return (
    <div className="bg-white font-light ">
      <Container>
        <div
          className="pt-0 flex items-center justify-center mt-30 lg:gap-3 xl:gap-6"
        >
          <div className="w-full flex flex-col gap-20 justify-center items-center ">
            <div className="grid grid-cols-2 gap-5">
              {cards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${item.bg} h-92.5 flex flex-col gap-12 rounded-[30px] py-12 px-15`}
                  >
                    <img src={item.src} alt="" className="w-15 h-15" />
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[20px] leading-6.25 text-black">
                        {item.header}
                      </h3>
                      <p className="text-[30px] leading-9.5 text-[#555151]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
