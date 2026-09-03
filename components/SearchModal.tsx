"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { allTools } from "@/lib/data";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const results = query.trim()
    ? allTools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query.toLowerCase()) ||
          tool.category.toLowerCase().includes(query.toLowerCase()) ||
          tool.description?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-background-card border border-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-border px-4">
          <Search className="text-muted" size={20} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..."
            className="flex-1 bg-transparent px-3 py-4 text-sm text-white outline-none placeholder:text-muted"
          />
          <kbd className="hidden sm:inline-block rounded bg-white/10 px-2 py-1 text-xs text-muted">
            ESC
          </kbd>
          <button onClick={onClose} className="ml-2 text-muted hover:text-white">
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2">
          {query.trim() === "" ? (
            <p className="py-8 text-center text-sm text-muted">
              Type to search tools, categories, or descriptions.
            </p>
          ) : results.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted">
              No results found for "{query}"
            </p>
          ) : (
            <ul>
              {results.slice(0, 12).map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={tool.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{tool.icon}</span>
                      <div>
                        <p className="text-sm font-medium">{tool.name}</p>
                        <p className="text-xs text-muted">{tool.category}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-muted" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
