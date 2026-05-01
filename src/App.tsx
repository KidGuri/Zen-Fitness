import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  Mail,
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

type Lang = "es" | "en";

const translations = {
  es: {
    // Nav
    navServices: "Servicios",
    navAbout: "Nosotros",
    navSchedule: "Horario",
    navReviews: "Opiniones",
    navContact: "Contacto",
    navCall: "Llámanos",

    // Hero
    heroTagline: "Tu cuerpo. Tu mente. Tu templo.",
    heroHeading1: "Transforma tu vida",
    heroHeading2: "desde dentro",
    heroBtn1: "Empieza hoy",
    heroBtn2: "Descubrir más",
    heroStars: "4.8 estrellas",
    heroReviews: "118 opiniones",
    heroSince: "Desde 2014",

    // Services
    servicesLabel: "Nuestros servicios",
    servicesHeading1: "Todo lo que necesitas para",
    servicesHeading2: "alcanzar tus metas",
    serviceTitle1: "Sala Fitness",
    serviceDesc1:
      "Equipamiento de última generación para entrenamientos de fuerza y resistencia en un espacio amplio y motivador.",
    serviceTitle2: "Spinning",
    serviceDesc2:
      "Clases de ciclismo indoor de alta intensidad con música envolvente y entrenadores certificados.",
    serviceTitle3: "Body Zen & Pilates",
    serviceDesc3:
      "Sesiones enfocadas en flexibilidad, equilibrio y bienestar corporal. Mente y cuerpo en armonía.",
    serviceTitle4: "GAP",
    serviceDesc4:
      "Tonifica glúteos, abdominales y piernas con rutinas dinámicas diseñadas para resultados visibles.",
    serviceTitle5: "Taekwondo & Defensa Personal",
    serviceDesc5:
      "Artes marciales para todas las edades. Disciplina, confianza y autodefensa en cada sesión.",
    serviceTitle6: "Zumba & Latino",
    serviceDesc6:
      "Baila, suda y diviértete con ritmos latinos. Fitness y diversión en cada clase.",

    // About
    aboutLabel: "Sobre nosotros",
    aboutHeading1: "Más que un gimnasio,",
    aboutHeading2: "una familia",
    aboutP1:
      "Desde 2014, Zen Fitness Club ha sido el referente del bienestar en Elche. Nuestro compromiso va más allá del ejercicio — creemos en la transformación integral de cada persona que cruza nuestras puertas.",
    aboutP2:
      "Con monitores certificados, instalaciones de primer nivel y un ambiente que te hará sentir como en casa, somos el espacio donde tus objetivos se convierten en realidad.",
    aboutP3:
      "Ya sea que busques ganar fuerza, mejorar tu flexibilidad o simplemente encontrar un momento de paz en tu día, en Zen Fitness Club encontrarás lo que necesitas.",
    aboutStatYears: "Años",
    aboutStatReviews: "Opiniones",
    aboutStatStars: "Estrellas",
    aboutStatDisciplines: "Disciplinas",

    // Gallery
    galleryLabel: "Nuestras instalaciones",
    galleryHeading1: "Conoce",
    galleryHeading2: "nuestro espacio",
    galleryAlt1: "Entrada Zen Fitness Club",
    galleryAlt2: "Sala de musculación",
    galleryAlt3: "Máquinas de entrenamiento",
    galleryAlt4: "Zona de cardio",
    galleryAlt5: "Zona de peso libre",

    // Schedule
    scheduleLabel: "Horario",
    scheduleHeading1: "Abiertos cuando",
    scheduleHeading2: "tú nos necesitas",
    scheduleDay1: "Lunes a Viernes",
    scheduleDay2: "Sábados",
    scheduleDay3: "Domingos",
    scheduleClosed: "Cerrado",

    // Parallax
    parallaxText1: "Donde el esfuerzo se convierte en",
    parallaxText2: "resultados",

    // Reviews
    reviewsLabel: "Opiniones",
    reviewsHeading1: "Lo que dicen",
    reviewsHeading2: "nuestros socios",
    reviewsSubtext: "4.8 de 5 — 118 opiniones en Google",
    reviewsCta: "Ver todas las opiniones en Google",
    review1:
      "El mejor gimnasio de Elche. El ambiente es increíble y los monitores son muy profesionales. ¡Totalmente recomendado!",
    review2:
      "Llevo 5 años entrenando aquí y no lo cambio por nada. Las instalaciones están siempre impecables.",
    review3:
      "Las clases de spinning son brutales. El equipo de entrenadores te motiva al máximo. Gran ambiente familiar.",
    review4:
      "Las clases de taekwondo para niños son excelentes. Mi hijo está encantado con el profesor Javier.",
    review5:
      "Ambiente familiar y cercano. Los monitores siempre están pendientes de ti y te corrigen cuando hace falta.",
    review6:
      "Muy buen gimnasio con gran variedad de máquinas. Las clases dirigidas son geniales.",
    review7:
      "La mejor decisión que tomé fue apuntarme aquí. He mejorado mucho en pocos meses.",
    review8:
      "Precios muy competitivos para lo que ofrecen. Relación calidad-precio inmejorable.",

    // CTA
    ctaHeading1: "Tu transformación",
    ctaHeading2: "empieza aquí",
    ctaText:
      "Únete a la familia Zen Fitness Club y descubre un espacio donde el esfuerzo se convierte en resultados. Primera visita sin compromiso.",
    ctaFollow: "Síguenos",

    // Contact
    contactLabel: "Contacto",
    contactHeading1: "¿Listo para",
    contactHeading2: "empezar?",
    contactPhone: "Teléfono",
    contactEmail: "Email",
    contactLocation: "Ubicación",

    // Footer
    footerRights: "Todos los derechos reservados.",
  },
  en: {
    // Nav
    navServices: "Services",
    navAbout: "About Us",
    navSchedule: "Schedule",
    navReviews: "Reviews",
    navContact: "Contact",
    navCall: "Call Us",

    // Hero
    heroTagline: "Your body. Your mind. Your temple.",
    heroHeading1: "Transform your life",
    heroHeading2: "from within",
    heroBtn1: "Start today",
    heroBtn2: "Discover more",
    heroStars: "4.8 stars",
    heroReviews: "118 reviews",
    heroSince: "Since 2014",

    // Services
    servicesLabel: "Our services",
    servicesHeading1: "Everything you need to",
    servicesHeading2: "reach your goals",
    serviceTitle1: "Fitness Room",
    serviceDesc1:
      "State-of-the-art equipment for strength and endurance training in a spacious and motivating environment.",
    serviceTitle2: "Spinning",
    serviceDesc2:
      "High-intensity indoor cycling classes with immersive music and certified trainers.",
    serviceTitle3: "Body Zen & Pilates",
    serviceDesc3:
      "Sessions focused on flexibility, balance, and body wellness. Mind and body in harmony.",
    serviceTitle4: "GAP",
    serviceDesc4:
      "Tone your glutes, abs, and legs with dynamic routines designed for visible results.",
    serviceTitle5: "Taekwondo & Self-Defense",
    serviceDesc5:
      "Martial arts for all ages. Discipline, confidence, and self-defense in every session.",
    serviceTitle6: "Zumba & Latin",
    serviceDesc6:
      "Dance, sweat, and have fun with Latin rhythms. Fitness and fun in every class.",

    // About
    aboutLabel: "About us",
    aboutHeading1: "More than a gym,",
    aboutHeading2: "a family",
    aboutP1:
      "Since 2014, Zen Fitness Club has been the benchmark of wellness in Elche. Our commitment goes beyond exercise — we believe in the total transformation of every person who walks through our doors.",
    aboutP2:
      "With certified trainers, top-tier facilities, and an atmosphere that will make you feel at home, we are the space where your goals become reality.",
    aboutP3:
      "Whether you want to build strength, improve your flexibility, or simply find a moment of peace in your day, at Zen Fitness Club you will find what you need.",
    aboutStatYears: "Years",
    aboutStatReviews: "Reviews",
    aboutStatStars: "Stars",
    aboutStatDisciplines: "Disciplines",

    // Gallery
    galleryLabel: "Our facilities",
    galleryHeading1: "Discover",
    galleryHeading2: "our space",
    galleryAlt1: "Zen Fitness Club entrance",
    galleryAlt2: "Weight room",
    galleryAlt3: "Training machines",
    galleryAlt4: "Cardio zone",
    galleryAlt5: "Free weights zone",

    // Schedule
    scheduleLabel: "Schedule",
    scheduleHeading1: "Open when",
    scheduleHeading2: "you need us",
    scheduleDay1: "Monday to Friday",
    scheduleDay2: "Saturdays",
    scheduleDay3: "Sundays",
    scheduleClosed: "Closed",

    // Parallax
    parallaxText1: "Where effort becomes",
    parallaxText2: "results",

    // Reviews
    reviewsLabel: "Reviews",
    reviewsHeading1: "What our",
    reviewsHeading2: "members say",
    reviewsSubtext: "4.8 out of 5 — 118 reviews on Google",
    reviewsCta: "See all reviews on Google",
    review1:
      "The best gym in Elche. The atmosphere is incredible and the trainers are very professional. Totally recommended!",
    review2:
      "I've been training here for 5 years and I wouldn't change it for anything. The facilities are always spotless.",
    review3:
      "The spinning classes are amazing. The team of trainers motivates you to the max. Great family atmosphere.",
    review4:
      "The taekwondo classes for kids are excellent. My son is delighted with coach Javier.",
    review5:
      "Friendly and close atmosphere. The trainers are always attentive and correct your form when needed.",
    review6:
      "Great gym with a wide variety of machines. The group classes are amazing.",
    review7:
      "The best decision I made was joining here. I've improved so much in just a few months.",
    review8:
      "Very competitive prices for what they offer. Unbeatable value for money.",

    // CTA
    ctaHeading1: "Your transformation",
    ctaHeading2: "starts here",
    ctaText:
      "Join the Zen Fitness Club family and discover a space where effort becomes results. First visit with no commitment.",
    ctaFollow: "Follow us",

    // Contact
    contactLabel: "Contact",
    contactHeading1: "Ready to",
    contactHeading2: "get started?",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactLocation: "Location",

    // Footer
    footerRights: "All rights reserved.",
  },
};

