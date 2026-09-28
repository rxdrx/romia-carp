"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  tipo: string;
  mensaje: string;
}

const cls = {
  field: "flex flex-col gap-1.5",
  label: "text-xs uppercase tracking-widest text-foreground/40",
  input: "bg-surface border border-white/10 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent transition-colors",
  select: "bg-surface border border-white/10 rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors cursor-pointer",
  error: "text-xs text-red-400",
};

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // TODO: conectar con Resend / EmailJS
    await new Promise((r) => setTimeout(r, 1000)); // simula envío
    console.log(data);
    setEnviado(true);
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-24">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Contanos tu <br />
            <span className="text-accent">proyecto</span>
          </h1>
          <p className="text-foreground/60 leading-relaxed">
            El presupuesto es
            sin cargo y sin compromiso.<br />
            Trabajamos en Bahía Blanca y alrededores.
          </p>

          <div className="h-px w-16 bg-accent/40" />

        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {enviado ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
              <CheckCircle size={48} className="text-accent" />
              <h2 className="text-xl font-bold text-foreground">¡Mensaje enviado!</h2>
              <p className="text-foreground/50 text-sm">
                Te contactaremos a la brevedad.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-4 text-xs text-accent uppercase tracking-widest hover:underline cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              {/* Nombre */}
              <div className={cls.field}>
                <label className={cls.label}>Nombre *</label>
                <input
                  {...register("nombre", { required: "El nombre es obligatorio" })}
                  className={cls.input}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <span className={cls.error}>{errors.nombre.message}</span>
                )}
              </div>

              {/* Teléfono + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className={cls.field}>
                  <label className={cls.label}>Teléfono</label>
                  <input
                    {...register("telefono")}
                    className={cls.input}
                    placeholder="+54 9 11 ..."
                  />
                </div>
                <div className={cls.field}>
                  <label className={cls.label}>Email *</label>
                  <input
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Email inválido" },
                    })}
                    className={cls.input}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <span className={cls.error}>{errors.email.message}</span>
                  )}
                </div>
              </div>

              {/* Tipo de mueble */}
              <div className={cls.field}>
                <label className={cls.label}>¿Qué necesitás?</label>
                <select
                  {...register("tipo")}
                  className={cls.select}
                >
                  <option value="">Seleccioná una opción</option>
                  <option value="bajo-mesada">Bajo Mesada</option>
                  <option value="ropero">Ropero</option>
                  <option value="otros">Otro mueble</option>
                  <option value="consulta">Solo consulta</option>
                </select>
              </div>

              {/* Mensaje */}
              <div className={cls.field}>
                <label className={cls.label}>Mensaje *</label>
                <textarea
                  {...register("mensaje", { required: "El mensaje es obligatorio" })}
                  rows={4}
                  className={`${cls.input} resize-none`}
                  placeholder="Contanos las medidas, el estilo que buscás, o cualquier detalle..."
                />
                {errors.mensaje && (
                  <span className={cls.error}>{errors.mensaje.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex items-center justify-center gap-2 px-8 py-3 bg-accent text-background text-sm font-semibold uppercase tracking-widest hover:bg-accent-dark transition-colors duration-300 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar consulta
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
