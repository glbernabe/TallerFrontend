import Logo from "./Logo";

export default function BrandLockup() {
    return (
        <div className="flex min-w-0 shrink-0 items-center gap-3">
            <Logo />
            <span className="whitespace-nowrap font-title text-sm font-medium tracking-wide text-white sm:text-base">
                AUTO TALLERES ORIHUELA
            </span>
        </div>
    );
}
