"use client";

import dynamic from "next/dynamic";

const IntakeClient = dynamic(() => import("./IntakeClient"), {
  ssr: false,
  loading: () => (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      Loading intake form…
    </main>
  ),
});

export default function IntakeClientWrapper() {
  return <IntakeClient />;
}