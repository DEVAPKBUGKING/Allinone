"use client";

import { useState } from "react";

export default function RandomPage() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Random</h1>
        <p className="mt-2 text-muted">Just for fun — randomizers and decision-making tools.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">🎲 Random Number</h2>
            <p className="text-sm text-muted">Generate a random number between 1 and 100.</p>
            <button
              onClick={generateNumber}
              className="mt-3 rounded-full bg-regal px-6 py-2 text-white transition hover:bg-regal-dark"
            >
              Generate
            </button>
            {randomNumber !== null && (
              <p className="mt-4 text-3xl font-bold text-regal">{randomNumber}</p>
            )}
          </div>

          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">👤 Random Name Picker</h2>
            <p className="text-sm text-muted">Enter names and pick one randomly.</p>
            <p className="mt-4 text-xs text-muted">(Feature coming soon)</p>
          </div>

          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">🎡 Wheel Spinner</h2>
            <p className="text-sm text-muted">Spin the wheel to make a decision.</p>
            <p className="mt-4 text-xs text-muted">(Feature coming soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
