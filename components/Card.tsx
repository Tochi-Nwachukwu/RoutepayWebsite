interface CardProps {
  icon?: string;
  header: string;
  paragraph: string;
}

const Card = ({ icon, header, paragraph }: CardProps) => {
  return (
    <div className="relative h-[300px] w-[285px]">
      <div className="bg-[#F05A24] rounded-xl h-[275px] w-[275px] absolute top-0"></div>
      <div className="bg-white rounded-xl h-[275px] w-[275px] absolute -top-2 left-2 px-4 pt-3">
        {icon && <img src={icon} alt="" className="" />}
        <h4 className="text-3xl text-[#F05A24] mt-4 mb-5">{header}</h4>
        <p className="text-sm text-zinc-600">{paragraph}</p>
      </div>
      <img src="/images/card-bg.png" alt="" className="absolute bottom-9 right-0.5 opacity-15" />
    </div>
  );
};

export default Card;
