import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import gold from "@/assets/col-gold.jpg";
import bridal from "@/assets/col-bridal.jpg";
import temple from "@/assets/col-temple.jpg";
import earrings from "@/assets/col-earrings.jpg";
import chains from "@/assets/col-chains.jpg";
import bangles from "@/assets/col-bangles.jpg";

const items = [
  { img: gold, title: "Gold Jewelry", tag: "22K Pure", featured: false },
  { img: bridal, title: "Bridal Collection", tag: "Signature", featured: true },
  { img: temple, title: "Temple Jewelry", tag: "Heritage", featured: true },
  { img: earrings, title: "Earrings & Rings", tag: "Everyday Luxe", featured: false },
  { img: chains, title: "Chains & Necklaces", tag: "Diamond", featured: false },
  { img: bangles, title: "Bangles", tag: "Lightweight", featured: false },
];

export const Collections = () => (
  <section id="collections" className="py-24 md:py-32 bg-ink-soft">
    <div className="container mx-auto px-6">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <p className="hairline text-gold mb-4">Curated Collections</p>
        <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
          Timeless pieces, <span className="text-gold-gradient italic">crafted for you</span>
        </h2>
        <div className="gold-divider w-24 mx-auto mb-6" />
        <p className="text-muted-foreground font-light">
          A wide variety of traditional and modern designs available — discover the one that tells your story.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((it, i) => (
          <motion.article
            key={it.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className={`group relative overflow-hidden bg-card border border-border/60 hover:border-gold/60 transition-colors duration-700 ${it.featured ? 'lg:row-span-2' : ''}`}
          >
            <div className={`overflow-hidden ${it.featured ? 'aspect-[4/5] lg:aspect-[3/5]' : 'aspect-[4/5]'}`}>
              <img
                src={it.img}
                alt={`${it.title} at Vishnu Jewels`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90" />
            {it.featured && (
              <span className="absolute top-4 right-4 px-3 py-1 bg-gold-gradient text-primary-foreground text-[10px] tracking-[0.2em] uppercase font-semibold">
                Featured
              </span>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="hairline text-gold mb-2">{it.tag}</p>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">{it.title}</h3>
              <div className="mt-4 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                <span className="text-sm">View Collection</span>
                <span>→</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
