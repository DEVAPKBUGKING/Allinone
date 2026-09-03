"use client";

import { useState } from "react";

export default function FinancePage() {
  const [target, setTarget] = useState("");
  const [current, setCurrent] = useState("");
  const [monthly, setMonthly] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateSavings = () => {
    const t = parseFloat(target);
    const c = parseFloat(current);
    const m = parseFloat(monthly);
    if (t && m && t > c) {
      setResult(Math.ceil((t - c) / m));
    } else {
      setResult(null);
    }
  };

  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Finance</h1>
        <p className="mt-2 text-muted">Manage Your Numbers.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">💰 Savings Calculator</h2>
            <div className="mt-4 space-y-3">
              <input
                type="number"
                placeholder="Target amount"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full rounded-lg bg-black/50 p-2 text-sm outline-none border border-border"
              />
              <input
                type="number"
                placeholder="Current savings"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                className="w-full rounded-lg bg-black/50 p-2 text-sm outline-none border border-border"
              />
              <input
                type="number"
                placeholder="Monthly saving"
                value={monthly}
                onChange={(e) => setMonthly(e.target.value)}
                className="w-full rounded-lg bg-black/50 p-2 text-sm outline-none border border-border"
              />
              <button
                onClick={calculateSavings}
                className="w-full rounded-full bg-regal py-2 text-white transition hover:bg-regal-dark"
              >
                Calculate
              </button>
              {result !== null && (
                <p className="text-center text-sm">
                  ~{result} months to reach your target.
                </p>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">📊 Budget Calculator</h2>
            <p className="text-sm text-muted">Track your spending by category.</p>
            <p className="mt-4 text-xs text-muted">(Feature coming soon)</p>
          </div>

          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">🧾 Split Bill</h2>
            <p className="text-sm text-muted">Split expenses evenly.</p>
            <p className="mt-4 text-xs text-muted">(Feature coming soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
