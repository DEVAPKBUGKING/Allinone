"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [reduceAnim, setReduceAnim] = useState(false);

  const clearData = () => {
    if (confirm("Clear all local data? This cannot be undone.")) {
      localStorage.clear();
      alert("All local data has been cleared.");
      window.location.reload();
    }
  };

  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold">Settings</h1>

        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between rounded-xl border border-border bg-background-card p-4">
            <div>
              <p className="font-medium">Dark / Light Mode</p>
              <p className="text-sm text-muted">Toggle theme appearance</p>
            </div>
            <button
              onClick={toggleTheme}
              className="rounded-full bg-regal px-4 py-1.5 text-sm text-white transition hover:bg-regal-dark"
            >
              {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            </button>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-background-card p-4">
            <div>
              <p className="font-medium">Reduce Animations</p>
              <p className="text-sm text-muted">Minimize motion effects</p>
            </div>
            <button
              onClick={() => setReduceAnim(!reduceAnim)}
              className={`rounded-full px-4 py-1.5 text-sm text-white transition ${
                reduceAnim ? "bg-regal" : "bg-white/10"
              }`}
            >
              {reduceAnim ? "On" : "Off"}
            </button>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-background-card p-4">
            <div>
              <p className="font-medium text-red-400">Clear Local Data</p>
              <p className="text-sm text-muted">Remove all saved data (favorites, notes, etc.)</p>
            </div>
            <button
              onClick={clearData}
              className="rounded-full bg-red-500/20 px-4 py-1.5 text-sm text-red-400 transition hover:bg-red-500/30"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
