type Props = {
  children: React.ReactNode;
}

export default function Navbar({ children }: Props) {
  return (
    <ul className="flex gap-6 text-base items-center align-bottom border-amber-300 border-2 h-21 border-b bg-black text-white">
      {children}
    </ul>
  );
}