import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/15014770429?text=Hello%20Carolyn%2C%20I%20need%20help%20with%20Amazon%20account%20reinstatement.";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 items-center rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 px-4 text-sm font-extrabold text-white shadow-sm">
            Carolyn W
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold">Carolyn W Reinstatement</div>
            <div className="text-xs text-slate-500">
              Amazon appeals & verification support
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/services" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            Services
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            Pricing
          </Link>
          <Link href="/order" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            Order
          </Link>
          <Link href="/review" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            Reviews
          </Link>
          <a
            href="https://www.fiverr.com/s/e6ajg6g"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            Fiverr
          </a>
          <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            Contact
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            WhatsApp
          </a>
        </nav>

        <Link
          href="/intake"
          className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
        >
          Start Case Intake
        </Link>
      </div>
    </header>
  );
}