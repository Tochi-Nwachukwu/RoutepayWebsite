import Link from "next/link";

interface BtnProps {
  text: string;
  link: string;
  color?: boolean; // true -> orange bg, false -> white bg
}

function Btn({ text, link, color }: BtnProps) {
  return (
    <Link href={link}>
      <button
        className={` rounded-[30px] font-medium px-1 lg:px-8 px-8 py-2.5 text-[16px] ${
          color
            ? " bg-[#F05A24] text-white"
            : "border-[#F05A24] bg-white text-[#F05A24]"
        }`}
      >
        {text}
      </button>
    </Link>
  );
}

export default Btn;