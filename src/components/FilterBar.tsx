"use client";

import { categorias, type CategoriaFilter } from "@/data/trabajos";

interface FilterBarProps {
  active: CategoriaFilter;
  onChange: (cat: CategoriaFilter) => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="sticky top-16 z-40 bg-[#1A1A1B]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ul className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
          {categorias.map((cat) => {
            const isActive = active === cat.value;
            return (
              <li key={cat.value} className="shrink-0">
                <button
                  onClick={() => onChange(cat.value)}
                  className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-accent text-background"
                      : "text-foreground/50 hover:text-accent hover:bg-accent/10"
                  }`}
                >
                  {cat.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
