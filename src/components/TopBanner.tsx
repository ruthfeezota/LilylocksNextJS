
import Link from "next/link";

export default function TopBanner() {
  return (
    <div className="w-full bg-[#ff0a8a] px-4 py-2.5">
      <Link
        href="/sale"
        className="heading-font flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[10px] font-bold uppercase tracking-wide text-white transition hover:text-[#E8FF00] md:text-sm"
      >
        <span>Black Friday + Cyber Monday</span>
        <span className="text-[#E8FF00]">•</span>
        <span>20% Off Select Styles</span>
        <span className="text-[#E8FF00]">•</span>
        <span>
          Use Code: <strong className="text-[#E8FF00]">WINTERSEASON</strong>
        </span>
      </Link>
    </div>
  );
}
