import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carolyn W Reinstatement",
  description: "Carolyn W Reinstatement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
