interface TestimonialCardProps {
  testimonial: string;
  image: string;
  name: string;
  title: string;
}

const TestimonialCard = ({ testimonial, image, name, title }: TestimonialCardProps) => {
  return (
    <div className="h-[362px] px-5 pt-6 pb-3 bg-[#D2D2D2] text-[#4D4A4A] flex flex-col justify-between rounded-lg">
      <p className="leading-5">{testimonial}</p>
      <div className="flex items-center gap-3">
        <span className="rounded-full">
          <img src={image} alt={name} className="rounded-full w-10 h-10 object-cover" />
        </span>
        <div className="text-sm">
          <h6 className="font-bold text-black">{name}</h6>
          <p className="text-zinc-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
