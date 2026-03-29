interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto px-5 xl:px-10 pt-10.5">{children}</div>
  )
}
