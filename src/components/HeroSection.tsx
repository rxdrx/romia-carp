"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";

const slides = [
  {
    id: 1,
    // Reemplazar con foto propia: /images/hero/hero-1.webp
    src: "https://images.unsplash.com/photo-1611818830402-d07de749ed59?w=1920&q=80&fm=webp",
    alt: "Alacena a medida en blanco brillante",
    cta: "Ver trabajos",
    ctaHref: "/trabajos",
  },
  {
    id: 2,
    // Reemplazar con foto propia: /images/hero/hero-2.webp
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80&fm=webp",
    alt: "Bajo mesada moderno en gris",
    cta: "Contactanos",
    ctaHref: "/contacto",
  },
  {
    id: 3,
    // Reemplazar con foto propia: /images/hero/hero-3.webp
    src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1920&q=80&fm=webp",
    alt: "Ropero con puertas corredizas blancas",
    cta: "Ver trabajos",
    ctaHref: "/trabajos",
  },
];

const AUTOPLAY_INTERVAL = 7000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(index);
    },
    []
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
    }),
  };

  const slide = slides[current];

  const arrowBtnBase =
    "absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/20 bg-background/30 backdrop-blur-sm text-foreground/70 hover:text-accent hover:border-accent transition-all duration-300";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background snap-start">
      {/* Slide images */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark gradient overlay — stronger at bottom, lighter at center so white furniture pops */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background/80" />
        </motion.div>
      </AnimatePresence>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${slide.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-accent leading-none tracking-widest [paint-order:stroke_fill] [-webkit-text-stroke:2px_#7A4010] [text-shadow:0_2px_16px_rgba(0,0,0,0.9),0_0_40px_rgba(0,0,0,0.7)]">
              ROMIA
            </h1>
            <p className="text-xl md:text-3xl font-semibold text-accent tracking-[0.5em] uppercase [paint-order:stroke_fill] [-webkit-text-stroke:1px_#7A4010] [text-shadow:0_2px_16px_rgba(0,0,0,0.9),0_0_40px_rgba(0,0,0,0.7)]">
              Carpintería
            </p>

            {/* CTA */}
            <Link
              href={slide.ctaHref}
              className="mt-4 px-8 py-3 bg-accent text-background text-sm font-semibold uppercase tracking-widest hover:bg-accent-dark transition-colors duration-300 rounded-sm"
            >
              {slide.cta}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className={`${arrowBtnBase} left-4 md:left-8`}
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className={`${arrowBtnBase} right-4 md:right-8`}
        aria-label="Siguiente"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-1.5 bg-accent"
                : "w-1.5 h-1.5 bg-foreground/30 hover:bg-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => {
          document.querySelector("main")?.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        }}
        className="absolute bottom-6 right-8 z-20 flex items-center gap-2 text-accent border border-accent/40 px-3 py-1.5 rounded-sm hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 cursor-pointer"
        aria-label="Ir a Sobre nosotros"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">
          Sobre nosotros
        </span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
