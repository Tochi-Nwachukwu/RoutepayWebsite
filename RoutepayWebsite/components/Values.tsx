import Container from "./Container";

interface ValueCard {
  src: string;
  header: string;
  text: string;
}

const cards: ValueCard[] = [
  {
    src: "/images/value-1.png",
    header: "Speed",
    text: "Acceleration - We prioritize fast and seamless transactions, ensuring users experience minimal delays.",
  },
  {
    src: "/images/values-2.png",
    header: "Agility",
    text: "Efficiency - Our team adapts quickly to changes, optimizing processes for maximum efficiency and reliability.",
  },
  {
    src: "/images/values-3.png",
    header: "Integrity",
    text: "Work with absolute integrity letting RoutePay’s values guide every decision.",
  },
  {
    src: "/images/values-4.png",
    header: "Innovation",
    text: "Through innovation we create solutions that keep us ahead of competition.",
  },
  {
    src: "/images/values-5.png",
    header: "Excellence",
    text: "Pursue consistent excellence ensuring quality in every task and decision.",
  },
];

export default function Values() {
  const firstRow = cards.slice(0, 2);
  const secondRow = cards.slice(2);
  return (
    <div className="bg-white font-light ">
      <Container>
        <div className="flex flex-col text-black gap-9 md:gap-18 md:mt-18  ">
          <div className="flex flex-col gap-10 md:gap-20.25  ">
            {/* Header Text */}
            <div className=" flex flex-col gap-2 md:gap-4  md:justify-center md:items-center md:text-center">
              <h3 className="md:text-[18px]  leading-5.75 text-zinc-600">WHAT WE STAND FOR</h3>
              <h3 className="text-[30px] md:text-[50px] md:leading-15.75 text-black">Our Values</h3>
              <p className="md:text-[20px] leading-6.25 text-[#555151]">
                We’re a deeply mission-driven company, and these are the core
                ideas we return to when we make decisions.
              </p>
            </div>
            <div className="flex-col flex gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                {firstRow.map((item, index) => (
                  <ValueItemCard key={index} item={item} />
                ))}
              </div>

              {/* ROW 2 → 3 columns */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {secondRow.map((item, index) => (
                  <ValueItemCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ValueItemCard({ item }: { item: ValueCard }) {
  return (
    <div className="flex flex-col gap-10 bg-[#FFF1EC] rounded-[30px] p-8 md:p-10">
      <img src={item.src} alt="Values" className="w-20 md:w-25 h-20 md:h-25" />
      <div className="flex flex-col gap-4">
        <h3 className="text-[25px] md:text-[30px] text-black">{item.header}</h3>
        <p className="md:text-[18px] text-[#4D4A4A]">{item.text}</p>
      </div>
    </div>
  );
}
