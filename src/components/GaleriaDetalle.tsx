"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GaleriaDetalleProps {
  imagenes: string[];
  titulo: string;
}

const arrowBtnBase =
  "absolute top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 bg-background/50 text-foreground/60 hover:text-accent hover:border-accent transition-all duration-300 cursor-pointer";

export default function GaleriaDetalle({ imagenes, titulo }: GaleriaDetalleProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + imagenes.length) % imagenes.length : 0));
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % imagenes.length : 0));

  return (
    <>
      {/* Grid */}
      <div
        className={`grid gap-4 ${
          imagenes.length === 1
            ? "grid-cols-1"
            : imagenes.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {imagenes.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setLightbox(i)}
            className={`relative overflow-hidden rounded-sm group cursor-zoom-in bg-surface ${
              i === 0 && imagenes.length >= 3 ? "md:col-span-2 aspect-video" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={src}
              alt={`${titulo} — foto ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-300" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-foreground/50 hover:text-accent transition-colors cursor-pointer"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            {/* Counter */}
            <span className="absolute top-5 left-5 text-xs text-foreground/30 uppercase tracking-widest">
              {lightbox + 1} / {imagenes.length}
            </span>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[80vh] aspect-video mx-12"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imagenes[lightbox]}
                alt={`${titulo} — foto ${lightbox + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Arrows */}
            {imagenes.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className={`${arrowBtnBase} left-4`}
                  aria-label="Anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className={`${arrowBtnBase} right-4`}
                  aria-label="Siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
