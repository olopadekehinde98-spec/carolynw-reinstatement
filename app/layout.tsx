import "./globals.css";
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SchemaOrg from "@/components/SchemaOrg";
import CookieBanner from "@/components/CookieBanner";

const SITE_URL = "https://carolynreinstatement.netlify.app";
const GA_MEASUREMENT_ID = "G-V1MM180Z42";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Carolyn W Reinstatement | Amazon Account Reinstatement & Appeals",
    template: "%s | Carolyn W Reinstatement",
  },
  description:
    "Amazon account reinstatement support: Section 3 suspensions, related/linked accounts, video verification, IP complaints, authenticity/invoice review, and appeal strategy.",
  keywords: [
    "amazon reinstatement",
    "amazon account reinstatement",
    "amazon seller account suspended",
    "section 3 amazon suspension",
    "amazon video verification",
    "linked account suspension amazon",
    "amazon appeal plan of action",
    "amazon authenticity invoice",
    "amazon ip complaint",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Carolyn W Reinstatement | Amazon Account Reinstatement & Appeals",
    description:
      "Compliance-first Amazon reinstatement support for Section 3, linked accounts, video verification, IP, and invoice/authenticity issues.",
    siteName: "Carolyn W Reinstatement",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Carolyn W Reinstatement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolyn W Reinstatement",
    description:
      "Amazon reinstatement support for Section 3, linked accounts, video verification, IP, and invoice/authenticity issues.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-900 antialiased"
      >
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <SchemaOrg />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}