import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export default function TermsPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-12 pb-14">
        <h1 className="text-3xl font-bold tracking-tight">Terms</h1>
        <div className="mt-6 space-y-4 text-sm text-slate-700 max-w-3xl">
          <p>
            This service provides consulting, guidance, and drafting support based on the information you provide.
            You are responsible for what you submit to Amazon.
          </p>
          <p className="font-semibold text-slate-900">
            No fake documents: I do not create, provide, or endorse fake invoices, letters, or documents.
          </p>
          <p>This website is not affiliated with Amazon. Results are not guaranteed.</p>
        </div>
      </Section>
      <SiteFooter />
    </main>
  );
}