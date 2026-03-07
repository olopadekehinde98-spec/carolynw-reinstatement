import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order | Pay for Amazon Reinstatement Support (Stripe)",
  description:
    "Secure checkout for Amazon reinstatement support. Pay via Stripe for Starter Review (€9), Action Plan deposit (€100), or Full Support deposit (€200).",
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}