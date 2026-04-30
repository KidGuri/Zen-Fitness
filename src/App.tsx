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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch || !ref.current) return;

    ref.current.style.display = "block";

    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    const onLeave = () => {
      if (ref.current) ref.current.style.transform = "translate(-100px, -100px)";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
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
        borderRadius: 4,
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
          <img src="/logo.png" alt="Zen Fitness Club" style={{ height: 70 }} />
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

        <div className="nav-mobile-btn" style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
          marginTop: "-5vh",
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
            style={{ width: "min(700px, 85vw)", margin: "0 auto 32px" }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "clamp(28px, 6vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          {t.heroHeading1}
          <br />
          <span style={{ color: GOLD }}>{t.heroHeading2}</span>
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
            {t.heroBtn1}
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
            {t.heroBtn2}
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
            gap: "8px 28px",
            color: "rgba(255,255,255,0.55)",
            fontSize: "clamp(13px, 2vw, 17px)",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "flex" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={GOLD} color={GOLD} />
              ))}
            </span>
            {t.heroStars}
          </span>
          <span
            style={{
              width: 1,
              height: 16,
              background: "rgba(255,255,255,0.2)",
            }}
            className="divider-sm"
          />
          <span>{t.heroReviews}</span>
          <span
            style={{
              width: 1,
              height: 16,
              background: "rgba(255,255,255,0.2)",
            }}
            className="divider-sm"
          />
          <span>{t.heroSince}</span>
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
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.06)",
          borderTop: "3px solid transparent",
          borderRadius: 12,
          padding: 32,
          height: "100%",
          transition: "all 0.4s",
          maxWidth: 400,
          width: "100%",
          margin: "0 auto",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = `${GOLD}33`;
          e.currentTarget.style.borderTopColor = GOLD;
          e.currentTarget.style.boxShadow =
            "0 12px 40px rgba(160,136,77,0.15)";
          e.currentTarget.style.transform = "scale(1.03)";
          if (iconRef.current) {
            iconRef.current.style.background = GOLD;
          }
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
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
            borderRadius: 10,
            background: `${GOLD}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
            transition: "background 0.4s",
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
          }}
        >
          {t[service.titleKey]}
        </h3>
        <p
          style={{
            color: "rgba(0,0,0,0.5)",
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
              {t.servicesLabel}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              {t.servicesHeading1}{" "}
              <span style={{ color: GOLD }}>{t.servicesHeading2}</span>
            </h2>
          </div>
        </Reveal>

        <div className="services-grid">
          {SERVICES_DATA.map((s, i) => (
            <ServiceCard key={s.titleKey} service={s} t={t} delay={i * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          justify-items: center;
        }
        @media (min-width: 960px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .service-card:hover .service-icon {
          color: #fff !important;
          stroke: #fff !important;
        }
      `}</style>
    </section>
  );
}

function About({ t }: { t: typeof translations.es }) {
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
              {t.aboutLabel}
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
              {t.aboutHeading1}{" "}
              <span style={{ color: GOLD }}>{t.aboutHeading2}</span>
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
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
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
                { value: "+10", label: t.aboutStatYears },
                { value: "118", label: t.aboutStatReviews },
                { value: "4.8", label: t.aboutStatStars },
                { value: "6+", label: t.aboutStatDisciplines },
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

function Schedule({ t }: { t: typeof translations.es }) {
  const hours = [
    { day: t.scheduleDay1, time: "7:00 – 22:00" },
    { day: t.scheduleDay2, time: "7:00 – 15:00" },
    { day: t.scheduleDay3, time: t.scheduleClosed },
  ];

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
              {t.scheduleLabel}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {t.scheduleHeading1}{" "}
              <span style={{ color: GOLD }}>{t.scheduleHeading2}</span>
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
                    color:
                      h.time === t.scheduleClosed
                        ? "rgba(0,0,0,0.3)"
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
        borderRadius: 12,
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
      style={{ background: "#0a0a0a", color: "#fff", paddingTop: 96, paddingBottom: 96, overflow: "hidden" }}
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
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {t.reviewsHeading1}{" "}
              <span style={{ color: GOLD }}>{t.reviewsHeading2}</span>
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
            {t.ctaHeading1}{" "}
            <span style={{ color: GOLD }}>{t.ctaHeading2}</span>
          </h2>
          <p
            style={{
              color: "rgba(0,0,0,0.5)",
              maxWidth: 600,
              margin: "0 auto 40px",
              lineHeight: 1.7,
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
              {t.ctaFollow}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact({ t }: { t: typeof translations.es }) {
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
              {t.contactLabel}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {t.contactHeading1}{" "}
              <span style={{ color: GOLD }}>{t.contactHeading2}</span>
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
              title: t.contactPhone,
              info: PHONE,
              href: `tel:${PHONE.replace(/\s/g, "")}`,
            },
            {
              icon: Mail,
              title: t.contactEmail,
              info: EMAIL,
              href: `mailto:${EMAIL}`,
            },
            {
              icon: MapPin,
              title: t.contactLocation,
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
              {t.galleryLabel}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {t.galleryHeading1}{" "}
              <span style={{ color: GOLD }}>{t.galleryHeading2}</span>
            </h2>
          </div>
        </Reveal>

        <div className="gallery-grid">
          {images.map((img, i) => (
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
  const [lang, setLang] = useState<Lang>("es");
  const t = translations[lang];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <CustomCursor />
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Services t={t} />
      <About t={t} />
      <Gallery t={t} />
      <Schedule t={t} />
      <ParallaxDivider t={t} />
      <Reviews t={t} />
      <CTA t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
