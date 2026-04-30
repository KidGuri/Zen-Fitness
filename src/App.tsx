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

function Instagram({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
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

const GOLD = "#a0884d";
const GOLD_LIGHT = "#c4a96a";

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

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s",
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(160,136,77,0.1)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
        }}
      >
        <a href="#">
          <img src="/logo.png" alt="Zen Fitness Club" style={{ height: 40 }} />
        </a>

        <div
          className="nav-desktop"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = GOLD_LIGHT)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            style={{
              marginLeft: 16,
              padding: "10px 24px",
              border: `1px solid rgba(160,136,77,0.4)`,
              color: GOLD,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Llámanos
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.7)",
            cursor: "pointer",
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="nav-mobile-menu"
          style={{
            background: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid rgba(160,136,77,0.1)`,
          }}
        >
          <div
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 13,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  padding: "8px 0",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              style={{
                marginTop: 8,
                padding: "12px 24px",
                border: `1px solid rgba(160,136,77,0.4)`,
                color: GOLD,
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
              }}
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
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      <motion.div
        style={{
          scale,
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px) brightness(0.25)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5), #0a0a0a)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(160,136,77,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{
          opacity,
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 20px",
          maxWidth: 900,
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/logo.png"
            alt="Zen Fitness Club"
            style={{ width: "min(280px, 60vw)", margin: "0 auto 32px" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            color: `${GOLD_LIGHT}cc`,
            fontSize: "clamp(10px, 2.5vw, 16px)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Tu cuerpo. Tu mente. Tu templo.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "clamp(28px, 6vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Transforma tu vida
          <br />
          <span style={{ color: GOLD }}>desde dentro</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-buttons"
        >
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            style={{
              padding: "16px 32px",
              background: GOLD,
              color: "#000",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Empieza hoy
          </a>
          <a
            href="#servicios"
            style={{
              padding: "16px 32px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Descubrir más
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            marginTop: 48,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px 24px",
            color: "rgba(255,255,255,0.4)",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ display: "flex" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill={GOLD} color={GOLD} />
              ))}
            </span>
            4.8 estrellas
          </span>
          <span
            style={{
              width: 1,
              height: 16,
              background: "rgba(255,255,255,0.2)",
            }}
            className="divider-sm"
          />
          <span>118 opiniones</span>
          <span
            style={{
              width: 1,
              height: 16,
              background: "rgba(255,255,255,0.2)",
            }}
            className="divider-sm"
          />
          <span>Desde 2014</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ChevronDown
          size={24}
          color={GOLD}
          style={{ opacity: 0.4, animation: "bounce 2s infinite" }}
        />
      </motion.div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}

function Services() {
  return (
    <section
      id="servicios"
      style={{ background: "#f7f6f3", color: "#1a1a1a", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                color: GOLD,
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Nuestros servicios
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Todo lo que necesitas para{" "}
              <span style={{ color: GOLD }}>alcanzar tus metas</span>
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 12,
                  padding: 32,
                  height: "100%",
                  transition: "all 0.4s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = `${GOLD}33`;
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(160,136,77,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: `${GOLD}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <s.icon size={22} color={GOLD} />
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "rgba(0,0,0,0.5)",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="nosotros"
      style={{ background: "#0a0a0a", color: "#fff", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="about-grid">
          <Reveal>
            <p
              style={{
                color: `${GOLD_LIGHT}cc`,
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Sobre nosotros
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Más que un gimnasio,{" "}
              <span style={{ color: GOLD }}>una familia</span>
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                fontSize: 15,
              }}
            >
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
          </Reveal>

          <Reveal delay={0.2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {[
                { value: "+10", label: "Años" },
                { value: "118", label: "Opiniones" },
                { value: "4.8", label: "Estrellas" },
                { value: "6+", label: "Disciplinas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 12,
                    padding: 32,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 40,
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: 8,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}

function Schedule() {
  return (
    <section
      id="horario"
      style={{ background: "#f7f6f3", color: "#1a1a1a", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                color: GOLD,
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Horario
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Abiertos cuando{" "}
              <span style={{ color: GOLD }}>tú nos necesitas</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {HOURS.map((h, i) => (
              <div
                key={h.day}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 32px",
                  borderBottom:
                    i < HOURS.length - 1
                      ? "1px solid rgba(0,0,0,0.06)"
                      : "none",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontWeight: 500,
                    color: "#333",
                  }}
                >
                  <Clock size={16} color={`${GOLD}99`} />
                  {h.day}
                </span>
                <span
                  style={{
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color: h.time === "Cerrado" ? "rgba(0,0,0,0.3)" : GOLD,
                  }}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section
      id="opiniones"
      style={{ background: "#0a0a0a", color: "#fff", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                color: `${GOLD_LIGHT}cc`,
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Opiniones
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Lo que dicen{" "}
              <span style={{ color: GOLD }}>nuestros socios</span>
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginTop: 24,
              }}
            >
              <span style={{ display: "flex" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={GOLD} color={GOLD} />
                ))}
              </span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
                4.8 de 5 — 118 opiniones en Google
              </span>
            </div>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  padding: 32,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", marginBottom: 16 }}>
                  {[...Array(r.stars)].map((_, j) => (
                    <Star key={j} size={14} fill={GOLD} color={GOLD} />
                  ))}
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: `${GOLD}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: GOLD,
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    {r.name[0]}
                  </div>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: 500,
                      fontSize: 14,
                    }}
                  >
                    {r.name}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href={GOOGLE_REVIEWS}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: `${GOLD}b3`,
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              Ver todas las opiniones en Google
              <ChevronDown
                size={14}
                style={{ transform: "rotate(-90deg)" }}
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      style={{ background: "#f7f6f3", color: "#1a1a1a", padding: "96px 24px" }}
    >
      <Reveal>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(160,136,77,0.08), rgba(160,136,77,0.03))",
            border: `1px solid ${GOLD}1a`,
            borderRadius: 20,
            padding: "64px 32px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Tu transformación{" "}
            <span style={{ color: GOLD }}>empieza aquí</span>
          </h2>
          <p
            style={{
              color: "rgba(0,0,0,0.5)",
              maxWidth: 600,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Únete a la familia Zen Fitness Club y descubre un espacio donde el
            esfuerzo se convierte en resultados. Primera visita sin compromiso.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              style={{
                padding: "16px 32px",
                background: GOLD,
                color: "#000",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s",
              }}
            >
              <Phone size={16} />
              {PHONE}
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 32px",
                border: "1px solid rgba(0,0,0,0.15)",
                color: "#333",
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s",
              }}
            >
              <Instagram size={16} />
              Síguenos
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contacto"
      style={{ background: "#0a0a0a", color: "#fff", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                color: `${GOLD_LIGHT}cc`,
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Contacto
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              ¿Listo para{" "}
              <span style={{ color: GOLD }}>empezar?</span>
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              icon: Phone,
              title: "Teléfono",
              info: PHONE,
              href: `tel:${PHONE.replace(/\s/g, "")}`,
            },
            {
              icon: Mail,
              title: "Email",
              info: EMAIL,
              href: `mailto:${EMAIL}`,
            },
            {
              icon: MapPin,
              title: "Ubicación",
              info: ADDRESS,
              href: MAPS_URL,
              external: true,
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  padding: 32,
                  textAlign: "center",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.4s",
                  height: "100%",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = `${GOLD}33`;
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: `${GOLD}1a`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <c.icon size={22} color={GOLD} />
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    color: `${GOLD_LIGHT}cc`,
                    fontSize: 14,
                    wordBreak: "break-all",
                  }}
                >
                  {c.info}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div
            style={{
              marginTop: 48,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              height: 400,
            }}
          >
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
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px",
        background: "#0a0a0a",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <img src="/logo.png" alt="Zen Fitness Club" style={{ height: 32 }} />

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {[
            { icon: Instagram, href: INSTAGRAM, external: true },
            {
              icon: Phone,
              href: `tel:${PHONE.replace(/\s/g, "")}`,
              external: false,
            },
            { icon: Mail, href: `mailto:${EMAIL}`, external: false },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              style={{
                color: "rgba(255,255,255,0.3)",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = GOLD_LIGHT)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
              }
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.2)",
            fontSize: 12,
            letterSpacing: "0.03em",
          }}
        >
          © {new Date().getFullYear()} Zen Fitness Club. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

function ParallaxDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: 400,
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          y,
          position: "absolute",
          inset: "-20% 0",
          backgroundImage: "url(/parallax-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, #0a0a0a, rgba(0,0,0,0.4), rgba(0,0,0,0.4), #f7f6f3)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Reveal>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(18px, 3vw, 28px)",
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textAlign: "center",
              padding: "0 24px",
            }}
          >
            Donde el esfuerzo se convierte en{" "}
            <span style={{ color: GOLD, fontWeight: 600 }}>resultados</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const GYM_IMAGES = [
  { src: "/gym-4.jpg", alt: "Entrada Zen Fitness Club" },
  { src: "/gym-1.jpg", alt: "Sala de musculación" },
  { src: "/gym-2.jpg", alt: "Máquinas de entrenamiento" },
  { src: "/gym-3.jpg", alt: "Zona de cardio" },
  { src: "/gym-5.jpg", alt: "Zona de peso libre" },
];

function Gallery() {
  return (
    <section
      id="instalaciones"
      style={{ background: "#0a0a0a", color: "#fff", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p
              style={{
                color: `${GOLD_LIGHT}cc`,
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Nuestras instalaciones
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Conoce{" "}
              <span style={{ color: GOLD }}>nuestro espacio</span>
            </h2>
          </div>
        </Reveal>

        <div className="gallery-grid">
          {GYM_IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 0.08}
              className={i === 0 ? "gallery-featured" : ""}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 12,
                  height: "100%",
                  minHeight: i === 0 ? 400 : 250,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5), transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {img.alt}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Schedule />
      <ParallaxDivider />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