const SERVICES_DATA = [
  { icon: Dumbbell, titleKey: "serviceTitle1" as const, descKey: "serviceDesc1" as const },
  { icon: Flame, titleKey: "serviceTitle2" as const, descKey: "serviceDesc2" as const },
  { icon: Heart, titleKey: "serviceTitle3" as const, descKey: "serviceDesc3" as const },
  { icon: Users, titleKey: "serviceTitle4" as const, descKey: "serviceDesc4" as const },
  { icon: Shield, titleKey: "serviceTitle5" as const, descKey: "serviceDesc5" as const },
  { icon: Music, titleKey: "serviceTitle6" as const, descKey: "serviceDesc6" as const },
];

const REVIEWS_DATA = [
  { name: "María G.", stars: 5, textKey: "review1" as const },
  { name: "Carlos R.", stars: 5, textKey: "review2" as const },
  { name: "Laura M.", stars: 5, textKey: "review3" as const },
  { name: "Andrés P.", stars: 5, textKey: "review4" as const },
  { name: "Pedro S.", stars: 5, textKey: "review5" as const },
  { name: "Elena V.", stars: 5, textKey: "review6" as const },
  { name: "Roberto J.", stars: 5, textKey: "review7" as const },
  { name: "Lucía D.", stars: 5, textKey: "review8" as const },
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
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeInImage({
  src,
  alt,
  style,
  onMouseOver,
  onMouseOut,
  loading,
}: {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  onMouseOver?: React.MouseEventHandler<HTMLImageElement>;
  onMouseOut?: React.MouseEventHandler<HTMLImageElement>;
  loading?: "lazy" | "eager";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      initial={{ opacity: 0, scale: 1.03 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
}

function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch || !ref.current) return;

    ref.current.style.display = "block";

    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        const size = isHovering.current ? 40 : 12;
        ref.current.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
      }
    };

    const onLeave = () => {
      if (ref.current) ref.current.style.transform = "translate(-100px, -100px)";
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, select, textarea, .service-card");
      if (interactive && ref.current) {
        isHovering.current = true;
        ref.current.style.width = "40px";
        ref.current.style.height = "40px";
        ref.current.style.background = "#fff";
        ref.current.style.mixBlendMode = "difference";
        ref.current.style.borderRadius = "50%";
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, select, textarea, .service-card");
      if (interactive && ref.current) {
        isHovering.current = false;
        ref.current.style.width = "12px";
        ref.current.style.height = "12px";
        ref.current.style.background = GOLD;
        ref.current.style.mixBlendMode = "normal";
        ref.current.style.borderRadius = "0";
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        background: GOLD,
        pointerEvents: "none",
        zIndex: 9999,
        display: "none",
        willChange: "transform",
        transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s, mix-blend-mode 0.3s, border-radius 0.3s",
      }}
    />
  );
}

function LanguageToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: `1px solid rgba(160,136,77,0.4)`,
        borderRadius: 2,
        overflow: "hidden",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.08em",
      }}
    >
      <button
        onClick={() => setLang("es")}
        style={{
          background: lang === "es" ? GOLD : "transparent",
          color: lang === "es" ? "#000" : "rgba(255,255,255,0.4)",
          border: "none",
          padding: "6px 10px",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        style={{
          background: lang === "en" ? GOLD : "transparent",
          color: lang === "en" ? "#000" : "rgba(255,255,255,0.4)",
          border: "none",
          padding: "6px 10px",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        EN
      </button>
    </div>
  );
}

function Navbar({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: typeof translations.es }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.navServices, href: "#servicios" },
    { label: t.navAbout, href: "#nosotros" },
    { label: t.navSchedule, href: "#horario" },
    { label: t.navReviews, href: "#opiniones" },
    { label: t.navContact, href: "#contacto" },
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

        <div className="nav-desktop">
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
          <LanguageToggle lang={lang} setLang={setLang} />
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
            {t.navCall}
          </a>
        </div>

        <div className="nav-mobile-btn">
          <LanguageToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
              padding: 0,
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
              onClick={() => setMenuOpen(false)}
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
              {t.navCall}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Hero({ t }: { t: typeof translations.es }) {
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
          marginTop: "-8vh",
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
            className="hero-logo"
            style={{ margin: "0 auto 32px" }}
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
          {t.heroTagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(28px, 6vw, 72px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          <span style={{ fontWeight: 200 }}>{t.heroHeading1}</span>
          <br />
          <span style={{ color: GOLD, fontWeight: 700 }}>{t.heroHeading2}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: "flex", justifyContent: "center" }}
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
            {t.heroBtn1}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ marginTop: 32, display: "flex", justifyContent: "center" }}
        >
          <ChevronDown
            size={24}
            color={GOLD}
            style={{ opacity: 0.5, animation: "bounce 2s infinite" }}
          />
        </motion.div>
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

function ServiceCard({
  service,
  t,
  delay,
}: {
  service: (typeof SERVICES_DATA)[0];
  t: typeof translations.es;
  delay: number;
}) {
  const iconRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Reveal delay={delay}>
      <div
        ref={cardRef}
        className="service-card"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderTop: "3px solid transparent",
          borderRadius: 2,
          padding: "24px 16px",
          height: "100%",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          maxWidth: 400,
          width: "100%",
          margin: "0 auto",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = `${GOLD}33`;
          e.currentTarget.style.borderTopColor = GOLD;
          e.currentTarget.style.boxShadow =
            "0 12px 40px rgba(160,136,77,0.1)";
          e.currentTarget.style.transform = "scale(1.02)";
          if (iconRef.current) {
            iconRef.current.style.background = GOLD;
          }
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
          e.currentTarget.style.borderTopColor = "transparent";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "scale(1)";
          if (iconRef.current) {
            iconRef.current.style.background = `${GOLD}15`;
          }
        }}
      >
        <div
          ref={iconRef}
          style={{
            width: 48,
            height: 48,
            borderRadius: 2,
            background: `${GOLD}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
            transition: "background 0.5s",
          }}
        >
          <service.icon size={22} color={GOLD} className="service-icon" />
        </div>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 12,
            letterSpacing: "-0.01em",
            color: "#fff",
          }}
        >
          {t[service.titleKey]}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 14,
            lineHeight: 1.7,
          }}
        >
          {t[service.descKey]}
        </p>
      </div>
    </Reveal>
  );
}

function Services({ t }: { t: typeof translations.es }) {
  return (
    <section
      id="servicios"
      style={{ background: "#0a0a0a", color: "#fff", padding: "120px 24px" }}
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
              {t.servicesLabel}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              <span style={{ fontWeight: 200 }}>{t.servicesHeading1}</span>{" "}
              <span style={{ color: GOLD, fontWeight: 700 }}>{t.servicesHeading2}</span>
            </h2>
          </div>
        </Reveal>

        <div className="services-grid">
          {SERVICES_DATA.map((s, i) => (
            <ServiceCard key={s.titleKey} service={s} t={t} delay={i * 0.15} />
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover .service-icon {
          color: #fff !important;
          stroke: #fff !important;
        }
      `}</style>
    </section>
  );
}

