"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Trabajo } from "@/data/trabajos";

interface TrabajoCardProps {
  trabajo: Trabajo;
  index: number;
}

const categoryLabel: Record<string, string> = {
  "bajo-mesada": "Bajo Mesada",
  ropero: "Ropero",
  otros: "Otros",
};

export default function TrabajoCard({ trabajo, index }: TrabajoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      layout
    >
      <Link href={`/trabajos/${trabajo.slug}`} className="group block">
        {/* Image container */}
        <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-surface">
          <Image
            src={trabajo.portada}
            alt={trabajo.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-400 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
                <ArrowUpRight size={18} className="text-accent" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Ver más
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-3 flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
              {trabajo.titulo}
            </h3>
            <span className="text-xs text-muted mt-0.5 uppercase tracking-widest">
              {categoryLabel[trabajo.categoria]}
            </span>
          </div>
          <ArrowUpRight
            size={16}
            className="text-foreground/20 group-hover:text-accent transition-colors duration-300 shrink-0 mt-0.5"
          />
        </div>
      </Link>
    </motion.div>
  );
}
