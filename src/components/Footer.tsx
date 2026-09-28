import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-foreground/40 text-xs tracking-wide text-center md:text-left">
          © {currentYear} Romia Carpintería. Todos los derechos reservados.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/romiacarpinteria"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Romia Carpintería"
            className="flex items-center gap-2 text-foreground/40 hover:text-accent transition-colors duration-300 text-xs uppercase tracking-widest"
          >
            <Instagram size={16} />
            <span className="hidden sm:inline">Instagram</span>
          </a>

          <span className="w-px h-4 bg-white/10" />

          {/* LinkedIn del diseñador */}
          <a
            href="https://www.linkedin.com/in/rodrigo-sisko-a3b0b1239/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn del diseñador web"
            className="flex items-center gap-2 text-foreground/40 hover:text-accent transition-colors duration-300 text-xs uppercase tracking-widest"
          >
            <Linkedin size={16} />
            <span className="hidden sm:inline">Diseñado por</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
