"use client";

import { useState } from "react";
import { allTools } from "@/lib/data";
import ToolCard from "@/components/ToolCard";

export default function ToolsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(allTools.map((t) => t.category))];

  const filtered = filter === "All" ? allTools : allTools.filter((t) => t.category === filter);

  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">All Tools</h1>
        <p className="mt-2 text-muted">Everything useful, in one place.</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                filter === cat
                  ? "bg-regal text-white"
                  : "bg-background-card text-muted hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
