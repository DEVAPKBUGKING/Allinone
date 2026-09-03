"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { categories, allTools } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ToolCard from "@/components/ToolCard";

const floatingTools = ["🧮 Calculator", "📱 QR Generator", "🍅 Pomodoro", "📦 JSON Formatter", "🎵 Audio Player"];

export default function HomePage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentlyUsed, setRecentlyUsed] = useState<string[]>([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("regal-favorites") || "[]");
    const recent = JSON.parse(localStorage.getItem("regal-recent") || "[]");
    setFavorites(fav);
    setRecentlyUsed(recent.slice(0, 6));
  }, []);

  const favoriteTools = allTools.filter((t) => favorites.includes(t.id));
  const recentTools = allTools.filter((t) => recentlyUsed.includes(t.id));

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold tracking-tight sm:text-7xl"
          >
            <span className="bg-gradient-to-r from-regal to-regal-light bg-clip-text text-transparent">
              REGAL
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-2xl font-medium text-white sm:text-3xl"
          >
            One Place. Everything You Need.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted"
          >
            A modern collection of useful tools for study, productivity, media, coding, finance, and everyday digital tasks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/tools"
              className="rounded-full bg-regal px-8 py-3 font-medium text-white transition hover:bg-regal-dark"
            >
              Explore REGAL
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-border px-8 py-3 font-medium text-muted transition hover:border-white hover:text-white"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {floatingTools.map((label, i) => (
              <span
                key={i}
                className="rounded-full bg-background-card/60 px-4 py-2 text-sm text-muted backdrop-blur-sm border border-border"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT DO YOU NEED? */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold sm:text-4xl">What do you need?</h2>
          <p className="mt-2 text-muted">Choose what you want to do and REGAL will take you there.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* FAVORITES */}
      {favoriteTools.length > 0 && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-regal" fill="#6C63FF" />
              <h2 className="text-2xl font-bold">Your Favorites</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {favoriteTools.slice(0, 4).map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RECENTLY USED */}
      {recentTools.length > 0 && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold">Recently Used</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {recentTools.slice(0, 4).map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
