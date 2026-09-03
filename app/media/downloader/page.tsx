"use client";

import { useState } from "react";

export default function MediaDownloaderPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!url.trim()) return;
    setLoading(true);
    // Simulasi analisis
    setTimeout(() => {
      setLoading(false);
      alert("Downloader service is not configured yet. Only download content you own or have permission to use.");
    }, 1500);
  };

  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Media Downloader</h1>
        <p className="mt-2 text-muted">
          Paste a media URL to analyze and download content you own.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-background-card p-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="url"
              placeholder="Paste a media URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 rounded-lg bg-black/50 p-3 text-sm outline-none border border-border"
            />
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="rounded-full bg-regal px-6 py-3 font-medium text-white transition hover:bg-regal-dark disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-black/30 p-4 text-center text-sm text-muted">
            <p>Downloader service is not configured yet.</p>
            <p className="mt-1 text-xs">
              Only download content you own or have permission to use. Respect copyright and platform rules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
