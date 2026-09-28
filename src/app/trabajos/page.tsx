"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trabajos, type CategoriaFilter } from "@/data/trabajos";
import FilterBar from "@/components/FilterBar";
import TrabajoCard from "@/components/TrabajoCard";

export default function TrabajosPage() {
  const [active, setActive] = useState<CategoriaFilter>("todos");

  const filtered =
    active === "todos"
      ? trabajos
      : trabajos.filter((t) => t.categoria === active);

  return (
    <>
      <FilterBar active={active} onChange={setActive} />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
            Nuestros trabajos
          </h1>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((trabajo, i) => (
              <TrabajoCard key={trabajo.slug} trabajo={trabajo} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-foreground/40 text-sm text-center py-20">
            No hay trabajos en esta categoría todavía.
          </p>
        )}
      </section>
    </>
  );
}
