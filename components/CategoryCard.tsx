"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
    description: string;
    href: string;
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.href}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="group relative rounded-2xl border border-border bg-background-card p-6 transition-all hover:border-regal/30 hover:shadow-lg hover:shadow-regal/5"
      >
        <div className="flex items-start justify-between">
          <span className="text-4xl">{category.icon}</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-muted group-hover:text-regal"
          >
            <ArrowRight size={20} />
          </motion.span>
        </div>
        <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
        <p className="mt-1 text-sm text-muted">{category.description}</p>
      </motion.div>
    </Link>
  );
}
