import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  Dumbbell,
  Flame,
  Heart,
  Shield,
  Users,
  Music,
  Menu,
  X,
} from "lucide-react";

function Instagram({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const PHONE = "965 68 77 68";
const EMAIL = "zenfitness2014@gmail.com";
const ADDRESS = "Carrer Llebeig 1, 03195, Elche, Alicante";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Zen+Fitness+Club+Elche";
const INSTAGRAM = "https://www.instagram.com/zengymfitness/";
const GOOGLE_REVIEWS =
  "https://search.google.com/local/reviews?placeid=ChIJx0Y8Q0jsYA0RhDxzZlYzjQI";

const HOURS = [
  { day: "Lunes a Viernes", time: "7:00 – 22:00" },
  { day: "Sábados", time: "7:00 – 15:00" },
  { day: "Domingos", time: "Cerrado" },
];

const SERVICES = [
  {
    icon: Dumbbell,
    title: "Sala Fitness",
    desc: "Equipamiento de última generación para entrenamientos de fuerza y resistencia en un espacio amplio y motivador.",
  },
  {
    icon: Flame,
    title: "Spinning",
    desc: "Clases de ciclismo indoor de alta intensidad con música envolvente y entrenadores certificados.",
  },
  {
    icon: Heart,
    title: "Body Zen & Pilates",
    desc: "Sesiones enfocadas en flexibilidad, equilibrio y bienestar corporal. Mente y cuerpo en armonía.",
  },
  {
    icon: Users,
    title: "GAP",
    desc: "Tonifica glúteos, abdominales y piernas con rutinas dinámicas diseñadas para resultados visibles.",
  },
  {
    icon: Shield,
    title: "Taekwondo & Defensa Personal",
    desc: "Artes marciales para todas las edades. Disciplina, confianza y autodefensa en cada sesión.",
  },
  {
    icon: Music,
    title: "Zumba & Latino",
    desc: "Baila, suda y diviértete con ritmos latinos. Fitness y diversión en cada clase.",
  },
];

const REVIEWS = [
  {
    name: "María G.",
    stars: 5,
    text: "El mejor gimnasio de Elche. El ambiente es increíble y los monitores son muy profesionales. ¡Totalmente recomendado!",
  },
  {
    name: "Carlos R.",
    stars: 5,
    text: "Llevo 5 años entrenando aquí y no lo cambio por nada. Las instalaciones están siempre impecables.",
  },
  {
    name: "Laura M.",
    stars: 5,
    text: "Las clases de spinning son brutales. El equipo de entrenadores te motiva al máximo. Gran ambiente familiar.",
  },
  {
    name: "Andrés P.",
    stars: 5,
    text: "Las clases de taekwondo para niños son excelentes. Mi hijo está encantado con el profesor Javier.",
  },
];

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RevealItem({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Horario", href: "#horario" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-[#a0884d]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="Zen Fitness Club" className="h-10" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.15em] uppercase text-white/60 hover:text-[#c4a96a] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="ml-4 px-6 py-2.5 border border-[#a0884d]/40 text-[#a0884d] text-sm tracking-[0.15em] uppercase hover:bg-[#a0884d]/10 transition-all duration-300 rounded-sm"
          >
            Llámanos
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/70 hover:text-[#c4a96a] transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-[#a0884d]/10"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-white/60 hover:text-[#c4a96a] transition-colors py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="mt-2 px-6 py-3 border border-[#a0884d]/40 text-[#a0884d] text-sm tracking-[0.15em] uppercase hover:bg-[#a0884d]/10 transition-all text-center rounded-sm"
            >
              Llámanos
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0a0a0a]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,136,77,0.08)_0%,transparent_70%)]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/logo.png"
            alt="Zen Fitness Club"
            className="w-48 sm:w-64 md:w-72 mx-auto mb-8"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#c4a96a]/80 text-xs sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6"
        >
          Tu cuerpo. Tu mente. Tu templo.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          Transforma tu vida
          <br />
          <span className="text-[#a0884d]">desde dentro</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="px-8 py-4 bg-[#a0884d] text-black font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#c4a96a] transition-all duration-300 rounded-sm"
          >
            Empieza hoy
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 border border-white/20 text-white/80 text-sm tracking-[0.15em] uppercase hover:border-[#a0884d]/40 hover:text-[#c4a96a] transition-all duration-300 rounded-sm"
          >
            Descubrir más
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/40 text-xs tracking-[0.15em] uppercase"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="text-[#a0884d] fill-[#a0884d]"
                />
              ))}
            </div>
            <span>4.8 estrellas</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <span>118 opiniones</span>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <span>Desde 2014</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          size={24}
          className="text-[#a0884d]/40 animate-bounce"
        />
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealSection className="text-center mb-16 sm:mb-20">
          <p className="text-[#c4a96a]/80 text-sm tracking-[0.3em] uppercase mb-4">
            Nuestros servicios
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Todo lo que necesitas para{" "}
            <span className="text-[#a0884d]">alcanzar tus metas</span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <RevealItem key={s.title} delay={i * 0.1}>
              <div className="group relative bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 hover:border-[#a0884d]/20 hover:bg-white/[0.05] transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-lg bg-[#a0884d]/10 flex items-center justify-center mb-6 group-hover:bg-[#a0884d]/20 transition-colors duration-500">
                  <s.icon size={22} className="text-[#a0884d]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <p className="text-[#c4a96a]/80 text-sm tracking-[0.3em] uppercase mb-4">
              Sobre nosotros
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              Más que un gimnasio,{" "}
              <span className="text-[#a0884d]">una familia</span>
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                Desde 2014, Zen Fitness Club ha sido el referente del bienestar
                en Elche. Nuestro compromiso va más allá del ejercicio — creemos
                en la transformación integral de cada persona que cruza nuestras
                puertas.
              </p>
              <p>
                Con monitores certificados, instalaciones de primer nivel y un
                ambiente que te hará sentir como en casa, somos el espacio donde
                tus objetivos se convierten en realidad.
              </p>
              <p>
                Ya sea que busques ganar fuerza, mejorar tu flexibilidad o
                simplemente encontrar un momento de paz en tu día, en Zen
                Fitness Club encontrarás lo que necesitas.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "+10", label: "Años" },
                { value: "118", label: "Opiniones" },
                { value: "4.8", label: "Estrellas" },
                { value: "6+", label: "Disciplinas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 text-center"
                >
                  <div className="text-4xl font-bold text-[#a0884d] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-sm tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="horario" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <RevealSection className="text-center mb-16">
          <p className="text-[#c4a96a]/80 text-sm tracking-[0.3em] uppercase mb-4">
            Horario
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Abiertos cuando{" "}
            <span className="text-[#a0884d]">tú nos necesitas</span>
          </h2>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg overflow-hidden">
            {HOURS.map((h, i) => (
              <div
                key={h.day}
                className={`flex items-center justify-between px-8 py-6 ${
                  i < HOURS.length - 1
                    ? "border-b border-white/[0.06]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <Clock size={16} className="text-[#a0884d]/60" />
                  <span className="text-white/70 font-medium">
                    {h.day}
                  </span>
                </div>
                <span
                  className={`font-semibold tracking-wide ${
                    h.time === "Cerrado"
                      ? "text-white/30"
                      : "text-[#a0884d]"
                  }`}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="opiniones" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealSection className="text-center mb-16 sm:mb-20">
          <p className="text-[#c4a96a]/80 text-sm tracking-[0.3em] uppercase mb-4">
            Opiniones
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Lo que dicen{" "}
            <span className="text-[#a0884d]">nuestros socios</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#a0884d] fill-[#a0884d]"
                />
              ))}
            </div>
            <span className="text-white/50 text-sm">
              4.8 de 5 — 118 opiniones en Google
            </span>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <RevealItem key={r.name} delay={i * 0.1}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 h-full flex flex-col">
                <div className="flex mb-4">
                  {[...Array(r.stars)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[#a0884d] fill-[#a0884d]"
                    />
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#a0884d]/20 flex items-center justify-center text-[#a0884d] font-semibold text-sm">
                    {r.name[0]}
                  </div>
                  <span className="text-white/80 font-medium text-sm">
                    {r.name}
                  </span>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>

        <RevealSection delay={0.4} className="text-center mt-10">
          <a
            href={GOOGLE_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#a0884d]/70 text-sm tracking-[0.15em] uppercase hover:text-[#c4a96a] transition-colors duration-300"
          >
            Ver todas las opiniones en Google
            <ChevronDown size={14} className="-rotate-90" />
          </a>
        </RevealSection>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealSection className="text-center mb-16 sm:mb-20">
          <p className="text-[#c4a96a]/80 text-sm tracking-[0.3em] uppercase mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            ¿Listo para{" "}
            <span className="text-[#a0884d]">empezar?</span>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6">
          <RevealItem delay={0}>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="group bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 text-center hover:border-[#a0884d]/20 hover:bg-white/[0.05] transition-all duration-500 block h-full"
            >
              <div className="w-14 h-14 rounded-full bg-[#a0884d]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#a0884d]/20 transition-colors duration-500">
                <Phone size={22} className="text-[#a0884d]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
              <p className="text-[#c4a96a]/80 text-sm">{PHONE}</p>
            </a>
          </RevealItem>

          <RevealItem delay={0.1}>
            <a
              href={`mailto:${EMAIL}`}
              className="group bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 text-center hover:border-[#a0884d]/20 hover:bg-white/[0.05] transition-all duration-500 block h-full"
            >
              <div className="w-14 h-14 rounded-full bg-[#a0884d]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#a0884d]/20 transition-colors duration-500">
                <Mail size={22} className="text-[#a0884d]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-[#c4a96a]/80 text-sm break-all">{EMAIL}</p>
            </a>
          </RevealItem>

          <RevealItem delay={0.2}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 text-center hover:border-[#a0884d]/20 hover:bg-white/[0.05] transition-all duration-500 block h-full"
            >
              <div className="w-14 h-14 rounded-full bg-[#a0884d]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#a0884d]/20 transition-colors duration-500">
                <MapPin size={22} className="text-[#a0884d]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
              <p className="text-[#c4a96a]/80 text-sm">{ADDRESS}</p>
            </a>
          </RevealItem>
        </div>

        <RevealSection delay={0.3} className="mt-12">
          <div className="rounded-lg overflow-hidden border border-white/[0.06] h-[300px] sm:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.5!2d-0.6988!3d38.2669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE2JzAwLjgiTiAwwrA0MScwNy43Ilc!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(0.9) hue-rotate(180deg) brightness(0.7) contrast(1.2)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zen Fitness Club ubicación"
            />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <RevealSection>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#a0884d]/10 via-[#a0884d]/5 to-transparent border border-[#a0884d]/10 rounded-2xl p-12 sm:p-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Tu transformación{" "}
            <span className="text-[#a0884d]">empieza aquí</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Únete a la familia Zen Fitness Club y descubre un espacio donde
            el esfuerzo se convierte en resultados. Primera visita sin
            compromiso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="px-8 py-4 bg-[#a0884d] text-black font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#c4a96a] transition-all duration-300 rounded-sm inline-flex items-center gap-2"
            >
              <Phone size={16} />
              {PHONE}
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white/80 text-sm tracking-[0.15em] uppercase hover:border-[#a0884d]/40 hover:text-[#c4a96a] transition-all duration-300 rounded-sm inline-flex items-center gap-2"
            >
              <Instagram size={16} />
              Síguenos
            </a>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Zen Fitness Club" className="h-8" />
          </div>

          <div className="flex items-center gap-6">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#c4a96a] transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="text-white/30 hover:text-[#c4a96a] transition-colors duration-300"
            >
              <Phone size={20} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-white/30 hover:text-[#c4a96a] transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Zen Fitness Club. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Schedule />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
