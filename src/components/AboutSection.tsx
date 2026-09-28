"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "+10", label: "Años de experiencia" },
  { value: "+200", label: "Proyectos realizados" },
];

export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="bg-background py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">
            Sobre nosotros
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Más de una década<br />
            <span className="text-accent">construyendo muebles</span>
          </h2>

          <p className="text-foreground/60 leading-relaxed text-base md:text-lg">
            Somos un taller familiar con más de diez años en el rubro. Cada trabajo
            empieza con una conversación: entendemos tu espacio, tu estilo y tu
            presupuesto para ofrecerte la mejor solución posible.
          </p>

          <p className="text-foreground/60 leading-relaxed text-base md:text-lg">
            Trabajamos con maderas y melaminas de primera calidad. Fabricamos
            alacenas, bajo mesadas, roperos y cualquier mueble a medida, con
            terminaciones cuidadas al último detalle.
          </p>

          <div className="h-px w-16 bg-accent/40 mt-2" />
        </motion.div>

        {/* Right — stats + decorative block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col gap-8"
        >
          {/* Decorative accent bar */}
          <div className="w-full h-1 bg-gradient-to-r from-accent via-accent/40 to-transparent rounded-full" />

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </span>
                <span className="text-xs text-foreground/50 uppercase tracking-widest leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Card */}
          <div className="rounded-sm bg-surface border border-white/5 p-6 md:p-8 flex flex-col gap-3">
            <span className="text-xs text-accent uppercase tracking-widest font-semibold">
              ¿Cómo trabajamos?
            </span>
            <ul className="flex flex-col gap-3 text-foreground/60 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">01</span>
                Consulta inicial y relevamiento del espacio.
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">02</span>
                Presupuesto sin cargo y planos del mueble.
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">03</span>
                Fabricación e instalación en tu domicilio.
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