function About({ t }: { t: typeof translations.es }) {
  const stats = [
    { value: "+10", label: t.aboutStatYears },
    { value: "118", label: t.aboutStatReviews },
    { value: "4.8", label: t.aboutStatStars },
    { value: "6+", label: t.aboutStatDisciplines },
  ];

  return (
    <section
      id="nosotros"
      style={{ background: "#0a0a0a", color: "#fff", padding: "120px 24px" }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
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
            {t.aboutLabel}
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            <span style={{ fontWeight: 200 }}>{t.aboutHeading1}</span>{" "}
            <span style={{ color: GOLD, fontWeight: 700 }}>{t.aboutHeading2}</span>
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              fontSize: 15,
              textAlign: "center",
            }}
          >
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "clamp(24px, 5vw, 36px)",
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "clamp(9px, 1.5vw, 11px)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Schedule({ t }: { t: typeof translations.es }) {
  const hours = [
    { day: t.scheduleDay1, time: "7:00 – 22:00" },
    { day: t.scheduleDay2, time: "7:00 – 15:00" },
    { day: t.scheduleDay3, time: t.scheduleClosed },
  ];

  return (
    <section
      id="horario"
      style={{ background: "#0a0a0a", color: "#fff", padding: "120px 24px" }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                color: `${GOLD_LIGHT}cc`,
                fontSize: 13,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {t.scheduleLabel}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ fontWeight: 200 }}>{t.scheduleHeading1}</span>{" "}
              <span style={{ color: GOLD, fontWeight: 700 }}>{t.scheduleHeading2}</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {hours.map((h, i) => (
              <div
                key={h.day}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 32px",
                  borderBottom:
                    i < hours.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <Clock size={16} color={`${GOLD}99`} />
                  {h.day}
                </span>
                <span
                  style={{
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color:
                      h.time === t.scheduleClosed
                        ? "rgba(255,255,255,0.3)"
                        : GOLD,
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

function ReviewCard({ r, t }: { r: (typeof REVIEWS_DATA)[0]; t: typeof translations.es }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 2,
        padding: 32,
        width: 350,
        minWidth: 350,
        flexShrink: 0,
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
        &ldquo;{t[r.textKey]}&rdquo;
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
  );
}

function Reviews({ t }: { t: typeof translations.es }) {
  const row1 = REVIEWS_DATA.slice(0, 4);
  const row2 = REVIEWS_DATA.slice(4, 8);

  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  return (
    <section
      id="opiniones"
      style={{ background: "#0a0a0a", color: "#fff", paddingTop: 120, paddingBottom: 120, overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
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
              {t.reviewsLabel}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ fontWeight: 200 }}>{t.reviewsHeading1}</span>{" "}
              <span style={{ color: GOLD, fontWeight: 700 }}>{t.reviewsHeading2}</span>
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
                {t.reviewsSubtext}
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Row 1 - scrolls left */}
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 24,
            animation: "marqueeLeft 40s linear infinite",
            width: "max-content",
          }}
        >
          {row1Doubled.map((r, i) => (
            <ReviewCard key={`row1-${i}`} r={r} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div
        style={{
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 24,
            animation: "marqueeRight 40s linear infinite",
            width: "max-content",
          }}
        >
          {row2Doubled.map((r, i) => (
            <ReviewCard key={`row2-${i}`} r={r} t={t} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
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
              {t.reviewsCta}
              <ChevronDown
                size={14}
                style={{ transform: "rotate(-90deg)" }}
              />
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function CTA({ t }: { t: typeof translations.es }) {
  return (
    <section
      style={{ background: "#0a0a0a", color: "#fff", padding: "120px 24px" }}
    >
      <Reveal>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(160,136,77,0.06), rgba(160,136,77,0.02))",
            border: `1px solid rgba(160,136,77,0.12)`,
            borderRadius: 2,
            padding: "64px 32px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            <span style={{ fontWeight: 200 }}>{t.ctaHeading1}</span>{" "}
            <span style={{ color: GOLD, fontWeight: 700 }}>{t.ctaHeading2}</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              maxWidth: 600,
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            {t.ctaText}
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
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
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
              {t.ctaFollow}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact({ t }: { t: typeof translations.es }) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const contactItems = [
    {
      title: t.contactPhone,
      info: PHONE,
      href: `tel:${PHONE.replace(/\s/g, "")}`,
    },
    {
      title: t.contactEmail,
      info: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      title: t.contactLocation,
      info: ADDRESS,
      href: MAPS_URL,
      external: true,
    },
  ];

  return (
    <section
      id="contacto"
      style={{ background: "#0a0a0a", color: "#fff", padding: "120px 24px" }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
              {t.contactLabel}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ fontWeight: 200 }}>{t.contactHeading1}</span>{" "}
              <span style={{ color: GOLD, fontWeight: 700 }}>{t.contactHeading2}</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                gap: 0,
                border: `1px solid rgba(255,255,255,0.1)`,
                borderRadius: 2,
                overflow: "hidden",
                marginBottom: 40,
              }}
            >
              {contactItems.map((c, i) => (
                <button
                  key={c.title}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding: "12px 24px",
                    background: activeTab === i ? GOLD : "transparent",
                    color: activeTab === i ? "#000" : "rgba(255,255,255,0.5)",
                    border: "none",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    transition: "all 0.4s",
                  }}
                >
                  {c.title}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={contactItems[activeTab].href}
                target={contactItems[activeTab].external ? "_blank" : undefined}
                rel={contactItems[activeTab].external ? "noopener noreferrer" : undefined}
                style={{
                  textDecoration: "none",
                  color: GOLD_LIGHT,
                  fontSize: "clamp(18px, 3vw, 24px)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  transition: "opacity 0.4s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                onMouseOut={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                {contactItems[activeTab].info}
              </a>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div
            style={{
              marginTop: 64,
              borderRadius: 2,
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
              title="Zen Fitness Club"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ t }: { t: typeof translations.es }) {
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
        <img src="/logo.png" alt="Zen Fitness Club" style={{ height: 50 }} />

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
          © {new Date().getFullYear()} Zen Fitness Club. {t.footerRights}
        </p>
      </div>
    </footer>
  );
}

function ParallaxDivider({ t }: { t: typeof translations.es }) {
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
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.35), rgba(0,0,0,0.35), rgba(0,0,0,0.6))",
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
            {t.parallaxText1}{" "}
            <span style={{ color: GOLD, fontWeight: 600 }}>{t.parallaxText2}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery({ t }: { t: typeof translations.es }) {
  const images = [
    { src: "/gym-4.jpg", alt: t.galleryAlt1 },
    { src: "/gym-1.jpg", alt: t.galleryAlt2 },
    { src: "/gym-2.jpg", alt: t.galleryAlt3 },
    { src: "/gym-3.jpg", alt: t.galleryAlt4 },
    { src: "/gym-5.jpg", alt: t.galleryAlt5 },
  ];

  return (
    <section
      id="instalaciones"
      style={{ background: "#0a0a0a", color: "#fff", padding: "120px 24px" }}
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
              {t.galleryLabel}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ fontWeight: 200 }}>{t.galleryHeading1}</span>{" "}
              <span style={{ color: GOLD, fontWeight: 700 }}>{t.galleryHeading2}</span>
            </h2>
          </div>
        </Reveal>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 0.2}
              className={i === 0 ? "gallery-featured" : ""}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                  height: "100%",
                  minHeight: i === 0 ? 400 : 220,
                }}
              >
                <FadeInImage
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.04)")
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

function SectionDivider() {
  return (
    <div
      style={{
        maxWidth: 120,
        margin: "0 auto",
        height: 1,
        background: `linear-gradient(to right, transparent, ${GOLD}40, transparent)`,
      }}
    />
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("es");
  const t = translations[lang];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <CustomCursor />
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <SectionDivider />
      <Services t={t} />
      <SectionDivider />
      <About t={t} />
      <SectionDivider />
      <Gallery t={t} />
      <SectionDivider />
      <Schedule t={t} />
      <ParallaxDivider t={t} />
      <Reviews t={t} />
      <SectionDivider />
      <CTA t={t} />
      <SectionDivider />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
