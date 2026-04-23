import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import showroom from "@/assets/showroom.jpg";

export const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-gold/30 -z-10" />
          <img
            src={showroom}
            alt="Vishnu Jewels luxury showroom interior in Whitefield"
            className="w-full h-[500px] object-cover"
            loading="lazy"
            width={1600}
            height={1000}
          />
          <div className="absolute -bottom-6 -right-6 bg-gold-gradient px-8 py-6 hidden md:block">
            <p className="font-display text-4xl text-primary-foreground leading-none">15+</p>
            <p className="hairline text-primary-foreground/80 mt-1">Years of Trust</p>
          </div>
        </motion.div>

        <Reveal delay={0.15}>
          <p className="hairline text-gold mb-4">About the House</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
            A legacy of <span className="text-gold-gradient italic">craftsmanship</span> &amp; trust.
          </h2>
          <div className="gold-divider w-24 mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
            Vishnu Jewels is a trusted jewelry showroom in Whitefield, Bangalore, offering a wide
            range of gold, silver, and diamond jewelry. Known for its excellent customer service,
            transparent pricing, and beautiful designs, the store has become a preferred destination
            for customers looking for quality and trust.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Whether you're searching for an heirloom bridal set, a delicate everyday chain, or
            a temple jewelry masterpiece — every piece is thoughtfully curated and crafted to
            celebrate life's most precious moments.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/60">
            <div>
              <p className="font-display text-3xl text-gold-gradient">100%</p>
              <p className="text-xs text-muted-foreground mt-1">Pure &amp; Hallmarked</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold-gradient">500+</p>
              <p className="text-xs text-muted-foreground mt-1">Unique Designs</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold-gradient">4.9★</p>
              <p className="text-xs text-muted-foreground mt-1">Customer Rating</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
