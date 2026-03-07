import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <main>
      <SiteHeader />
      <Section className="pt-12">
        <h1 className="text-3xl font-bold tracking-tight">Pricing</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Choose a package based on your current stage. Start with intake if you’re unsure.
        </p>
        <div className="mt-8">
          <Pricing />
        </div>
      </Section>
      <SiteFooter />
    </main>
  );
}