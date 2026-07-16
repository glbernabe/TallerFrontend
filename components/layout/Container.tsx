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
        max-w-[1600px]
        px-8
        xl:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}