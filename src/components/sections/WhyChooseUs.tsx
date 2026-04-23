import { Building2, HeartHandshake, ReceiptText, BadgeIndianRupee, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Building2, title: "Huge Showroom", desc: "Wide collections under one elegant roof." },
  { icon: HeartHandshake, title: "Friendly Staff", desc: "Supportive guidance from start to finish." },
  { icon: ReceiptText, title: "Transparent Pricing", desc: "Proper billing, every single time." },
  { icon: BadgeIndianRupee, title: "Affordable Making", desc: "Honest making charges, no surprises." },
  { icon: Sparkles, title: "Traditional + Modern", desc: "Designs for every taste and occasion." },
  { icon: ShieldCheck, title: "Trusted by 100+", desc: "A community that keeps coming back." },
];

export const WhyChooseUs = () => (
  <section className="py-24 md:py-32 bg-ink-soft relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

    <div className="container mx-auto px-6 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="hairline text-gold mb-4">Why Vishnu Jewels</p>
        <h2 className="font-display text-4xl md:text-6xl font-light">
          The difference is in the <span className="text-gold-gradient italic">details</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60">
        {items.map((it) => (
          <div
            key={it.title}
            className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-500"
          >
            <div className="w-12 h-12 mb-6 flex items-center justify-center border border-gold/40 group-hover:bg-gold-gradient transition-all duration-500">
              <it.icon className="w-5 h-5 text-gold group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-2xl mb-3 text-foreground">{it.title}</h3>
            <p className="text-muted-foreground font-light">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
