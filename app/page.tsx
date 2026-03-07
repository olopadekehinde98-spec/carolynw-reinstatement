import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      {/* HERO */}
      <Section className="pt-12 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
              Compliance-first support • No fake documents • Clear strategy
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Carolyn W Reinstatement
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
              I help sellers resolve Amazon account issues with a clear,
              evidence-based approach: Section 3 suspensions, related/linked
              accounts, video verification, IP complaints, authenticity/invoice
              concerns, and appeal strategy.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/intake"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
              >
                Start Case Intake
              </Link>

              <Link
                href="/services"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Services
              </Link>

              <a
                href="https://www.fiverr.com/s/e6ajg6g"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Fiverr Gig
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
              <div>
                <p className="text-xs text-slate-500">Focus</p>
                <p className="text-sm font-semibold">Amazon Appeals</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Approach</p>
                <p className="text-sm font-semibold">Evidence + Policy</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Goal</p>
                <p className="text-sm font-semibold">Clear next steps</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">What you get</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                A clear diagnosis of the suspension reason & risk factors
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                A compliance-first action plan (no fake docs)
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                Drafting support: POA structure, evidence mapping, messaging
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                Intake checklist so you submit the right proof the first time
              </li>
            </ul>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-900">Important</p>
              <p className="mt-1 text-sm text-slate-700">
                I do not provide or create fake invoices/documents. Guidance is
                based on real evidence and Amazon policy.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/intake"
                className="block w-full rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                Start Case Intake
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES PREVIEW (clickable cards) */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Services</h2>
            <p className="mt-2 text-sm text-slate-700">
              Select the service that matches your issue to go straight to
              intake.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-slate-900 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ServiceCard
            title="Section 3 Suspensions"
            desc="Policy violations, ODR issues, restricted products, and account health escalations."
            href="/intake?issue=Section%203%20Suspension"
          />
          <ServiceCard
            title="Related / Linked Accounts"
            desc="Investigate potential linkage, document relationships, and correct account history."
            href="/intake?issue=Related%20%2F%20Linked%20Account"
          />
          <ServiceCard
            title="Video Verification"
            desc="Prepare documents, fix common failure points, and follow best-practice verification steps."
            href="/intake?issue=Video%20Verification"
          />
          <ServiceCard
            title="IP Complaints"
            desc="Complaint analysis, communications strategy, and evidence alignment to policy."
            href="/intake?issue=IP%20Complaint"
          />
          <ServiceCard
            title="Authenticity / Invoices"
            desc="Invoice review, supplier legitimacy checks, and proof organization."
            href="/intake?issue=Authenticity%20%2F%20Invoice"
          />
          <ServiceCard
            title="Listing & ASIN Issues"
            desc="Listing changed, detail page conflicts, and compliance-friendly resolution steps."
            href="/intake?issue=Listing%20%2F%20ASIN%20Issue"
          />
        </div>
      </Section>

      {/* ✅ SEO CONTENT (helps Google understand what this site is about) */}
      <Section>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <h2 className="text-2xl font-bold tracking-tight">
            Amazon Account Reinstatement Support
          </h2>

          <p className="mt-3 text-sm text-slate-700">
            Carolyn W Reinstatement helps Amazon sellers respond to account
            actions with a compliance-first approach. If your Amazon seller
            account is suspended or deactivated, I guide you through the correct
            steps and the right evidence to submit—based on Amazon policy and
            real documentation.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">Common issues</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Amazon Section 3 suspension (policy violation)</li>
                <li>Related / linked account suspension</li>
                <li>Amazon video verification support</li>
                <li>Invoice / authenticity (supplier documentation review)</li>
                <li>IP complaint (trademark / copyright)</li>
                <li>Listing / ASIN compliance issues</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">
                What you’ll receive
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Clear diagnosis of the suspension reason and risk factors</li>
                <li>Evidence mapping: which documents support each claim</li>
                <li>Corrective actions + prevention plan (POA structure)</li>
                <li>Submission-ready messaging and organization tips</li>
              </ul>

              <p className="mt-4 text-xs text-slate-600">
                Note: This service does not create or provide fake invoices or
                documents. Guidance is based on real evidence.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/intake"
              className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
            >
              Start Case Intake
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              View Services
            </Link>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="bg-white/60 border-y border-slate-200">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white/80 p-6 shadow-sm border border-slate-200 backdrop-blur">
            <p className="text-xs text-slate-500">Step 1</p>
            <h3 className="mt-2 font-semibold">Submit Intake</h3>
            <p className="mt-2 text-sm text-slate-700">
              Send the suspension notice, marketplace, and your current status.
            </p>
          </div>
          <div className="rounded-3xl bg-white/80 p-6 shadow-sm border border-slate-200 backdrop-blur">
            <p className="text-xs text-slate-500">Step 2</p>
            <h3 className="mt-2 font-semibold">Evidence Map</h3>
            <p className="mt-2 text-sm text-slate-700">
              We match each claim to supporting documents and remove weak points.
            </p>
          </div>
          <div className="rounded-3xl bg-white/80 p-6 shadow-sm border border-slate-200 backdrop-blur">
            <p className="text-xs text-slate-500">Step 3</p>
            <h3 className="mt-2 font-semibold">Submission Ready</h3>
            <p className="mt-2 text-sm text-slate-700">
              Clear narrative, clean formatting, and strong supporting proof.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Testimonials />
      </Section>

      <Section>
        <Pricing />
      </Section>

      <Section>
        <FAQ />
      </Section>

      {/* FINAL CTA */}
      <Section className="pb-14">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-700 to-blue-900 p-8 text-white md:p-10 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to start?
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/85 md:text-base">
            Use the intake form and I’ll respond with the next steps and the
            exact documents you need.
          </p>
          <div className="mt-6">
            <Link
              href="/intake"
              className="inline-flex rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 hover:opacity-95 shadow-sm"
            >
              Start Case Intake
            </Link>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}