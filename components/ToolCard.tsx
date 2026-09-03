"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { Tool } from "@/lib/data";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("regal-favorites") || "[]");
    setIsFavorite(fav.includes(tool.id));
  }, [tool.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const fav = JSON.parse(localStorage.getItem("regal-favorites") || "[]");
    const newFav = isFavorite ? fav.filter((id: string) => id !== tool.id) : [...fav, tool.id];
    localStorage.setItem("regal-favorites", JSON.stringify(newFav));
    setIsFavorite(!isFavorite);
  };

  const handleClick = () => {
    const recent = JSON.parse(localStorage.getItem("regal-recent") || "[]");
    const filtered = recent.filter((id: string) => id !== tool.id);
    localStorage.setItem("regal-recent", JSON.stringify([tool.id, ...filtered].slice(0, 12)));
  };

  return (
    <Link href={tool.href} onClick={handleClick}>
      <div className="group relative rounded-xl border border-border bg-background-card p-4 transition-all hover:border-regal/30 hover:shadow-lg hover:shadow-regal/5">
        <div className="flex items-start justify-between">
          <span className="text-2xl">{tool.icon}</span>
          <button
            onClick={toggleFavorite}
            className="text-muted transition hover:text-regal"
            aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
          >
            <Star size={16} fill={isFavorite ? "#6C63FF" : "none"} />
          </button>
        </div>
        <p className="mt-2 font-medium">{tool.name}</p>
        <p className="text-xs text-muted">{tool.category}</p>
      </div>
    </Link>
  );
}
