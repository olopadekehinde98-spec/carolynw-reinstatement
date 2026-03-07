import Link from "next/link";

const EMAIL = "carolynwilson1645@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/15014770429?text=Hello%20Carolyn%2C%20I%20need%20help%20with%20Amazon%20account%20reinstatement.";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-bold">Carolyn W Reinstatement</div>
            <p className="mt-2 text-sm text-slate-600">
              Compliance-first guidance for Amazon sellers. Not affiliated with Amazon. No outcome is guaranteed.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <a
                className="block underline text-blue-900"
                href="https://www.fiverr.com/s/e6ajg6g"
                target="_blank"
                rel="noreferrer"
              >
                View Fiverr gig
              </a>
              <a className="block underline text-blue-900" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <a className="block underline text-blue-900" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp chat
              </a>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Support hours</p>
              <p className="mt-1">Mon–Sat</p>
              <p className="mt-1">Typical response: within 24–48 hours</p>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Pages</p>
            <div className="mt-2 space-y-2 text-slate-600">
              <Link className="block hover:underline" href="/services">Services</Link>
              <Link className="block hover:underline" href="/amazon-reinstatement">Amazon Reinstatement</Link>
              <Link className="block hover:underline" href="/section-3-suspension">Section 3 Suspension</Link>
              <Link className="block hover:underline" href="/linked-account-suspension">Linked Account Suspension</Link>
              <Link className="block hover:underline" href="/pricing">Pricing</Link>
              <Link className="block hover:underline" href="/order">Order</Link>
              <Link className="block hover:underline" href="/review">Reviews</Link>
              <Link className="block hover:underline" href="/results">Results</Link>
              <Link className="block hover:underline" href="/intake">Start Case Intake</Link>
              <Link className="block hover:underline" href="/contact">Contact</Link>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Legal</p>
            <div className="mt-2 space-y-2 text-slate-600">
              <Link className="block hover:underline" href="/privacy">Privacy</Link>
              <Link className="block hover:underline" href="/terms">Terms</Link>
              <Link className="block hover:underline" href="/refund">Refund Policy</Link>
              <Link className="block hover:underline" href="/disclaimer">Disclaimer</Link>
              <Link className="block hover:underline" href="/cookies">Cookie Notice</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Carolyn W Reinstatement. All rights reserved.
        </div>
      </div>
    </footer>
  );
}