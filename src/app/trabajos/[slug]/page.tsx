import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { trabajos } from "@/data/trabajos";
import GaleriaDetalle from "@/components/GaleriaDetalle";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return trabajos.map((t) => ({ slug: t.slug }));
}

export default async function TrabajoDetallePage({ params }: Props) {
  const { slug } = await params;
  const trabajo = trabajos.find((t) => t.slug === slug);

  if (!trabajo) notFound();

  const categoryLabel: Record<string, string> = {
    "bajo-mesada": "Bajo Mesada",
    ropero: "Ropero",
    otros: "Otros",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
      {/* Back */}
      <Link
        href="/trabajos"
        className="inline-flex items-center gap-2 text-xs text-foreground/40 hover:text-accent uppercase tracking-widest transition-colors duration-300 mb-8 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
        Volver a trabajos
      </Link>

      {/* Header */}
      <div className="mb-8">
        <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">
          {categoryLabel[trabajo.categoria]}
        </span>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
          {trabajo.titulo}
        </h1>
        {trabajo.descripcion && (
          <p className="mt-4 text-foreground/60 leading-relaxed max-w-2xl">
            {trabajo.descripcion}
          </p>
        )}
      </div>

      <div className="h-px w-full bg-white/5 mb-10" />

      {/* Gallery */}
      <GaleriaDetalle imagenes={trabajo.imagenes} titulo={trabajo.titulo} />

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-foreground/40 text-sm mb-4">
          ¿Te interesa algo similar?
        </p>
        <Link
          href="/contacto"
          className="inline-block px-8 py-3 bg-accent text-background text-sm font-semibold uppercase tracking-widest hover:bg-accent-dark transition-colors duration-300 rounded-sm"
        >
          Solicitar presupuesto
        </Link>
      </div>
    </div>
  );
}
