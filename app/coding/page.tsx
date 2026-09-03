"use client";

import { useState } from "react";

export default function CodingPage() {
  const [code, setCode] = useState(`<h1>Hello, REGAL!</h1>\n<p>Try editing me.</p>`);

  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Coding</h1>
        <p className="mt-2 text-muted">Build & Experiment with browser-based developer tools.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Playground */}
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">⚡ HTML/CSS/JS Playground</h2>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-3 h-48 w-full rounded-lg bg-black/50 p-3 font-mono text-sm text-white outline-none border border-border"
            />
            <button
              className="mt-3 rounded-full bg-regal px-6 py-2 text-white transition hover:bg-regal-dark"
              onClick={() => {
                const preview = document.getElementById("preview") as HTMLIFrameElement;
                if (preview) {
                  const doc = preview.contentDocument;
                  if (doc) {
                    doc.open();
                    doc.write(code);
                    doc.close();
                  }
                }
              }}
            >
              Run ▶️
            </button>
            <iframe id="preview" className="mt-4 h-40 w-full rounded-lg border border-border bg-white" />
          </div>

          {/* JSON Formatter placeholder */}
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">📦 JSON Formatter</h2>
            <p className="text-sm text-muted">Format, minify, validate, and copy JSON.</p>
            <p className="mt-4 text-xs text-muted">(Feature coming soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
