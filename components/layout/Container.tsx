type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1560px]
        pl-3
        px-9 md:px-11 lg:px-13 xl:px-15
        ${className}
      `}
    >
      {children}
    </div>
  );
}