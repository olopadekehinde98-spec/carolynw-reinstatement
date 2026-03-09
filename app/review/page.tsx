import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

const FIVERR_GIG = "https://www.fiverr.com/s/e6ajg6g";
const GOOGLE_REVIEW_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScRfcfdCXTj8RRoY4VcmFqEfVZs0htilTu4pSXwP0ZNUdsRMQ/viewform?usp=publish-editor";

// embed version (recommended for iframe)
const GOOGLE_REVIEW_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLScRfcfdCXTj8RRoY4VcmFqEfVZs0htilTu4pSXwP0ZNUdsRMQ/viewform?embedded=true";

export default function ReviewPage() {
  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight">Reviews</h1>
          <p className="mt-3 text-slate-700">
            If you worked with me and your order is completed, you can leave a review using the form below.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={GOOGLE_REVIEW_FORM}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
            >
              Leave a Review (Google Form)
            </a>

            <a
              href={FIVERR_GIG}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Review on Fiverr
            </a>

            <Link
              href="/intake"
              className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Start Intake
            </Link>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur">
            <iframe
              src={GOOGLE_REVIEW_EMBED}
              className="h-[1100px] w-full rounded-2xl"
              title="Review Form"
            />
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-semibold text-slate-900">Note</p>
            <p className="mt-2 text-sm text-slate-700">
              Reviews reflect individual experiences and results can vary. This site is not affiliated with Amazon.
            </p>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
