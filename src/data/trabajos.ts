export type Categoria = "bajo-mesada" | "ropero" | "otros";

export interface Trabajo {
  slug: string;
  titulo: string;
  categoria: Categoria;
  descripcion: string;
  portada: string;           // imagen de la card
  imagenes: string[];        // galería en el detalle
}

export const trabajos: Trabajo[] = [
  {
    slug: "bajo-mesada-blanco-moderno",
    titulo: "Bajo Mesada Blanco Moderno",
    categoria: "bajo-mesada",
    descripcion: "Bajo mesada con cajones de soft-close y terminación en laqueado blanco brillante. Medidas especiales para optimizar el espacio.",
    portada: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fm=webp",
    imagenes: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&fm=webp",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80&fm=webp",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80&fm=webp",
    ],
  },
  {
    slug: "bajo-mesada-gris-madera",
    titulo: "Bajo Mesada Gris y Madera",
    categoria: "bajo-mesada",
    descripcion: "Combinación de melamina gris piedra con frente de madera natural. Diseño minimalista y funcional.",
    portada: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80&fm=webp",
    imagenes: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80&fm=webp",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&fm=webp",
    ],
  },
  {
    slug: "ropero-puertas-corredizas-blanco",
    titulo: "Ropero Puertas Corredizas",
    categoria: "ropero",
    descripcion: "Ropero empotrado de piso a techo con puertas corredizas en blanco mate. Interior con cajonera, zapatero y barra colgante.",
    portada: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80&fm=webp",
    imagenes: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80&fm=webp",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fm=webp",
    ],
  },
  {
    slug: "ropero-esquinero-gris",
    titulo: "Ropero Esquinero Gris",
    categoria: "ropero",
    descripcion: "Ropero esquinero a medida en melamina gris claro con herrajes cromados. Aprovechamiento total del espacio.",
    portada: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fm=webp",
    imagenes: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fm=webp",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80&fm=webp",
    ],
  },
  {
    slug: "escritorio-flotante-blanco",
    titulo: "Escritorio Flotante",
    categoria: "otros",
    descripcion: "Escritorio flotante con estantes superiores integrados. Ideal para home office en espacios reducidos.",
    portada: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80&fm=webp",
    imagenes: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80&fm=webp",
      "https://images.unsplash.com/photo-1611818830402-d07de749ed59?w=1200&q=80&fm=webp",
    ],
  },
  {
    slug: "estanteria-living-blanca",
    titulo: "Estantería Living",
    categoria: "otros",
    descripcion: "Biblioteca a medida con nichos abiertos y puertas abatibles en la parte inferior. Terminación laqueado blanco.",
    portada: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800&q=80&fm=webp",
    imagenes: [
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=1200&q=80&fm=webp",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80&fm=webp",
    ],
  },
];

export const categorias = [
  { value: "todos",       label: "Todo" },
  { value: "bajo-mesada", label: "Bajo Mesada" },
  { value: "ropero",      label: "Ropero" },
  { value: "otros",       label: "Otros" },
] as const;

export type CategoriaFilter = (typeof categorias)[number]["value"];
