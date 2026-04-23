import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const reviews = [
  { name: "Priya R.", text: "I purchased a silver anklet and a silver ring… very happy with my experience." },
  { name: "Anitha K.", text: "Huge showroom with very good collection of gold jewellery. Bridal collection is excellent. Staff was very helpful." },
  { name: "Rajesh M.", text: "High-quality products at a reasonable price. Friendly store." },
  { name: "Deepa S.", text: "Mind-blowing earring collection… traditional and modern designs available. Staff very supportive." },
  { name: "Lakshmi V.", text: "Very trustworthy shop. Pure gold, proper billing, honest service." },
  { name: "Meera J.", text: "Best lightweight jewellery designs and friendly staff." },
  { name: "Karthik N.", text: "Excellent showroom with great service and respectful staff." },
];

export const Reviews = () => (
  <section id="reviews" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <p className="hairline text-gold mb-4">Voices of Trust</p>
        <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
          Loved by <span className="text-gold-gradient italic">100+ customers</span>
        </h2>
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
          ))}
          <span className="ml-3 font-display text-2xl text-gold-gradient">4.9</span>
          <span className="text-muted-foreground text-sm ml-2">· 122 Google reviews</span>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.article
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="luxe-card p-8 relative"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, k) => (
                <Star key={k} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-foreground/90 font-light leading-relaxed mb-6 italic">"{r.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/60">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground font-display text-lg">
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">Verified Customer</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
