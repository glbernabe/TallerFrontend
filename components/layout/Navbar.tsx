type Props = {
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
  mobileMenuButton: React.ReactNode;
};

export default function Navbar({
  left,
  center,
  right,
  mobileMenuButton,
}: Props) {
  return (
    <header className="h-18 border-b border-white/20 bg-black text-white">

      <div className="mx-auto h-full max-w-[1560px] px-6 md:px-8 lg:px-10 xl:px-12">

        <div className="grid h-full grid-cols-3 items-center">

          {/* IZQUIERDA */}
          <div className="flex items-center justify-start">

            {/* Desktop */}
            <nav className="hidden md:flex items-center gap-6">
              {left}
            </nav>

            {/* Mobile */}
            <div className="flex md:hidden">
              {mobileMenuButton}
            </div>

          </div>

          {/* CENTRO */}
          <div className="flex justify-center">
            {center}
          </div>

          {/* DERECHA */}
          <div className="flex justify-end items-center gap-2 md:gap-4">
            {right}
          </div>

        </div>

      </div>

    </header>
  );
}