import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Amazon Reinstatement, Section 3, Linked Accounts",
  description:
    "Choose the service that matches your Amazon seller account issue: Section 3 suspension, related/linked accounts, video verification, IP complaints, authenticity/invoice review, and listing/ASIN issues.",
};

type ServiceItem = {
  title: string;
  desc: string;
  href: string;
};

export default function ServicesPage() {
  const services: ServiceItem[] = [
    {
      title: "Section 3 Suspensions",
      desc: "Plan of Action structure, root-cause clarity, corrective steps, and prevention controls aligned to policy.",
      href: "/intake?issue=Section%203%20Suspension",
    },
    {
      title: "Related / Linked Accounts",
      desc: "Account relationship mapping, documentation strategy, and clean evidence submission.",
      href: "/intake?issue=Related%20%2F%20Linked%20Account",
    },
    {
      title: "Video Verification Support",
      desc: "Prep checklist, common failure fixes, and guidance on what Amazon expects during verification.",
      href: "/intake?issue=Video%20Verification",
    },
    {
      title: "IP Complaints (Trademark/Copyright)",
      desc: "Complaint review, response strategy guidance, and policy-aligned evidence packaging.",
      href: "/intake?issue=IP%20Complaint",
    },
    {
      title: "Authenticity / Invoice Review",
      desc: "Invoice checks, supplier legitimacy guidance, and proof organization (no fake documents).",
      href: "/intake?issue=Authenticity%20%2F%20Invoice",
    },
    {
      title: "Listing / ASIN Compliance Issues",
      desc: "Detail page conflicts, listing changed, and compliance-friendly resolution steps.",
      href: "/intake?issue=Listing%20%2F%20ASIN%20Issue",
    },
  ];

  return (
    <main>
      <SiteHeader />

      <Section className="pt-12 pb-14">
        <h1 className="text-3xl font-bold tracking-tight">Services</h1>

        {/* SEO paragraph (helps Google rank /services itself) */}
        <p className="mt-3 max-w-3xl text-slate-700">
          This page lists Amazon account reinstatement services for common seller issues such as Section 3 suspensions,
          linked/related accounts, video verification, IP complaints, and authenticity/invoice concerns. Select the
          service that matches your situation to start intake with the issue pre-selected.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} href={s.href} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <h2 className="text-lg font-semibold">Not sure which one?</h2>
          <p className="mt-2 text-sm text-slate-700">
            Start intake and paste your suspension notice + marketplace. I’ll guide you to the correct path.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/intake"
              className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
            >
              Start Case Intake
            </Link>
            <Link
              href="/order"
              className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Place an Order
            </Link>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}