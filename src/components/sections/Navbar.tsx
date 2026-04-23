import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#collections", label: "Collections" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-gold/15 py-3 shadow-[0_10px_40px_-10px_hsl(0_0%_0%/0.6)]"
          : "bg-gradient-to-b from-ink/60 via-ink/20 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-3">
          <motion.span
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-9 h-9 rounded-full border border-gold/60 flex items-center justify-center bg-gold-gradient/0 hover:bg-gold-gradient transition-colors"
          >
            <span className="font-display text-lg text-gold group-hover:text-primary-foreground transition-colors">V</span>
          </motion.span>
          <span className="font-display text-xl md:text-2xl text-gold-gradient tracking-wide">Vishnu Jewels</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
              className="relative text-sm text-foreground/75 hover:text-gold transition-colors tracking-wide group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-gradient group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919900000000"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-gold/60 text-gold text-sm hover:bg-gold-gradient hover:text-primary-foreground hover:border-transparent transition-all duration-500"
          >
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-gold/40 text-gold"
            aria-label="Menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-t border-gold/15"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-foreground/80 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
