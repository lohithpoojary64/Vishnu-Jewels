import { Phone, MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-jewelry.jpg";

const PHONE = "tel:+919900000000";
const MAPS = "https://maps.google.com/?q=Vishnu+Jewels+Whitefield+Bengaluru";

const ease = [0.16, 1, 0.3, 1] as const;

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 2.4, ease }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Luxury gold bridal necklace at Vishnu Jewels Bangalore"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-ink/40" />
        {/* Subtle moving gold light */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-1/4 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--gold)/0.25),transparent_55%)]"
        />
      </motion.div>

      {/* Decorative gold corners */}
      {[
        "top-24 left-8 border-l border-t",
        "top-24 right-8 border-r border-t",
        "bottom-8 left-8 border-l border-b",
        "bottom-8 right-8 border-r border-b",
      ].map((cls, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.15, duration: 0.8, ease }}
          className={`absolute w-16 h-16 border-gold/60 hidden md:block ${cls}`}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="hairline text-gold mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gold/60" />
          Est. Whitefield · Bengaluru
          <span className="h-px w-10 bg-gold/60" />
        </motion.p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6">
          {["Vishnu Jewels", "Trusted Elegance", "in Bangalore"].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.6 + i * 0.18, ease }}
              className={`block ${
                i === 1
                  ? "text-gold-gradient italic mt-2"
                  : i === 2
                  ? "text-foreground/90 text-3xl md:text-5xl lg:text-6xl mt-3 font-light"
                  : "text-foreground"
              }`}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease }}
          className="gold-divider w-32 mx-auto my-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed"
        >
          <span className="text-gold font-medium">4.9 ★</span> Rated Jewelry Store with Premium Gold,
          Diamond &amp; Bridal Collections — and exceptional service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-medium tracking-wide hover:scale-105 transition-transform duration-500 shadow-[var(--shadow-gold)]"
          >
            <MapPin className="w-4 h-4" /> Visit Store
          </a>
          <a
            href={PHONE}
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 text-foreground hover:border-gold hover:text-gold transition-all duration-500"
          >
            <Navigation className="w-4 h-4" /> Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 animate-float-soft"
        >
          <div className="inline-flex flex-col items-center gap-2 text-foreground/50">
            <span className="hairline text-[10px]">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
