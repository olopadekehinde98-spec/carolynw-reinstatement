"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cw_cookie_consent_v1";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (!v) setShow(true);
    } catch {
      // if storage blocked, still show banner
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-700">
            This site uses cookies (including Google Analytics) to improve performance and understand traffic.{" "}
            <Link href="/cookies" className="font-semibold text-blue-900 underline">
              Learn more
            </Link>
            .
          </p>

          <div className="flex gap-3">
            <button
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              onClick={() => {
                setShow(false);
              }}
            >
              Not now
            </button>
            <button
              className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
              onClick={() => {
                try {
                  localStorage.setItem(KEY, "accepted");
                } catch {}
                setShow(false);
              }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}